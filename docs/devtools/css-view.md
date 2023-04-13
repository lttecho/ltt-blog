---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 元素面板
  order: 7
title: 查看和更改CSS
order: 4
---

<h1>查看和更改CSS</h1>

完成这些交互式教程，了解使用 Chrome DevTools 查看和更改页面 CSS 的基础知识。



## 查看一个元素的CSS样式

`1` 右键点击下面的文字框`Inspect me!`并选择**检查**，**元素**面板会被打开。

<p class="aloha" data-message="wackadoo!">Inspect me!</p>
<style>
.aloha {
    border: 1px dashed red;
    display: inline-block;
    padding: 1em;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>

`2`  可以看到`Inspect me!`在DOM树中是蓝色高亮的。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/q2kmu1Pzg7oS9osr2PbU.png?auto=format&w=845)

`3` 在DOM树中，找到`Inspect me!`元素的`data-message`属性。

`4` 在下面的文字框中输入该属性的值。

<div class="devtools-css-check"><input required="" pattern="wackadoo!"> <span></span></div>
<style>
.devtools-css-check input {
    color: #00f;
}
.devtools-css-check input:invalid {
    background: #c00;
    color: #fff;
}
.devtools-css-check input:not(:invalid)+span::after {
    content: "Correct!";
    padding-left: 0.5ch;
}
</style>

`5` 在**元素** > **样式**窗格中，找到`aloha`类的规则。**样式**窗格列出了应用于当前在 DOM 树中选择的任何元素的 CSS 规则，当前应该仍然展示的是`Inspect me!`元素的样式。

`6` `aloha`类声明了`padding`的值。在下面的文本框中输入此值及其单位（不带空格）。

<div class="devtools-css-check"><input required="" pattern="1em"> <span></span></div>
<style>
.devtools-css-check input {
    color: #00f;
}
.devtools-css-check input:not(:invalid)+span::after {
    content: "Correct!";
    padding-left: 0.5ch;
}
</style>

如果您想将 DevTools 窗口停靠在视口的右侧，就像第一步中的屏幕截图一样，可以查看**更改 DevTools 位置**。



## 向一个元素添加CSS声明

当您想对一个元素修改或者添加CSS声明语句时可以使用**样式**窗格。

`1`  右键点击下面的文字`Add a background color to me!`并选择**检查**。

<p class="aloha">Add a background color to me!</p>
<style>
.aloha {
    border: 1px dashed red;
    display: inline-block;
    padding: 1em;
}
</style>

`2` 点击**样式**窗格顶部附近的`element.style`。

`3` 输入`background-color`并回车。

`4` 输入`honeydew`并回车。在DOM树中，您可以看到内联样式声明已应用于该元素。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/XjtBwPAxcmTa2ySqhkbw.png?auto=format&w=845)



## 向一个元素添加CSS类

使用**样式**窗格可以查看当一个CSS类被应用或者被删除时，该元素的显示效果。

`1`  右键点击下面的`Add a class to me!`并选择**检查**。

<p class="aloha">Add a class to me!</p>
<div class="color_me" hidden=""></div>
<style>
.color_me {
    animation: rainbow 10s linear infinite;
    background: #ff0;
}
.aloha {
    border: 1px dashed red;
    display: inline-block;
    padding: 1em;
}
</style>

`2` 点击**样式**窗格顶部工具栏中的**.cls**。DevTools 会显示一个文本框，您可以在其中向所选元素添加类。

`3` 在**添加新类**文本框中输入`color_me`。添加新类文本框下方会出现一个复选框，您可以在其中打开和关闭该类。如果`Add a class to me!`元素应用了其他任何类，您也可以在这里切换它们。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/b6nNzrHO2bnFlyCMiSYK.png?auto=format&w=845)



## 向一个CSS类添加伪状态（伪类）

使用**样式**窗格将一个CSS伪状态永久应用于一个元素。DevTools 支持 `:active`、`:focus`、`:hover`、`:visited` 等。

`1` 将鼠标悬停在下面的`Hover over me!`，背景颜色会发生变化。

<p class="aloha hover">Hover over me!</p>
<style>
.aloha {
    border: 1px dashed red;
    display: inline-block;
    padding: 1em;
}
.aloha.hover:hover {
    background: #6393f0;
}
</style>

`2` 右键点击`Hover over me!`并选择**检查**。

`3` 在**样式**窗格中，点击`:hov`。

`4` 勾选**:hover**选择框，即使您实际上并未将鼠标悬停在该元素上，背景颜色也会像之前一直改变。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/Tpu0KZakPrbC89KoYNBs.png?auto=format&w=845)



## 更改一个元素的尺寸

使用**样式**窗格中的**盒模型**交互图更改元素的width、height、padding、margin或者border宽度。

`1`  右键点击下面的`Change my margin!`元素并选择**检查**。

<p class="aloha">Change my margin!</p>
<style>
.aloha {
    border: 1px dashed red;
    display: inline-block;
    padding: 1em;
}
</style>

`2 `要查看**盒子模型**，请单击**样式**窗格的操作栏中的![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/ARurwNZrSDIYQwsVPuUC.png?auto=format&w=22)**显示侧边栏**按钮。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/NmA9uvEiL4FomR0uR0Iv.png?auto=format&w=845)

`3` 在**样式**窗格中的**盒子模型**图表中，将鼠标悬停在padding上。元素的padding就会在视口中高亮显示。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/KD7ACAlsDcmOnfVjCOaT.png?auto=format&w=845)

`4` 双击**盒子模型**中的左margin。该元素当前没有margin，所以**left-margin**的值是 **-**。

`5` 输入`100`并回车。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/TT6rajB5zknYMXXjg9gu.png?auto=format&w=845)

**盒子模型**中的长度单位默认为像素（pixels），但是也接受其他单位，比如`25%`或者`10vw`。



>重要：
>
>另外，在**样式**窗格的规则声明中，您可以使用指针改变长度属性及其单位。