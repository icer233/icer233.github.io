---
layout: page
menu: false
date: '2024-01-05 11:45:14'
title: "数学工具"
description: "数学工具"
permalink: /Math-Tools/
---

# 数学工具
<b>1.导数计算</b>

<form name="form1" action="https://zh.numberempire.com/derivativecalculator.php" method="post">
函数输入框:<br>
<input name="function" size="80" maxlength="300" type="text"><br>
自变量: <input name="var" size="3" maxlength="3" value="x" type="text">
阶数: <select name="order">
<option value="0">0</option>
<option value="1" selected="selected">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>
<b>2.不定积分计算器</b>

<form name="form1" action="https://zh.numberempire.com/integralcalculator.php" method="post">
请输入你需要积分的函数表达式:<br>
<input name="function" size="80" maxlength="160" value="" type="text"><br>
自变量:<input name="var" size="3" maxlength="3" value="x" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>3.定积分计算器</b>

<form name="form1" action="https://zh.numberempire.com/definiteintegralcalculator.php" method="post">
请输入你需要积分的函数表达式:<br>
<input name="function" size="80" maxlength="160" value="" type="text"><br>
自变量: <input name="var" size="3" maxlength="3" value="x" type="text">
从: <input name="a" size="12" maxlength="12" value="0" type="text">
到: <input name="b" size="12" maxlength="12" value="1" type="text">
<input size="40" name="answers" value="" type="hidden">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>4.极限计算器</b>

<form name="form1" action="https://zh.numberempire.com/limitcalculator.php" method="post">
请输入一个函数并计算极限:
<input name="function" size="80" maxlength="160" value="" type="text"><br>
极限变量: <input name="var" size="3" maxlength="3" value="x" type="text">
展开: <input name="val" size="12" maxlength="12" value="0" type="text">
<input size="40" name="answers" value="" type="hidden">
极限类型 <select name="limit_type">
<option value="two-sided">双侧极限</option>
<option value="plus">右侧极限</option>
<option value="minus">左侧极限</option>
</select>
<input name="return" value="1" type="hidden">
<input value="计算" type="submit">
</form>

<b>5.分数计算器</b>

<form name="form1" action="https://zh.numberempire.com/fractionscalculator.php" method="post">
输入一个分数表达式:<br>
<input name="function" size="80" maxlength="160" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>
<b>6.方程求解</b>

<form name="form1" action="https://zh.numberempire.com/equationsolver.php" method="post">
输入一个或多个方程（用英文逗号分隔,变量同理）:<br>
<input name="function" size="80" maxlength="160" value="" type="text"><br>
<input name="var" size="10" maxlength="10" value="x" type="text">
<input size="40" name="answers" value="" type="hidden">
<input value="求解" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>7.表达式化简</b>

<form name="form1" action="https://zh.numberempire.com/simplifyexpression.php" method="post">
输入一个表达式来简化:<br>
<input name="function" size="80" maxlength="300" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>8.因式分解工具</b>

<form name="form1" action="https://zh.numberempire.com/factoringcalculator.php" method="post">
请输入您需要因式分解的表达式:<br>
<input name="function" size="80" maxlength="300" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>9.反函数计算器</b>

<form name="form1" action="https://zh.numberempire.com/inversefunctioncalculator.php" method="post">
输入函数来计算其反函数:<br>
<input name="function" size="80" maxlength="160" value="" type="text"><br>
<input name="var" size="10" maxlength="10" value="x" type="text">
<input size="40" name="answers" value="" type="hidden">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>10.表达式计算器</b>

<form name="form1" action="https://zh.numberempire.com/expressioncalculator.php" method="post">
输入要计算的表达式:<br>
<input name="function" size="80" maxlength="300" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>
<b>11.矩阵计算器</b>

<form name="form1" action="https://zh.numberempire.com/matrixcalculator.php" method="post">
输入矩阵 A:<br>
<textarea type="text" name="matrix1" cols="60" rows="20"></textarea>
<table>
<tbody><tr><td>
<input name="determinant" checked="checked" type="checkbox"> 矩阵的行列式
</td><td>
<input name="transpose" checked="checked" type="checkbox"> 转置矩阵
</td></tr><tr><td>
<input name="trace" checked="checked" type="checkbox"> 矩阵迹
</td><td>
<input name="rank" checked="checked" type="checkbox"> 矩阵的秩
</td></tr><tr><td>
<input name="inverse" type="checkbox"> 逆矩阵
</td><td>
<input name="eigenvalues" type="checkbox"> 特征值
</td></tr><tr><td>
<input name="triangularize" type="checkbox"> 上三角矩阵
</td><td>
<input name="square" type="checkbox"> A<sup>2</sup>
</td></tr></tbody></table>
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>12.矩阵运算</b>

