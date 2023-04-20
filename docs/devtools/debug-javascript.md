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

- 使用`console.log()`，需要手动打开源代码，找到相关代码，插入`console.log()`语句，然后重新加载页面，才能在控制台中看到消息。使用断点，您甚至可以在不知道代码结构的情况下暂停相关代码。
- 在您的 `console.log() `语句中，您需要明确指定要检查的每个值。通过断点，DevTools 会及时向您显示所有变量在该时刻的值。有时，有些变量会影响您的代码，您甚至都没有意识到。

简而言之，断点可以帮助您比` console.log()` 方法更快地查找和修复错误。

如果您后退一步并考虑该应用程序的工作原理，您可以做出有根据的猜测，即在与**Add Number 1 and Number 2** 按钮相关联的点击事件侦听器中计算出不正确的总和 (`5 + 1 = 51`)。因此，您可能希望在点击侦听器执行时暂停代码。**事件监听断点**可以让您做到下面：

`1` 在**JavaScript调试**窗格中，点击**事件监听断点**展开该部分。DevTools 显示了一个可扩展事件类别列表，例如**动画**和**剪贴板**。

`2` 在**鼠标**事件类别旁边，点击**展开** ![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/aRiQWVlQJQz6Mbv1RMag.png?auto=format&w=14)。DevTools 显示鼠标事件列表，例如**单击**和**鼠标**按下。每个事件旁边都有一个复选框。

`3` 检查**点击**复选框。DevTools 现在设置为在执行任何`单击`事件侦听器时自动暂停。

![img](https://wd.imgix.net/image/admin/j7toLd0kyGNvBJtMhRHS.png?auto=format&w=845)

`4` 回到Demo，再次点击 **Add Number 1 and Number 2**按钮。DevTools 暂停执行并在 **源代码**面板中突出显示一行代码。

DevTools应该暂停在下面这行代码：

```js
function onClick() {
```

如果您的代码暂停的不是这一行，一直按**恢复脚本执行** ![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/lk63wTlzwXWuRIdSsKP4.png?auto=format&w=26)直到暂停在这一行。

> 注意：

**事件侦听器断点**只是 DevTools 中可用的多种断点类型之一。记住所有不同类型的断点是很值得的，因为每种类型最终都会帮助您尽快调试不同的场景。请参阅 [使用断点暂停您的代码](/devtools/breakpoints) 以了解何时以及如何使用每种类型。



## 第四步：逐步执行代码

造成bug的一个常见原因是脚本按照错误的顺序执行了。单步执行代码使您能够逐行执行代码，一次一行，并准确找出代码执行顺序与预期不同的位置。现在就试试：

`1` 在DevTools的**源代码**面板中，点击**进入下一个函数调用**![img](https://wd.imgix.net/image/admin/uQ1yacZ8AMGI0EFMxT05.png?auto=format&w=18)单步执行`onClick()`函数，一次一行。DevTools会在下面这行高亮：

```js
if (inputsAreEmpty()) {
```

`2` 点击**跳过下一个函数调用**![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/KMlE5HW4DU3PRgYEHny9.png?auto=format&w=36)。DevTools会执行`inputsAreEmpty()`而不进入它。请注意DevTools跳过了几行代码。这是因为`inputsAreEmpty()`的结果为false，所以`if`语句的代码块没有被执行。

这是单步调试代码的基本思路。如果您查看`get-started.js`中的代码，您会发现错误可能出在`updateLabel()`函数中。您也可以使用另一种类型的断点来暂停代码，使其更接近错误的可能位置，而不是单步执行每一行代码。



## 第五步：设置代码行断点

代码行断点是最常见的断点类型。当您有要暂停的特定代码行时，请使用代码行断点：

`1` 定位到`updateLabel()`种的最后一行代码：

```js
label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
```

`2` 在代码的左侧，您可以看到该特性代码行的行号，即`32`。单击`32`，DevTools 会在` 32` 的顶部放置了一个蓝色图标。这意味着在这一行有一个代码行断点。DevTools 现在总是在执行这行代码之前暂停。

`3` 点击**恢复脚本执行**![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/lk63wTlzwXWuRIdSsKP4.png?auto=format&w=26)。脚本继续执行到第 32 行。在第 29、30 和 31 行，DevTools 在它们的声明旁边显示了 addend1、addend2 和 sum inline 的值。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/dDtaoDZ2a8F7mFkhLp9U.png?auto=format&w=845)

在这个例子中，DevTools暂停在了32行代码上。



## 第六步：检查变量值

`addend1`、`addend2` 和 `sum` 的值看起来很可疑。它们用引号引起来，这意味着它们是字符串。这是解释错误原因的一个很好的假设。现在是收集更多信息的时候了。DevTools 提供了许多用于检查变量值的工具。

### 方法一：作用域窗格

当您暂停在某一行代码上时，**作用域**窗格会显示当前定义的局部变量和全局变量，以及每个变量的值。如果有闭包，还会显示闭包的值。双击一个变量的值可以编辑它。当您没有在代码行上暂停时，**作用域**窗格是空的。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/7Pjgz6fXsYWZB9GLjATQ.png?auto=format&w=845)



