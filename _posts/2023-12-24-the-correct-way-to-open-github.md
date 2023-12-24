---
date: 2023-12-24 03:37:35
layout: post
title: "打开Github的正确姿势"
subtitle: "不要错过各种好玩的开源项目！"
description: "教你如何在国内连上Github"
image: https://icer233.github.io/assets/postimg/connect-to-github/gh.jpg
optimized_image:
category: code
tags: 
  - "代码"
  - git
author: icer233
paginate: false
---

## 1 Github是什么

GitHub是一个在线软件源代码托管服务平台，使用Git作为版本控制软件，由开发者克里斯·汪斯崔斯、P·J·海特和汤姆·普雷斯顿·沃纳使用Ruby on Rails编写而成。在2018年，GitHub被微软公司收购。

GitHub是一个面向开源和私有软件项目的托管平台。它提供付费和免费账户，允许用户创建公开或私有的代码仓库。GitHub以Git作为唯一的版本库格式进行托管，因此得名GitHub。根据2009年的Git用户调查，GitHub是最流行的Git访问站点，拥有1亿以上的开发人员和400万以上的组织机构。

要了解Github，我们首先要知道Git，Git是管理代码的工具，写代码不是件轻松的事儿，一个人写的时候已经不轻松了，一群人写就更不轻松了，但这世界上很多事都是怎么不轻松怎么来的，大部分人都会和别人一起写代码，问题在于，这么多人写一个东西，你今天写一点，我明天写一点，然后发现你写错了，又影响到了我前天写的，最后汇总的时候怎么查找错误？又在什么时候汇总？这些问题太多了。为了让写代码这件事儿美好一点，我们有了一种名叫代码管理的东西，Git正是其中之一。（更多Git的相关知识见[Git教程 | ICER233'S BLOG](https://icer233.github.io/git-tutorial/)）

Git的核心思想是『分布式』，我们在服务器上面有一个『主仓库』，这里放的是拿得出台面的代码，我们也可以在自己的电脑上创建分支，这些分支由『主仓库』克隆而来，然后我们就可以愉快的在自己的电脑上写代码了，写完代码可以同步在自己电脑的分支里面，当你觉得自己的代码拿得出台面，我们可以申请把自己的代码更新到『主仓库』里面，一旦通过这样的审核，我们就对『主仓库』做了某种贡献，世界各地的杰出程序员不断的为一个项目的『主仓库』做贡献，让这个项目变得越来越完善。

Github是运用Git思想来工作的一个商业网站，所有开发者都可以在Github上面为自己的项目创建一个『主仓库』，好的项目就像狼群中的小鲜肉一样，大量的开发者会把这个主仓库中的代码克隆到自己的『分仓库』去，用更性感的话来说，就是『Fork』。

Git的方式的确很优雅，但问题在于，会有人愿意把自己辛辛苦苦的代码拿出来公布，并且让人Fork么？
会，不仅会，而且很多，Github有超过140万用户，你可能会撇撇嘴说那个啥啥社交软件都有2000万用户，区区140万算个啥。可是这140万用户几乎涵盖了这个世界上最优秀的开发者，我相信，你那个有2000W用户的社交软件的工程师，肯定也是用Github的。任何项目，在Github上面获得fork或star，都意味着其它工程师对这个项目的认可，这比100个QQ空间的赞更有价值。

为什么这些优秀的工程师会开源自己的项目？

因为开源是一种精神。

无数的软件开发者苦心积虑保护自己的代码不被破解，而还是被聪明绝顶的脚本小子破解了，但破解无数软件的脚本小子在接下来的破解中却傻眼了，因为这是开源的，不用破解也就破解了破解。

闭源意味着封闭，而开源则意味着开放，封闭很难进步，开放才会进步。开放让人类的智慧有聚集的可能，人类的智慧聚集起来不再是1+1=2，这是开源的力量。

闭源是一种排斥，而开源是包容，闭源是单打独斗，开源是同仇敌忾，闭源是敝帚自珍，开源是无私奉献，闭源是小富即安，开源是世界大同，闭源是资本主义，开源是共产主义。

## 2 为什么国内有时无法访问Github

GitHub 在中国大陆访问速度慢的问题原因有很多，但最直接和最主要的原因是 GitHub 的分发加速网络的域名遭到 DNS 污染。由于 GitHub 的加速分发 CDN 域名 assets-cdn.github.com 遭到 DNS 污染，导致无法连接使用GitHub 的加速分发服务器，才使得中国大陆访问速度很慢。

Github的服务器在国外，国内想访问就得问DNS具体的IP是哪个，但是DNS时不时抽风，所以要不就是给的地址不行就是访问不了DNS。

1. **DNS污染：** GitHub的分发加速网络的域名遭到DNS污染，导致访问速度慢或无法连接。
2. **IP地址限制：** GitHub.com域名对应的IP地址有多个，有些在国内允许访问的范围内，有些不在，可能导致有时能访问有时不能访问的情况。
3. **网络连接问题：** 本地网络连接问题可能导致GitHub页面无法访问，检查网络连接以解决此问题。
4. **GitHub审查和封锁：** 在某些情况下，GitHub可能受到审查和封锁，这可能导致无法正常访问。

## 3 如何正常访问Github

### 3.1 Steam++

打开[瓦特工具箱(Steam++官网) - Watt Toolkit (steampp.net)](https://steampp.net/)下载Steam++并安装

按照如下步骤加速Github，在打开Github时你会发现已经能打开了

![steampp](csteampp.png)

### 3.2 手动更改host文件

浏览器打开https://www.ipaddress.com/

![host-1](https://icer233.github.io/assets/postimg/connect-to-github/host-1.png)

查询GitHub的网址ip地址

![host-2](https://icer233.github.io/assets/postimg/connect-to-github/host-2.png)

将GitHub的 ip 地址加入到 C:\Windows\System32\drivers\etc 里面的配置中（关于更改host文件遇到的问题请自行百度）

![host-3](https://icer233.github.io/assets/postimg/connect-to-github/host-3.png)

> 注意点：此时已经成功配置了，就能访问github网站了，但是github的ip地址会经常变化，所以有时候hosts中的ip地址会失效，那么就得重写再配置一遍了
>
> 举一反三的话，其他国外网站应该也可以这么搞

### 3.3 steamcommunity 302

本软件是  [羽翼城|Dogfight360](https://www.dogfight360.com/blog/author/wu360463231/) 大佬开发的，本来是用来加速游戏的，但是也可以加速Github

在[steamcommunity 302](https://www.dogfight360.com/blog/686/)这个帖子中根据提示要求下载解压后，以管理员身份运行

接下来按照图片操作即可

“设置”=》勾选“Github访问”=》“保存设置”=》“重启后端”  即可

![sc302-1](https://icer233.github.io/assets/postimg/connect-to-github/sc302-1.png)

![sc302-2](https://icer233.github.io/assets/postimg/connect-to-github/sc302-2.png)

![sc302-3](https://icer233.github.io/assets/postimg/connect-to-github/sc302-3.png)

### 3.4 fastgithub

FastGithub是一款Github加速神器，解决github打不开、用户头像无法加载、releases无法上传下载、git-clone、git-pull、git-push失败等问题。
它支持多种平台：Windows、Linux、MacOS、Docker等
它在Github开源项目地址：https://github.com/dotnetcore/FastGithub
下载地址：https://github.com/dotnetcore/FastGithub/releases

如果此时你的Github访问不了，你可以到 https://gitcode.net/ 里面搜索一下，有很多镜像资源。

以Windows桌面端为例
解压下载的`fastgithub_win-x64.zip`，找到`FastGithub.UI.exe`，双击运行即可愉快的访问 Github 了。
![fg](https://icer233.github.io/assets/postimg/connect-to-github/fg.png)

### 3.5 开发者边车 Dev Sidecar

dev-sidecar 开发者边车，命名取自service-mesh的service-sidecar，意为为开发者打辅助的边车工具（以下简称ds）。
它通过本地代理的方式将https请求代理到一些国内的加速通道上。

它在Github开源项目地址：https://github.com/docmirror/dev-sidecar
下载地址：https://github.com/docmirror/dev-sidecar/releases
如果你现在还打不开Github，可以去[Gitcode]( https://gitcode.net/) 或百度搜索下载

以Windows桌面端为例：
下载`Dev-Sidecar.x.x.x.exe`，点击该应用程序然后选择一个安装路径，等待安装完成打开即可。

首次打开，需要安装`CA根证书`，点击`去安装`，然后按提示一步步操作去完成安装。

![ds-1](https://icer233.github.io/assets/postimg/connect-to-github/ds-1.png)

![ds-2](https://icer233.github.io/assets/postimg/connect-to-github/ds-2.png)

另外，该软件，还支持`npm`、`git`、`pip`加速。

### 3.6 通过Gitee中转fork仓库下载

网上有很多相关的教程，这里简要的说明下操作。

在导入页面中粘贴你的Github仓库地址，点击导入即可：

等待导入操作完成，然后在导入的仓库中下载浏览对应的该GitHub仓库代码，你也可以点击仓库顶部的“刷新”按钮进行Github代码仓库的同步。

### 3.7 镜像网站

在已知道github地址的情况下输入github地址，进行加速下载

**加速下载**

[Github 增强 - 高速下载 (greasyfork.org)](https://greasyfork.org/zh-CN/scripts/412245-github-增强-高速下载)

[加速你的Github (zhlh6.cn)](https://github.zhlh6.cn/)

[GitHub加速 - 肥猪のBlog (feizhuqwq.com)](https://blog.feizhuqwq.com/10)

[GitHub 文件加速 (99988866.xyz)](https://gh.api.99988866.xyz/)

**完整镜像**

[GitHub: Let’s build from here · GitHub (githubfast.com)](https://githubfast.com/)

**综合**

[GitHub 可用网站 - 最优网址 (aalib.net)](https://c.aalib.net/tool/github/)
