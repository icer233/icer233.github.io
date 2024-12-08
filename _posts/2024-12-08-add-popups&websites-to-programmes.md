---
date: 2024-12-08 14:12:51
layout: post
title: "【手动/自动】给程序添加网页/文本弹窗"
subtitle: "新手进阶教程！"
description:
image: https://icer233.github.io/assets/postimg/2024/12/08/image-20241208194502428.png
optimized_image: 
category: code
tags:
  - "破解"
author: icer233
paginate: false
math: false
---

# 修改版权之给程序加弹窗、网页

## 手动操作

***讲师：Kido***

### 添加函数

1. 首先使用`StudPE`打开目标程序, 选择"**函数**", "**USER32.dll**"

![image-20241208185941795](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208185941795.png)

2. 看一下是否有`MessageBoxA`函数, 若没有, 则需要手动添加: **右键**, "**Add New Import**"

![image-20241208190149057](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208190149057.png)

3. 点击"**DLL选择**"按钮, 选择`C:\WINDOWS\system32\user32.dll`

![image-20241208190229765](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208190229765.png)

4. 再点击"**选择函数**"按钮

![image-20241208190510473](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208190510473.png)

5. 选择`MessageBoxA`函数, 点击"**确定**"

![image-20241208190549322](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208190549322.png)

6. 点击"**添加到列表**", 选中输入表列表中的这个函数, 点击"**添加**", 点击右下角"**确定**"

![image-20241208190749592](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208190749592.png)

7. 此时函数就添加好了

### 调用函数添加弹窗

1. 重新用`StudPE`打开目标程序, 找到刚刚添加的函数, 复制其`rva`值, 这里是`001AA187`

![image-20241208191126431](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208191126431.png)

2. 用OD载入程序, `Ctrl+G`输入`001AA187`, 选择`RVA`, 点击"**OK**"

![image-20241208191254956](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208191254956.png)

3. 左下角出现提示, 复制地址`005AA187`

![image-20241208191348340](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208191348340.png)

4. 再次用`StudPE`打开程序, 选择"**区段**", **右键**, 选择"**New Section**"添加新的区段

![image-20241208191516402](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208191516402.png)

5. 区段名**随意填写**, 原始大和虚拟大小**可以大一些**, 例如1000, 选择"**用空字节填充区段**", 点击"**增加**"

   经过一个弹窗提示, 点击右下角"**确定**"

![image-20241208191728056](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208191728056.png)

6. 用OD载入, 点击最上方的"m", 选择新添加的区段

![image-20241208192001426](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208192001426.png)

7. 找到了地址`05AB000`(见上图第二个红框最左侧), 回到调试窗口, `Ctrl+G`跳到这个地址

   **右键**, 选择"**此处为新EIP**", 弹窗点击"**是**"

![image-20241208192213630](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208192213630.png)

8. 从`005AB00`开始依次输入4个`push 0`, 第五个输入`call [005AA187]`, 其中方括号内容正是第三步中获得的地址, 出现注释, 记住`005AB008`处代码`cal1 dword ptr ds:[0x5AA187]`后面要用

![image-20241208192802644](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208192802644.png)

9. 依次步过, 堆栈窗口出现提示, 成功弹出窗口

![image-20241208192905241](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208192905241.png)

![image-20241208192931398](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208192931398.png)

### 修改弹窗内容

从上到下4个`push`依次是

```bash
push Style(0)
push Title
push Text
push hOwner
```

1. 首先修改标题, 将第二个`005AB002`处的`push`的`0x0`随便改为一个**稍微下面一点**的我们的**新区段的地址**, 例如`005AB01A`并在左下角内存窗口跟到`005AB01A`

![image-20241208193515426](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208193515426.png)

2. 选中这一行, **右键"用二进制编辑"**, 输入你要的标题, 点击"**确定**"

![image-20241208193720108](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208193720108.png)

3. 同理修改`005AB007`处, 这里修改的是弹窗显示的内容

4. 将`005AB00C`改为`push 0`

5. 将`005AB00E`处改为我们之前记住的调用`MessageBoxA`函数的代码`call dword ptr ds:[0x5AA187]`

   修改完后如下图所示, 黄框是我们修改好的代码, 蓝框是由于修改标题和文本的内容导致出现的代码, 所以之前要选择一个偏下的地址防止干扰

![image-20241208194502428](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208194502428.png)

6. 将下一行`005AB014`改为跳转到原来的程序入口点(OEP)

![image-20241208194614828](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208194614828.png)

7. 保存文件, 再次载入OD, 找到我们修改的第一行`005AB000`, **右键**, "**此处为EIP**"

8. 运行程序, 成功弹窗, 并且不影响原来的程序

![image-20241208194932314](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208194932314.png)

### 修改程序入口点
1. 用`StudPE`打开我们修改后的程序, 点击"**区段**", 找到**我们新加的区段**, 找到第四列的`001AB000`

![image-20241208195214113](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208195214113.png)

2. 在"**文件头**"标签页将入口点改为`001AB000`(也可以点击右下"**Rva<=>Raw**", 选择"**虚拟地址**", 输入我们在OD中修改代码的地址, 即`005AB000`, 找到上方的"**相对虚拟地址**", 也是`1AB000`)点击右下角"**保存到文件**"

![image-20241208195112179](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208195112179.png)

3. 测试程序, 成功弹窗。至此, 修改结束

### 总结

1. 添加`MessageBoxA`的导入表并获取VA
2. 添加一个新的区段，并植入汇编代码(弹窗并跳回原来的EP)
3. 修改EP到新的起始位置并保存

类似地, 你也可以用这个方法弹网页, 判断文件是否存在等

## 自动操作

想必大家已经学会了手动添加弹窗，但是每次都自己手动添加实在是太麻烦了，这里推荐三个程序一件添加

### 网络验证通杀器-你想辅助工具v8.0

优点：可以添加消息弹窗和网页弹窗

缺点：不能只加一种弹窗

![image-20241208214907456](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208214907456.png)

### 无壳EXE加弹窗工具

优点：可以添加消息弹窗和网页弹窗，界面简洁

缺点：不能只加一种弹窗

![image-20241208215045280](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208215045280.png)

### 一键给exe加弹窗皮肤

优点：可以单独加网页或者弹窗，可以设置弹窗标题

![image-20241208215154321](https://icer233.github.io/assets/postimg/2024/12/08/image-20241208215154321.png)
