---
date: 2023-12-24 05:40:27
layout: post
title: "【通告】功能、Bug与投稿相关事宜"
subtitle: "【通告】功能、Bug与投稿相关事宜"
description: "【通告】功能、Bug与投稿相关事宜"
image: https://icer233.github.io/assets/postimg/announcements/cover.png
optimized_image:
category: announcement
tags:
  - "通告"
author: icer233
paginate: false
---

## 功能

1. 在左上角菜单中开放了“SB语录”、“留言”、“标签”功能。标签功能中可以根据文章的标签对文章进行分类查看

2. 在网站右上角开放了“搜索”功能，可以搜索文章
3. 在每篇文章末尾开放了“评论”功能

### 评论功能

博客评论使用Disqus系统，分为反馈和评论两个部分

![comment-1](https://icer233.github.io/assets/postimg/announcements/comment-1.png)

如果你需要评论或添加回应，你都需要提供一定的账号信息

#### 1.1 有特殊网络环境

![comment-2](https://icer233.github.io/assets/postimg/announcements/comment-2.png)

你可以直接使用框出的四种方式登录，它们分别为`Disqus`，`Facebook`，`Twitter`，`Google`或者在右侧直接注册`Disqus`账号，并打开你的邮箱验证。

对于登陆好的用户你就可以直接发表评论或添加回应，不需要审核，直接对所有人公布

#### 1.2 没有特殊网络环境

![comment-3](https://icer233.github.io/assets/postimg/announcements/comment-3.png)

如果你没有办法通过以上的几种方式登录，那么你可以勾选”我更想匿名评论“，这样，Disqus将不会验证你的邮箱。

对于这种匿名的用户，你的评论必须要经过管理员的审核才能显示，你的反应可以直接显示。

## Bug

目前已知的主要的Bug：评论功能的显示，我们在国内网络环境下，进行了一些测试，发现不是所有的设备都能正常显示评论。测试结果如下：

|        设备        |      系统       |     浏览器     | 网络连接协议 | 是否连接了境外VPN | 是否正常显示 |
| :----------------: | :-------------: | :------------: | :----------: | :---------------: | :----------: |
|     iPhone XS      |    iOS 16.0     |     Safari     |     WiFi     |        否         |      是      |
|     iPhone XS      |    iOS 16.0     |     Safari     |      4G      |        否         |      是      |
|     iPhone XS      |    iOS 16.0     |     Alook      |     WiFi     |        否         |      否      |
|     iPhone XS      |    iOS 16.0     |      Via       |     WiFi     |        否         |      否      |
|     iPhone XS      |    iOS 16.0     |      夸克      |     WiFi     |        否         |      否      |
|   iPhone 13 Pro    |   iOS 17.1.2    |     Safari     |     WiFi     |        否         |      是      |
|   iPhone 13 Pro    |   iOS 17.1.2    |     Safari     |      5G      |        否         |      是      |
|   ThinkPad x395    | Windows 11 22H2 | Microsoft Edge |     WiFi     |        是         |      是      |
|   ThinkPad x395    | Windows 11 22H2 | Microsoft Edge |     WiFi     |        否         |      否      |
|   ThinkPad x395    | Windows 11 22H2 | Google Chrome  |     WiFi     |        是         |      否      |
|   ThinkPad x395    | Windows 11 22H2 | Google Chrome  |     WiFi     |        否         |      否      |
|      小米 12S      |  MIUI 13.0.20   |   小米浏览器   |     WiFi     |        否         |      否      |
| Huawei Matepad Pro | HarmonyOS 4.0.0 |     浏览器     |     WiFi     |        否         |      否      |

如果你知道问题所在或者有解决方法可以在Github仓库中提出issue或者pull-request或邮件联系我

## 投稿

如果你有兴趣在我的博客上发布文章，请在tommydaI0909@163.com 上联系我

如果你是第一次投稿，你需要提供：

1. 你的名字
2. 你的头像（不一定要真人照）
3. 你的一句话简介
4. 你的github/twitter/facebook用户名（可选）

如果你投稿了一篇文章，你需要提供：

1. 你的markdown文章（作为附件发送）
2. 你的文章类别
3. 你的文章标签
4. 你的文章封面图片
5. 你的文章的标题、副标题、简介

