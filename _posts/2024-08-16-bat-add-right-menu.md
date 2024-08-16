---
date: 2024-08-16 08:08:20
layout: post
title: "BAT批处理为任意程序添加右键菜单"
subtitle: 
description:
image: https://attach.52pojie.cn/forum/202408/16/111017gw6s68sisysj6nuj.png
optimized_image:
category: code
tags:
  - "代码"
  - "批处理"
  - "技巧"
author: icer233
paginate: false
---

## 原帖

[BAT批处理为任意程序添加右键菜单](https://www.52pojie.cn/thread-1955086-1-1.html)

## 教程

在此分享本次的主角，**为任意程序一键添加右键菜单**，以下为代码

```powershell
@ECHO OFF&(PUSHD "%~DP0")&(REG QUERY "HKU\S-1-5-19">NUL 2>&1)||(
powershell -Command "Start-Process '%~sdpnx0' -Verb RunAs"&&EXIT)
@mode con lines=12 cols=40
color 2
set CX=LockHunter64.exe
set CXY=解锁

:MENU
ECHO.&ECHO  1 → 添加资源管理器右键菜单项
ECHO.&ECHO  2 → 移除资源管理器右键菜单项
echo.
set /p C=请选择:
if %C%==1 GOTO AddMenu
if %C%==2 GOTO RemoveMenu

:AddMenu
reg add "HKEY_CLASSES_ROOT\*\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_CLASSES_ROOT\*\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
reg add "HKEY_CLASSES_ROOT\Directory\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_CLASSES_ROOT\Directory\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
reg add "HKEY_CURRENT_USER\SOFTWARE\Classes\*\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_CURRENT_USER\SOFTWARE\Classes\*\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
reg add "HKEY_CURRENT_USER\SOFTWARE\Classes\Directory\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_CURRENT_USER\SOFTWARE\Classes\Directory\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
ECHO.&ECHO 添加完成 &TIMEOUT /t 2 >NUL&EXIT

reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500\SOFTWARE\Classes\*\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500\SOFTWARE\Classes\*\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500\SOFTWARE\Classes\Directory\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500\SOFTWARE\Classes\Directory\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500_Classes\*\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500_Classes\*\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500_Classes\Directory\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%,0" >NUL
reg add "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500_Classes\Directory\shell\%CXY%\command" /f /d "%~dp0%CX% \"%%1\"" >NUL

:RemoveMenu
reg delete "HKEY_CLASSES_ROOT\*\shell\%CXY%" /F>NUL 2>NUL
reg delete "HKEY_CLASSES_ROOT\Directory\shell\%CXY%" /F>NUL 2>NUL
reg delete "HKEY_CURRENT_USER\SOFTWARE\Classes\*\shell\%CXY%" /F>NUL 2>NUL
reg delete "HKEY_CURRENT_USER\SOFTWARE\Classes\Directory\shell\%CXY%" /F>NUL 2>NUL

ECHO.&ECHO 移除完成 &TIMEOUT /t 2 >NUL&EXIT

reg delete "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500\SOFTWARE\Classes\*\shell\%CXY%" /F>NUL 2>NUL
reg delete "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500\SOFTWARE\Classes\Directory\shell\%CXY%" /F>NUL 2>NUL
reg delete "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500_Classes\*\shell\%CXY%" /F>NUL 2>NUL
reg delete "HKEY_USERS\S-1-5-21-1057057398-1623455825-1596846560-500_Classes\Directory\shell\%CXY%" /F>NUL 2>NUL
```

将其写进txt文件，并将后缀名改为`.bat`即可。

将该文件放在需要加入右键菜单地程序根目录下



将第5行

```powershell
set CX=LockHunter64.exe
```

`LockHunter64.exe`改成你需要的程序地名称



将第6行

```powershell
set CXY=解锁
```

`解锁`改成你需要在右键菜单中显示地名称



运行后是选择移除和添加：

```

 1 → 添加资源管理器右键菜单项

 2 → 移除资源管理器右键菜单项

请选择:
```



我又新加了两条，是为了添加到桌面右键菜单的，需要的话自行再添加一下

在`:AddMenu` 下方添加以下两句

```powershell
reg add "HKEY_CLASSES_ROOT\Directory\Background\shell\%CXY%" /f /v "Icon" /d "%~dp0%CX%" >NUL
reg add "HKEY_CLASSES_ROOT\Directory\Background\shell\%CXY%\command" /f /d "%~dp0%CX%" >NUL
```

在`:RemoveMenu`下方添加以下一句

```powershell
reg delete "HKEY_CLASSES_ROOT\Directory\Background\shell\%CXY%" /F>NUL 2>NUL`
```
