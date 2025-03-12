---
date: 2025-03-12 14:23:26
layout: post
title: "【原创趣题】流血的高坤"
subtitle:
description:
image: https://icer233.github.io/assets/postimg/2025/03/12/1.png
optimized_image:
category: physics
tags:
  - "物理"
author: icer233
paginate: false
math: true
---

# 流血的高坤

从前有一个圆胖的小人, 他的名字叫高坤, 他的质量为 $M_0$ , 其中血液的质量为 $m_0$ , 满足 $m_0<M_0$ . 这天, 高坤不小心从一个受伤了, 开始不断流血, 单位时间内流出的血质量为 $k$ , 是一个定值. 现在他由静止从斜坡滑下, 他什么时候会流完血并且噶掉? 为了简化这个问题, 我们建立一个模型. $t=0$ 时一个质量为 $M_0$ 小物块从倾角为 $\theta$ 的固定斜面由静止滑下的同时流血并且血会留在斜面上原地. 小物块与斜面的摩擦系数为 $\mu$ , 重力加速度为 $g$ . 若斜面足够高, 那么他血恰巧流光时的位置在哪里?

![](https://icer233.github.io/assets/postimg/2025/03/12/1.png)













**解答** 

由密舍尔斯基方程
$$
M\dfrac{\text{d}v}{\text{d}t}=F-v\dfrac{\text{d}M}{\text{d}t}\tag{1}
$$
将
$$
M=M_0-kt,\ \dfrac{\text{d}M}{\text{d}t}=-k,\ F=Mg(\sin\theta-\mu\cos\theta)
$$
代入得
$$
(M_0-kt)\dfrac{\text{d}v}{\text{d}t}=kv+(M_0-kt)g(\sin\theta-\mu\cos\theta)\tag2
$$
又有
$$
\dfrac{\text{d}v}{\text{d}t}=\dfrac{\text{d}v}{\text{d}M}\dfrac{\text{d}M}{\text{d}t}=-k\dfrac{\text{d}v}{\text{d}M}
$$
故
$$
-kM\dfrac{\text{d}v}{\text{d}M}=kv+Mg(\sin\theta-\mu\cos\theta)\tag3
$$
记
$$
A=g(\sin\theta-\mu\cos\theta)
$$
从而
$$
(kv+AM)\text{d}M+kM\text{d}v=0
$$
改写一下方程
$$
k\text{d}(Mv)+AM\text{d}M=0
$$
这是一个全微分方程, 代入初始条件 $M=M_0$ , $v=0$ , 从而
$$
kMv+\dfrac12AM^2=\dfrac12M_0^2
$$
计算得
$$
v=\dfrac{A}{2k}\cdot\dfrac{M_0^2-M^2}{M}
$$
代入化简得
$$
v=\dfrac{A}{2}\cdot\dfrac{2M_0-kt}{M_0-kt}t\tag6
$$
又有
$$
v=\dfrac{\text{d}x}{\text{d}t}
$$
代入 $(6)$ 得
$$
\text{d}x=\dfrac{A}{2}\cdot\dfrac{2M_0-kt}{M_0-kt}t\text{d}t\tag7
$$
两边积分
$$
x(t)=\dfrac{A}{2}\int^t_0\dfrac{2M_0-kt}{M_0-kt}t\text{d}t
$$
得到
$$
x(t)=\dfrac{g(\sin\theta - \mu\cos\theta)}{4k^2} \left[ k^2 t^2 - 2k M_0 t + 2M_0^2 \ln\left(\frac{M_0}{M_0 - kt}\right) \right]\tag8
$$
接下来, 对这个式子进行一下讨论

$1\degree$ 若 $\mu \gt \tan\theta$ , 则小物块根本不会滑动
$$
\boxed{x_f=0}\tag9
$$
$2\degree$ 若 $\mu\leq\tan\theta$ , 小物块可以滑动

小物块停止滑动时, 有
$$
t^*=\dfrac{m_0}{k}\tag{10}
$$
则小物块停在
$$
\boxed{x_f=x(t^*)=\dfrac{g(\sin\theta-\mu\cos\theta)}{4k^2} \left[ m_0^2 - 2M_0 m_0 + 2M_0^2 \ln\left(\frac{M_0}{M_0 - m_0}\right) \right]}\tag{11}
$$
