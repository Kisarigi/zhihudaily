# 项目名 知乎日报Web版
## 项目描述
基于Vue2.0+Vue-cli+Vuex+Vue-router+Element-UI+axios<br>
后台要感谢[Trevor](https://segmentfault.com/a/1190000009242864)提供的解决了跨域问题的知乎日报Api。<br>
移动端访问体验更佳，[查看演示](https://kisarigi.github.io/test/#/home)（leancloud已挂，目前此项目处于后台api失效状态-2018/3/13）<br>
2018/3/20 自己用node写了转发请求的后台，[新的演示地址](http://120.79.255.147/)

## 项目中踩的一些坑
1.知乎日报的图片链接有防盗链机制，使用以下meta标签设置\<meta name="referrer" content="never">，服务器会认为是浏览器直接打开了文件，所以可以正常显示，解决问题。<br>
2.知乎日报Api里的获取文章具体内容接口，拿到的json数据里有文章内容样式的css文件。拷贝下来可以直接引入，省了很大功夫写样式。<br>
3.后退时，组件获取的数据存放在Vuex里，会失效。最后使用<keep-alive>，再给需要刷新数据的组件加上相应处理解决。

## 有待完善的地方
1.header没有写成组件。重构应该抽象成组件。<br>
2.只能获取当日数据，应当加上对于Api里时间戳的处理，与下拉加载往日文章的功能。(已解决)<br>
3.后台转发的api托管在leancloud上，应当部署在服务器上（已解决，阿里云云翼计划了解一下0.0）<br>


## 启动方法
### install dependencies
npm install

### serve with hot reload at localhost:8080
npm run dev

### build for production with minification
npm run build

### build for production and view the bundle analyzer report
npm run build --report
