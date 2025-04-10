---
date: 2024-09-08 03:29:57
layout: post
title: "【波动光学要点】光的衍射"
subtitle: "【2】快速掌握所有波动光学知识点!"
description: "【2】快速掌握所有波动光学知识点!"
image: https://icer233.github.io/assets/postimg/2024/09/08/3.png
optimized_image:
category: physics
tags:
  - "物理"
  - "比赛"
author: ggbond
paginate: false
math: true
---

## 光的衍射

### 1. 惠更斯-菲涅尔原理

波阵面上各点发出的次级子波在空间中叠加，叠加区域的各点的波的强度由这些子波的相干叠加决定。

### 2. 衍射的类型

按照光源，障碍物和接受屏三者之间的相对位置的不同，衍射可以分为两种类型，分别是**菲涅尔衍射**（近场衍射）和**夫琅禾费衍射**（远场衍射），在夫琅禾费衍射中，光源和接受屏与障碍物的距离无限远，因此对障碍物来说，光是平行光，这类衍射较为简单。

### 3. 单缝的夫琅禾费衍射

**菲涅尔半波带法**

单缝衍射的明暗纹分布的规律是根据菲涅尔半波带法得到的，简单说明如下：

![photo](https://icer233.github.io/assets/postimg/2024/09/08/1.png)

首先，光屏上的坐标点与经过单缝时的衍射角是一一对应的，这使得我们只需要分析特定的衍射角的光，即可得出对应的坐标点上的相干情况。

其次，找出最大光程差。对特定的衍射角的光来说，它们在经过单缝时，彼此之间存在一个最大光程差


$$
\overline{BC}=\overline{AB}\sin\theta
$$


上式中的 $\overline{AB}$ 常用 $a$ 表示，即 $a\sin\theta$ ，其中 $\theta$ 为衍射角。 



接着，将这个最大光程差 $\overline{BC}$ 按照 $\cfrac{\lambda}{2}$ 一份等分，从等分点作 $BC$ 的垂线将缝宽分成相应数目的带——我们称之为半波带。相邻的半波带里的光线从上到下一一对应，它们的光程差都是 $\cfrac{\lambda}{2}$ ，干涉相消。因此，如果半波带的个数是偶数个，则汇聚点 $P$ 点为暗纹；而如果是奇数，则 $P$ 点为明纹，若处于非整数，则处于明暗之间的过渡区域。

由此得到半波带法给出的**条纹分布规律**，即 


$$
a\sin\theta=\left\{\begin{aligned} \pm(2k+1)\cfrac{\lambda}{2}\ \ (k=1,2,...)明文 \\ \pm k\lambda\ \ (k=1,2,...)暗纹\\ \end{aligned}\right.
$$


**中央明纹的半角宽度：**中央明纹的半角宽度 $\theta_1$ 就是1级暗纹的衍射角，因此 $a\sin\theta_1=\lambda$ ，故中央明纹的半角宽度为（若角度很小则可取近似）


$$
\theta_1=\cfrac{\lambda}{a}
$$


因此得出中央明纹的线宽度为 


$$
\Delta x_0=2f\times\theta_1=2f\cfrac{\lambda}{a}
$$


其中 $f$ 为透镜的焦距。

**其他级条纹的角宽度和线宽度：**考察 $k$ 级和 $k+1$ 级，他们的衍射角分别满足（此处以暗纹为例） 


$$
\left\{\begin{aligned} a\sin\theta_k=k\lambda \\ a\sin\theta_{k+1}=(k+1)\lambda\\ \end{aligned}\right.
$$


当衍射角都比较小时，可以近似得到 


$$
\left\{\begin{aligned} \Delta\theta=\theta_{k+1}-\theta_k\approx\cfrac{\lambda}{a} \\ \Delta x=x_{k+1}-x_{k}\approx f\cfrac{\lambda}{a} \\ \end{aligned}\right.
$$


结论适用于除中央明纹之外的所有明、暗纹。

### 4. 圆孔的夫琅禾费衍射

**艾里斑：**圆孔衍射的中央亮斑，它的半角宽度，也就是第一级暗纹的衍射角是


$$
\sin\theta_1=1.22\cfrac{\lambda}{D}
$$


 其近似的半角宽度为 


$$
\theta_1\approx\sin\theta_1=1.22\cfrac{\lambda}{D}
$$


**瑞利判据：**当一个物点的艾里斑的中心刚好与另一个物点的艾里斑边缘（也就是衍射图样的第一级极小）重合时，这两个物点恰好能被该光学仪器所分辨。

**光学仪器的分辨本领：**当两个物点恰好能被光学仪器分辨时，它们的连线对仪器的中心的张角被称为最小分辨角 


$$
\delta\theta=1.22\cfrac{\lambda}{D}
$$


该角度的倒数被定义为该仪器的分辨本领 


$$
R=\cfrac{1}{\delta\theta}=\cfrac{D}{1.22\lambda}
$$


### 5. 光栅衍射

**光栅概念：**具有周期间隔的透光和不透光的结构，能够等间隔等宽的分割波阵面，称之为光栅。其透光的部分的宽度为 $a$ ，不透光的部分的宽度为 $b$ ，二者之和 $d=a+b$ 被称之为**光栅常数**。

![photo](https://icer233.github.io/assets/postimg/2024/09/08/2.png)

**光栅方程：**单缝衍射和多缝干涉综合作用的结果，即单缝衍射背景下的多光束干涉，主极大条纹的位置是由光栅方程 


$$
d\sin\theta=\pm k\lambda\ \ (k=0,1,2,...)
$$


决定。但也要受到单缝衍射条纹的调制作用。如下图所示，紫色代表纯粹多缝干涉的光强分布，蓝色代表单缝衍射的光强分布，红色为两种效应同时存在所导致的光栅衍射，主极大条纹的亮度不再均匀，且可能会缺级。

![photo](https://icer233.github.io/assets/postimg/2024/09/08/3.png)

**缺级公式：**当某一个主极大的衍射角与单缝衍射的某个暗纹的衍射角相等时，该主极大条纹将不出现，这就是所谓的缺级现象。即存在一个角度 $\theta$ 同时满足单缝衍射的暗纹公式 $a\sin\theta=k\lambda$ 和光栅方程 $d\sin\theta=k'\lambda$ ，故有 **光栅衍射图样的特点：**


$$
k'=\cfrac{a+b}{a}k\ \ (k=1,2,3,...)
$$


1. 条纹具有亮，细，稀疏的特点，衍射角不大的情况下，条纹等间距分布。
2. 两个相邻的主极大亮纹之间有 $N-1$ 个暗纹，有 $N-2$ 个次级亮纹。

### 6. X 射线衍射

**X射线：**一种波长很短的电磁波，由伦琴发现。

**布拉格公式：**给出X射线的衍射亮纹对应的衍射角满足的规律 


$$
\delta=2d\sin\theta=k\lambda\ \ (k=1,2,3,...)
$$


其中 $d$ 为晶格常数， $\theta$ 为衍射角。

## 原文

[光的干涉](https://mp.weixin.qq.com/s/8eYxiWVWlgHazM7sAWB0Ng)