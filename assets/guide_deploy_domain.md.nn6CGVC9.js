import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.DRZK5IXa.js";const g=JSON.parse('{"title":"域名配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy/domain.md","filePath":"guide/deploy/domain.md"}'),e={name:"guide/deploy/domain.md"},t=p(`<h1 id="域名配置" tabindex="-1">域名配置 <a class="header-anchor" href="#域名配置" aria-label="Permalink to &quot;域名配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">前置条件</p><p>域名配置前，请确保已经成功安装了Nginx</p></div><h3 id="配置nginx" tabindex="-1">配置Nginx <a class="header-anchor" href="#配置nginx" aria-label="Permalink to &quot;配置Nginx&quot;">​</a></h3><p>在<code>/etc/nginx/conf.d/</code>目录新建<code>alnitak.conf</code>文件，内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       9030;</span></span>
<span class="line"><span>	server_name  localhost; </span></span>
<span class="line"><span>	client_max_body_size 1024M;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 转发用户端</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>		proxy_pass http://127.0.0.1:9010;</span></span>
<span class="line"><span>		proxy_set_header   Host             $host;</span></span>
<span class="line"><span>     	proxy_set_header   X-Real-IP        $remote_addr;						</span></span>
<span class="line"><span>        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>		proxy_http_version 1.1;</span></span>
<span class="line"><span>    	proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    	proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #后台管理</span></span>
<span class="line"><span>    location /admin/ {</span></span>
<span class="line"><span>        root /usr/share/nginx/html;</span></span>
<span class="line"><span>        index index.html index.htm;</span></span>
<span class="line"><span>        try_files $uri $uri/ @admin;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 解决后台管理history路由问题</span></span>
<span class="line"><span>    location @admin {</span></span>
<span class="line"><span>        rewrite ^.*$ /admin/index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 转发后端</span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>		proxy_pass http://127.0.0.1:9000;</span></span>
<span class="line"><span>		proxy_set_header   Host             $host;</span></span>
<span class="line"><span>     	proxy_set_header   X-Real-IP        $remote_addr;						</span></span>
<span class="line"><span>        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>		proxy_http_version 1.1;</span></span>
<span class="line"><span>    	proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    	proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="重启nginx" tabindex="-1">重启Nginx <a class="header-anchor" href="#重启nginx" aria-label="Permalink to &quot;重启Nginx&quot;">​</a></h3><p>使用以下命令重启nginx</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div>`,8),i=[t];function l(o,r,c,d,h,_){return n(),a("div",null,i)}const u=s(e,[["render",l]]);export{g as __pageData,u as default};
