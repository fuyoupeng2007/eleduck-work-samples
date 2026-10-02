# 序场会展运营原型

自主制作的会展运营交互原型，覆盖活动、报名配置、票种、议程嘉宾、名单、签到、展位、统计和沟通草稿 9 个模块。支持参会者预览、容量与议程冲突检查、批量签到、取消及撤销记录。个人演示，不是上线 SaaS。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/expo/) · [需求来源](https://eleduck.com/posts/R3fgoW) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

9 个运营模块、参会者预览、名额校验、议程冲突、批量签到、导出。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/expo/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

主办方与参会者双视角，报名到签到连续体验，容量和议程冲突可校验。

## 范围

没有后端鉴权、票务支付、真实二维码核验与跨设备同步。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
