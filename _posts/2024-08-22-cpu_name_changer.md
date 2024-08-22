---
date: 2024-08-22 15:13:05
layout: post
title: "CPU名字自定义小工具"
subtitle: "装逼必备！"
description: "装逼必备！"
image: https://icer233.github.io/assets/postimg/2024/08/22/1.png
optimized_image:
category: code
tags:
  - "批处理"
  - "技巧"
author: icer233
paginate: false
---

## 前言

在注册表里有关于设备硬件信息的字符串，直接更改就可以，写了一个简单的`.bat`批处理来更改就很方便

## 源码

```bash
@echo off
color 0a

echo 更改cpu名称程序开始运行……
echo 提示：请以管理员身份运行

echo.
echo 创建备份文件夹
md backup 
cd backup

echo.
echo 导出注册表备份
reg export HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\CentralProcessor\0 cpubak.reg /y
reg export HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\CentralProcessor\0 find.reg /y
rename find.reg cpunamequery.txt

echo.
echo 原cpu名字为
find "ProcessorNameString" %cd%/cpunamequery.txt
del cpunamequery.txt

echo.
echo 请输入你要改的cpu名称：
echo 如有空格，请加上双引号，如：
echo 你要将名称改成Apple M1
echo 则要输入“"Apple M1"”

echo.
echo 请输入你要改的cpu名称：
set /p cpuname=

echo.
echo 是否要将cpu名字改成“%cpuname%”？
pause

reg add HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\CentralProcessor\0 /v ProcessorNameString /t reg_sz /d %cpuname% /F

pause
```

## 注意事项

输入CPU名字的时候你需要用一对英文双引号来包裹这个名字
