---
date: 2024-08-25 06:45:28
layout: post
title: "题选两题另解"
subtitle: "A bit odd but interesting solutions"
description: "A bit odd but interesting solutions"
image: https://icer233.github.io/assets/postimg/2024/08/25/2-1.png
optimized_image:
category: physics
tags:
  - "物理"
  - "比赛"
author: yve
paginate: false
math: true
---

## 题1
### 舒幼生《奥赛物理题选》Page 377 几何光学【题7】

光纤的折射率如果沿径向 $r$ 逐渐减小，并以轴线作对称分布，折射率分布函数为



$$
n^2(r)=n_0^2(1-\alpha^2r^2)
$$



其中 $n_0$ 为轴上 $r=0$ 处的折射率，$\alpha$ 是比 $1$ 小得多的正数，试推导光线方程，并求光线的轨迹，说明这种光纤有自聚焦作用.

解：

设光线从原点以与 $x$ 轴夹角 $\phi_0$ 射出. 

某点切线与 $x$ 轴夹角为 $\phi$ . 则由折射定律，有：



$$
n_0\sin(90°-\phi_0)=n(r)\sin(90°-\phi)
$$



将 $n(r)$ 的表达式代入，得到：



$$
\cos\phi=\cfrac{\cos\phi_0}{\sqrt{1-\alpha^2r^2}}
$$



于是，求出图像的斜率即 $\tan\phi$ :



$$
\tan\phi=\cfrac{\textrm{d}r}{\textrm{d}x}=\cfrac{\sqrt{\sin^2\phi_0-\alpha^2r^2}}{\cos\phi_0}
$$



分离变量，两侧积分 :



$$
\int_0^r\cfrac{\textrm{d}r}{\sqrt{\sin^2\phi_0-\alpha^2r^2}}=\int_0^x\cfrac{\textrm{d}x}{\cos\phi_0}
$$



$$
\cfrac{1}{\alpha}\left[\arcsin\cfrac{\alpha r}{\sin\phi_0}\right]_0^r=\cfrac{x}{\cos\phi_0}
$$

得到：



$$
r=\cfrac{\sin\phi_0}{\alpha}\sin\cfrac{\alpha x}{\cos\phi_0}
$$



这图象和 $x$ 轴的交点即为 $x=\cfrac{n}{\alpha}\pi \cos\phi_0$ .

在 $\phi_0\rightarrow0$  时，自聚焦点 $x=\cfrac{n}{\alpha}\pi.\   \  (n=1,2,3······)$

这就求出了光线方程以及说明了自聚焦现象.

## 题2
### 舒幼生《奥赛物理题选》Page 379 几何光学【题8】(a)

海洋中声波传播速度随深度、温度和含盐量而变化. 声速最小值出现在海洋表面和海洋底部中间的位置，将这一深度设为 $z=0$ . 

而 $z=z_s\ (\textrm{surface})$ 和 $z=-z_b\ (\textrm{bottom})$ 分别对应海面和海底. 于是，设声速 $C$ 可表述为 :


$$
C =
    \begin{cases}
      z>0 & C_0+bz\\
      z=0 & C_0\\
      z<0 & C_0-bz
    \end{cases}
$$


设在原点 $x=0,z=0$ 处放置一声源 $S$，从 $S$ 发出的声波可用由原点引出的初始角为 $\theta_0$ 的波射线描述. 因声速变化，波射线折射，从而引起方位角 $\theta$ 的变化.

$(\text{a})$ 试证从 $S$ 出发并限制在 $zx$ 平面内的一段波射线初始轨迹是半径为 $R$ 的圆弧. 
且
$$
R=\cfrac{C_0}{b\sin\theta_0},取\ 0\leqslant \theta_0<\cfrac{\pi
}{2}
$$
解：

定义“类折射率” 


$$
\xi=\cfrac{C_0}{C}=\cfrac{C_0}{C_0+bz}
$$


于是，


$$
\xi_0\sin\theta_0=\xi_z\sin\theta.
$$


从而，


$$
\sin\theta=\sin\theta_0(1+\cfrac{bz}{C_0})
$$


考虑平面直角坐标系内一个圆心在第四象限且过原点的圆 :
	

![graph](https://icer233.github.io/assets/postimg/2024/08/25/2-1.png)



在图中，可以发现：


$$
\angle AOB=2\theta_0\ \ \angle COD=2\theta
$$


于是，


$$
\cfrac{\sin\theta}{\sin\theta_0}=\cfrac{R\sin\theta_0+z}{R\sin\theta_0}=1+\cfrac{z}{R\sin\theta_0}
$$


这与先前推导出来的 $\theta_0$ 与 $\theta$ 的关系具有相同的数学形式，于是可以得到：


$$
\cfrac{bz}{C_0}=\cfrac{z}{R\sin\theta_0}
$$


化简，于是有 $R=\cfrac{C_0}{b\sin\theta_0}$ 证毕.

评注：此方法采用代入要证的图像，而后验证. 运算上较直接推导更为简单，但是仅限于证明题可用，若要推导，还是应采用解微分方程的方法.
