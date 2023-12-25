---
date: 2023-12-25 13:25:39
layout: post
title: "What is electromotive force, exactly?"
subtitle: "Maybe useful for you to understand something"
description: "Maybe useful for you to understand something"
image: https://icer233.github.io/assets/postimg/what-is-electromotive-force-exactly/cover.jpg
optimized_image:
category: physics
tags:
  - "物理"
author: yve
paginate: false
math: true
---

## Introduction

Maybe for some of you, electromotive force is a relatively vague concept when you study Physics, especially electronics. Is it the same as voltage? Is it related with electric potential? Is it ...? I am writing this to answer your questions and supplement the obscure (maybe?) textbooks.

## Definition

Let's have the definition in the textbooks here, and later I'll make an explanation.

From Wikipedia: Electromotive force is an energy transfer to an electric circuit per unit of electric charge, measured in volts.

Well, that seems a little complicated. Let's start from the name itself.

## Explanation

'Electromotive force'. There're six letters 'motive', so the name suggests that electromotive force is something that make the carriers in the circuit move in a certain direction. Well, precisely that's not electromotive force, but our good old friend voltage. Just like a river flowing down a mountain, the 'voltage' here is the difference of height, which makes water move forward. The 'electromotive force' here is the work that gravity does to make the river flow down.

Therefore, it leads to the mathematical expression of electromotive force (if you don't like maths just skip it, it doesn't affect your comprehension).


$$
E=\cfrac{W}{Q}
$$


And there's another problem, electric potential. Actually the difference of electric potential is voltage, which means electric potential is the altitude of some water is at back to our example of the flowing river. 

When the current flows through electrical appliances or any conductor whose resistance is not zero, it consumes the voltage that the power supply gives to it, in our example it acts out as the altitude of some amount of water declines. If the river wants to climb a hill, than it needs another power supply to raise its altitude, which is to raise its electric potential in reality.

If you have fully understood what happened there, then we can have another definition of electromotive force: The work done by the non-electrostatic force when the unit positive charge in the power supply is transferred from the negative pole to the positive pole through the interior of the power supply, and the expression is:


$$
E=\int_{-}^{+}\vec{E_k}\cdot d\vec{l}
$$


Here $\vec{E_k}$ is the 'non-electrostatic force' above.

## Ending

Here is the end and I hope you have fully understood the concepts like electromotive force, voltage and electric potential. Next week I will release a passage introducing how to calculate the resistance of complicated circuits using some ideas in today's passage.
