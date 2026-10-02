# 构件BOM与迁移核查

依据 Access 向 Airtable 迁移需求制作的个人关系数据样品。支持物料维护、多层 BOM 展开、材料成本汇总、共享叶子需求与库存缺口、关系新增删除及循环检测。JSON 数据先预检再确认迁移，提供字段映射建议与采购导出。未迁移客户数据库。

[在线体验](https://fuyoupeng2007.github.io/eleduck-work-samples/bom/) · [需求来源](https://eleduck.com/posts/dDf39x) · [全部作品](https://fuyoupeng2007.github.io/eleduck-work-samples/)

## 功能

物料主表、12 层以内 BOM、成本与缺口、JSON 迁移预检、采购导出。

## 体验与验收

通过仓库根目录 `node serve.mjs` 启动，访问 `http://127.0.0.1:8770/bom/`。新六个工作台需要 HTTP 或 GitHub Pages，直接 file:// 打开无法加载 ES modules。

唯一编码、引用完整性与循环检测；迁移失败保留原数据，共享物料先汇总再扣库存。

## 范围

不读取 .mdb / .accdb，不写入 Airtable，没有两地账号权限隔离。

自主个人样品，使用虚构数据，AI 辅助开发；不代表雇主委托、仍在招人或已验收。
