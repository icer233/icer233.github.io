---

date: 2024-08-15 07:11:47
layout: post
title: "微信逆向之自己动手去除微信多开限制，小白也能看懂"
subtitle: "修改dll，想什么时候开就什么时候开！"
description: "之前一直使用的bat脚本多开微信 很不爽 每次想中途多开一个微信 都要关闭所有的 才能重新打开多个
所以今天来个修改dll版本的，想什么时候开就什么时候开！"
image: https://icer233.github.io/assets/postimg/wechat-remove-restrictions/15.png
optimized_image:
category: code
tags:
  - "代码"
  - "逆向"
  - "微信"
author: icer233
paginate: false
---

## 原帖

[微信逆向之自己动手去除微信多开限制，小白也能看懂](https://www.52pojie.cn/thread-1951224-1-1.html)

## 前言

PS：我也是入门级水平，大佬慎看。
工具准备：xdbg64、微信最新版3.9.11.25 其他版本的也大同小异 思路基本都一样

之前一直使用的bat脚本多开微信 很不爽 每次想中途多开一个微信 都要关闭所有的 才能重新打开多个
所以今天来个修改dll版本的，想什么时候开就什么时候开！

![1](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/1.png)

## 一、我们先猜猜微信是怎么实现不能打开多个的，在网上找到一篇文章使用Windows的互斥体Mutex可以实现程序的运行互斥。

使用 Windows 的互斥体`Mutex`可以实现程序的运行互斥，原理为使用为进程建立一个仅为该进程所拥有的互斥体，这个互斥体可以被其他程序检测到，但不可以被其他程序获取，在持有`Mutex`互斥体的程序退出后（包括被结束进程后）该`Mutex`互斥体自动被释放。
代码实现：使用互斥体`Mutex`需要引入`Windows.h`头文件。

```c++
#include <windows.h>
 
int main() {
 
    // 创建互斥体，其中第二个变量为TRUE表示该互斥体为该程序所拥有，第三个变量是互斥体的名字
    HANDLE hMutex = CreateMutex(NULL, TRUE, "MyMutexApplication");
 
    // 检查互斥体是否已经存在，如果存在则表示已经有程序持有名为"MyMutexApplication"的互斥体，即已经有相同程序运行
    if (GetLastError() == ERROR_ALREADY_EXISTS) {
        // 关闭互斥体句柄并退出程序
        CloseHandle(hMutex);
        return 0;
    }
    //如果没有出现错误，则表示互斥体未创建，相同程序没有运行
 
    //执行程序逻辑 ...
    // 关闭互斥体句柄
    CloseHandle(hMutex);
 
    return 0;
}
```

## 二、知道了实现原理，我们直接上xdbg64，我们知道了创建互斥体调用的Windows api CreateMutex方法 所以我们直接搜这个看看

1. 首先打开微信不用登陆

2. 打开`xdbg64` 附加微信

   ![2](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/2.png)

3. 先搜索`wechat`选择 附加

   ![3](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/3.png)

4. 选择断点页面 选择所有断点删除先

   ![4](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/4.png)

5. 选择cpu页面` CTRL + G `跳转搜索函数`CreateMutex`我们选择 `CreateMutexW`函数确定

   ![5](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/5.png)

6. 点击左边的小圆点 下一个断点

   ![6](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/6.png)

7. 先点击循环箭头 重启调试微信 然后点击运行或者直接按快捷键`F9`
   因为这`个CreateMutexW`不只创建互斥体调用 有很多地方也调用了
   所以我们一直`F9`运行观察
   当第N次在这个断点断下的时候 我们观察到右边的寄存器的字符串有明显的信息提示是在创建或检查互斥体了，那么我们就不要再`F9`了，现在直接`F8`一步一步的跟

   ![7](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/7.png)

8. 当我们一直`F8`跟到这的时候 发现了关键信息 `preInstanceAlreadyRun`
   看到这个我们猜应该是去判断了互斥体存在了 然后执行退出程序的逻辑
   然后上面有一个判断 应该就是判断互斥体有没有的 所以我们直接改这个判断让他永远跳过去不执行里面的逻辑不就行了吗

   ![8](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/8.png)

9. 有了思路 我们直接双击这个判断编辑
   把`je`改成`jmp`就行了`jmp`就是直接调用的意思 具体去看汇编指令
   然后确定就修改好了

   ![9](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/9.png)

10. 我们修改后要打补丁 直接右击选择补丁

    ![10](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/10.png)

11. 会列出来所有修改的地方 我们全选然后 修补文件

    ![11](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/11.png)

12. 为了不把原文件覆盖替换掉 我们起个新名字`WinChatWinNew.dll`
    保存好 就能关闭`xdbg64`了

    ![12](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/12.png)

13. 我们去安装目录先把 原来的文件`WinChatWin.dll` 重命名加上`.bak`
    这样做的好处是防止我们替换文件后微信如果异常打不开 我们还能改回来恢复

    ![13](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/13.png)

14. 然后我们把我们刚才打补丁的新文件`WinChatWinNew.dll`改成原文件名`WinChatWin.dll`
    这样微信启动就读取我们打过补丁的`dll`了

    ![14](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/14.png)

15. 然后我们直接点击桌面的微信图标试试吧 多点几次发现 限制没了

    ![15](https://icer233.github.io/assets/postimg/wechat-remove-restrictions/15.png)

16. 哈哈 又能愉快的玩耍了 伙伴们赶快去动手试试吧![img](https://static.52pojie.cn/static/image/smiley/default/48.gif)
    亲自动手！完成 成就感满满![img](https://static.52pojie.cn/static/image/smiley/default/titter.gif)







