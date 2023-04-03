---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 命令和快捷方式
  order: 4
title: 在命令菜单中运行命令
order: 1
---

<h1>在命令菜单中运行命令</h1>

<iframe width="700" height="394" src="https://www.youtube.com/embed/xHusjrb_34A" title="Faster DevTools navigation with shortcuts and settings | DevTools Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

命令菜单提供了一种快速浏览 Chrome DevTools UI 和完成常见任务（例如禁用 JavaScript）的方法。您可能熟悉 Visual Studio Code 中称为命令面板的类似功能，它是命令菜单的最初灵感。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/31z4kKSuDRYiAhU3P4Ek.png?auto=format&w=845)

## 打开命令菜单

<p id="001">打开命令菜单：</p>

- 键入 Control+Shift+P (Windows / Linux) 或者 Command+Shift+P (Mac)。
- 点击 ![Customize and control DevTools.](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/9gzXiTYY0nZzBxGI6KrV.svg) 自定义和控制DevTools，然后选择**运行命令**。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/w028xC4ctg5PFvNOww2o.png?auto=format&w=845)

## 打开文件

如果您使用[打开命令菜单](#001)中概述的工作流程，则命令菜单会在文本框中被打开并且会前置一个**运行 >**。

但如果是为了打开一个文件，删除**>**符号并输入文件名即可。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/qp9YQQrcrs5khp3mRaHw.png?auto=format&w=845)

The `Run` prepend changes to `Open` and DevTools searches for relevant files instead。

另外，您也可以使用以下方式直接进入到**打开文件**菜单：

- 键入Control+P (Windows / Linux) 或者 Command+P (Mac).

- 点击 ![Customize and control DevTools.](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/9gzXiTYY0nZzBxGI6KrV.svg) （自定义和控制DevTools)，然后选择**运行命令**。

  

### 打开忽略的文件

> 注意：这是Chrome中从版本106开始提供的试验性预览功能。

默认情况下，DevTools会隐藏已知第三方的文件。要从菜单中打开这些文件，请在**源文件**面板中禁用**隐藏已忽略的源**选项。



## 查看其他可用操作

查看其他可用的操作，可以在命令菜单中删除 **>** 符号并输入 **?** 。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/bXm6Q6IBmGnbire4m7Mh.png?auto=format&w=845)

