# 项目介绍

[Alnitak](https://github.com/wangzmgit/alnitak)是一个基于nuxt和gin开发的前后端分离的弹幕视频网站。
项目实现了视频、专栏、弹幕、评论、点赞、收藏等功能。
如有任何的意见或建议，欢迎您通过创建Issue或PR的方式告知我们。

QQ交流群：909847398


## 特性
* **弹幕播放器**: 基于DPlayer二次开发出弹幕播放器WPlayer并上传npm。
* **视频转码**：实现了视频码率和分辨率的调整，并将视频转码为HLS格式，以提高播放效果
* **实时通信**：基于WebSocket实现了私信的实时收发功能，同时实现了视频在线人数的实时更新
* **鉴权**：基于JWT实现双Token方案，通过对axios二次封装实现Token过期重发请求功能
* **滑块拼图库**：使用Go语言开发了滑块拼图生成库，并将其发布到GitHub上作为项目依赖使用
* **权限管理**：后台管理系统基于JWT和Casbin实现了基于角色的访问控制（RBAC），保障了系统的安全性和灵活性

## 如何贡献

非常欢迎您参与项目的维护。如有任何意见或建议，请通过创建 Issue 或提交 Pull Request 的方式告知我们。
在提交之前，请务必阅读[贡献指南](/guide/other/contribution)。