# 澄色门店经营看板

基于 150 笔虚构流水制作的门店经营看板，支持日期、门店和技师筛选、等长期间比较、退款与渠道分析、到账异常核查、跟进备注和 CSV 导入导出。附可重算公式 Excel。个人演示样品，未连接真实门店系统。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/salon/) · [需求来源](https://eleduck.com/posts/a4fWj9) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

响应式看板、期间比较、异常核查、CSV 导入导出、公式 Excel。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/salon/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

看板与公式 Excel 配套；异常备注独立保存，核查不改动财务金额。

## 范围

没有 POS、银行对账接口；数据均为虚构示例。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
