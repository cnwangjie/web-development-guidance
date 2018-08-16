### 任务 0 (3天)

在[Codewars](https://www.codewars.com/)使用JS做20道题目

 - 需要js基本的语法
 - [JS参考手册](http://www.w3school.com.cn/jsref/index.asp)

 > 基本的算法能力是开发者的必备技能，开始先尝试做一些算法题来练练手，了解一门语言的基本用法。Codewars是一个不错的做题网站，他支持很多语言，并且可以提供循序渐进的难度。接下来尝试在Codewars使用JS做20道题目吧。做完之后一定要看一下别人的题解，看看有哪些自己不知道的方法可以用，之后可以学着使用一下。主要目的就是了解JS的基本语法和常用函数，如数组的map,reduce,join,sort方法，字符串的split,substr方法等。

### 任务 1 (1天)

制作一个网页，网页的中间有一个数字，点一下网页的任何地方，这个数字就每0.1秒加1，再点一下就会暂停，再点就会再增加

 - 对html的简单了解
 - [事件](http://www.w3school.com.cn/js/js_htmldom_events.asp)
 - [延时](http://www.w3school.com.cn/js/js_timing.asp) (这里应当使用`setInterval`方法)
 - [使用JS来操作DOM元素](http://www.w3school.com.cn/htmldom/dom_modify.asp)

 > 对于任何人来说，能做出有成果的东西都非常重要，尤其是对于编程的初学者来说，用刚学的东西来做一个东西可以很大程度的增强学习的动力，而如果要制作一个窗体程序相对比较麻烦，而且不同的平台窗体程序所需要的东西都不一样，没法写一个通用的教程。而网页都运行在浏览器环境中，而且非常的简单，是让初学者很快可以体验到成果的一个很好的方式。

### 任务 2 (1天)

制作一个登陆界面的网页，界面上有两个输入框和一个提交按钮。提交后下面会显示出接口返回的`msg`字段，根据`status`字段改变提示信息的背景色。如果登陆成功则在上面显示出返回的`token`，否则不显示内容。

接口文档 [https://www.cnwangjie.com/hz-api-doc/#api-auth-PostAuthLogin](https://www.cnwangjie.com/hz-api-doc/#api-auth-PostAuthLogin)
接口地址 https://www.cnwangjie.com/task/auth/login
用户名:aaa 密码:1234

 - HTTP (请求方法 如何传递信息 URL的组成)
 - 跨域
 - [AJAX](http://www.w3school.com.cn/ajax/index.asp) 或 [fetch方法](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 - [JSON](http://www.w3school.com.cn/json/index.asp) JS解析JSON使用`JSON.parse`方法

 > 了解基本的web开发方式，了解接口相关的一些知识

### 任务 3 (2天)

尝试使用Node.js和Express制作上一个任务的API

 - [Node.js官网](https://nodejs.org)
 - NPM 包管理
 - [Node.js API](https://nodejs.org/api/)
 - [Node入门](https://www.nodebeginner.org/index-zh-cn.html)
 - [Express](http://www.expressjs.com.cn/) (一个后端框架)

可以从下面的代码开始
```js
const express = require('express')
const app = express()
app.all('/auth/login', (req, res) => {

})
app.listen(9000)
console.log('server is running in port 9000')
```
完成后可以把上一个任务中的地址改为`127.0.0.1:9000/auth/login`试试看

 > 完整的接触了前端和后端的开发，至此应该对web开发有了一定感受了

### 任务 4 (1天)

做为 Apple Store App 独立开发者，你要搞限时促销，为你的应用生成激活码。在本地编写一个JS脚本，使用node运行。功能是生成 200 个激活码，激活码采用一个具有`code`和`is_used`的两个属性的对象保存，把具有200个这种对象的数组转成json并保存在和代码同目录的code.json文件里。

 - [Node File System API](https://nodejs.org/api/fs.html) (采用其中的`writeFileSync`方法写文件)
 - [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 随机数来源 (其他的随机数来源还有时间戳的纳秒数，linux系统的/dev/random设备等)
 - JSON.stringify方法将一个对象转成JSON文本
 - base64
 - hash

可以对随机数进行hash，然后再base64再截取相同长度的一部分

 > 尝试小工具的开发，了解node的API

### 任务 5 (1天)

尝试使用模版引擎`ejs`制作一个动态网站，在一个网页上用一个表格列出之前生成的激活码和使用状况

 - [EJS](https://github.com/mde/ejs) 变量替换和循环
 - html中的table标签

可以从下面的代码开始

```js
const express = require('express')
const ejs = require('ejs')
const app = express()

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.get('/code', (req, res) => {

  res.render('code.ejs', data)
})

app.listen(9000)
console.log('server is running in port 9000')
```

 > 了解传统的动态网站开发方式，了解模版引擎。其实至此你已经采取了MVC的开发框架`app.get`和`app.post`后面的第一个参数就是路由，后面的回调函数就是控制器，res.render渲染的就是视图，激活码对象就可以看作是模型

### 任务 6 (2天)

尝试编写一个基本的模版引擎，会把网页中的`{{ 变量名 }}`格式的部分自动变成其中变量的值，`@foreach 数组变量名 as 变量名`和`@endforeach`直接的内容循环多次，数量为数组的长度，每一个里面的`{{ 变量名 }}`的变量如果和as后面的变量名一样则替换。和上一个任务中用到的一样

 - 正则表达式
 - 字符串替换

从下面的代码开始
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="template">
      <h1>Hello! {{ name }}</h1>

      @foreach links as link
      <p><a href="{{ link.src }}">{{ link.name }}</a></p>
      @endforeach
    </div>
    <script>
    const data = {
      name: 'single dog',
      links: [
        {src: 'https://google.com/ncr', name: 'Google'},
        {src: 'https://bing.cn/', name: 'Bing'},
        {src: 'https://github.com', name: 'Github'},
      ]
    }

    const temp = document.getElementById('template')
    let html = temp.innerHTML

    const render = (data) => {
      let r = html
      // write code here

      temp.innerHTML = r
    }
    render(data)
    </script>
  </body>
</html>
```

### 任务 7 (2天)

编写一个数据绑定，使用`Proxy`，递归给一个对象的所有属性的对象设置setter，一旦有属性修改则重新渲染

 - [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
 - 递归

上面的脚本稍作修改
```js
const watch = (obj) => {
  // complete this function
}

const data = watch({
  name: 'single dog',
  links: [
    {src: 'https://google.com/ncr', name: 'Google'},
    {src: 'https://bing.cn/', name: 'Bing'},
    {src: 'https://github.com', name: 'Github'},
  ]
})
```
在proxy的setter中执行render函数即可

 > 了解现代前端开发当中的数据绑定，尝试实现会对此理解的更加深入

### 任务 8 (2天)

采用Vue和Express开发一个前后端分离的TODO LIST网站，后端提供获取，增加，删除，标记为完成这些接口。前端采用Vue制作一个单独的网页，样式采用Bootstrap框架。暂时数据可以以JSON格式文件储存

 - [Vue.js](https://cn.vuejs.org/v2/guide/) (一个前端MVVM框架)
 - [Bootstrap](http://v3.bootcss.com/getting-started/) (一个开源前端框架)

前端网页从下面的代码开始
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TODO list</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <div class="form-inline">
        <input class="form-control"></input>
        <a class="btn btn-primary">add</a>
      </div>
      <table class="table">
      <thead>
        <tr>
          <th>todo</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>complete task 8</td>
          <td><a class="btn btn-success btn-xs">✔</a>
        </tr>
        <tr class="success">
          <td>completed task</td>
          <td><a class="btn btn-danger btn-xs">✘</a></td>
        </tr>
        <tr>
          <td>another task</td>
          <td><a class="btn btn-success btn-xs">✔</a></td>
        </tr>
      </tbody>
    </table>

    </div>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
    <script src="./script.js"></script><!-- 这里需要你自己在另一个文件中编写脚本 -->
  </body>
</html>
```

后端从下面的代码开始
```js
const express = require('express')
const app = express()
app.get('/api/list', (req, res) => {

})
app.post('/api/add', (req, res) => {

})
app.delete('/api/item/:id', (req, res) => {

})
app.put('/api/item/:id/marktocomplete', (req, res) => {

})
app.listen(9000)
console.log('server is running in port 9000')
```

 > 至此基本具备的web开发所需的技能了


### 参考答案

 - [任务1](https://codepen.io/cnwangjie/pen/RZLpvz)
 - [任务2](https://codepen.io/cnwangjie/pen/YxrZxR/)
 - [任务3](./task3answer.js)
 - [任务4](./task4answer.js)
 - [任务5](./task5answer)
 - [任务6](https://codepen.io/cnwangjie/pen/wqreVO)
 - [任务7](https://codepen.io/cnwangjie/pen/vJdbPM)
 - [任务8](./task8answer)
