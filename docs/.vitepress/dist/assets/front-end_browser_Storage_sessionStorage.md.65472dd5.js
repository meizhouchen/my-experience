import{_ as a,o as e,c as s,O as o}from"./chunks/framework.954c1bae.js";const m=JSON.parse('{"title":"sessionStorage","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/browser/Storage/sessionStorage.md","filePath":"front-end/browser/Storage/sessionStorage.md"}'),t={name:"front-end/browser/Storage/sessionStorage.md"},l=o('<h1 id="sessionstorage" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage" target="_blank" rel="noreferrer">sessionStorage</a> <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;[sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)&quot;">​</a></h1><p>与 localStorage 相似</p><h2 id="不同" tabindex="-1">不同 <a class="header-anchor" href="#不同" aria-label="Permalink to &quot;不同&quot;">​</a></h2><ul><li>localStorage 数据没有过期时间</li><li>sessionStorage 页面会话结束时,会清除数据</li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="storage-length-只读" tabindex="-1">Storage.length 只读 <a class="header-anchor" href="#storage-length-只读" aria-label="Permalink to &quot;Storage.length 只读&quot;">​</a></h3><p>返回一个整数，表示存储在 Storage 对象中的数据项数量。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span></code></pre></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="storage-key" tabindex="-1">Storage.key() <a class="header-anchor" href="#storage-key" aria-label="Permalink to &quot;Storage.key()&quot;">​</a></h3><p>该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">key</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="storage-getitem" tabindex="-1">Storage.getItem() <a class="header-anchor" href="#storage-getitem" aria-label="Permalink to &quot;Storage.getItem()&quot;">​</a></h3><p>该方法接受一个键名作为参数，返回键名对应的值。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="storage-setitem" tabindex="-1">Storage.setItem() <a class="header-anchor" href="#storage-setitem" aria-label="Permalink to &quot;Storage.setItem()&quot;">​</a></h3><p>该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span></span></code></pre></div><h3 id="storage-removeitem" tabindex="-1">Storage.removeItem() <a class="header-anchor" href="#storage-removeitem" aria-label="Permalink to &quot;Storage.removeItem()&quot;">​</a></h3><p>该方法接受一个键名作为参数，并把该键名从存储中删除。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="storage-clear" tabindex="-1">Storage.clear() <a class="header-anchor" href="#storage-clear" aria-label="Permalink to &quot;Storage.clear()&quot;">​</a></h3><p>调用该方法会清空存储中的所有键名。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>',24),n=[l];function r(p,c,i,g,h,d){return e(),s("div",null,n)}const C=a(t,[["render",r]]);export{m as __pageData,C as default};
