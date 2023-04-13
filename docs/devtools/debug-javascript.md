---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 源代码面板
  order: 9
title: 调试JavaScript
order: 2
---
<h1>调试JavaScript</h1>

本教程教您在 DevTools 中调试任何 JavaScript 问题的基本工作流程。继续阅读或观看下面本教程的视频版本。

<iframe width="700" height="394" src="https://www.youtube.com/embed/H0XScE08hy8" title="Debugging JavaScript - Chrome DevTools 101" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## 第一步：重现错误

找到一系列可以持续重现错误的操作始终是调试的第一步。

`1` 在一个新标签页中[打开这个demo](https://googlechrome.github.io/devtools-samples/debug-js/get-started).

`2` 在**Number 1**文本框中输入`5`。

`3` 在**Number 2**文本框中输入`1`。

`4` 点击 **Add Number 1 and Number 2**。按钮下方的标签将会显示 5 + 1 = 51，但是正确结果应该是`6`。这就是您需要去修复的bug。

![img](https://wd.imgix.net/image/admin/dCZqJCgs1FHWJAeJ1Nub.png?auto=format&w=845)

在这个例子中，5 + 1 结果是51，它应该是6。



## 第二步：熟悉源代码面板的界面

DevTools 为不同的任务提供了许多不同的工具，例如更改 CSS、分析页面加载性能和监控网络请求。**源代码**面板则是调试 JavaScript 的地方。

`1` 使用Command+Option+I (Mac)或者Control+Shift+I (Windows, Linux)打开DevTools，打开的应该是**控制台**面板。

![img](https://wd.imgix.net/image/admin/JS6A41j5zLtT1J0xqjqL.png?auto=format&w=845)

`2`  点击**源代码**标签。

![img](https://wd.imgix.net/image/admin/1jeGIsUUPzcGzXOrPOTB.png?auto=format&w=845)

**源代码**面板的UI有3个部分：

![img](https://wd.imgix.net/image/admin/fgJB1mwfZsJ7Pv21hzSt.png?auto=format&w=845)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`1` **文件导航器**窗格。页面请求的每个文件都列在这里。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`2` **代码编辑器**窗格。在**文件导航器**窗格中选择一个文件后，该文件的内容将显示在此处。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`3` **JavaScript 调试**面板。用于检查页面 JavaScript 的各种工具。如果您的 DevTools 窗口很宽，则此窗格显示在代码编辑器窗格的右侧。



## 第三步：使用断点暂停代码

调试问题时常用方法是在代码中插入大量` console.log() `语句，以便在脚本执行时检查值。例如：

```js
function updateLabel() {
  var addend1 = getNumber1();
  console.log('addend1:', addend1);
  var addend2 = getNumber2();
  console.log('addend2:', addend2);
  var sum = addend1 + addend2;
  console.log('sum:', sum);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
```

`console.log()` 方法可以完成调试工作，但**断点**可以更快地完成。断点可让您在代码执行过程中暂停代码，并及时检查该时刻的所有值。与` console.log()` 方法相比，断点有几个优点：

- 使用`console.log()`，需要手动打开源代码，找到相关代码，插入`console.log()`语句，然后重新加载页面，才能在Console中看到消息。使用断点，您甚至可以在不知道代码结构的情况下暂停相关代码。
- 在您的 `console.log() `语句中，您需要明确指定要检查的每个值。通过断点，DevTools 会及时向您显示所有变量在该时刻的值。有时，有些变量会影响您的代码，您甚至都没有意识到。



## 第四步



## 第五步：



## 第六步：

### 方法一：





### 方法二：





### 方法三：







## 第七步：



## 下一步