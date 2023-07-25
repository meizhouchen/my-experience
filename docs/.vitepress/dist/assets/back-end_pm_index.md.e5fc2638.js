import{_ as s,o as a,c as n,O as p}from"./chunks/framework.3938e08f.js";const l="/my-experience/assets/1.eb1010dd.jpg",d=JSON.parse('{"title":"pm2","description":"","frontmatter":{},"headers":[],"relativePath":"back-end/pm/index.md","filePath":"back-end/pm/index.md"}'),e={name:"back-end/pm/index.md"},o=p('<h1 id="pm2" tabindex="-1">pm2 <a class="header-anchor" href="#pm2" aria-label="Permalink to &quot;pm2&quot;">​</a></h1><p><a href="https://pm2.fenxianglu.cn/docs/start" target="_blank" rel="noreferrer">PM2中文网</a> pm2是node进程管理工具。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><p>1、后台运行 普通启动方式：node index.js，关闭终端就结束进程； pm2可以后台运行，终端关闭不影响。</p><p>2、自动重启 可以监听某些文件改动，自动重启</p><p>3、停止不稳定的进程 限制不稳定的重启的次数，达到上限就停止进程。</p><p>4、0 秒停机重启 集群模式下，可以达到重启时不停止服务。</p><p>5、简单日志管理 pm2可以收集日志，并有插件配合进行管理。后面会提到。</p><p>6、自动负载均衡 cluster模式下，会自动使用轮询的方式达到负载均衡，从而减轻服务器的压力。</p><p>7、提供实时的接口 pm2插件提供实时的接口，返回服务器与进程的信息，后面会提到。</p><p>8、集成管理 对于多个进程，不同环境，可以统一配置，方便管理。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span></code></pre></div><p>查看pm2的位置</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">whereis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pm2</span></span></code></pre></div><p>如果这时候还是无法运行，可以将node安装目录里面的bin目录里面的快捷方式，链接到运行目录就可以了，具体操作方法：</p><p>whereis pm2</p><p>得到的目录就是pm2所在的目录，然后加一个快捷：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/software/nodejs/bin/pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/bin/</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>启动进程:</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span></span></code></pre></div><p>得到如下图 <img src="'+l+`" alt="运行结果"> （1）其中app name 和id都是这个进程的标识，可以对他们进行别的操作，比如stop，delete等。 （2）mode：进程模式，cluster或fork。cluster有多个进程，而fork只有一个。 （3）status：进程是否在线 （4）restart：重启次数 （5）uptime：运行时间 （6）cpu：cpu占用率 （7）mem：内存占用大小</p><ul><li>停止进程：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">app_id</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">all</span></span></code></pre></div><ul><li>删除进程：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">app_id</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">all</span></span></code></pre></div><ul><li>重启进程：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart/reload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">app_id</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">all</span></span></code></pre></div><p>集群模式下，restart中断服务，而reload不会</p><ul><li>查看所有的进程：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list/ls/status</span></span></code></pre></div><p>id编号从1~4的是一个应用，分别对应4个进程。</p><ul><li>查看某一个进程的信息：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_name</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">app_id</span></span></code></pre></div><p>status（状态）、restarts（重启次数）、uptime（运行时间）、script path（启动入口的路径）、script args（启动文件的参数）、error log path（错误日志的路径）、out log path（输出日志的路径）、exec mode（进程的模式）、watch&amp;reload（是否开启监听文件变动重启）、unstable restarts（不稳定的重启次数）</p><p>heap size（堆内存）、heap usage（堆内存使用率）、used heap size（堆内存使用情况）、event loop latency（事件循环时延）、event loop latency p95（事件循环时延 第95分位）</p><ul><li>查看日志：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">logs</span></span></code></pre></div><ul><li>监控所有进程：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">monit</span></span></code></pre></div><ul><li>启动命令（start）还可以带参数 其它可用选项：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--watch 以监听模式启动，当文件发生变化时自动重启</span></span>
<span class="line"><span style="color:#A6ACCD;">--max-memory-restart &lt;200MB&gt; 设置应用重载占用的最大内存</span></span>
<span class="line"><span style="color:#A6ACCD;">--log &lt;log_path&gt; 指定日志文件</span></span>
<span class="line"><span style="color:#A6ACCD;">-- arg1 arg2 arg3 给启动脚本传递额外的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart-delay &lt;delay in ms&gt; 延时 x 毫秒自动重启</span></span>
<span class="line"><span style="color:#A6ACCD;">--time 日志里添加时间前缀</span></span>
<span class="line"><span style="color:#A6ACCD;">--no-autorestart 不自动重启</span></span>
<span class="line"><span style="color:#A6ACCD;">--cron &lt;cron_pattern&gt; 按指定的定时任务规则强制重启</span></span>
<span class="line"><span style="color:#A6ACCD;">--no-daemon 以非守护进程模式启动</span></span></code></pre></div><p>小结： 上面介绍的这些启动其实有弊端： 1、通过命令行传递参数，无法记住到底传递过哪些参数。 2、对于多个进程，不方便管理。</p><p><a href="https://blog.csdn.net/leonnew/article/details/121989900" target="_blank" rel="noreferrer"></a></p><p>启动</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 启动app.js应用程序</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># cluster mode 模式启动4个app.js的应用实例</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 启动应用程序并命名为 &quot;api&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--watch</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 当文件变化时自动重启应用</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 启动 bash 脚本</span></span></code></pre></div><p>查看信息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 list # 列表 PM2 启动的所有的应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit # 显示每个应用程序的CPU和内存占用情况</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show  id# 显示应用程序的所有信息</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs # 显示所有应用程序的日志</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs id # 显示指定应用程序的日志</span></span></code></pre></div><p>停止</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 stop all # 停止所有的应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop 0 # 停止 id为 0的指定应用程序</span></span></code></pre></div><p>重启</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 restart all # 重启所有应用</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 reload all # 重启 cluster mode下的所有应用</span></span></code></pre></div><p>删除应用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 delete all # 关闭并删除所有应用</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete 0 # 删除指定应用 id 0</span></span></code></pre></div><p>其他</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 gracefulReload all # Graceful reload all apps in cluster mode</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 scale api 10 # 把名字叫api的应用扩展到10个实例</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 reset [app-name] # 重置重启数量</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 startup # 创建开机自启动命令</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save # 保存当前应用列表</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 resurrect # 重新加载保存的应用列表</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 update # Save processes, kill PM2 and restore processes</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 generate # Generate a sample json configuration file</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app.js --node-args=&quot;--max-old-space-size=1024&quot;</span></span></code></pre></div><p>重置重启次数 pm2 reset PID //一次只能重置一个 查看</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看所有已启动应用的基本信息</span></span>
<span class="line"><span style="color:#A6ACCD;"># 同 pm2 ls 或 pm2 status</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 list</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看所有应用的日志（历史 + 实时）</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs www # 只查看应用 www 的日志</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs --lines 10 # 查看最后10条历史，默认 15 条</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs --timestamp # 实时日志添加时间前缀</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 logs www --lines 10 --err # 只查看应用 www 的最新 10 条错误日志</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 flush # ❗️清空所有日志文件</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看进程详情</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 show app_name|app_id</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看每个应用的CPU和内存资源实时占用情况</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monit</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 在线的 Web 诊断系统，跨服务器</span></span>
<span class="line"><span style="color:#A6ACCD;"># 需要注册登录或使用 Github、Google 账户授权登录</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 monitor</span></span></code></pre></div><p>管理应用状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 重启 ❗️</span></span>
<span class="line"><span style="color:#A6ACCD;"># 同时杀死并重启所有进程，短时间内服务不可用。</span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成环境推荐使用 reload</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 restart app_id|app_name|all</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 重载 👍</span></span>
<span class="line"><span style="color:#A6ACCD;"># 始终保持一个进程在线，避免宕机</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 reload app_id|app_name|all</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 停止</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 stop app_id|app_name|all</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭并删除</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 delete app_id|app_name|all</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 直接杀死 pm2 守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 kill</span></span></code></pre></div><p>静态服务器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 将目录 dist 作为静态服务器根目录，端口为 3333</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 serve ./dist 3333</span></span>
<span class="line"><span style="color:#A6ACCD;"> 集群模式（自动负载均衡）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># max 表示 PM2 将自动检测可用 CPU 的数量并运行尽可能多的进程</span></span>
<span class="line"><span style="color:#A6ACCD;"># max 可以自定义，如果是 4 核 CPU，设置为 2 则只占用 2 核</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start app.js -i max</span></span></code></pre></div><p>开机自启动</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 startup</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 unstartup</span></span></code></pre></div><p>应用列表</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 保存当前应用列表，以后可以恢复</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save  # 同 pm2 dump</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 重新加载之前保存的应用列表</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 resurrect</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 清除保存的应用列表</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 cleardump</span></span></code></pre></div><p>配置文件</p><p>生成示例配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pm2 ecosystem # 或 pm2 init</span></span></code></pre></div><p>示例配置如下（根据实际项目需要添加、删除配置项）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  apps : [{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name      : &#39;demo&#39;,      // 应用名</span></span>
<span class="line"><span style="color:#A6ACCD;">  script    : &#39;app.js&#39;,   // 应用文件位置</span></span>
<span class="line"><span style="color:#A6ACCD;">  env: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    PM2_SERVE_PATH: &quot;.&quot;,    // 静态服务路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    PM2_SERVE_PORT: 8080,   // 静态服务器访问端口</span></span>
<span class="line"><span style="color:#A6ACCD;">    NODE_ENV: &#39;development&#39; // 设置开发环境运行时</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  env_production : {</span></span>
<span class="line"><span style="color:#A6ACCD;">    NODE_ENV: &#39;production&#39;  // 设置生产环境运行时</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  instances: &quot;max&quot;,         // 将应用程序分布在所有CPU核心上,可以是整数或负数</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: true,              // 监听模式</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: &#39;./out.log&#39;,      // 指定日志标准输出文件及位置</span></span>
<span class="line"><span style="color:#A6ACCD;">  error: &#39;./error.log&#39;,     // 错误输出日志文件及位置</span></span>
<span class="line"><span style="color:#A6ACCD;">  merge_logs: true,         // 集群情况下，可以合并日志</span></span>
<span class="line"><span style="color:#A6ACCD;">  log_type: &quot;json&quot;,         // 日志类型</span></span>
<span class="line"><span style="color:#A6ACCD;">  log_date_format: &quot;DD-MM-YYYY&quot;,  // 日志的日期格式</span></span>
<span class="line"><span style="color:#A6ACCD;">  }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  deploy : {</span></span>
<span class="line"><span style="color:#A6ACCD;">    production : {</span></span>
<span class="line"><span style="color:#A6ACCD;">      user : &#39;SSH_USERNAME&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      host : &#39;SSH_HOSTMACHINE&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ref  : &#39;origin/master&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      repo : &#39;GIT_REPOSITORY&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      path : &#39;DESTINATION_PATH&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;pre-deploy-local&#39;: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;post-deploy&#39; : &#39;npm install &amp;&amp; pm2 reload ecosystem.config.js --env production&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;pre-setup&#39;: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>以配置文件启动示例</p><p>pm2 start ecosystem.config.js --env production ⚠️ 注意：配置文件支持 js 和 yaml 格式，还有一些没有列举的参数项，详见官方文档：<a href="https://pm2.keymetrics.io/docs/usage/application-declaration" target="_blank" rel="noreferrer">https://pm2.keymetrics.io/docs/usage/application-declaration</a></p><p>升级 PM2</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 更新前推荐先保存当前应用列表，方便更新后直接恢复</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 save</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 更新主程序</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install pm2 -g</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 紧接着更新内存中的程序</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 update</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复应用列表</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 resurrect</span></span></code></pre></div><p>日志切割</p><p>安装 pm2-logrotate-ext 扩展模块</p><p>项目地址：<a href="https://github.com/Lujo5/pm2-logrotate-ext" target="_blank" rel="noreferrer">https://github.com/Lujo5/pm2-logrotate-ext</a></p><p>pm2 install pm2-logrotate-ext 重新启动应用后，pm2-logrotate-ext 以模块的形式被加载、启动。</p><p>可以通过以下命令对其配置进行修改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 当文件大小超过此设置则执行切割</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:max_size 1M</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 保留最新的几个日志文件</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:retain 30</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否开启 gzip 压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:compress false</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 文件名的日期部分格式</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:dateFormat YYYY-MM-DD_HH-mm-ss</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 几秒钟检查一次日志文件大小</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:workerInterval 30</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 类似于系统的定时任务，当满足指定规则时，</span></span>
<span class="line"><span style="color:#A6ACCD;"># 不管日志文件大小是否达到设置的最大值，直接对日志文件进行切割</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:rotateInterval 0 0 * * *</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 对 pm2 模块产生的日志同样进行切割处理</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:rotateModule true</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否按定时任务设置规则强制执行</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果设置为否，则只有当日志文件大小超过设置时才进行切割</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 set pm2-logrotate-ext:forced true</span></span></code></pre></div>`,82),t=[o];function c(r,i,C,A,y,D){return a(),n("div",null,t)}const u=s(e,[["render",c]]);export{d as __pageData,u as default};
