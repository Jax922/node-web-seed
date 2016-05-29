### 介绍
这是基于nodejs开发web应用的种子，可以用这个种子快速的搭建web应用。解决每次都重复搭建node的app服务。比如一些express，整个目录分级都是一些重复性劳动。通过这个种子应用就是将这些重复性的劳动都提取出来，进行整合，这样要搭建一个基于node的web应用很简单，克隆拷贝这个代码库，然后按照下面的运行步骤进行既可以快速搭建好，这样可以快速的书写代码。
>  这还是第一版，v1.0.0，集成的东西不多，这是express搭建app server,目录分级，前端的页面等等，后期会加入链接数据库的功能，这样就可以更方便扩展web应用的场景了。

### 运行
1.克隆代码库
```
$ git clone https://github.com/shedong/node-web-seed.git
```
2.按照npm包
```
$ cnpm i -d (或者下面)
$ cnpm i 
没有cnpm的可以用npm，也可以安装一下cnpm
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
3.启动应用
```
$  node app.js
```
4.访问应用
浏览器输入localhost:9000/home,这个时候你就可以编写代码了！