<form name="form1" action="https://zh.numberempire.com/matrixbinarycalculator.php" method="post">
<table><tbody><tr class="center"><td>输入矩阵 A:</td><td>输入矩阵 B:</td></tr>
<tr><td><textarea type="text" name="matrix1" cols="60" rows="20"></textarea></td>
<td><textarea type="text" name="matrix2" cols="60" rows="20"></textarea></td></tr></tbody></table>
<br>
<table><tbody><tr><td>
<input name="add" checked="checked" type="checkbox">加法
</td><td>
<input name="sub" checked="checked" type="checkbox">减法
</td><td>
<input name="mult" checked="checked" type="checkbox">乘法
</td></tr>
</tbody></table>
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>13.质数发生器和校验器</b>

<form name="form1" action="https://zh.numberempire.com/primenumbers.php" method="post">
输入一个自然数，并选择相应的功能:<br>
<input name="number" size="80" maxlength="128" value="" type="text"><br>
<select name="action">
<option value="check" selected="selected">检验是否为质数
</option><option value="next">下一个质数
</option><option value="prev">上一个质数
</option></select>
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>14.整数分解工具</b>

<form name="form1" action="https://zh.numberempire.com/numberfactorizer.php" method="post">
输入需要分解的整数:<br>
<input name="number" size="80" maxlength="60" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>15.斐波那契数计算器</b>

<form name="form1" action="https://zh.numberempire.com/fibonaccinumbers.php" method="post">
请输入一个非负整数:<br>
<input name="number" size="40" maxlength="10" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>16.伯努利数生成器</b>

<form name="form1" action="https://zh.numberempire.com/bernoullinumbers.php" method="post">
请输入一个非负整数:<br>
<input name="number" size="40" maxlength="10" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>17.欧拉数计算工具</b>

<form name="form1" action="https://zh.numberempire.com/eulernumbers.php" method="post">
请输入一个非负整数:<br>
<input name="number" size="40" maxlength="10" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>18.阶乘计算器</b>

<form name="form1" action="https://zh.numberempire.com/factorialcalculator.php" method="post">
请输入一个非负整数:<br>
<input name="number" size="40" maxlength="10" value="" type="text">
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>19.组合数计算器</b>

<form action="https://zh.numberempire.com/combinatorialcalculator.php" method="post">
组合数计算方法，从N项中选出M项.
<table><tbody><tr><td class="right">
是否具有顺序?
</td><td>
<select name="ordered">
<option value="true">是</option>
<option value="false" selected="selected">否</option>
</select>
</td></tr>
<tr><td class="right">
元素是否可以多次选择?
</td><td>
<select name="repeated">
<option value="ture">是</option>
<option value="false" selected="selected">否</option>
</select>
</td></tr><tr><td class="right">N = </td><td><input name="n" size="8" type="text"></td></tr>
<tr><td class="right">M =</td><td><input name="m" size="8" type="text"></td></tr>
</tbody></table>
<input value="计算"  type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>20.统计计算器</b>

<form name="form1" action="https://zh.numberempire.com/statisticscalculator.php" method="post">
输入一些数字，用空格、逗号或另起一行隔开:<br>
<textarea type="text" name="series" cols="60" rows="20"></textarea>
<br><table>
<tbody><tr><td><input name="mean" checked="checked" type="checkbox">平均数</td>
<td><input name="median" type="checkbox">中位数</td>
<td><input name="harmonic_mean" type="checkbox">调和平均数</td></tr>
<tr><td><input name="geometric_mean" type="checkbox">几何平均数</td>
<td><input name="min" type="checkbox">最小</td>
<td><input name="max" type="checkbox">最大</td></tr>
<tr><td><input name="range" type="checkbox">范围</td>
<td><input name="var" checked="checked" type="checkbox">方差</td>
<td><input name="var1" type="checkbox">更正方差</td></tr>
<tr><td><input name="std" type="checkbox">标准偏差</td>
<td><input name="std1" type="checkbox">更正的标准差</td>
<td><input name="relstd" type="checkbox">变异系数</td></tr>
<tr><td><input name="mean_dev" type="checkbox">平均偏差</td>
<td><input name="median_dev" type="checkbox">中位数偏差</td>
<td><input name="skewness" checked="checked" type="checkbox">偏度</td></tr>
</tbody></table>
<input value="计算" type="submit">
<input name="return" value="1" type="hidden">
</form>

<b>21.函数图像绘制工具</b>
函数输入框:<br>

<form name="form1" action="https://zh.numberempire.com/graphingcalculator.php" method="get">
<input id="functions" name="functions" value="log(x),sqrt(x),x,x^2" class="full_width" type="text"><br>
X 坐标, 从: <input id="xmin" name="xmin" value="0" size="10" type="text">
到: <input id="xmax" name="xmax" value="3" size="10" type="text"><br>
Y 坐标, 从: <input id="ymin" name="ymin" value="-1" size="10" type="text">
到: <input id="ymax" name="ymax" value="1" size="10" type="text"><br>
<input value="绘制图像" type="submit">
<input name="return" value="1" type="hidden">
</form>