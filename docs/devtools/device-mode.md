---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 使用设备模式模拟移动设备
  order: 6
title: 使用设备模式模拟移动设备
order: 6
---
<h1>使用设备模式模拟移动设备</h1>

<iframe width="700" height="394" src="https://www.youtube.com/embed/f7kokNyRe7U" title="Simulate mobile devices with Device Mode | DevTools Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



使用设备模式来估算您的页面在移动设备上的外观和性能。

设备模式是 Chrome DevTools 中的一组功能的名称，可帮助您模拟移动设备。这些功能包括：

- 模拟移动端视口
- 节流 CPU
- 限制网络
- 另外，在“传感器”选项卡中：
  - 模拟地理定位
  - 设置方向



## 限制

将设备模式视为页面在移动设备上的外观和感觉的一阶近似值。使用设备模式，您实际上不会在移动设备上运行您的代码。您可以从笔记本电脑或台式机模拟移动用户体验。

移动设备的某些方面是 DevTools 永远无法模拟的。例如，移动 CPU 的架构与笔记本电脑或台式机 CPU 的架构非常不同。如有疑问，最好的办法是在移动设备上实际运行您的页面。当页面实际在移动设备上运行时，使用远程调试从笔记本电脑或台式机查看、更改、调试和分析页面代码。



## 模拟一个移动端视口

单击**切换设备工具栏** ![img](https://wd.imgix.net/image/admin/9FiBHFCzfPgP8sy6LMx7.png?auto=format&w=20) 来打开一个可以让您模拟移动视口的 UI。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/CkPWy2neRUswovjY1ql2.png?auto=format&w=845)

默认情况下，设备工具栏在视口中打开，尺寸设置为响应。



### 响应视口模式

拖动手柄以将视口大小调整为您需要的任何尺寸。或者，在宽度和高度框中输入特定值。在此示例中，宽度设置为 480，高度设置为 415。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/bzTz5dEpOUIjRCrpdw5C.png?auto=format&w=845)

或者，使用宽度预设栏通过单击将宽度设置为以下值之一：

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/rvOX3mx1WcP2kSvoUFNY.png?auto=format&w=845)

| Mobile S | Mobile M | Mobile L | Tablet | Laptop | Laptop L | 4K     |
| -------- | -------- | -------- | ------ | ------ | -------- | ------ |
| 320px    | 375px    | 425px    | 768px  | 1024px | 1440px   | 2560px |



### 显示媒体查询

要在视口上方显示媒体查询断点，请单击更多选项 ![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/N5Lkpdwpaz4YqRGFr2Ks.svg) **更多选项** > **显示媒体查询**。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/Y8OPepQNYdD6of4QC8if.png?auto=format&w=845)

DevTools 现在在视口上方显示两个额外的栏：

- 带有最大宽度断点的蓝色栏
- 带有最小宽度断点的橙色栏。

在断点之间单击以更改视口的宽度，以便触发断点。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/TL943bgHrNVpZwBQGCWo.png?auto=format&w=845)



### 设置设备像素比





### 设置设备类型





### 移动设备视口模式



### 将视口旋转到横向





### 显示设备框架





### 添加自定义移动设备



### 显示标尺



### 缩放视口





### 截屏



## 限制网络和CPU



### 仅限制CPU





### 仅限制网络





## 模拟传感器



### 覆盖地理位置



### 设置方向



