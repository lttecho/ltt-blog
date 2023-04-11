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

`5` 在**元素** > **样式**窗格中，找到`aloha`类的规则。

`6`







## 向一个元素添加CSS声明



## 像一个元素添加CSS类





## 向一个CSS类添加伪状态





## 更改一个元素的尺寸

