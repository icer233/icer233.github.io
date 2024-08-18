---
date: 2024-08-18 12:51:47
layout: post
title: "WeMod 本地 VIP 简单分析与实现（手动）"
subtitle: "免费的风灵月影打包"
description: "免费的风灵月影打包"
image: https://icer233.github.io/assets/postimg/2024/08/18/1.png
optimized_image:
category: code
tags:
  - "破解"
  - "逆向"
  - "游戏"
author: ggbond
paginate: false
---

## 原帖

[WeMod 本地 VIP 简单分析与实现（手动）](https://www.52pojie.cn/thread-1944352-1-1.html)

## 前言

既然写了手动，那肯定是可以自动实现破解的，可以但是没必要，甚至都可以不需要修改文件，

`WeMod` 官方提供了控制台的快捷键( `Ctrl`+`Shift`+`D` )

搜索`.headers.get("Content-Type")`，在唯一一处位置打开添加下图所示的条件断点，

```javascript
e.url.endsWith('/account')&&(e={_:e,url:e.url,headers:e.headers,json:async(a)=>(a=await e._.json(),a.subscription={startedAt:"2999"},a)}),false;
```

![2](https://icer233.github.io/assets/postimg/2024/08/18/2.png)

>有人就要问了，为什么图上的代码和上面代码块的代码不一样？
>答案肯定就是优化过了，更简洁，直接可以塞到 `asar` 文件中

然后只需要每次打开软件后，打开控制台即可实现破解。

全文结束，撒花 ✿✿ヽ(°▽°)ノ✿

等一下，这样写太短（水）了，

所以我下面要开始补充逆向思路，错误的经历，踩坑的过程，失败的辛酸，希望的曙光，短暂的喜悦，遇到的挫折，不懈的努力，到最后成功的狂喜。

再等一下，这样写又太长（水）了。

算了算了，写到哪里是哪里好了

## 初窥门径

打开软件，打开控制台(`Ctrl` + `Shift` + `D`)，随便找到一处需要会员订阅的地方，发现出现了一个`account`请求，打开看一下：

![3](https://icer233.github.io/assets/postimg/2024/08/18/3.png)

嗯？`"subscription": null`， 怼着脸上开大是吧，那肯就是这个了，从堆栈里追到请求的位置（看样子可能采用的`VUE`框架，用户代码大概率在`app-xxx.js`里

![4](https://icer233.github.io/assets/postimg/2024/08/18/4.png)

追到关键函数`getUserAccount`，就可以下断点然后调试了。

![5](https://icer233.github.io/assets/postimg/2024/08/18/5.png)

断点断下后，鼠标放到`fetch`上，点击`[[FunctionLocation]]`，跳转到函数定义位置，然后单步跟到如图所示位置

![6](https://icer233.github.io/assets/postimg/2024/08/18/6.png)

可见在上图 ③ 所示位置解析了返回的 `json` 数据并且返回。

## 偷梁换柱

下面分析`subscription`部分的结构（2024年7月19日补充）。

大概搜索一下哪里调用了`.subscription`

```javascript
accountChanged(e) {
    this.#u.user("subscription_tier", e.subscription ? "pro" : "free", S.Io);
    const t = this.#H();
    t !== this.#k && (this.#k = t,
    this.#u.user("tier", "free" === t ? "free" : "pro", S.ek),
    this.#u.user("plan_type", t, S.ek),
    this.#u.user("plan_flag", (0,
    y.Lt)(e.flags, 512) ? 1 : 0, S.ek))
}
```

第一处只有判断`subscription`是不是[真值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)，对于结构判定没有什么帮助。

我们先重写结果，将`subscription`设置成`{}`。

（然后一测试就成功了=_=，正常不是应该有个什么判断是否过期啊，或者什么吗）

于是我们可以得出前言部分所述的代码（可以上去翻一下）

但是到此可还不算完，因为我们还需要每次打开软件都打开控制台，看起来很蠢，其实特别蠢。

我们直接将这部分代码写入到 `js` 代码中即可。

## 混入其中

`electron`打包的exe，我们直接解包，然后修改，再打包即可。

等一下，怎么双击后没反应？

控制台打开看一下是不是报错了

![7](https://icer233.github.io/assets/postimg/2024/08/18/7.png)

好像是校验？直接搜一下`Integrity check failed for asar archive`。

好好好，根据[ASAR完整性](https://www.electronjs.org/zh/docs/latest/tutorial/asar-integrity)，在`electron>=30.0.0`版本中，会把校验信息放到[资源](https://learn.microsoft.com/en-us/windows/win32/menurc/resources)中。

简直哭死，他甚至还把新文件的sha256写出来。

那就简单了，直接打开`Hex`编辑器，在`exe`中搜`83725ca725c0f576ebb6ae248d54294ea5518e5a2bd9662e887055295042d767`，替换成新的`hash`（图上为`b6288a570c316cde4aa6dd78dcc31cb86c285f17a9fefb5d9da199ed711bf9cd`）

根据他文档的指引，搜索如下结构。

```json
[
  {
    "file": "resources\\app.asar",
    "alg": "sha256",
    "value": "9d1f61ea03c4bb62b4416387a521101b81151da0cfbe18c9f8c8b818c5cebfac"
  }
]
```

替换相关`hash`的值。

![8](https://icer233.github.io/assets/postimg/2024/08/18/8.png)

（就成功了）

## 一触即发

自动化脚本？

很简单只需要两步（还没写）：

1. 自动解包`app.asar`，修改后重新打包（甚至都不需要解包，直接追加到`app.asar`的相关位置，然后文件修改偏移和`hash`即可）
2. 修改相关校验（直接16进制编辑exe即可）

可能存在的更好的解决方案（待思考）

- 通过`dll-hook`的方式直接注入（通杀更新）（未尝试）
- 通过`Proxy`或者`PAC`什么的参数劫持掉域名（尝试了，未成功）

![9](https://icer233.github.io/assets/postimg/2024/08/18/9.png)

- 重写启动器（尝试了，未成功）

![10](https://icer233.github.io/assets/postimg/2024/08/18/10.png)
