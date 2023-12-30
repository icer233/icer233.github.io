---
date: 2023-12-29 10:58:16
layout: post
title: "深入剖析正则表达式：解密匹配之道"
subtitle: "探索正则世界的奥秘，从基础到高级应用一网打尽！"
description: "探索正则世界的奥秘，从基础到高级应用一网打尽！"
image: https://icer233.github.io/assets/postimg/regex/regex.jpg
optimized_image:
category: code
tags:
  - "代码"
author: icer233
paginate: false
---

# 1 关于正则表达式

## 1.1 正则表达式是什么？

正则表达式，又称规则表达式,（Regular Expression，在代码中常简写为regex、regexp或RE），是一种文本模式，包括普通字符（例如，a 到 z 之间的字母）和特殊字符（称为"元字符"），是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。
许多程序设计语言都支持利用正则表达式进行字符串操作。例如，在Perl中就内建了一个功能强大的正则表达式引擎。正则表达式这个概念最初是由Unix中的工具软件（例如sed和grep）普及开来的，后来在广泛运用于Scala 、PHP、C# 、Java、C++ 、Objective-c、Perl 、Swift、VBScript 、Javascript、Ruby 以及Python等等。正则表达式通常缩写成“regex”，单数有regexp、regex，复数有regexps、regexes、regexen。

正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。

## 1.2 正则表达式有什么用

1、模式匹配：正则表达式可以用来匹配符合特定模式的字符串，从而实现数据筛选、验证等操作。例如，可以使用正则表达式来匹配邮箱地址、手机号码等特定格式的字符串。

2、搜索和查找：正则表达式可以用来在文本或字符串中搜索和查找特定的模式。例如，在一个大型的文本文件中查找所有的电话号码或邮箱地址。

3、替换操作：正则表达式可以用来在文本或字符串中查找并替换符合特定模式的字符串。例如，将所有的数字替换为特定的文本，或者将所有的邮箱地址链接到对应的网站。

4、分割和分组：正则表达式可以用来将字符串按照特定的模式进行分割和分组，从而提取出需要的信息。例如，将一个HTML代码块中的所有链接提取出来。

5、验证输入：正则表达式可以用来验证用户输入的数据是否符合特定的格式或标准。例如，可以用来验证密码是否包含数字、字母和特殊字符，或者邮箱地址是否符合标准的格式。

6、数据提取：使用正则表达式可以从复杂的文本或字符串中提取出需要的信息。例如，从一段HTML代码中提取出所有的链接或特定标签的内容。

7、自动化脚本：在编写自动化脚本时，正则表达式可以用来处理文本和字符串，从而实现自动化处理。例如，在网页爬虫、日志分析、文件批量处理等场景中，可以使用正则表达式来解析和处理文本数据。

## 1.3 正则表达式的应用

1、Web开发：在Web开发中，正则表达式被广泛应用于表单验证、URL处理、数据提取等方面。例如，可以使用正则表达式来验证用户输入的邮箱地址是否符合规范格式。

2、服务器日志分析：服务器日志通常包含大量的信息，使用正则表达式可以方便地提取和分析日志数据中的关键信息。例如，可以用来查找特定格式的错误信息或访问记录。

3、文件处理：在文件处理中，正则表达式可以用来读取和分析文件内容，提取所需数据并进行相应的处理。例如，可以用来批量重命名文件或将文本文件中的特定数据提取出来。

4、数据清洗：在数据清洗中，正则表达式可以用来去除不需要的字符或格式化数据。例如，可以将数据中的逗号、空格等去除，或将日期格式化为标准的日期格式。

5、自动化脚本：在编写自动化脚本时，正则表达式可以用来处理文本和字符串，从而实现自动化处理。例如，在网页爬虫、日志分析、文件批量处理等场景中，可以使用正则表达式来解析和处理文本数据。

6、测试工具：在测试工具中，正则表达式可以用来匹配测试用例中的期望值和实际值是否匹配。例如，可以使用正则表达式来匹配一段文本中的某个特定模式是否出现。

7、数据库查询：在数据库查询中，可以使用正则表达式来进行模糊匹配和全文搜索等操作。例如，可以使用正则表达式来匹配某个字段中包含特定模式的记录。

# 2 正则表达式教程

## 2.1 练习和学习正则表达式网站

