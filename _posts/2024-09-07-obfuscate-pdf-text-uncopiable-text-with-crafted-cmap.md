---
date: 2024-09-07 13:45:28
layout: post
title: "【指鹿为马】干扰PDF文本复制"
subtitle: "模糊处理 PDF 文本：使用构建的 CMap 对复制的文本进行加扰"
description: "模糊处理 PDF 文本：使用构建的 CMap 对复制的文本进行加扰"
image: https://icer233.github.io/assets/postimg/2024/09/07/1.png
optimized_image:
category: skills
tags:
  - "技巧"
author: icer233
paginate: false
---

## 前言

刷视频的时候看到了关于CMap映射的内容, 挺感兴趣的, 说不定可以做一些有趣的事, 就自己研究了一下

## 什么是 CMap

在嵌入字体的 PDF 文件中，这些字形存储在表格中，通常遵循源字体中的编码。考虑到减小文件大小，某些文件仅使用字体的子集。例如，要存储短语 ， 使用的字体，只需 T、H、E、C、A、S、O、N、M 就足够了。`THE CAT SAT ON THE MAT`

但并非每种情况，字形和码位都有 1 对 1 的关系。尤其是当连字开始发挥作用时。（是的，我知道 fl 有它自己的码位 ，但可以肯定的是，每当你想搜索 “fly” 或 “flight” 等单词时，你永远不会想输入它。此外，有时字形的位置并不像其码位那样位于正确的位置，而只是 0、1、2、...因此，为了精确识别每个字符形，我们需要一个 map 来链接字符形和它所代表的码位。

以下是 CMap 的一个示例：

```
/CIDInit /ProcSet findresource begin 12 dict begin begincmap /CIDSystemInfo <<
/Registry (F6+0) /Ordering (T1UV) /Supplement 0 >> def
/CMapName /F6+0 def
/CMapType 2 def
1 begincodespacerange <02> <b7> endcodespacerange
19 beginbfchar
<07> <03C0>
<09> <0061>
<0a> <006D>
<0b> <0070>
<1e> <02DA>
<20> <0020>
<22> <0022>
<3d> <003D>
<3f> <003F>
<59> <0059>
<5b> <005B>
<5d> <005D>
<5f> <005F>
<7d> <007D>
<84> <2014>
<85> <2013>
<90> <2019>
<b0> <00B0>
<b7> <00B7>
endbfchar
8 beginbfrange
<24> <25> <0024>
<27> <29> <0027>
<2b> <2e> <002B>
<30> <3b> <0030>
<41> <50> <0041>
<52> <57> <0052>
<61> <7b> <0061>
<8d> <8e> <201C>
endbfrange
6 beginbfrange
<02> <02> [<0066006C>]
<03> <03> [<00540068>]
<04> <04> [<00660069>]
<05> <05> [<00660074>]
<06> <06> [<00660066>]
<08> <08> [<006600660069>]
endbfrange
endcmap CMapName currentdict /CMap defineresource pop end end
```

CMap 中有 2 个主要部分，和 .它们中的每一个都以一个数字开头，表示它拥有的条目数。它开始`beginbfchar`, `beginbfrange`

### bfchar

这通常用于一对一的关系。第一个代码是字形 ID，第二个代码表示 Unicode 代码点。例如，表示字形 07 映射到码位 0035。`<07> <0035>`

### bfrange

这按顺序用于批量映射：将字形表中的范围映射到 Unicode 码位。例如：表示：`<31> <39> <00F2>`

- 映射 31 至 `00F2`
- 映射 32 至 `00F3`
- 映射 33 至 `00F4`
- …
- 映射 39 到 `00FA`

此外，还可以将字形分配给多个 Unicode 字符，这在处理连字时很有用。 表示将字形 02 映射到序列 （0066， 006c）。`bfrange``<02> <02> [<0066006C>]`

## 如何获取并更改CMap?

使用开源软件[QPDF](https://github.com/qpdf/qpdf)就可以了

执行命令:

```bash
qpdf --qdf --object-streams=disable document.pdf decompressed.pdf
```

使用二进制/十六进制编辑器打开`decompressed.pdf`, 比如记事本就可以

找到目标字体的CMap的Unicode码并更改

保存后使用命令:

```bash
qpdf --compress-streams=y decompressed.pdf output.pdf
```

重新压缩pdf

**举例**:

以下是一个我用Typora生成的PDF, 只有一个字"鹿"

1. 用第一条命令得到`decompressed.pdf`
2. 同过工具查到"鹿"和"马"的Unicode分别为`U+9E7F`和`U+9A6C`
3. 在PDF中搜索`<9E7F>`并将其替换为`<9A6C>`, 并保存
4. 用第二条命令重新压缩PDF
5. 成功了! 看起来是"鹿", 复制出来是"马"

## 一个不完善的程序

如果`QPDF`没有在电脑`PATH`里, 需要把`qpdf.exe`复制到程序根目录

```python
# -*- coding: utf-8 -*-
import os

# 检测输入
if not os.path.exists('./input.pdf'):
    print('请将PDF文件复制到根目录')
    exit()
    
# 解析pdf
os.system('qpdf --qdf --object-streams=disable input.pdf decompressed.txt')

def chinese_to_unicode(text):
    return ''.join([f'{ord(c):04x}' for c in text])


ori_text = input('请输入要替换的中文字符：')
rep_text = input('替换为：')

ori_uni = chinese_to_unicode(ori_text).upper()
rep_uni = chinese_to_unicode(rep_text).upper()

print('\n原文本：<'+ori_uni+'>'+'\n替换为：<'+rep_uni+'>')

print('\n请在decompressed.txt文件中手动完成替换并保存！')
os.system('pause')
os.system('qpdf --compress-streams=y decompressed.txt output.pdf')
os.system('del decompressed.txt')
```

程序的问题在于只能改一个字以及必须手动完成替换.

第一个问题很好解决, 第二个问题在于解密出来的PDF强制转为TXT并且使用普通的Python读写是不行的, 毕竟是强制转换, 解决方案是当作二进制文件读写, 但是这样一来替换起来有些麻烦, 就懒得写了, 有兴趣的读者可以写写看

## 后记

这虽然能一定程度上防止他人复制你的PDF内容, 但或许只能恶心一下别人罢了, 毕竟现在的OCR技术已经很成熟了

本文关于到底如何修改CMap的步骤不是很完善, 只是一个简单的替换, 网上关于这些的资料比较少, 有了解的可以分享一下更具体的方法

## 参考

[混淆 PDF 文本：使用精心制作的 CMap 对复制的文本进行加扰 — 1A23 Blog](https://blog.1a23.com/2017/08/29/obfuscate-pdf-text-uncopiable-text-with-crafted-cmap/)

[PDF转Word，技术壁垒有多厚？ #知识科普 #干货分享 - 抖音 (douyin.com)](https://www.douyin.com/video/7407742410786131263)

[QDF Mode — QPDF 11.9.1 documentation](https://qpdf.readthedocs.io/en/stable/qdf.html)
