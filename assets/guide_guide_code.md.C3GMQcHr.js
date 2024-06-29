import{_ as t,c as d,o as e,a2 as a}from"./chunks/framework.DRZK5IXa.js";const E=JSON.parse('{"title":"状态码","description":"","frontmatter":{},"headers":[],"relativePath":"guide/guide/code.md","filePath":"guide/guide/code.md"}'),r={name:"guide/guide/code.md"},o=a('<h1 id="状态码" tabindex="-1">状态码 <a class="header-anchor" href="#状态码" aria-label="Permalink to &quot;状态码&quot;">​</a></h1><h2 id="请求响应码" tabindex="-1">请求响应码 <a class="header-anchor" href="#请求响应码" aria-label="Permalink to &quot;请求响应码&quot;">​</a></h2><table><thead><tr><th>Http响应码</th><th>请求响应码</th><th>含义</th></tr></thead><tbody><tr><td>200</td><td>200</td><td>成功</td></tr><tr><td>200</td><td>500</td><td>请求失败</td></tr><tr><td>403</td><td>403</td><td>Forbidden<sup>1</sup></td></tr><tr><td>200</td><td>-1</td><td>需要人机验证<sup>2</sup></td></tr><tr><td>200</td><td>2000</td><td>需要重新登录</td></tr><tr><td>200</td><td>3000</td><td>Token过期</td></tr></tbody></table><p>[1]. 该状态表示服务器理解了本次请求但是拒绝执行该任务，通常出现于文件资源。</p><p>[2]. 该状态表示需要进行人机验证，此时需要调用一次人机验证，详见<a href="/guide/guide/captcha.html">人机验证说明</a>。</p><h2 id="稿件状态码" tabindex="-1">稿件状态码 <a class="header-anchor" href="#稿件状态码" aria-label="Permalink to &quot;稿件状态码&quot;">​</a></h2><table><thead><tr><th>状态</th><th>状态码</th><th>含义</th></tr></thead><tbody><tr><td>AUDIT_APPROVED</td><td>0</td><td>审核通过</td></tr><tr><td>CREATED_VIDEO</td><td>100</td><td>成功创建视频</td></tr><tr><td>VIDEO_PROCESSING</td><td>200</td><td>视频转码中</td></tr><tr><td>SUBMIT_REVIEW</td><td>300</td><td>用户提交审核</td></tr><tr><td>WAITING_REVIEW</td><td>500</td><td>等待审核</td></tr><tr><td>REVIEW_FAILED</td><td>2000</td><td>审核不通过</td></tr><tr><td>PROCESSING_FAIL</td><td>3000</td><td>视频处理失败</td></tr></tbody></table>',7),h=[o];function i(_,c,s,n,l,u){return e(),d("div",null,h)}const b=t(r,[["render",i]]);export{E as __pageData,b as default};