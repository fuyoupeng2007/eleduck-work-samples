# 验流CRM质检工作台

依据 CRM 测试岗位制作的个人 QA 工作台。支持用例维护、执行批次与用例快照、人工结果及证据、失败关联缺陷、回归记录和报告导出。缺陷需关联回归通过才能关闭。无预置通过结果，未实际测试招聘方 CRM，也不代表已获得测试岗位。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/qa/) · [需求来源](https://eleduck.com/posts/rdf4Ww) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

测试用例、执行批次、快照、证据、缺陷跟进、回归记录与 JSON 报告。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/qa/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

用例快照与结果历史可追溯；失败关联缺陷，关闭前要求回归通过证据。

## 范围

原需求是 QA 兼职；没有招聘方产品访问、真实邮件集成和跨端同步验收。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
