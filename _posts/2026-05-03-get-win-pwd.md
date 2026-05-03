---
date: 2026-05-03 04:01:48
layout: post
title: "Windows开机密码读取"
subtitle:
description:
image: 
optimized_image:
category: skills
tags:
  - "工具"
  - "技巧"
  - "破解"
author: icer233
paginate: false
math: true
---

# Windows开机密码读取

## 0x00 前言

周知所众，现在想要绕过Windows的开机密码进入系统已经是非常简单了，网上各种教程层出不穷。无论是使用PE盘清除密码。还是通过替换粘滞键或是轻松使用打开命令行，操作难度都不大。

但是，这些方法都有些麻烦，且各有弊端。如果使用PE清除密码，势必会留下痕迹，别人就知道了有人破解过电脑了；如果每次都用PE盘备份、清除、恢复，那也实在是太麻烦了……

这样看来，如果能获得密码，那就最好不过了。

---

**本教程使用场景：**

1. 能进入系统（比如他人帮助你解锁密码，当然PE盘也可以，只是操作麻烦一些，懂的人自然能做到）
2. 有管理员权限，能使用注册表
3. 能联网下载工具、使用在线工具
4. 密码较为简单

## 0x01 工具列表

### 密码提取工具：mimikatz

**开源地址：[gentilkiwi/mimikatz: A little tool to play with Windows security](https://github.com/gentilkiwi/mimikatz)**

**下载地址：[Releases · gentilkiwi/mimikatz](https://github.com/gentilkiwi/mimikatz/releases)**

---

### 解密工具

**工具1：https://md5decrypt.net/en/Ntlm/**

**工具2：https://hashes.com/zh/decrypt/hash**

**工具3：https://cmd5.com/**

这三个工具效果是一样的，可以任选其一使用。

## 0x02 操作流程

### 下载软件

1. 从上面给出的网址中下载mimikatz工具，并解压。
2. 打不开网址可以搜索相关“Github下载教程”。

### 复制注册表文件

1. 找到mimikatz程序中对应系统位数的文件夹，如“x64”

2. 以管理员身份运行cmd并进入上述目录

   解压出类的目录树应该如下

   ```tree
   mimikatz_trunk
   ├── kiwi_passwords.yar
   ├── mimicom.idl
   ├── README.md
   ├── x64
   │   ├── mimidrv.sys
   │   ├── mimikatz.exe
   │   ├── mimilib.dll
   │   └── mimispool.dll
   └── Win32
       ├── mimidrv.sys
       ├── mimikatz.exe
       ├── mimilib.dll
       ├── mimilove.exe
       └── mimispool.dll
   
   ```

3. 依次在cmd中输入如下命令，将两个注册表文件复制到该目录

   ```cmd
   reg save hklm\sam sam.hive
   reg save hklm\system system.hive
   ```

4. 在cmd中运行 mimikatz 并解密，输入如下命令

   ```cmd
   mimikatz.exe
   lsadump::sam /sam:sam.hive /system:system.hive
   ```

5. 会输出一大堆内容，找到形如下面这样的内容（应该在输出内容的中篇下）

   ```
   RID  : 00000123 (1001)
   User : YourUsername
     Hash NTLM: 123abc456def123abc456def123abc45
   ```

   其中 `User:` 后面跟的是你的用户名，`Hash NTLM:` 后面跟的是你的密码的密文，复制这段字段

### 解密

1. 打开提到的三个网站中的一个，如我使用**工具2**
2. 输入复制的密文，输入验证码（如果有的话），点击按钮解密
3. 如果能解出来，可能会有类似这样的输出：`123abc456def123abc456def123abc45:password` ; 冒号后面的就是你的密码了

## 0x03 结语

本教程能100%读取出经过NTLM加密过后的密码的Hash值，但是并不能保证能解密出明文（事实上只有小部分的能解密出来）。

另外请大家合法实用工具。

**温馨提示：**

1. 本教程使用的工具 mimikatz 还支持**内存读取**和**SSP注入读取**两个方案，但是不支持Windows11系统，故本教程仅介绍文件读取方案。
2. 如果是PE系统的话，无法使用注册表导出（导出的不是原系统的密码文件），可以到你系统盘下的`Windows/System32/config`文件夹里复制出来后使用，`cmd`命令里的文件名自行改一下。
3. 原本使用注册表导出密码文件，其实也可以直接把那两个文件从`config`里复制出来，然后用 mimikatz 读取
4. 全程需要关闭杀毒软件使用。
