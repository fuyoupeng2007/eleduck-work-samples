# 合序企业流程台

依据企业数字化需求摘要自主制作的业务工作台。支持费用录入、金额分级审批、合同台账、分次回款、超额回款拒绝、经营规则摘要与操作记录。支持本地备份恢复与 CSV 导出。个人演示，未接企业系统或大模型。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/ops/) · [需求来源](https://eleduck.com/posts/gYf7xg) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

费用审批、合同回款、规则摘要、操作记录、备份恢复、台账导出。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/ops/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

两级审批、分次回款与完整操作记录；金额校验失败不写入原台账。

## 范围

无真实账号权限、RPA、CRM API、AI 知识库或自动报表推送。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
