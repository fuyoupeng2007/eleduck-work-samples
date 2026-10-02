# 鲜集团购与供应链原型

依据生鲜团购需求制作的个人 Web 样品。支持商品筛选、购物车、演示下单、库存校验与扣减、取消恢复库存、批次截单、新批次及历史订单、供应商采购汇总、商品价格库存维护和导出。价格与订单为演示，不收款，未发布微信小程序。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/fresh/) · [需求来源](https://eleduck.com/posts/2LfObD) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

购物车、演示下单、库存联动、取消恢复、批次管理、供应采购导出。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/fresh/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

订单库存联动、截单控制与按批次供应采购；历史订单保留提交时单价。

## 范围

未接 CRMEB、真实供应链、微信支付、订阅通知、权限与退款接口。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
