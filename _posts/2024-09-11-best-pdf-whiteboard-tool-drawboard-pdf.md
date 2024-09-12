---
date: 2024-09-11 11:54:29
layout: post
title: "【最好的PDF白板软件】DrawboardPDF历史版本分享！"
subtitle: "去除恶心的付费限制！"
description: "去除恶心的付费限制！"
image: https://icer233.github.io/assets/postimg/2024/09/11/1.png
optimized_image:
category: skills
tags:
  - "工具"
  - "PDF"
author: icer233
paginate: false
---

## 介绍

Drawboard PDF 几乎是 Windows 平台手写批注 pdf 的唯一选择，但这款软件的开发商近两年吃相过于难看，最新版连手写压感和固定工具上限都开始收费，故推荐大家去用旧版。

（顺便去微软商店给它刷差评）(¬_¬ )

## 对比

|     项目     |  5.40.1版本  |                          6.16.3版本                          |                          6.35.6版本                          |
| :----------: | :----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  安装包体积  |    约56MB    |                           约180MB                            |                           约450MB                            |
|   打开速度   |     极快     |                             较快                             |                     较慢（第一次特别慢）                     |
|     界面     |     旧UI     |                             新UI                             |                             新UI                             |
|     压感     |      有      |                              有                              |                              有                              |
| 是否强制登陆 |      否      |                              否                              |                              否                              |
|     功能     | 只有基本功能 | ![](https://icer233.github.io/assets/postimg/2024/09/11/6.16alltools.png) | ![](https://icer233.github.io/assets/postimg/2024/09/11/6.35alltools.png) |

## 安装

1. 在Windows设置中开启开发者模式

   ![](https://icer233.github.io/assets/postimg/2024/09/11/2.png)

2. 下载**老旧UWP框架**（见后文），解压后依次双击安装三个框架

3. 然后双击文件就可以安装老版的Drawboard PDF了

   ![](https://icer233.github.io/assets/postimg/2024/09/11/3.png)

4. 之后请关闭微软商店的自动更新，因为最新版本依然会要求你付费。

   ![](https://icer233.github.io/assets/postimg/2024/09/11/4.png)

## 疑难解答

### 没有打开安装包的软件

先到微软商店安装应用安装程序

![](https://icer233.github.io/assets/postimg/2024/09/11/6.png)

### 请向开发人员索要xxx应用包

![](https://icer233.github.io/assets/postimg/2024/09/11/7.png)

1. 确保你成功安装了三个框架（见安装步骤第一步，若失败则使用下面第三步的命令）

2. 使用管理员身份启动`PowerShell`

   ![](https://icer233.github.io/assets/postimg/2024/09/11/8.png)

3. 使用命令(引号内输入文件路径，如果三个框架安装失败也可以使用此命令)

   ```bash
   Add-AppxPackage -Path "your:/path/to/the.file"
   ```

4. 仍然不行则依次运行以下两条命令重新注册微软商店

   ```bash
   get-appxpackage *store* | remove-Appxpackage
   
   add-appxpackage -register "C:\Program Files\WindowsApps\*Store*\AppxManifest.xml" -disabledevelopmentmode
   
   ```

## 下载

|                             内容                             |                             链接                             |                             出处                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                      DrawboardPDF6.35.6                      | https://pan.baidu.com/share/init?surl=uTRXRFg96rnL08bhGi3eQQ&pwd=q6e0#q6e0 |            https://zhuanlan.zhihu.com/p/686769412            |
|                         老旧UWP框架                          | https://pan.baidu.com/share/init?surl=R6Q-algiikTPvvLpwDd4rQ&pwd=1145 |            https://zhuanlan.zhihu.com/p/686769412            |
|                         老旧UWP框架                          | https://icer233.github.io/assets/postimg/2024/09/11/old-uwp-relies.zip | https://icer233.github.io/best-pdf-whiteboard-tool-drawboard-pdf/ |
|                       DrawboardPDF5.40                       | https://pan.baidu.com/share/init?surl=RoJOn-_cT4sohOWhaC2KxA&pwd=m9kw#m9kw |          https://www.bilibili.com/read/cv23006023/           |
|                       DrawboardPDF6.16                       | https://pan.baidu.com/share/init?surl=LWSLcorsPaWQ_CgQfHQEEA&pwd=9uhn#9uhn |          https://www.bilibili.com/read/cv23006023/           |
| DrawboardPDF_5.0.90.0。DrawboardPDF_5.39.17.0。DrawboaDrawboard_5.4.10.0。DRAWBOARDPDF_6.16.3.0。DRAWBOARDPDF_6.18.0.0。DRAWBOARDPDF_6.25.6.0。DrawboardPDF_2015.1001.648.0 |   https://pan.baidu.com/s/1BxKdk1H8SqDdaNDcCmpJYw?pwd=52pj   |        https://www.52pojie.cn/thread-1866626-1-1.html        |

**Adguard商店已经无法下载旧版DrawboardPDF！！只有一个版本！！**

## 参考

https://zhuanlan.zhihu.com/p/686769412

https://www.cnblogs.com/ranxi169/p/17669400.html

https://www.cnblogs.com/ranxi169/p/17203068.html
