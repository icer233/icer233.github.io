---
date: 2025-01-01 08:45:39
layout: post
title: "如何更好地在Windows上隐藏文件"
subtitle: "隐藏文件有两大宗旨。第一是别人找不到，第而是自己可以轻松方便地找到。"
description: "隐藏文件有两大宗旨。第一是别人找不到，第而是自己可以轻松方便地找到。"
image: https://icer233.github.io/assets/postimg/2025/01/01/7.png
optimized_image:
category: skills
tags:
  - "技巧"
  - "隐藏"
author: icer233
paginate: false
math: false
---

## 前言

何为隐藏文件？

我们隐藏文件有两大宗旨。第一是别人找不到，第而是自己可以轻松方便地找到。

隐藏文件的方法非常多，最简单的便是添加到压缩包并且设个密码，但是这样别人一眼就知道这是你不想让他看到的文件。那你说你把文件分卷压缩，改个名字和后缀名，随意藏在程序的安装目录里不就好了？但是这样的话，自己想找出来也过于麻烦了。

下面介绍的很多原理都可以通过多种不同的方法实现，以下只介绍最简单的方法

## 方法一：透明文件夹

### 隐藏方法

1. 新建文件夹

2. 删除名字，右键选择插入Unicode，随便选择一个。这样你就能获得一个没有名字的文件夹

   ![](https://icer233.github.io/assets/postimg/2025/01/01/1.png)

3. 按照下图操作将文件夹图标也改为透明的

   ![](https://icer233.github.io/assets/postimg/2025/01/01/2.png)

4. 如果你的文件夹像下图一样变为黑色而不是透明，可以把它放到除了桌面以外的文件夹，就透明了

   ![](https://icer233.github.io/assets/postimg/2025/01/01/3.png)

### 使用方法

1. 用鼠标划框即可选中

   ![](https://icer233.github.io/assets/postimg/2025/01/01/4.png)

### 解除方法

1. 将隐藏方法倒过来做一遍即可

## 方法二：系统自带隐藏属性

### 隐藏方法

1. 右键-属性-勾选”隐藏“-确定

   ![](https://icer233.github.io/assets/postimg/2025/01/01/5.png)

   ### 使用方法

   1. 在文件资源管理器中点击查看-显示-勾选”隐藏的项目“即可看到隐藏的文件

      ![](https://icer233.github.io/assets/postimg/2025/01/01/6.png)

### 解除方法

1. 先找到隐藏的文件，在属性中取消勾选”隐藏“即可

## 方法三：系统级别的隐藏

### 隐藏方法

1. 打开cmd，输入以下命令

   ```cmd
   attrib 你的文件路径.txt +s +h
   ```

### 查看方法

1. 点击三个点-选项-查看-取消勾选”隐藏受保护的操作系统文件（推荐）“选项

   ![](https://icer233.github.io/assets/postimg/2025/01/01/7.png)

### 解除方法

1. 打开cmd，输入以下命令

   ```bash
   attrib 你的文件路径.txt -s -h
   ```

### 注意事项

cmd命令中的`s`和`h`分别表示系统属性和隐藏属性，`+`和`-`表示给文件添加这个属性或去除这个属性

## 方法四：隐藏在图片中

### 隐藏方法

1. 将文件压缩为一个压缩包并准备一张可以正常打开的图片

2. 打开cmd，输入

   ```cmd
   copy /b 表层图片路径+压缩包路径 新图片路径
   ```

### 使用方法

1. 将新图片的后缀名改为你原来压缩包的后缀名，即可正常解压
2. 将后缀名再改为原来图片的后缀名，图片也可以正常打开

### 注意事项

cmd中的文件路径记得带上文件后缀名

## 方法五：特殊文件夹伪装

### 隐藏方法

|   图标   |                   代码                    |
| :------: | :---------------------------------------: |
| 我的电脑 | ` {20D04FE0-3AEA-1069-A2D8-08002B30309D}` |
|  回收站  | `{645FF040-5081-101B-9F08-00AA002F954E}`  |
|   桌面   | `{00021400-0000-0000-C000-000000000046}`  |
| 控制面板 | `{21EC2020-3AEA-1069-A2DD-08002B30309D}`  |
|    IE    | `{871C5380-42A0-1069-A2EA-08002B30309D}`  |
| 网络邻居 | ` {208D2C60-3AEA-1069-A2D7-08002B30309D}` |

1. 新建一个文件夹，将文件夹命名为`回收站.{645FF040-5081-101B-9F08-00AA002F954E}`
1. 你会文件夹的名字变成了"回收站"，图标也是回收站，打开也是回收站的内容 

### 使用方法

1. 直接将要隐藏的文件拖进去就可以了
2. 使用`dir`命令进入隐藏文件夹并对你隐藏的文件进行操作

### 解除方法

·1. 打开压缩软件，找到你的隐藏文件夹，将名字改掉即可

### 注意事项

1. 如果图标不对可参考方法一更改图标
2. 清楚回收站不会清除你隐藏的文件
3. 可以用其他代码（见上表），都可以

## 方法六：回收站隐藏

### 操作方法

1. 打开cmd

2. 输入

   ``` cmd
   copy 需要隐藏的文件的路径 C:\$Recycle.Bin\当前账户的sid\files
   ```

### 使用方法

1.  打开cmd输入

   ```cmd
   copy 你要把文件放到哪 C:\$Recycle.Bin\当前账户的sid\files\*

### 注意事项

1. 如果你不知道当前账户的sid，可以在cmd中输入以下命令来查看
   ```cmd
   whoami   /user
   ```

2. 文件不会因为清空回收站而消失