### 方法二：监视表达式

**监视表达式**选项卡可以让您随时间监控所有变量的值。顾名思义，监视表达式不局限于变量。您可以在监视表达式中存储任何有效的JavaScript表达式。现在就试试：

`1` 点击**监视**选项卡。

`2` 点击**添加表达式**![img](https://wd.imgix.net/image/admin/IYPLvXHyMtjVBILENOIL.png?auto=format&w=20)

`3` 输入`typeof sum`。

`4` 回车。DevTools会显示`typeof sum: "string"`。冒号右侧的值是您的监视表达式的结果。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/srnzLyxWyeSvCA2Bjqzt.png?auto=format&w=845)





### 方法三：控制台

除了查看`console.log()`消息外，您还可以使用控制台评估任意JavaScript语句。在调试方面，您可以使用控制台来测试潜在的错误修复。现在就试试：

`1` 如果您没有打开控制台抽屉，请按 Escape 将其打开。它会在您的 DevTools 窗口底部打开。

`2` 在控制台中，输入`parseInt(addend1) + parseInt(addend2)`。此语句有效，因为您暂停在 `addend1` 和 `addend2` 在范围内的代码行上。

`3` 回车。DevTools 评估该语句并打印出 6，这是您希望演示产生的结果。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/KrpBYhxN1iEfKul9qMUV.png?auto=format&w=845)

上面的屏幕截图显示了计算` parseInt(addend1) + parseInt(addend2) `后的控制台抽屉。



## 第七步：应用修复

您已找到该错误的修复方法。剩下的就是通过编辑代码并重新运行来尝试您的修复。您无需离开DevTools就可以尝试应用您的修复方法。您可以直接在 DevTools UI 中编辑 JavaScript 代码。现在就试试：

`1` 点击**恢复脚本执行**![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/lk63wTlzwXWuRIdSsKP4.png?auto=format&w=26)

`2` 在**代码编辑器**中，将第31行的`var sum = addend1 + addend2`替换为`var sum = parseInt(addend1) + parseInt(addend2)`。

`3` 按下Command + S (Mac)或者Control + S (Windows, Linux) 保存您的修改。

`4`  点击**取消断点**![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/WTW7ZmEWJsBaeMrmXRJn.png?auto=format&w=19)。它的颜色变为蓝色表示它处于活动状态。设置后，DevTools 会忽略您设置的任何断点。

`5` 尝试使用不同的值去运行。现在程序可以正确计算了。

```
警告
此工作流仅对浏览器中运行的代码应用修复。它不会为访问您页面的所有用户修复代码。为此，您需要修复服务器上的代码。但是，您可以在 DevTools 中编辑文件并使用 Workspaces 将它们保存到您的源中。
```

> 重要
>
> 从 Chrome 版本 105 开始，您可以实时编辑暂停的功能。



## 下一步

恭喜！您现在知道如何在调试 JavaScript 时充分利用 Chrome DevTools。您在本教程中学到的工具和方法可以为您节省无数时间。

本教程只向您展示了两种设置断点的方法。DevTools 提供了许多其他方式，包括：

- 条件断点仅在您提供的条件为真时触发。
- 捕获或未捕获异常的断点。
- 当请求的 URL 与您提供的子字符串匹配时触发的 XHR 断点。

请参阅使用断点暂停代码以了解何时以及如何使用每种类型。

本教程没有解释一些单步调试的方法。请参阅单步执行代码行以了解更多信息。