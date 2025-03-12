---
date: 2024-12-15 12:13:14
layout: post
title: "实战去除程序自校验"
subtitle: "不写补丁去除程序md5自校验"
description: "不写补丁去除程序md5自校验"
image: https://icer233.github.io/assets/postimg/2024/12/15/1.png
optimized_image:
category: code
tags:
  -  "破解"
author: icer233
paginate: false
math: false
---

## 视频讲解

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113084140094980&bvid=BV1SApMepEmJ&cid=25621108394&p=1&autoplay=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>


## 演示程序

### 豪迪群发助手

![image-20241214200003610](https://icer233.github.io/assets/postimg/2024/12/15/1.png)

## 解决网络验证

1. 将主程序`qqqf.exe`拖入OD并搜索字符串, 找到`00541879`"**已注册版本**"

![image-20241214194355902](https://icer233.github.io/assets/postimg/2024/12/15/2.png)

2. 在`00541870`和`00541877`下断点, 运行程序, 点击注册, 发现断下来了。右键查找常量, 输入`cmp`比较的变量`00579F24`。将搜索出来的操作全部下断点。

![image-20241214200357590](https://icer233.github.io/assets/postimg/2024/12/15/3.png)

3. 重载程序并运行, 停在`00541650`处

    ```Asm
    0054164C   . /EB 02         jmp short qqqf.00541650
    0054164E   > |B2 01         mov dl,0x1
    00541650   > \8815 249F5700 mov byte ptr ds:[0x579F24],dl
    00541656   .  83F8 0C       cmp eax,0xC
    00541659   .  75 48         jnz short qqqf.005416A3
    ```

    可以看到`00541650`是赋值变量为`dl`的值, 而在`0054164E`处`dl`被赋值为`1`, 即这行代码就是给变量赋值为`1`

    可以猜测赋值为`1`是已注册, `0`就是为注册, 如果后面又给这个变量赋值为`0`, 那我们的破解就白费了

4. 这里给段首`0054159C`下断点, 重载并运行, 停下后`F8`单步跟

      ```Asm
      00541640   .  83F8 18       cmp eax,0x18
      00541643   .  74 09         je short qqqf.0054164E
      00541645   .  83F8 0C       cmp eax,0xC
      00541648   .  74 04         je short qqqf.0054164E
      ```

  上面两个比较比较12(`0xC`)和24(`0x18`), 应该是在比较注册码长度, 如果长度不在范围内就会跳掉

5. ```Asm
   0054164A   .  33D2          xor edx,edx
   0054164C   .  EB 02         jmp short qqqf.00541650
   0054164E   >  B2 01         mov dl,0x1
   00541650   >  8815 249F5700 mov byte ptr ds:[0x579F24],dl
   ```

   我们在`00541648`这里改一个`jmp`，让`dl`赋值为`1`。

6. 继续`F8`步过, 发现

   ```Asm
   00541656   .  83F8 0C       cmp eax,0xC
   00541659   .  75 48         jnz short qqqf.005416A3
   ```

   要把`00541659`处`nop`掉, 防止`jnz`跳过后面的赋值

7. 继续单步, 看到

   ```Asm
   00541687   .  E8 8430ECFF   call qqqf.00404710
   0054168C   .  75 0A         jnz short qqqf.00541698
   0054168E   .  8B07          mov eax,dword ptr ds:[edi]
   00541690   .  E8 177EFCFF   call qqqf.005094AC
   00541695   .  40            inc eax
   00541696   .  7F 04         jg short qqqf.0054169C
   00541698   >  33C0          xor eax,eax
   ```

   `0054168C`这个`jnz`也必须`nop`，不能让它跳过`00541696`这个赋值的位置。

8. 然后我们继续来到`00541696`这一行，我们将它改为`jmp`，需要让它赋值为`1`

9. 保存修改, 随便输入12位注册码, 竟然失败了

    ![image-20241214213236087](https://icer233.github.io/assets/postimg/2024/12/15/4.png)

10. 再次载入OD，发现破解过程应该没问题，已经赋值为1了，再次搜索字符串，发现了“正在验证”四个字，我们在这里回车进去, 找到段首`005408C8`直接`retn`使它脱离网络验证

11. 测试一下, 随意输入, 注册成功, 可以添加表情等, 但是随机字符等功能没法使用, 出现了暗桩

     ![image-20241214213629619](https://icer233.github.io/assets/postimg/2024/12/15/5.png)

## 查找自校验

1. 用`Winhex`随意修改原主程序, 发现功能失效, 这是因为文件的md5发生了变化**(可以采用补丁破解)**

   ![image-20241214213959847](https://icer233.github.io/assets/postimg/2024/12/15/6.png)

2. 使用脚本`脱壳脚本\各语言按钮事件\Delphi & VB事件断点查找脚本.osc`([下载地址](https://icer233.github.io/assets/resources/脱壳脚本.rar))

3. 打开OD, 运行该脚本

   ![image-20241214214629445](https://icer233.github.io/assets/postimg/2024/12/15/7.png)

4. 这样就查找到了所有按钮事件并打上了断点

   ![image-20241214214709686](https://icer233.github.io/assets/postimg/2024/12/15/8.png)

5. 运行程序, 点击"**插入其他**", 触发断点, 先禁用这个断点, 再点击"**插入其他**"里的"**随机数字**"触发第二个断点, 记住位置, 将其他断点删除, 开始单步过

6. 计算一下我们修改后的程序md5

   ![image-20241214215836703](https://icer233.github.io/assets/postimg/2024/12/15/9.png)

7. 找到这个`call`, `F7`进入

   ```Asm
   00567F5F  |.  E8 5CAEF4FF   call qqqf3.004B2DC0
   ```

8. 找到了这里

   ```Asm
   004B2E3D    8B45 F0         mov eax,dword ptr ss:[ebp-0x10]
   004B2E40    8D55 F8         lea edx,dword ptr ss:[ebp-0x8]
   004B2E43    E8 ECF0FFFF     call qqqf3.004B1F34
   ```

   在数据窗口中跟随后, 发现就是我们文件的md5

   ![image-20241214220051344](https://icer233.github.io/assets/postimg/2024/12/15/10.png)

9. 计算原版md5为`11ea70a3c3735c29b48552776756406a`, 直接在数据窗口里替换

10. 功能恢复正常!

## 去除自校验

1. 找一段空的地址, 如`0056B0A0`

   ![image-20241214223518373](https://icer233.github.io/assets/postimg/2024/12/15/11.png)

2. 将`004B1F74`改成`jmp 0056B0A0`

   ![image-20241214223655066](https://icer233.github.io/assets/postimg/2024/12/15/12.png)

3. 第一行输入`pushad`（堆栈平衡）

4. 然后我们看一下，原来`004B1F74`那里是用`ebp-0x14`赋值`ebx`，所以这里我们要对`ebp-0x14`赋值

   输入`mov dword ptr ss:[ebp-0x14],0x0`, 在数据窗口中改为正版md5

   ![image-20241215193945081](https://icer233.github.io/assets/postimg/2024/12/15/13.png)

5. 再将`0x0`改为堆栈窗口中的`0xA370EA11`

   ![image-20241215194026069](https://icer233.github.io/assets/postimg/2024/12/15/14.png)

7. 第一个操作数每次减4，16个字节需要写入四次（我们要想写入原来的md5数据就要用这个值，数据窗口中我们看到每4个字节就要进行一次写入）

   ```Asm
   0056B0A1  C745 EC 11EA70A3 mov dword ptr ss:[``ebp``-0x14],0xA370EA11
   0056B0A8  C745 F0 C3735C29 mov dword ptr ss:[``ebp``-0x10],0x295C73C3
   0056B0AF  C745 F4 B4855277 mov dword ptr ss:[``ebp``-0xC],0x775285B4
   0056B0B6  C745 F8 6756406A mov dword ptr ss:[``ebp``-0x8],0x6A405667
   ```

8. 逐句将原来的代码写入

   ```Asm
   004B1F74    8D5D EC         lea ebx,dword ptr ss:[ebp-0x14]
   004B1F77    8D55 E8         lea edx,dword ptr ss:[ebp-0x18]
   004B1F7A    33C0            xor eax,eax
   004B1F7C    8A03            mov al,byte ptr ds:[ebx]
   004B1F7E    E8 35F1FFFF     call qqqf3.004B10B8
   004B1F83    8B55 E8         mov edx,dword ptr ss:[ebp-0x18]
   004B1F86    8BC7            mov eax,edi
   004B1F88    E8 3F26F5FF     call qqqf3.004045CC
   004B1F8D    43              inc ebx
   004B1F8E    4E              dec esi
   004B1F8F  ^ 75 E6           jnz short qqqf3.004B1F77
   ```

   其中`jnz short qqqf3.004B1F77`要改成我们的新位置`0056B0C0`

   下一行输入`popad`堆栈平衡, 然后`jmp 004B1F91`跳回去!

   ![image-20241215195146240](https://icer233.github.io/assets/postimg/2024/12/15/15.png)

9. 至此, 破解成功!

## 总结

### 原程序逻辑

- 按钮事件
- 检验是否注册
- 检验md5

### 破解逻辑

- 找到注册部分并爆破
- 去除网络验证
- 发现md5验证
- 查找按钮事件
- 找到md5验证部分代码
- 修改代码跳到空白区, 给程序一个假md5(正版md5)
- 同时复制原来的校验代码(注意堆栈平衡)
- 跳回去继续原流程
