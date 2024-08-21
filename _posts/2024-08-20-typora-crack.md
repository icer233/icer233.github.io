---
date: 2024-08-20 12:34:24
layout: post
title: "Typora 授权解密与剖析"
subtitle: "白嫖Typora!"
description: "白嫖Typora!"
image: https://icer233.github.io/assets/postimg/2024/08/20/21.png
optimized_image:
category: code
tags:
  - "破解"
  - "markdown"
  - "逆向"
author: ggbond
paginate: false
---

## 原帖

[Typora 授权解密与剖析](https://www.52pojie.cn/forum.php?mod=viewthread&tid=1553967&amp;extra=page%3D3&)

## 前言

11月23日，Typora 正式发布 1.0 版本，进入了收费时代。

1.0 版本是一次性付费而非订阅的，只要支付人民币 89 元，可以在 3 台设备里使用。如你所见，这一篇文章就是使用Typora所写。自搭建个人博客起，Typora就成为了我主要的写作平台。

用惯了Markdown，WordPress的古腾堡编辑器没法满足我的需求，于是开始寻找替代品，最终的结果便是typora。

当然，多数人使用的原因不外乎以下

- 轻盈、干净
- 所见即所得
- 图床
- 主题、生态
- (beta)免费
- ……

如今，typora进入收费阶段，不乏使用者被迫迁移至其他写作工具上。

（不扯了官方话了）下面，我们来一探究竟。

## 寻踪觅源

通过火绒剑监测行为日志

程序加载的一些模块

![1](https://icer233.github.io/assets/postimg/2024/08/20/1.png)

在Windows下，typora会记录日志至`{UsersRoot}\AppData\Roaming\Typora\typora.log`

能看到可疑的注册表操作记录

![2](https://icer233.github.io/assets/postimg/2024/08/20/2.png)

正版激活的注册项内容

![3](https://icer233.github.io/assets/postimg/2024/08/20/3.png)

尝试修改SLicense

![photo](https://icer233.github.io/assets/postimg/2024/08/20/4.png)

重新运行软件后，从错误日志中发现调用栈暴露。

![photo](https://icer233.github.io/assets/postimg/2024/08/20/5.png)

## 渐入佳境

这里关注到了`app.asar`

通过搜索引擎，尝试解包

```bash
npm install -g asar
asar extract {installRoot}/Typora/resources/app.asar workstation/outs
```

发现文件被加密

![photo](https://icer233.github.io/assets/postimg/2024/08/20/6.png)

JavaScript不管是字节码还是明文脚本都会在运行时加载，结合模块列表寻找加载点

关注到解包得到的`main.node`

![photo](https://icer233.github.io/assets/postimg/2024/08/20/7.png)

IDA寻找字符串特征

![photo](https://icer233.github.io/assets/postimg/2024/08/20/8.png)

![photo](https://icer233.github.io/assets/postimg/2024/08/20/9.png)

通过交叉引用定位

看到一些导入函数

![photo](https://icer233.github.io/assets/postimg/2024/08/20/10.png)

由字符串联想到对加密文件进行的base64解码

导入表查找到 [napi Node-API | Node.js API 文档 (nodejs.cn)](http://nodejs.cn/api/n-api.html)

简单分析伪代码后，其实就是运行

```javascript
Buffer.from(e,"base64")
```

## 刻舟求剑

尝试`Findcrypt`寻找算法，找到AES的`Sbox`和`InvBox`

通过交叉引用定位到可疑函数点 `main.node+E440`

IDA动态调试，模块加载断点

![photo](https://icer233.github.io/assets/postimg/2024/08/20/11.png)

跑起来，直至加载`main.node`

![photo](https://icer233.github.io/assets/postimg/2024/08/20/12.png)

分析模块后，定位`base+offset`下断，运行

看到

![photo](https://icer233.github.io/assets/postimg/2024/08/20/13.png)

正好与我们的文件对应偏移16

![photo](https://icer233.github.io/assets/postimg/2024/08/20/14.png)

继续调试能看到 分组加密的形式

![photo](https://icer233.github.io/assets/postimg/2024/08/20/15.png)

同时能够找到前16字节

![photo](https://icer233.github.io/assets/postimg/2024/08/20/16.png)

正是作为iv进行异或

![photo](https://icer233.github.io/assets/postimg/2024/08/20/17.png)

## 柳暗花明

分析调用函数，最终能够确定其函数功能

![photo](https://icer233.github.io/assets/postimg/2024/08/20/18.png)

通过偏移`EF19`，能够确定AES轮数为13轮，对应为`AES 256`

偏移`B510`处的函数，能够得到`AESKey`

![photo](https://icer233.github.io/assets/postimg/2024/08/20/19.png)

## 落叶归根

解密得到明文脚本，授权主逻辑在Lisence.js中

授权逻辑如下图

![photo](https://icer233.github.io/assets/postimg/2024/08/20/20.png)

本地验证->获取用户特征->网络验证授权->返回密文->RSA公钥解密->设备指纹对比

破解的思路，不多做阐述。

修改完成后，只需要按相同格式加密并打包为app.asar即可实现补丁Patch

## 测试

总有一种人，喜欢享受“正版”激活的感觉。而我就是……

我采用 Patch+KeyGen

补丁去除网络授权，KeyGen用于本地验证，测试成功

![photo](https://icer233.github.io/assets/postimg/2024/08/20/21.png)

## 尾声

typora针对electron下的源码加固仍是一片空白。

简单思考后，传统代码混淆的方式对关键逻辑的保护依然有较大的提升空间，不失为一个恰当的加固方向。

期待typora会越做越好