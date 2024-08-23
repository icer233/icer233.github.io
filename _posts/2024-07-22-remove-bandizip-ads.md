---
date: 2024-07-22 15:40:09
layout: post
title: "去除Bandizip主界面下方的广告"
subtitle: "去除Bandizip主界面下方的广告"
description: "去除Bandizip主界面下方的广告"
image: https://icer233.github.io/assets/postimg/2024/07/22/1.jpg
optimized_image:
category: code
tags:
  - "破解"
  - "逆向"
  - "解压"
author: ggbond
paginate: false
music-id: 
---

## 原帖

[去除Bandizip主界面下方的广告](https://www.52pojie.cn/thread-1560678-1-1.html)
[去除Bandizip主界面下方的广告【第二弹】](https://www.52pojie.cn/thread-1567959-1-8.html)

## 偷梁换柱

Bandizip是一款很好用的解压软件，但不管是否是付费用户，其软件主界面下方都存在一个横幅推广自家的产品Honeycam（见图1），今天就教大家去除这个横幅广告。
![photo](https://icer233.github.io/assets/postimg/2024/07/22/1.jpg)
找到`C:\Program Files\Bandizip\data\skin.data`文件（图2），这实际上是一个ZIP压缩包（图3）。
![photo](https://icer233.github.io/assets/postimg/2024/07/22/2.jpg)
![photo](https://icer233.github.io/assets/postimg/2024/07/22/3.jpg)
将其解压，找到里面的`skin_main.xml`（图4），打开它，搜索`honeycam`，找到一处被注释掉了的代码（图5）。
![photo](https://icer233.github.io/assets/postimg/2024/07/22/4.jpg)
![photo](https://icer233.github.io/assets/postimg/2024/07/22/5.jpg)
没关系，继续往上翻，可以看到`Height="41"`字样（图6)，把高度`41`改成`0`即可。

```html
<Static ID="STATIC_LAUNCHBAR_AREA" Align="bottom" Height="41" >
```

![photo](https://icer233.github.io/assets/postimg/2024/07/22/6.jpg)
改完之后再将其压缩回去，替换掉原来的`skin.data`，最终效果如图7所示。
![photo](https://icer233.github.io/assets/postimg/2024/07/22/7.jpg)

## 更上一层楼

这样操作之后，虽然横幅是看不见了（高度为0），但是软件依然会加载这个横幅，只不过不可见而已，因此那样修改还不算完美。

经过进一步分析研究，今天给大家分享一种更好的修改方法，以Bandizip免费版为例，我们的目标是去除右下角网页广告、底部横幅广告、左上角注册按钮：

`skin.data`是一个ZIP压缩包，这次仍然是修改`skin.data`文件。

1. 去除左上角的注册按钮（`C:\Program Files\Bandizip\data\skin.data\skin_main.xml`），搜索关键词是：`regist`

   ```html
    <!-- 제품 등록 -->
                   <Static ID="STATIC_REGISTER" Align="lefttop" Width="60" Height="60"  Margin="20,0,0,20" HideWhenSmall="true" >
                       <Button ID="CMD_REGISTER" Image="btn_regist.png" Align="top" Height="60" Tooltip="$TOOLTIP_REGISTER" />
                   </Static>
   ```

   删除这段代码或注释掉，结果如下：

   ```html
    <!-- 제품 등록 -->
   <!-- <Static ID="STATIC_REGISTER" Align="lefttop" Width="60" Height="60"  Margin="20,0,0,20" HideWhenSmall="true" >
       <Button ID="CMD_REGISTER" Image="btn_regist.png" Align="top" Height="60" Tooltip="$TOOLTIP_REGISTER" />
       </Static> -->
   ```

2. 去除底部横幅广告、右下角网页广告（`C:\Program Files\Bandizip\data\skin.data\skin.xs`）

   ```c++
   void DoInit()
   {
           SetEventHandler(SKINEVENT_ONSIZE, "OnSize();");
       if (g_regShowBallon == FALSE)
               HideBallon();
       //if (g_regShowAd == FALSE)
               //HideAd();
       if (g_regShowLaunchBar == FALSE)
               HideLaunchBar();
   }
   ```

   改成
   
   ```c++
   void DoInit()
   {
           SetEventHandler(SKINEVENT_ONSIZE, "OnSize();");
           HideBallon();
           HideAd();
           HideLaunchBar();
   }
   ```
   
3. 完成以上修改之后，重新压缩成skin.data，替换原文件即可。