[RegExr: 学习、构建 和 测试 正则表达式 Test RegEx (regexr-cn.com)](https://regexr-cn.com/)



[编程胶囊-打造学习编程的最好系统 (codejiaonang.com)](https://www.codejiaonang.com/#/course/regex_chapter1/0/0)



[regex101: build, test, and debug regex](https://regex101.com/)



[正则表达式30分钟入门教程 (deerchao.cn)](https://deerchao.cn/tutorials/regex/regex.htm)



[Regular Expression Tutorial - Learn How to Use Regular Expressions (regular-expressions.info)](https://www.regular-expressions.info/tutorial.html)



https://codegen.[bqrdh.com/regexper](https://bqrdh.com/regexper)



## 2.2 正则表达式语法

### 2.2.1 限定符

#### 2.2.1.1 `?`

表示前面的字符可以出现0次或1次，即可有可无

如`used?`可以匹配`use`和`used`

#### 2.2.1.2 `*`

匹配0个或多个字符, 即`*`前面的字符可以出现0次或多次

如`ab*c`可以匹配`ac`, `abc`, `abbbbbc`

#### 2.2.1.3 `+`

匹配出现1次及以上的字符

如`ab+c`可以匹配`abc`, `abbbbbc`但不能匹配`ac`

#### 2.2.1.4 `{...}`

做更精确的匹配, 表示前面的字符出现的次数, 也可以表示次数的范围

如`ab{5}c`可以匹配`abbbbbc`, 但不能匹配`ac`, `abc`, `abbbbc`

如`ab{2,5}c`可以匹配`abbbbbc`, `abbbbc`但不能匹配`ac`, `abc` 只能匹配`b`出现的次数为2-6之间的

特别地, 如果省略这个`5`,

如`ab{2,}c`可以匹配`abbbbbc`, `abbbbc`但不能匹配`ac`, `abc` 只能匹配`b`出现的次数为2次以上的

#### 2.2.1.5 匹配多个字符

可以用`()`

如`(ab)+`可以匹配`ab`, `ababab`但不能匹配`aba`

### 2.2.2 运算符

#### 2.2.2.1 或`|`

如在这里我们要匹配`a cat`或者`a dog`

```
a cat
a dog
a bird
```

我们可以将表达式写成`a (cat|dog)`其中`()`不可省略, 否则是要么是`a cat`要么是`dog`

#### 2.2.2.2 字符类`[...]`

```
abc
tiger
aabbcc
dog
```

`[abc]+`可以匹配其中的`abc`和`aabbcc`

`[]`里的内容代表要求匹配的字符只能取自于它们

我们也可以在方括号中指定字符地范围, 如`[a-z]`, `[0-9]`, `[A-Z]`, `[a-zA-z]`, `[c-h4-8]`

#### 2.2.2.3 脱字符`^`

`^`表示要求匹配除了列出以外的字符

如`[^0-9]`表示所有非数字字符, 包括换行符

#### 2.2.2.4 元字符

| 表达式 |                   含义                   |
| :----: | :--------------------------------------: |
|  `\d`  |                 数字字符                 |
|  `\D`  |              所有非数字字符              |
|  `\w`  | 单词字符, 包括所有英文字符, 数字, 下划线 |
|  `\W`  |                非单词字符                |
|  `\s`  |        空白符, 包括制表符和换行符        |
|  `\S`  |                非空白字符                |
|  `.`   |          任意字符, 不包括换行符          |
|  `^`   |                 匹配行首                 |
|  `$`   |                 匹配行尾                 |

如在以下案例中

```
absorb
cat
dog
bat
tea
```

`^a`只会匹配行首地`a`, 即`absorb`中的`a`

### 2.2.3 高级概念

#### 2.2.3.1 懒惰与贪婪匹配

```html
<span><b>This is a sample text</b></span>
```

比如我要匹配其中的html标签`span`和`b`

我们自然会想到这样的正则表达式`<.+>`, 但这个正则表达式会把所有字符都匹配, 因为`.+`会匹配尽可能多的字符

解决方法是`<.+?>`, 这会将默认地贪婪匹配切换为懒惰匹配

## 2.3 案例

### 2.3.1 颜色值匹配

```
#00
#ffffff
#ffaaff
#00hh00
#aabbcc
#000000
#fffffff
```

`#[a-fA-F0-9]{6}\b`

`\b`表示单词边界

## 2.4 小结

以上就是正则表达式的基础语法, 更多详见[这里](https://www.codejiaonang.com/#/course/regex_chapter1/0/0)

## 2.5 不错的教程视频
<iframe src="//player.bilibili.com/player.html?aid=670394789&bvid=BV1da4y1p7iZ&cid=260601529&p=1&autoplay=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>


<iframe src="//player.bilibili.com/player.html?aid=625512607&bvid=BV19t4y1y7qP&cid=187302262&p=1&autoplay=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>