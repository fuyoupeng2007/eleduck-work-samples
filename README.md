# 个人作品集

**[在线体验九个作品](https://fuyoupeng2007.github.io/eleduck-work-samples/) · [需求与竞品对照](https://fuyoupeng2007.github.io/eleduck-work-samples/research/) · [Word 发布材料](docs/downloads/电鸭作品集发布材料.docx)**

基于电鸭公开摘要自主制作的 AI 协作个人样品。包含 3 个已完善作品和本轮新增 6 个可操作样品。虚构数据，不代表真实客户、招聘方验收、已接单或生产系统。

| 项目 | 主要功能 | 体验 |
| --- | --- | --- |
| [澄色门店经营看板](docs/salon/) | 看板与公式 Excel 配套；异常备注独立保存，核查不改动财务金额。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/salon/) |
| [序场会展运营原型](docs/expo/) | 主办方与参会者双视角，报名到签到连续体验，容量和议程冲突可校验。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/expo/) |
| [MASON METAL 银饰概念站](docs/mason/) | 原创银饰概念图、商品对比与选择清单，附 WordPress 配套源码。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/mason/) |
| [合序企业流程台](docs/ops/) | 两级审批、分次回款与完整操作记录；金额校验失败不写入原台账。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/ops/) |
| [渡单跨境订单工作台](docs/orders/) | 逾期与物流异常优先队列；部分到货可追溯，多币种金额分开统计。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/orders/) |
| [钓迹钓点与渔获日志](docs/fish/) | 收藏到日志连续操作，渔获可编辑和导出，手机布局便于查看。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/fish/) |
| [鲜集团购与供应链原型](docs/fresh/) | 订单库存联动、截单控制与按批次供应采购；历史订单保留提交时单价。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/fresh/) |
| [构件BOM与迁移核查](docs/bom/) | 唯一编码、引用完整性与循环检测；迁移失败保留原数据，共享物料先汇总再扣库存。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/bom/) |
| [验流CRM质检工作台](docs/qa/) | 用例快照与结果历史可追溯；失败关联缺陷，关闭前要求回归通过证据。 | [打开](https://fuyoupeng2007.github.io/eleduck-work-samples/qa/) |

## 本地运行

安装 Node.js 22 或以上后，在仓库根目录执行：

```sh
node serve.mjs
```

访问 `http://127.0.0.1:8770/`。运行网页不需要安装依赖或 API key。新六个工作台使用 ES modules，需要 HTTP；前三个项目可以直接打开 HTML。数据保存在当前浏览器，可下载 JSON 备份恢复。

## 需求与范围

本轮筛选 4 个开发需求方向和 2 个兼职岗位，五个摘要已于 2026-10-02 刷新，生鲜需求保留 2026-10-01 摘要。详情页受验证限制，完整需求、预算、继续招聘状态和是否接受 AI 协作未知。岗位的实际经验要求、运营或测试工作不能由样品替代。

小程序方向交付的是响应式 Web 样品，尚未交付 uni-app、真实地图、微信账号或支付。BOM 不读取 Access 文件或写入 Airtable。企业台不提供真实用户权限、RPA 或大模型知识库。QA 工作台记录人工证据，不自动测试客户产品。详见各项目 README 与[对照报告](docs/research/index.html)。

## 验证

```sh
npm install
# 另一个终端保持 node serve.mjs 运行，需要安装 Google Chrome
npm test
```

11 项新增业务测试覆盖审批分级、回款上限、采购流程、库存原子性、取消恢复、批次隔离、BOM 成本与共享物料、循环引用、迁移失败不写入和 QA 快照追溯。浏览器验收覆盖六个实际操作流程、备份恢复、CSV 下载与 390px 全部菜单布局。前三个作品保留既有回归。证据在 `validation/`，截图在 `screenshots/`。

## 下载

- [九项目交付包](docs/downloads/电鸭九项目成品.zip)
- [Word 发布材料](docs/downloads/电鸭作品集发布材料.docx)
- [门店公式 Excel](docs/downloads/门店经营模板.xlsx)
- [WordPress 子主题](docs/downloads/mason-metal-child.zip)
- [Elementor 模板](wordpress/MASON-METAL-Elementor首页.json)
- [原三项目竞品升级说明](docs/downloads/竞品对比与升级说明.html)

仅发布源码、演示数据、原创概念图和作品材料；不包含真实账号、桌面截图、联系方式、访问令牌或客户数据。
