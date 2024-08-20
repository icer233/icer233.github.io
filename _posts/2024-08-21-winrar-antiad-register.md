---
date: 2024-08-21 12:53:55
layout: post
title: "WinRAR去广告已注册版打包方法及相关教程工具"
subtitle: "亲手破解老牌压缩软件WinRAR"
description: "亲手破解老牌压缩软件WinRAR"
image: https://icer233.github.io/assets/postimg/2024/08/21/8.png
optimized_image:
category: code
tags: 
  - "破解"
  - "压缩"
author: ggbond
paginate: false
---

## 原帖

[WinRAR去广告已注册版打包方法及相关教程工具](https://www.52pojie.cn/forum.php?mod=viewthread&tid=1835038&amp;extra=page%3D2)

## 一、安装WinRAR

1. 安装`winrar-x64-623sc.exe`，记住安装路径，后面会用到，（比如安装在`C:/Program Files/WinRAR`）

2. 在D盘创建“WinRAR”文件夹，把WinRAR安装包解压到这个文件夹里面 或复制WinRAR安装目录下的`WinRAR.exe`到D盘，并把WinRAR注册文件`rarreg.key`放进去

## 二、去除非商业个人版WinRAR广告

用授权文件注册后无广告版WinRAR可跳过此步

用[Resource Hacker](https://www.lanzoue.com/irJ4y1c3lecj)或[Resource Tuner](https://www.lanzoue.com/iU5Py173cb5a) 打开刚刚复制的`WinRAR.exe`，修改 `WinRAR.exe` , 注意先关闭WinRAR , 点击字符串表 String Table -> 80：2052 -> 最长的那行1277 行(有的WinRAR版本不一定是1277 行) -> 为广告代码 -> 选定广告字串代码:

```
##0aN9=>34_9hwrqw=-*ag(vmipdr-eni)ak/pnnsX3+hwkm;K?2&aj<3&t8$Uvdvtmkao&`9$C&sqe<sup2Q;hwrqw=-*ag(vmipdr-eni)ak/pnnsX0+hwkm;K?2&aj<3&t8$Uvdvtmkao&`9$C&sqe<sup14mLgA36^>hwrqw=-*ag(vmipdr-eni)ak/pnnsX0+hwkm;K?2&aj<3&t8$Uvdvtmkao&`9$C&sqe<supR5
```

选定1277行的广告代码 和 1267行 的  1267, "已选项目" 右键点击剪切或直接按键盘`Delete`键删除， 点击上面绿色的三角编译脚本，然后保存即可，如果提示无权限，可以先另存为，然后替换安装目录下的`WinRAR.exe`即可

![photo](https://icer233.github.io/assets/postimg/2024/08/21/1.png)

![photo](https://icer233.github.io/assets/postimg/2024/08/21/2.gif)

Resource Tuner操作方法与Resource Hacker类似，不做演示。

## 三、制作`setup.txt`

1. 右键点击未注册的WinRAR安装包，选择用WinRAR打开，点击信息＞注释，复制注释里面全部内容

   ![photo](https://icer233.github.io/assets/postimg/2024/08/21/3.png)

   ![photo](https://icer233.github.io/assets/postimg/2024/08/21/4.png)

2. 新建setup.txt文档，把刚才复制的内容粘贴进去，保存编码为ANSI的文本文档

   ![photo](https://icer233.github.io/assets/postimg/2024/08/21/5.png)

## 四、制作`setup.sfx`

用`setup.sfx`文件提取工具 KillOverlay ([蓝奏下载](https://www.lanzoue.com/i4CIz1azmyha)  [直链下载](https://icer233.github.io/assets/postimg/2024/08/21/setup.sfx-KillOverlay.exe)）打开`winrar-x64-623sc.exe`

点击删除 -> 接着点击下面的“另存”，文件名为`setup.sfx` ，点击“保存”，即可得到 `setup.sfx `文件

![photo](https://icer233.github.io/assets/postimg/2024/08/21/6.png)

## 五、提取WinRAR图标文件

1. 打开7zip，定位到`D:/WinRAR`文件夹，选择`WinRAR.exe`，右键选择7-zip＞打开压缩包
2. 在弹出窗口中打开`.rsrc`文件夹＞打开ICON文件夹，把里面的13文件解压出来，并把13文件重命名为`WinRAR.ico` 或用ico图标提取工具直接提取WinRAR的ico图标文件

## 六、开始制作WinRAR安装包

1. 复制`setup.sfx`到WinRAR安装目录：` C:/Program Files/WinRAR`
2. 全选`D:/WinRAR`文件夹里面的所有文件，右键选择到添加压缩文件
3. 在常规选项卡，压缩方式选最好，勾选创建自解压格式压缩文件，勾选创建固实压缩文件，勾选锁定压缩文件，将压缩文件名更改为`winrar-x64-623sc.`

![photo](https://icer233.github.io/assets/postimg/2024/08/21/7.gif)

## 后记

原帖作者真的很用心。每一步都给出了多种方法（本文只展示其中最简单的方法），而且不仅有逐步图文教程，还有gif操作演示，可谓”手把手“教学了。有能力的记得去原帖支持下！
