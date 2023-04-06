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

如上所述，搜索栏还支持 CSS 和 XPath 选择器。

**元素**面板选择 DOM 树中的第一个匹配结果并将其滚动到视口中的视图中。默认情况下，这会在您键入时发生。如果您总是使用长搜索查询，则可以让 DevTools 仅在您按 Enter 时运行搜索。

避免节点之间不必要的跳转，可以在**设置** > **首选项** > **全局** > **即输即搜**中去掉勾选。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/BKcshLBj0EI1OahoEXbS.png?auto=format&w=845)



## 编辑DOM

您可以即时编辑 DOM 并查看这些更改如何影响页面。

### 编辑内容

要编辑节点的内容，请双击 DOM 树中的内容。

`1` 右键点击下面的**Michelle**并选择**检查**。

- Fry
- Michelle

`2` 在DOM树中，双击`Michelle`。也就是，双击`<li>`和`</li>`标签之间的文本。文本以蓝色突出显示，表示它已被选中。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/6izVzx17nim6eDn96Vhd.png?auto=format&w=845)

`3` 删除`Michelle`，输入`Leela`，然后回车以确定修改。文本内容就会从**Michelle**修改为**Leela**。

### 编辑属性

要编辑属性，请双击属性名称或值。按照以下说明了解如何向节点添加属性。

`1` 右键点击下面的**Howard**选择**检查**。

- Howard
- Vince

`2` 双击`<li>`标签，li文本会高亮以表示该节点被选中。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/U5cgUXHsZ3H9vnL9TmQ0.png?auto=format&w=845)

`3` 按向右箭头键，添加一个空格，输入`style="background-color:gold"`，然后回车。该节点的背景颜色就会变为金色。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/7SKDEvndWzq2KPSketg1.png?auto=format&w=845)

### 编辑节点类型

要编辑节点类型，请双击该类型，然后输入新类型。

`1` 右键点击下面的**Hank**并选择**检查**

- Dean
- Hank
- Thaddeus
- Brock

`2` 双击`<li>`节点，`li`文本将会高亮显示。

`3` 删除`li`，输入`button`，然后回车。`<li>`节点将会变为`<button>`节点。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/nbdyNWefo9fqESvfWdha.png?auto=format&w=845)

### 以HTML格式修改

要使用HTML语法高亮和自动补全功能编辑节点，可在节点的下拉菜单中选择**以HTML格式修改**。

`1` 右键点击下面的**Leonard**并选择**检查**。

- Penny
- Howard
- Rajesh
- Leonard

`2`  在**元素**面板，右键点击当前节点，在下拉菜单中选择**以HTML格式修改**。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/2If7eY0I3aNpQcb1fAZg.png?auto=format&w=845)

`3`  回车来开始新的一行，并输入`<l`。DevTool 会为您突出显示 HTML 语法和自动补全标签。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/B7kQKGGUGf3S2ERmF5dc.png?auto=format&w=845)

> 提示：DevTools 也可以自动完成 DOM 属性。

`4` 从自动补全菜单项中选择`li`元素并输入`>`。DevTools 会自动在光标后添加结束 </li> 标记。

`5` 在标签内键入 `Sheldon`，然后按 Control / Command + Enter 应用更改。

![img](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/unvKWSLDvzoh7kHZoWbK.png?auto=format&w=845)

### 重新排序 DOM 节点

拖动节点来重新排序。

`1` 右键点击下面的**Elvis Presley**并选择**检查**。注意它是列表中的最后一项。

- Stevie Wonder
- Tom Waits
- Chris Thile
- Elvis Presley

`2` 在DOM树中，拖拽`<li>Elvis Presley</li>`到列表的顶部。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/qD6OQFkcxcKkOZJxHlqB.png?auto=format&w=845)

### 强制状态

您可以强制节点保持在 :active、:hover、:focus、:visited 和 :focus-within 等状态。

`1 ` 悬停在下面的**The Lord of the Flies**上。它的背景色会变为橙色。

<ul><li class="demo--hover">The Lord of the Flies</li><li>Crime and Punishment</li><li>Moby Dick</li></ul>
<style>
    .demo--hover:hover {
        background-color: orange;
    }
</style>

`2` 右键点击上面的**The Lord of the Flies**，并选择**检查**。

`3` 右键点击`<li class="demo--hover">The Lord of the Flies</li>`，选择**强制执行状态** > **:hover**。如果您没有看到对应的选项，请查看

[附录：缺少选项](#options)。即使您实际上并未将鼠标悬停在节点上，背景颜色仍保持橙色。



### 隐藏节点

按H键可以隐藏节点。

`1` 右键点击下面的**The Stars My Destination**并选择**检查**。

- The Count of Monte Cristo
- The Stars My Destination

`2` 按下H键，该检点就会被隐藏。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/ynrZooiPHy2DUBbdGL3k.png?auto=format&w=845)

