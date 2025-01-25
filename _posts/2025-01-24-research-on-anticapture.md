---
date: 2025-01-24 13:03:43
layout: post
title: "对于某网课软件反截屏反录屏的简单解决方案"
subtitle: "网络上大多教的是反截屏，似乎很少有反反截屏"
description:
image: https://img.icer233.us.kg/20250124213240012.png
optimized_image:
category: code
tags:
  - "技巧"
  - "破解"
author: icer233
paginate: false
math: false
---

# 对于某网课软件反截屏反录屏的简单解决方案

## 序言

我们发现, 在用截屏软件或者录屏软件捕获改程序窗口的时候, 窗口会从屏幕中消失, 但是自己还是能看到.

那么我的第一反应就是, 不让我截屏, 我直接抓包还不行吗?

## 初见端倪

事实证明, 抓包确实是非常好的选择, 可以直接抓到录像视频的m3u8链接和教师投降的m3u8链接.

抓到后用工具下载成mp4文件即可.

更令人惊喜的是, 软件播放回放时, 会打上用户水印, 把你的名字和电话号码全部打满屏幕, 而抓出来的文件十分干净, 是没有水印的!

## 更进一步

我在截屏的时候, 发现尽管窗口隐藏了, 但是截图工具自动选取窗口的功能还是能取到程序窗口的方框, 这显然是程序在检测到截屏时, 更改了窗口透明度.

一搜索, 发现大多反截屏都调用的是Windows自带的`SetWindowDisplayAffinity()`函数.

那就很简单了, 我们直接注入dll拦截这个函数就行了.

这里ShareBit大佬已经写好了, 我就没有再去写.

[windows自带反截屏接口下的反反截屏软件 - 综合讨论区 - 无忧启动论坛 - Powered by Discuz!](http://bbs.wuyou.net/forum.php?mod=viewthread&tid=428580)

## 再进一步

但是呢, 我每次用该软件上课时都要运行反反截屏检测注入工具(即上文ShareBit开发的DeAntiCapture), 那不是相当麻烦?

如果哪次忘记开了, 导致没能及时截屏记笔记, 必须要等课上完了看回放, 那岂不是很令人难受?

由此, 我想到了系统dll劫持.

`version.dll`是一个非常理想的劫持选择, 因为它函数比较少.

我们用OD附加改软件, 看一下执行模块, 确实调用了`version.dll`, 那就好办了!

>Windows系统中DLL的加载顺序通常如下：
>
>- 应用程序所在目录
>- 当前目录
>- 系统目录（如C:\Windows\System32）
>- Windows目录（如C:\Windows）
>- 环境变量PATH中包含的目录
>
>例如: 对于文件系统,如doc文档打开会被应用程序office打开，而office运行的时候会加载系统的一个DLL文件，如果我们将用恶意的DLL来替换系统的DLL文件，就是将DLL和doc文档放在一起，运行的时候就会在当前目录中找到DLL，从而优先系统目录下的DLL而被执行。

我们可以用开源程序`AheadLib-x86-x64.exe`([软件下载(Github)](https://github.com/strivexjun/AheadLib-x86-x64/releases/tag/1.2)), 生成这个dll的代码, 并在其中插入一行代码来加载我们自己的dll.

我直接用了ShareBit大佬程序中的dll.

在加载函数中加入`LoadLibraryA("mydll.dll");`

最后, 编译一下, 放到网课程序根目录下即可

如果你对这部分不熟悉的话, 可以参考这个保姆级教程: [劫持系统dll制作_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1nv4y1S7GD/)

## 结语

至此, 本文就结束了.

如果你想长期保存方便以后学习或者和他人私下分享, 抓包仍然是我最推荐的选择.
