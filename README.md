# 某平台的PC官网（留学）
-------------------------------------------------
## 2019/7/12 技术成长的路上加油吧！
http://106.14.135.233:8080/overseas/dist/#/index
## 介绍
- 这是实习时间做的,基于Vue构建的PC留学官网页面，花了一点点时间。初期根据项目经理意见不考虑兼容性，于是用了flex布局；但后来自己想想需要万一到时候需要兼容了，那就死定了。花了一点时间重构，替换掉所有flex布局。毕竟ie9这等上古浏览器不支持flex布局啊 — 。—  我当时就这个表情 @_@;
- 兼容性: > ie9 
- 两个接口用的是内网这边无法使用，只展示代码；页面还是可以显示的

## 总结

### Vue方面
- 首页用了一点elementui的插件，问题有点多。以后时间不急尽量少用插件问题太多。坑爹的ie不支持Vue.use()方法。只能用Vue.component()方法。但是这样又出了一个问题，就是在项目中统一使用Vue.component() 刷新页面的时候。会弹出Message弹窗，所以只能放弃ie那一部分。
(```)
    // 判断是否为ie 看情况使用哪种形式
    if (!!window.ActiveXObject || "ActiveXObject" in window){
    // 使用use方式会导致刷新页面的时候，弹出mesage
    // 但是如果在ie中不使用use 则会报错
         Vue.use(Message)
    }else{
         Vue.component(Message.name, Message)
    }
(```)

- 我在index页面下将下拉条，拉至中部或者其他部位。然后跳转页面，新的页面中滚动条还是原来的位置。下面方式可以解决
(```)
    //解决跳转页面滚动条位置不变的问题
    router.afterEach((to, from, next) => {
        window.scrollTo(0, 0);
    });
(```)


### CSS方面
- 这次竟然用了flex布局，没考虑到ie9不兼容啊。所以下次做PC端页面还是要注意。
- 由于一直使用Chrome调试页面，后来使用了多个浏览器就发现问题了。<img>最好设置宽高，否在某些浏览器会发生挤压，导致图片变形；
- 关于代码规范方面，相较于前几次项目有了一定的提升。目前主要是命名方面有点欠缺后期需要提升。
- 子元素position定位，父元素高度塌陷(没设置高度的情况下)；
`
    overflow:hidden; //可以解决问题
`
- 另外有种差不多的情况，父元素里的子元素float出去了。此时父元素高度为0了。这时就需要清除浮动了。

### 框架方面
- 这次自己对着公司的框架，自己模仿了一下。可以用但是打包好了出问题了啊。dist/index.html双击一片空白。此时需要将config/index.js中的设置如下
`
 assetsPublicPath: './', //不用此方式的话页面会显示空白无法显示；
`
- 用了点es6语法，打开ie发现空白一脸懵逼
`
  npm install es6-promise -S
  //main.js加入下面
  require('es6-promise').polyfill();
  require('es6-promise/auto');
`

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