`3` 再次按下H键，该节点又会出现。



### 删除节点

按下Delete键可以删除节点。

`1` 右键点击下面的**Foundation**并选择**检查**。

- The Illustrated Man
- Through the Looking-Glass
- Foundation

`2` 按下Delete键，该节点就会被删除。

`3` 按下Control+Z或者Command+Z (Mac)，上一次操作会被撤销，该节点会重现出现。



## 在控制台访问节点

DevTools 提供了一些快捷方式，用于从控制台访问 DOM 节点，或获取对它们的 JavaScript 引用。

### 用 $0 引用当前选择的节点

当您检查一个节点时，该节点旁边的 `== $0 `文本意味着您可以在控制台中使用变量` $0 `引用该节点。

`1` 右键点击下面的**The Left Hand of Darkness**并选择**检查**。

- The Left Hand of Darkness
- Dune

`2` 按下Escape键可打开控制台抽屉。

`3` 输入`$0`并回车，表达式的结果显示` $0 `的计算结果为` <li>The Left Hand of Darkness</li>`。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/y3AQHZHbv25cRX1AJt4E.png?auto=format&w=845)

`4` 将鼠标悬停在结果上，该节点在视口中高亮显示。

`5` 在DOM树中点击`<li>Dune</li>`，在控制台中再次输入`$0`并回车。现在，`$0`就等于`<li>Dune</li>`。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/AJpUgl9zL9w4skXkaDEE.png?auto=format&w=845)

### 存储为全局变量

如果需要多次引用某个节点，请将其存储为全局变量。

`1` 右键点击下面的**The Big Sleep**并选择**检查**。

- The Big Sleep
- The Long Goodbye

`2` 右键点击DOM树中的`<li>The Big Sleep</li>`，并选择**存储为全局变量**。如果您没有看到对应的选项，请查看

[附录：缺少选项](#options)。

`3` 在控制台输入`temp1`并回车。表达式的结果显示变量计算为节点。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/hDCScCM1db0EnAM0VYAZ.png?auto=format&w=845)



### 复制JS路径

当您需要在自动化测试中引用它时，将 JavaScript 路径复制到节点。

`1` 右键点击下面的**The Brothers Karamazov**并选择**检查**。

- The Brothers Karamazov
- Crime and Punishment

`2 ` 在DOM树中右键点击`<li>The Brothers Karamazov</li>`并选择**复制** > **复制JS路径**。一条解析为节点的 `document.querySelector() `表达式已复制到剪贴板。

`3` 按下Control+V或者Command+V (Mac) 可在控制台粘贴该表达式。

`4 ` 按下回车可执行这条表达式。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/r2zpHdCY7TQ0mMzRg3Ov.png?auto=format&w=845)

## 在 DOM 更改时中断

DevTools 允许您在 JavaScript 修改 DOM 时暂停页面的 JavaScript。请参阅 DOM 更改断点。



## 下一步

本文已经涵盖了 DevTools 中大多数与 DOM 相关的功能。您可以通过右键单击 DOM 树中的节点并尝试本教程中未涵盖的其他选项来发现它们的其余部分。也可以查看[元素面板快捷键](/devtools/keyboard-shortcuts#元素面板的快捷键)。

查看[Chrome DevTools主页](https://developer.chrome.com/docs/devtools/)，了解您可以使用 DevTools 做的所有其他事情。

如果您想联系 DevTools 团队或从 DevTools 社区获得帮助，请参阅[社区](/devtools/overview#社区)。



## <span id="appendix">附录：HTML 与 DOM</span>

本节将会快速解释 HTML 和 DOM 之间的区别。

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

## <span id="scroll2">附录：滚动到视野范围内</span>

这是[滚动到视野范围内](#scroll1)部分的延续。按照以下说明完成该部分。

`1` 在DOM树中，`<li>Magritte</li>`节点应该仍是被选中的。如果未被选中，请回到[滚动到视野范围内](#scroll1)并重新开始。

`2` 右键点击`<li>Magritte</li>`节点然后选择**滚动到视野范围内**。这时您的视口会滚动到可以看见**Magritte**节点处。如果您没有看到**滚动到视野范围内**选项，请查看[附录：缺少选项](#options)。

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/FBb3y3CzDXA5P0sNEuyd.png?auto=format&w=845)



## 附录：缺少选项

<span id="options">本教程中的许多说明都指导您右键单击 DOM 树中的一个节点，然后从弹出的上下文菜单中选择一个选项。如果您在上下文菜单中没有看到指定的选项，请尝试在节点文本以外的地方单击鼠标右键。</span>

![img](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/t4SYwbs3B0dqdnS2WSC2.png?auto=format&w=845)