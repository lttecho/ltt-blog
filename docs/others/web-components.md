---
nav:
  title: others
  order: 3
group:
  title: web components
  order: 1
title: 如何编写自定义元素
order: 1
---
<h1>如何开发自定义元素</h1>

本文介绍不使用任何第三方框架的情况下，如何创建自定义的HTML元素。

## Web Components介绍

目前，前端流行的web框架（Vue、React和Angular等），都是组件框架。组件化是前端的发展趋势。

而浏览器端一直在推动自定义元素（即原生组件）的发展，并提供了一套供开发者使用的API，即Web Components API。Web Components API允许开发人员使用原生HTML、CSS实现可重用的组件，并且像原生HTML元素一样使用它们。利用Web Components API开发自定义元素的优点在于：浏览器原生支持，不需要引入第三方库或框架，代码量小。

可以查看[这里](https://www.webcomponents.org/)学习更多关于Web Components的内容，同时也可以在此发布自己开发的自定义元素。

兼容性问题







## 实例：开发一个可拖拽的上传文件组件

功能点：

1. 可拖拽、可点击上传文件，限制为单文件。
2. 上传后在拖拽框中显示文件列表
3. 



### 第一步：customElements.define()定义一个自定义元素类

可以创建两种自定义元素：

- 独立元素
- 继承自基本的HTML元素



### 第二步：利用`<template>`标签实现静态DOM部分



### 第三步： 添加CSS样式部分



### 第四步：实现功能（文件上传）



### 第五步：实现自定义参数



### 第六步： Shadow DOM——隔离自定义元素





## 拓展

### 封装自定义元素



### 分发自定义元素





### 实现和发布自定义的UI组件库





### 基于第三方UI组件库进行二次开发





