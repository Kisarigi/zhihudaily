# 项目名 知乎日报Web版
## 项目描述
用到了Vue2.0+Vue-cli+Vuex+Vue-router+Element-UI+axios这样的技术栈。<br>
前后端完全分离，后端提供Api，前端用axios请求获取数据。<br>
后台要感谢[Trevor](https://segmentfault.com/a/1190000009242864)提供的解决了跨域问题的知乎日报Api。<br>
移动端访问体验更佳，[查看演示](https://kisarigi.github.io/test/#/home)。

## 项目中踩的一些坑
1.知乎日报的图片链接有防盗链机制，使用以下meta标签设置\<meta name="referrer" content="never">，服务器会认为是浏览器直接打开了文件，所以可以正常显示，解决问题。<br>
2.知乎日报Api里的获取文章具体内容接口，拿到的json数据里有文章内容样式的css文件。拷贝下来可以直接引入，省了很大功夫写样式。

## 有待完善的地方
1.header没有写成组件。重构应该抽象成组件，不同页面的不同样式与逻辑用slot分发实现。<br>
2.只能获取当日数据，应当加上对于Api里时间戳的处理，与下拉加载往日文章的功能。(已解决)<br>
3.后台在托管在leancloud上，是开发版，24小时中会有6小时无法访问，报503错误。应当用express+http库写个转发Api，部署在Heroku上。<br>
4.加上loading动画。

## 启动方法
### install dependencies
npm install

### serve with hot reload at localhost:8080
npm run dev

### build for production with minification
npm run build

### build for production and view the bundle analyzer report
npm run build --report
