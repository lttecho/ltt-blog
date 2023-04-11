---
nav:
  title: Chrome Devtools中文文档
  order: 1
group:
  title: 打开Chrome DevTools
  order: 2
title: 打开Chrome DevTools
order: 2
---

<h1>打开Chrome DevTools</h1>

<iframe width="700" height="394" src="https://www.youtube.com/embed/X65TAP8a530" title="Different ways to open Chrome DevTools | DevTools Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



打开 Chrome DevTools 的方法有很多种。从这份全面的参考资料中选择您最喜欢的方式。

您可以使用 Chrome UI 或键盘访问 DevTools：

- 从[ Chrome 的下拉菜单](#001)。
- 使用专用[快捷键](#002)打开**元素**、**控制台**或者您最后使用的面板。

此外，了解如何为每个新选项卡自动打开 DevTools。



## 从 Chrome 菜单打开 DevTools

<p id="001">如果您更喜欢 UI，您可以从 Chrome 的下拉菜单中访问 DevTools。</p>

### 打开元素面板以检查 DOM 或 CSS

右键单击页面上的元素并选择**检查**。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/uLh67ZUQIEJ5En0vcJgq.png?auto=format&w=845)

DevTools 打开**元素**面板并选择 DOM 树中的元素。在**样式**窗格中，您可以看到应用于所选元素的 CSS 规则。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/WTJEhyPfarXQqli3LMwW.png?auto=format&w=845)



### 从 Chrome 的主菜单打开您上次使用的面板

要打开上次使用的 DevTools 面板，请单击地址栏右侧的![Three-dot menu.](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/N7wEDmtW9lnrSxPRupMa.svg)按钮，然后选择**更多工具** > **开发者工具**。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/bkh79zEFaByczisr3lD5.png?auto=format&w=845)





或者，您可以使用快捷方式打开最后一个面板。请参阅下一节以了解更多信息。



##  使用快捷方式打开面板：Elements、Console 或您的上一个面板

<p id="002">如果您更喜欢键盘，请根据您的操作系统在 Chrome 中按快捷方式：</p>

| OS               | Elements             | Console              | Your last panel               |
| ---------------- | -------------------- | -------------------- | ----------------------------- |
| Windows or Linux | Ctrl + Shift + **C** | Ctrl + Shift + **J** | F12 Ctrl + Shift + **I**      |
| Mac              | Cmd + Option + **C** | Cmd + Option + **J** | Fn + F12 Cmd + Option + **I** |

这是记住快捷方式的简单方法：

- **C**代表CSS。
- **J**代表JavaScript。
- **I**代表上一次的选择。

在![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/7s3JQLXmIQmQa4CFXaNv.png?auto=format&w=21)检查模式中，C快捷键会打开**元素**面板。当您将鼠标悬停在页面上的元素上时，此模式会向您显示有用的工具提示。您还可以单击任何元素以在**元素**>**样式**窗格中查看其 CSS。

有关 DevTools 快捷方式的完整列表，请参阅键盘快捷方式。



## 在每个新选项卡上自动打开 DevTools

从命令行传递 --auto-open-devtools-for-tabs 标志以运行Chrome：

1. 退出任何正在运行的 Chrome 实例。

   > 重要：
   >
   > 此标志仅适用于您打开的第一个 Chrome 实例。如果它对您不起作用，例如在 Windows 上，请确保从任务管理器中结束所有驻留的 Chrome 进程。

2. 运行您最喜欢的终端或命令行应用程序。

3. 根据您的操作系统，运行以下命令：

   - MacOS:

     ```shell
     open -a "Google Chrome" --args --auto-open-devtools-for-tabs
     ```

   - Windows:

     ```shell
     start chrome --auto-open-devtools-for-tabs
     ```

   - Linux:

     ```shell
     google-chrome --auto-open-devtools-for-tabs
     ```



DevTools 将自动打开每个新标签，直到您关闭 Chrome。



## 下一步？

> 成功！
>
> 恭喜！您已经成功解锁了 Chrome DevTools 的强大功能



接下来，观看以下视频以了解一些有用的快捷方式和设置，以便更快地进行 DevTools 导航。

<iframe width="700" height="394" src="https://www.youtube.com/embed/xHusjrb_34A" title="Faster DevTools navigation with shortcuts and settings | DevTools Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

如需更多实践学习体验，请参阅如何自定义 DevTools。
