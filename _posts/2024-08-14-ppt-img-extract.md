---
date: 2024-08-14 07:30:11
layout: post
title: "PPT图片提取技巧"
subtitle: "炒鸡简单!!"
description: "两个方法快速提取PPT中的图片"
image: https://icer233.github.io/assets/postimg/ppt-img-extract/4.png
optimized_image:
category: skills
tags:
  - "PPT"
  - "技巧"
author: ggbond
paginate: false
---

## 前言

工作中常需要将PPT里用到的图片保存下来再次使用。如果右键另存为，会损失画质。

那么有什么办法能快速高效地无损提取图片呢？

## 方法一 解压

1. 显示文件拓展名

   ![1](https://icer233.github.io/assets/postimg/ppt-img-extract/1.png)

2. 将PPT文件后缀`.pptx`改成`.zip`并点击`确定`

   ![2](https://icer233.github.io/assets/postimg/ppt-img-extract/2.png)

2. 用解压软件打开这个`.zip`文件

3. 依次打开文件夹`ppt -> media`文件夹，就能看见媒体文件了

   ![3](https://icer233.github.io/assets/postimg/ppt-img-extract/3.png)

## 方法二 python软件

#### 原帖

[ 一键提取PPT图片，右键提取PPT图片](https://www.52pojie.cn/thread-1954076-1-1.html)

![4](https://icer233.github.io/assets/postimg/ppt-img-extract/4.png)

#### 软件功能

本来只写了一个命令行工具，添加到右键里。后来想想写个界面方便别人也行。

![5](https://icer233.github.io/assets/postimg/ppt-img-extract/5.png)

打开 提取`ppt图片.exe`后，可以直接拖入ppt，默认保存路径和ppt路径一致。

勾选添加到右键菜单后，会在右键菜单添加一个提取ppt图片的选项，右键 `pptx` 格式的文件就会显示。点击后会运行`extract_images_cmd.exe` 来提取。

![6](https://icer233.github.io/assets/postimg/ppt-img-extract/6.png)

#### 下载地址

仅在win10以及以上测试通过，win7有问题我也懒得改 

打包成exe之后有python的运行环境和库，可以方便没有装python的电脑使用，牺牲就是软件体积大。已有python环境的 直接下源码即可

|            |                             直链                             |                           网盘                           |
| :--------: | :----------------------------------------------------------: | :------------------------------------------------------: |
|  **源码**  | https://icer233.github.io/assets/resources/ppt-img-extract-sourcecode.zip |         https://320nle.lanzouj.com/itPBZ27belsj          |
| **打包版** |                              /                               | https://pan.baidu.com/s/1sLlSqZ9xfTyDROwJG6Pzcg?pwd=1111 |

