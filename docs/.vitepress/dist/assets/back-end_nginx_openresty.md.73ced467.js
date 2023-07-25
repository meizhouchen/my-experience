import{_ as e,o as a,c as s,O as n}from"./chunks/framework.3938e08f.js";const u=JSON.parse('{"title":"openresty","description":"","frontmatter":{},"headers":[],"relativePath":"back-end/nginx/openresty.md","filePath":"back-end/nginx/openresty.md"}'),t={name:"back-end/nginx/openresty.md"},l=n(`<h1 id="openresty" tabindex="-1">openresty <a class="header-anchor" href="#openresty" aria-label="Permalink to &quot;openresty&quot;">​</a></h1><p><a href="http://www.hangdaowangluo.com/archives/682" target="_blank" rel="noreferrer">openResty的安装、启动、停止与重启</a><a href="https://blog.csdn.net/laixiaonian/article/details/91900328" target="_blank" rel="noreferrer">Openresty在windows安装和使用</a></p><h2 id="openresty的安装" tabindex="-1">openResty的安装 <a class="header-anchor" href="#openresty的安装" aria-label="Permalink to &quot;openResty的安装&quot;">​</a></h2><p>官方下载：<a href="https://openresty.org/download/openresty-1.9.7.4.tar.gz" target="_blank" rel="noreferrer">https://openresty.org/download/openresty-1.9.7.4.tar.gz</a></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># tar xzf openresty-1.9.7.4.tar.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cd openresty-1.9.7.4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#./configure --prefix=/usr/local/openresty --with-luajit \\</span></span>
<span class="line"><span style="color:#FFCB6B;">--without-http_redis2_module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-http_iconv_module</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># make # make install</span></span></code></pre></div><h2 id="启动、停止与重启" tabindex="-1">启动、停止与重启 <a class="header-anchor" href="#启动、停止与重启" aria-label="Permalink to &quot;启动、停止与重启&quot;">​</a></h2><p>openresty是nginx的luaJit的扩展，openresty的启动、停止、启动操作，实际执行nginx的操作就可以了。</p><p>启动：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -c &lt;configuration file&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./nginx -c ./conf/nginx.conf</span></span></code></pre></div><p>快速停止nginx：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -s stop</span></span></code></pre></div><p>完整有序的停止nginx：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -s quit</span></span></code></pre></div><p>修改配置后重新加载生效：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span></code></pre></div><p>重新打开日志文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -s  reopen</span></span></code></pre></div>`,18),o=[l];function p(i,r,c,d,h,g){return a(),s("div",null,o)}const _=e(t,[["render",p]]);export{u as __pageData,_ as default};
