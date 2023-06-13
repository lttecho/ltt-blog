---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 控制台
  order: 8
title: 控制台概览
order: 1
---
<h1>控制台概览</h1>

本页介绍了 Chrome DevTools 控制台如何使开发网页变得更加容易。控制台有2个主要的作用：[查看记录的消息](#view)和[运行JavaScript](#javascript)。

<iframe width="700" height="394" src="https://www.youtube.com/embed/76U0gtuV9AY" title="How to log messages in the Console | DevTools Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## <p id="view">查看记录的消息</p>

Web开发人员经常将消息记录到控制台(Console)中，以确保他们的JavaScript代码按预期工作。为了记录一条消息，您可以在JavaScript代码中插入一条表达式语句，类似`console.log('Hello, Console!)'`。当浏览器执行您的JavaScript代码并遇到这样的表达式时，它就知道应该将该消息记录到控制台中。举个例子，假设您正在编译一个页面的HTML和JavaScript代码：

```html
<!doctype html>
<html>
  <head>
    <title>Console Demo</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <script>
      console.log('Loading!');
      const h1 = document.querySelector('h1');
      console.log(h1.textContent);
      console.assert(document.querySelector('h2'), 'h2 not found!');
      const artists = [
        {
          first: 'René',
          last: 'Magritte'
        },
        {
          first: 'Chaim',
          last: 'Soutine'
        },
        {
          first: 'Henri',
          last: 'Matisse'
        }
      ];
      console.table(artists);
      setTimeout(() => {
        h1.textContent = 'Hello, Console!';
        console.log(h1.textContent);
      }, 3000);
    </script>
  </body>
</html>
```



**图1**显示了控制台在加载页面并等待3秒后的样子。尝试找出哪些代码行会导致控制台记录消息。

![img](https://wd.imgix.net/image/admin/dpOohQpnFAKdK0JpVvuv.png?auto=format&w=845)

**图1**. 控制台面板



Web 开发人员记录消息的两个原因：

- 确保代码按照正确的顺序执行
- 在特定时刻检查变量的值



查看 **[在控制台记录消息](/devtools/console-log)** 获得记录日志的实践经验。查看 **[控制台API参考](/devtools/console-api)**以浏览所有的`console`方法。这些方法之间的主要区别在于他们如何显示您正在记录的数据。

## <p id="javascript">运行JavaScript</p>

控制台也是一个[REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)。您可以在控制台中运行 JavaScript 以与您正在检查的页面进行交互。例如，**图2**展示了DevTools主页旁边的控制台，**图3**展示了使用控制台更改页面标题后的同一页。

![img](https://wd.imgix.net/image/admin/HsESeWdYC1Yck5qTtzkj.png?auto=format&w=845)

**图2.** DevTools主页旁边的控制台面板



![img](https://wd.imgix.net/image/admin/Diu3Bq4TbPWb9Y5gr7HX.png?auto=format&w=845)

**图3.** 使用控制台改变了页面标题



可以在控制台中修改页面，是因为控制台拥有当前页面窗口的完全访问权限。DevTools 还有一些方便的功能，可以更轻松地检查页面。例如，假设您的JavaScript代码包含了一个名为`hideModal`的函数。运行`debug(hideModal)`会在hideModal下次被调用时暂停在第一行代码处。查阅[控制台实用程序 API 参考](/devtools/console-utilities)以查看实例程序函数的完整列表。

当您运行JavaScript时不比与页面交互。您可以使用控制台尝试与页面无关的新代码。例如，假设您正在学习JavaScript内置数组函数`map()`，并且您想实践一下。控制台是试用该功能的好地方。

查看[在控制台运行JavaScript](/devtools/console-javascript)来获得在控制台中运行JavaScript的实践经验。