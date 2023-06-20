# Egg
[Egg文档](https://www.eggjs.org/zh-CN/intro/quickstart)

[egg.js团队](https://www.yuque.com/egg)

## egg 和 koa 是什么关系？
koa 是 egg 的基础框架，egg 是对 koa 的增强。Egg.js 是一个基于 Node.js 和 Koa.js 的企业级开发框架，它提供了一系列的约定和最佳实践，可以帮助开发者快速构建出高质量的 Node.js 应用。

[学习egg.js，看这一篇就够了](https://blog.csdn.net/keliq/article/details/119607114)

## 智能提示
会的，只要在 package.json 中添加下面的声明之后，会在项目根目录下动态生成 typings 目录，里面包含各种模型的类型声明[（参考链接）](https://www.yuque.com/egg/nodejs/gkk3r9)：

```
"egg": {
  "declarations": true
}
```

## 创建项目
```
$ npm init egg --type=simple --registry=china
# 或者 yarn create egg --type=simple --registry=china

```
创建完毕之后，目录结构如下（忽略 README文件 和 test 目录）：
```
├── app
│   ├── controller
│   │   └── home.js
│   └── router.js
├── config
│   ├── config.default.js
│   └── plugin.js
├── package.json
```
这就是最小化的 egg 项目，用 npm i 或 yarn 安装依赖之后，执行启动命令：
```
$ npm run dev

[master] node version v14.15.1
[master] egg version 2.29.1
[master] agent_worker#1:23135 started (842ms)
[master] egg started on http://127.0.0.1:7001 (1690ms)
```
打开 http://127.0.0.1:7001/ 会看到网页上显示 hi, egg 。

## 目录约定
```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app/
|   ├── router.js # 用于配置 URL 路由规则
│   ├── controller/ # 用于存放控制器（解析用户的输入、加工处理、返回结果）
│   ├── model/ (可选) # 用于存放数据库模型
│   ├── service/ (可选) # 用于编写业务逻辑层
│   ├── middleware/ (可选) # 用于编写中间件
│   ├── schedule/ (可选) # 用于设置定时任务
│   ├── public/ (可选) # 用于放置静态资源
│   ├── view/ (可选) # 用于放置模板文件
│   └── extend/ (可选) # 用于框架的扩展
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config/
|   ├── plugin.js # 用于配置需要加载的插件
|   ├── config.{env}.js # 用于编写配置文件（env 可以是 default,prod,test,local,unittest）

```

## 路由（Router）
请求地址和控制器的映射
```
module.exports = app => {
  const { router, controller } = app
  // 当用户访问 news 会交由 controller/news.js 的 index 方法进行处理
  router.get('/news', controller.news.index)
  // 通过冒号 `:x` 来捕获 URL 中的命名参数 x，放入 ctx.params.x
  router.get('/user/:id/:name', controller.user.info)
  // 通过自定义正则来捕获 URL 中的分组参数，放入 ctx.params 中
  router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, controller.package.detail)
}

```

### 将路由映射按照文件进行拆分

手动引入
```
// app/router.js
module.exports = app => {
  require('./router/news')(app)
  require('./router/admin')(app)
};

// app/router/news.js
module.exports = app => {
  app.router.get('/news/list', app.controller.news.list)
  app.router.get('/news/detail', app.controller.news.detail)
};

// app/router/admin.js
module.exports = app => {
  app.router.get('/admin/user', app.controller.admin.user)
  app.router.get('/admin/log', app.controller.admin.log)
};
```
### 自动引入
使用 egg-router-plus 插件自动引入 app/router/**/*.js，并且提供了 namespace 功能：

```
// app/router.js
module.exports = app => {
  const subRouter = app.router.namespace('/sub')
  subRouter.get('/test', app.controller.sub.test) // 最终路径为 /sub/test
}
```

## 中间件（Middleware）

egg 约定一个中间件是一个放置在 app/middleware 目录下的单独文件，它需要导出一个普通的函数，该函数接受两个参数：

- options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
- app: 当前应用 Application 的实例。
我们新建一个 middleware/slow.js 慢查询中间件，当请求时间超过我们指定的阈值，就打印日志，代码为：


