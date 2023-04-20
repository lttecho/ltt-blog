---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 源代码面板
  order: 9
title: 使用断点暂停你的代码
order: 3
---
<h1>使用断点暂停您的代码</h1>

使用断点暂停您的代码。本指南解释了DevTools总可用的每种类型的断点，以及何时使用和如何设置每种断点。有关调试过程的实践教程，请参阅[在 Chrome DevTools 中调试 JavaScript](/devtools/debug-javascript)。



## 概述：每种断点的使用时机

最为熟知的断点类型是代码行断点。但是代码行断点的设置效率很低，尤其是当您不知道确切的查找位置，或者您正在使用大型代码库时。通过了解如何以及何时使用其他类型的断点，您可以在调试时节省时间。

| 断点类型           | 何时使用...            |
| ------------------ | ---------------------- |
| [代码行断点](#loc) | 在代码的确切区域暂停。 |
| 条件代码行断点     |                        |
|                    |                        |
|                    |                        |
|                    |                        |
|                    |                        |
|                    |                        |
|                    |                        |
|                    |                        |



## <span id="loc">代码行断点</span>

当您知道需要调试的确切代码区域时，使用代码行断点。DevTools 总是在执行这行代码之前暂停

要在 DevTools 中设置代码行断点：

`1` 打开**源代码**选项卡。

`2` 打开包含要设置断点的代码行的文件。

`3` 跳转到对应代码行。

`4` 代码行的左侧是行号。点击行号。一个蓝色图标出现在行号列的顶部。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/IcMBSM988092ZFocJ1LJ.png?auto=format&w=845)

这个例子展示了一个设置在第29行的代码行断点。



### 在代码中使用代码行断点

在代码中调用`debugger`来暂停代码行。这等同于[代码行断点](#loc)，只是断点是在您的代码中设置的，而不是在 DevTools UI 中设置的。

```js
console.log('a');
console.log('b');
debugger;
console.log('c');
```



### 条件代码行断点

当您想要在某些条件为真时暂停代码执行时，可以使用条件代码行断点。

当您想跳过一些无关的中断时，尤其是在循环中，此类断点很有用。

要设置条件代码行断点：

`1` 打开**源代码**选项卡。

`2` 打开包含要设置断点的代码行的文件。

`3` 跳转到对应代码行。

`4` 代码行的左侧是行号列。右键单击它。

`5` 选择**添加条件断点**。一个对话框显示在代码行下方。

`6` 在对话框中输入您的条件。

`7` 按下回车键激活断点。带有问号的橙色图标出现在行号列的顶部。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/W2xfoXd2E6y9k4xYfSjX.png?auto=format&w=845)

此示例显示了一个条件代码行断点，该断点仅在迭代` i=6 `的循环中` x `超过` 10` 时触发。



### 日志代码行断点

使用日志代码行断点 (logpoints) 将消息记录到控制台，而不会暂停执行，也不会因 console.log() 调用而使代码混乱。

要设置日志点：

`1` 打开**源代码**选项卡

`2` 打开包含要设置断点的代码行的文件。

`3` 跳转到对应代码行。

`4` 代码行的左侧是行号列。右键单击它。

`5` 选择**添加日志点**。一个对话框显示在代码行下方。

`6` 在对话框中输入您的日志消息。您可以使用与调用 [console.log(message)](https://developer.mozilla.org/docs/Web/API/Console/log) 相同的语法。

举个例子，您可以记录：

```js
"A string " + num, str.length > 1, str.toUpperCase(), obj
```

在这个例子中，应该记录的日志信息是：

```js
// str = "test"
// num = 3
// obj = {attr: "x"}
A string 42 true TEST {attr: 'x'}
```

`7` 按下回车键激活断点。带有两个点的粉红色图标出现在行号列的顶部。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/daHPau6iUXfqFJSZ61Lh.png?auto=format&w=845)

此示例在第 30 行显示了一个日志点，它将一个字符串和一个变量值记录到控制台。



### 编辑代码行断点

使用断点窗格禁用、编辑或删除代码行断点。



编辑断点组







## DOM变化断点



### DOM变化断点的类型



## XHR/fetch断点





## 事件监听断点



## 异常断点





## 函数断点





## 可信类型断点

