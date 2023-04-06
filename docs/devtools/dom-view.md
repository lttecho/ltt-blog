---
nav:
  title: Chrome Devtools
  order: 1
group:
  title: 元素面板
  order: 7
title: 开始查看和更改DOM
order: 1
---

<h1>开始查看和更改DOM</h1>

完成这些交互式教程，了解使用 Chrome DevTools 查看和更改页面 DOM 的基础知识。

本教程假定您了解 DOM 和 HTML 之间的区别。有关解释，请参阅[附录：HTML 与 DOM](#appendix)。



## 查看DOM节点

元素面板中的DOM树，是在DevTools中执行所有与DOM相关的活动的地方。

### 检查节点

当您对特定的 DOM 节点感兴趣时，**检查**是一种打开 DevTools 并调查该节点的快速方法。

​	`1` 右键单击下方的 Michelangelo字段并选择 **检查**。

- Michelangelo

- Raphael

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/psbHIPohm8wsZkGA7WXl.png?auto=format&w=845)

DevTools的元素面板就会被打开。`<li>Michelangelo</li>` 就会在DOM树中高亮。

​								![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/Cz2LKMmJ3sVjkDdfW4i8.png?auto=format&w=845)	

​	`2` 在DevTools工具的左上方角落里点击**检查**图标

​	![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/2canqdvrgnHBayY1VsLM.png?auto=format&w=845)



​	`3` 点击下面的**Tokyo**

- Tokyo
- Beirut

​	   现在，`<li>Tokyo</li>`就在DOM树中高亮显示了。

检查一个节点也是查看和修改节点样式的第一步。[查看和更改CSS](/devtools/css-view)



### 使用键盘导航 DOM 树

在 DOM 树中选择一个节点后，您可以使用键盘在 DOM 树中导航。

`1` 右键点击下面的**Ringo**然后选择**检查**。在DOM树中`<li>Ringo</li>`就会被选中。

- George
- Ringo
- Paul
- John

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/6hDrHKpnSMFwCdugWuXR.png?auto=format&w=845)

`2` 按2 次向上箭头键 。`<ul>`就会被选中。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/2rwp1VpNq4vDNAM0Q9hR.png?auto=format&w=845)

`3` 按左箭头键。`<ul>`列表就会展开。

`4` 再次按下左箭头键。`<ul>`节点的父节点就会被选中。在本例中，这个父节点包含了步骤1中的`<li>`节点。

`5` 按3次向下箭头键，就会重新选择到刚刚展开的`<ul>`列表。它看起来像这样`<ul>...</ul>`。

`6` 按右箭头键，这个列表会被展开。



### 滚动到视野范围内

<span id="scroll1">滚动到视野范围内查看DOM树</span>，有时您会发现感兴趣的DOM节点并不在当前视口中。比如，假设您滚动到了当前页的底部，但是您想查看当前页顶部的`<h1>`节点。**滚动到视图**能让您快速重新定位视口，以便您可以查看到节点。

`1` 右键点击下面的**Magritte**并选择**检查**

- Magritte
- Soutine

`2` 跳转到本页底部的[附录：滚动到视野范围内](#scroll2)部分。那里会继续说明该部分的内容。

完成页面底部的说明后，您应该跳回此处。



### 显示标尺

使用视口上方和左侧的标尺，您可以在**元素**面板中将鼠标悬停在某个元素上时测量该元素的宽度和高度。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/DsBqSHZFNeUcr1a1oKd7.png?auto=format&w=845)

通过以下两种方式之一启用标尺：

- 按 Control+Shift+P 或 Command+Shift+P (Mac) 打开**命令菜单**，键入**在鼠标指针悬停时显示标尺**，然后按 Enter。
- 选择**设置** > **首选项** > **元素** > **在鼠标指针悬停时显示标尺**。

标尺的尺寸单位是像素。



### 查找节点

您可以使用字符串、CSS 选择器或 XPath 选择器搜索 DOM 树。

`1` 将光标聚焦在**元素**面板上。

`2` 按下Control+F或者Command+F (Mac)。DOM树底部会打开搜索栏。

`3` 键入`The Moon is a Harsh Mistress`。最后一句话将会在DOM树中高亮显示。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/qigo04bdlo2evHazfIAp.png?auto=format&w=845)





## 附录：HTML 与 DOM

<span id="appendix">本节将会快速解释 HTML 和 DOM 之间的区别。</span>

当您用一个web浏览器请求一个网页（比如`https://example.com`），服务器会返回类似下方的HTML：

```html
<!doctype html>
<html>
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a hypertext document on the World Wide Web.</p>
    <script src="/script.js" async></script>
  </body>
</html>
```

浏览器解析 HTML 并创建一个对象树，如下所示：

```text
html
  head
    title
  body
    h1
    p
    script
```

这种表示页面内容的对象或节点树称为 DOM。现在它看起来与 HTML 相同，但假设 HTML 底部引用的脚本运行此代码：

```js
const h1 = document.querySelector('h1');
h1.parentElement.removeChild(h1);
const p = document.createElement('p');
p.textContent = 'Wildcard!';
document.body.appendChild(p);
```

该代码删除 `h1` 节点并将另一个` p `节点添加到 DOM。完整的 DOM 现在看起来像这样：

```text
html
  head
    title
  body
    p
    script
    p
```

该页面的 HTML 现在与其 DOM 不同。换句话说，HTML 表示初始页面内容，DOM 表示当前页面内容。当 JavaScript 添加、删除或编辑节点时，DOM 变得不同于 HTML。

查看 [Introduction to the DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) 以了解更多。

## 附录：滚动到视野范围内

<span id="scroll2">这是</span>[滚动到视野范围内](#scroll1)部分的延续。按照以下说明完成该部分。

`1` 在DOM树中，`<li>Magritte</li>`节点应该仍是被选中的。如果未被选中，请回到[滚动到视野范围内](#scroll1)并重新开始。

`2` 右键点击`<li>Magritte</li>`节点然后选择**滚动到视野范围内**。这时您的视口会滚动到可以看见**Magritte**节点处。如果您没有看到**滚动到视野范围内**选项，请查看[附录：缺少选项](#options)。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/FBb3y3CzDXA5P0sNEuyd.png?auto=format&w=845)



## 附录：缺少选项

<span id="options">本教程中的许多说明都指导您右键单击 DOM 树中的一个节点，然后从弹出的上下文菜单中选择一个选项。如果您在上下文菜单中没有看到指定的选项，请尝试在节点文本以外的地方单击鼠标右键。</span>

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/t4SYwbs3B0dqdnS2WSC2.png?auto=format&w=845)