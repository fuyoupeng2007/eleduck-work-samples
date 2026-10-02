# 渡单跨境订单工作台

面向跨境电商运营流程自主制作的订单工作台。支持订单登记、采购流转、部分到货、负责人及备注、物流单号与异常跟进、供应商采购汇总。不同币种金额分列，支持 CSV 导出和备份恢复。依据兼职岗位制作，未连接真实电商及物流。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/orders/) · [需求来源](https://eleduck.com/posts/Ygf53K) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

订单登记、状态流转、部分到货、异常跟进、采购汇总、币种分列。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/orders/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

逾期与物流异常优先队列；部分到货可追溯，多币种金额分开统计。

## 范围

原需求是运营助理兼职，不是软件开发订单；无平台 API 或真实物流查询。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
