import{_ as s,o as a,c as n,O as e}from"./chunks/framework.3938e08f.js";const u=JSON.parse('{"title":"Egg","description":"","frontmatter":{},"headers":[],"relativePath":"back-end/language/node/framework/egg/egg.md","filePath":"back-end/language/node/framework/egg/egg.md"}'),l={name:"back-end/language/node/framework/egg/egg.md"},p=e(`<h1 id="egg" tabindex="-1">Egg <a class="header-anchor" href="#egg" aria-label="Permalink to &quot;Egg&quot;">​</a></h1><p><a href="https://www.eggjs.org/zh-CN/intro/quickstart" target="_blank" rel="noreferrer">Egg文档</a></p><p><a href="https://www.yuque.com/egg" target="_blank" rel="noreferrer">egg.js团队</a></p><h2 id="egg-和-koa-是什么关系" tabindex="-1">egg 和 koa 是什么关系？ <a class="header-anchor" href="#egg-和-koa-是什么关系" aria-label="Permalink to &quot;egg 和 koa 是什么关系？&quot;">​</a></h2><p>koa 是 egg 的基础框架，egg 是对 koa 的增强。Egg.js 是一个基于 Node.js 和 Koa.js 的企业级开发框架，它提供了一系列的约定和最佳实践，可以帮助开发者快速构建出高质量的 Node.js 应用。</p><p><a href="https://blog.csdn.net/keliq/article/details/119607114" target="_blank" rel="noreferrer">学习egg.js，看这一篇就够了</a></p><h2 id="智能提示" tabindex="-1">智能提示 <a class="header-anchor" href="#智能提示" aria-label="Permalink to &quot;智能提示&quot;">​</a></h2><p>会的，只要在 package.json 中添加下面的声明之后，会在项目根目录下动态生成 typings 目录，里面包含各种模型的类型声明<a href="https://www.yuque.com/egg/nodejs/gkk3r9" target="_blank" rel="noreferrer">（参考链接）</a>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;egg&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;declarations&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ npm init egg --type=simple --registry=china</span></span>
<span class="line"><span style="color:#A6ACCD;"># 或者 yarn create egg --type=simple --registry=china</span></span></code></pre></div><p>创建完毕之后，目录结构如下（忽略 README文件 和 test 目录）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├── app</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── controller</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── home.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── router.js</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config.default.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── plugin.js</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json</span></span></code></pre></div><p>这就是最小化的 egg 项目，用 npm i 或 yarn 安装依赖之后，执行启动命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ npm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[master] node version v14.15.1</span></span>
<span class="line"><span style="color:#A6ACCD;">[master] egg version 2.29.1</span></span>
<span class="line"><span style="color:#A6ACCD;">[master] agent_worker#1:23135 started (842ms)</span></span>
<span class="line"><span style="color:#A6ACCD;">[master] egg started on http://127.0.0.1:7001 (1690ms)</span></span></code></pre></div><p>打开 <a href="http://127.0.0.1:7001/" target="_blank" rel="noreferrer">http://127.0.0.1:7001/</a> 会看到网页上显示 hi, egg 。</p><h2 id="目录约定" tabindex="-1">目录约定 <a class="header-anchor" href="#目录约定" aria-label="Permalink to &quot;目录约定&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">egg-project</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── app.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">├── agent.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">├── app/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── router.js # 用于配置 URL 路由规则</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── controller/ # 用于存放控制器（解析用户的输入、加工处理、返回结果）</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── model/ (可选) # 用于存放数据库模型</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── service/ (可选) # 用于编写业务逻辑层</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── middleware/ (可选) # 用于编写中间件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── schedule/ (可选) # 用于设置定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── public/ (可选) # 用于放置静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── view/ (可选) # 用于放置模板文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── extend/ (可选) # 用于框架的扩展</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── helper.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── request.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── response.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── context.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── application.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── agent.js (可选)</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── plugin.js # 用于配置需要加载的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── config.{env}.js # 用于编写配置文件（env 可以是 default,prod,test,local,unittest）</span></span></code></pre></div><h2 id="路由-router" tabindex="-1">路由（Router） <a class="header-anchor" href="#路由-router" aria-label="Permalink to &quot;路由（Router）&quot;">​</a></h2><p>请求地址和控制器的映射</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = app =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { router, controller } = app</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 当用户访问 news 会交由 controller/news.js 的 index 方法进行处理</span></span>
<span class="line"><span style="color:#A6ACCD;">  router.get(&#39;/news&#39;, controller.news.index)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 通过冒号 \`:x\` 来捕获 URL 中的命名参数 x，放入 ctx.params.x</span></span>
<span class="line"><span style="color:#A6ACCD;">  router.get(&#39;/user/:id/:name&#39;, controller.user.info)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 通过自定义正则来捕获 URL 中的分组参数，放入 ctx.params 中</span></span>
<span class="line"><span style="color:#A6ACCD;">  router.get(/^\\/package\\/([\\w-.]+\\/[\\w-.]+)$/, controller.package.detail)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="将路由映射按照文件进行拆分" tabindex="-1">将路由映射按照文件进行拆分 <a class="header-anchor" href="#将路由映射按照文件进行拆分" aria-label="Permalink to &quot;将路由映射按照文件进行拆分&quot;">​</a></h3><p>手动引入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// app/router.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = app =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  require(&#39;./router/news&#39;)(app)</span></span>
<span class="line"><span style="color:#A6ACCD;">  require(&#39;./router/admin&#39;)(app)</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// app/router/news.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = app =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  app.router.get(&#39;/news/list&#39;, app.controller.news.list)</span></span>
<span class="line"><span style="color:#A6ACCD;">  app.router.get(&#39;/news/detail&#39;, app.controller.news.detail)</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// app/router/admin.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = app =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  app.router.get(&#39;/admin/user&#39;, app.controller.admin.user)</span></span>
<span class="line"><span style="color:#A6ACCD;">  app.router.get(&#39;/admin/log&#39;, app.controller.admin.log)</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><h3 id="自动引入" tabindex="-1">自动引入 <a class="header-anchor" href="#自动引入" aria-label="Permalink to &quot;自动引入&quot;">​</a></h3><p>使用 egg-router-plus 插件自动引入 app/router/**/*.js，并且提供了 namespace 功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// app/router.js</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = app =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const subRouter = app.router.namespace(&#39;/sub&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  subRouter.get(&#39;/test&#39;, app.controller.sub.test) // 最终路径为 /sub/test</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="中间件-middleware" tabindex="-1">中间件（Middleware） <a class="header-anchor" href="#中间件-middleware" aria-label="Permalink to &quot;中间件（Middleware）&quot;">​</a></h2><p>egg 约定一个中间件是一个放置在 app/middleware 目录下的单独文件，它需要导出一个普通的函数，该函数接受两个参数：</p><ul><li>options: 中间件的配置项，框架会将 app.config[\${middlewareName}] 传递进来。</li><li>app: 当前应用 Application 的实例。 我们新建一个 middleware/slow.js 慢查询中间件，当请求时间超过我们指定的阈值，就打印日志，代码为：</li></ul>`,30),o=[p];function t(r,c,i,C,A,g){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{u as __pageData,y as default};
