---
title: '参考文献格式规范（Word 版）｜按 GB/T 7714 写毕业论文与科研材料'
description: '面向毕业论文、专项申请书等 Word 写作场景的 GB/T 7714 参考文献统一规则与可复用模板。'
pubDate: '2026-04-21'
updatedDate: '2026-04-21'
tags:
  - 学术写作
  - 参考文献
  - GBT7714
  - Word
---

这篇整理一套以后可以反复套用的 **Word 版参考文献格式规范**，主要面向下面这些场景：

- 毕业论文
- 开题报告
- 专项申请书
- 项目申报材料
- 研究报告
- 其他要求按国标著录参考文献的科研写作

这里默认讨论的是 **Word 写作流**：也就是你可能会手动整理参考文献，或者用 Zotero、NoteExpress、EndNote 等工具先导出，再按学校或单位要求做最后校对。

## 执行基准

默认基准建议定为：

> **以 GB/T 7714—2015 为主标准；在 2026-07-01 之前都按它执行。**

原因很简单：截至 **2026-04-21**，GB/T 7714—2015 仍是现行标准；GB/T 7714—2025 要到 **2026-07-01** 才实施。这个时间点在[全国标准信息公共服务平台](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A&utm_source=chatgpt.com)可以查到。

如果你的学校论文模板、学院规范、专项申请指南里对参考文献有更细的硬性要求，那么应当遵循：

> **单位模板优先，国家标准兜底。**

也就是说，凡是学校或申报书模板已经明确规定的地方，优先按对方模板来；没有明确规定的部分，再统一按本文这套口径执行。

## 统一规则

下面这 8 条可以直接当成默认规则。

### 1. 作者格式统一

目标是让整份文档里所有文献的作者写法保持同一套口径。

- 中文作者：保留中文姓名，不倒置，不缩写。
- 英文作者：统一写成“姓在前，名缩写”的形式。
- 英文作者名缩写不加点。
- 姓统一完整写出，名统一缩写。
- 作者超过 3 个时，只保留前 3 个。
- 中文文献后加 `等`，英文文献后加 `et al.`

例如：

- 中文：`张三, 李四, 王五, 等`
- 英文：`WANG S, LIANG Y, FRASER K C, et al.`

这和 GB/T 7714—2015 中关于作者著录和拼音姓名处理的常见实现是一致的，可参考[清华大学图书馆整理版 PDF](https://lib.tsinghua.edu.cn/wj/GBT7714-2015.pdf?utm_source=chatgpt.com)。

### 2. 作者人数截断规则统一

以后固定采用：

- `1-3` 位作者：全部列出
- `4` 位及以上作者：只列前 `3` 位

这是最稳妥、也最适合毕业论文和申报材料批量整理的做法。

### 3. 标题规则统一

- 中文标题：保持原样
- 英文标题：统一改为 `Title Case`
- 专有名词、模型名、产品名保留官方写法，例如 `ChatGPT`、`DeepSeek-V3`、`Qwen2.5`

例如：

- `A Survey on LLM-Generated Text Detection: Necessity, Methods, and Future Directions`
- `Watermarking Techniques for Large Language Models: A Survey`

这里要特别说明：

> **英文标题统一用 Title Case，是写作风格规则，不是 GB/T 7714 的硬性要求。**

GB/T 7714 主要规定著录项目和顺序，并不强制你必须使用 Title Case 或 sentence case。这里统一成 Title Case，目的是让英文条目在 Word 文档里更整齐。

### 4. 文献类型标识统一

这是最容易混乱的一部分，尤其是计算机领域里期刊、会议、预印本和网页资料混在一起时。

建议固定使用：

- 期刊论文：`[J]`
- 会议论文：`[C]`
- 学位论文：`[D]`
- 报告、技术报告、白皮书、预印本：`[R]`
- 网页、官网页面、博客文章：`[EB/OL]`
- 联机报告：`[R/OL]`

需要特别记住：

> **`[A]` 不是 article。**

在 GB/T 7714—2015 中，`A` 表示的是“档案”，并不是普通论文文章。所以 arXiv 预印本、technical report、survey preprint 这类内容，不要误写成 `[A]`。

可以直接把下面两条当成默认约定：

- `arXiv / preprint / technical report` 默认按 `[R/OL]`
- 官网说明页、产品页、博客页默认按 `[EB/OL]`

### 5. 来源名称规则统一

对计算机领域文献，我建议固定成下面这个增强风格：

- 期刊名：`全称 (简写)`
- 会议名：`全称 (简称)`

例如：

- `ACM Computing Surveys (ACM Comput. Surv.)`
- `Journal of Artificial Intelligence Research (JAIR)`
- `Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023)`

这不是 GB/T 7714 的硬性要求，而是便于阅读、检索和统一风格的内部约定。对于没有常见简称的非 CS 来源，保留全称即可。

### 6. 卷期页码与 article number 统一

- 有卷期就写卷期
- 有起止页码就写页码
- 没有传统页码，但有 article number 时，写 article number
- 在线资源通常不写页码

例如：

- `2025, 51(1): 275-338`
- `2025, 58(4): 83`

不要把卷、期、页码、article number 混写错位。

### 7. 在线文献日期统一

所有在线资源建议统一保留访问日期。

- 能查到发布日期，就补发布日期
- 引用日期统一写成 `[YYYY-MM-DD]`
- 末尾保留 DOI 或稳定 URL

例如：

- `...[EB/OL]. (2022-11-30)[2026-04-21]. URL`
- `...[R/OL]. (2024-12-27)[2026-04-21]. URL`

对 `[EB/OL]` 和 `[R/OL]`，这条尤其重要。

### 8. 中英文兼容规则统一

- 中文文献按中文著录习惯处理
- 英文文献按英文著录习惯处理
- 整体顺序、标点和类型标识统一按 GB/T 7714
- 必要时允许双语著录

默认不强制双语；如果必须双语展示，建议按“原语种在前，另一语种在后”的顺序处理。

## 可直接复用的规则模板

如果你只想记一份最短版规范，可以直接用这一版：

1. 执行标准默认按 **GB/T 7714—2015**。
2. 中文作者保留原名；英文作者统一为“**姓在前，名缩写**”，缩写不加点。
3. 超过 3 位作者时，仅保留前 3 位，中文加“等”，英文加“et al.”
4. 中文标题保持原样；英文标题统一用 **Title Case**。
5. 期刊论文用 `[J]`，会议论文用 `[C]`，学位论文用 `[D]`，报告/预印本用 `[R]` 或 `[R/OL]`，网页用 `[EB/OL]`。
6. 计算机领域期刊名、会议名统一写成“**全称 + 括号简写**”。
7. 有卷期写卷期，有页码写页码，无页码但有 article number 时写 article number。
8. 所有在线文献保留引用日期；能查到发布日期则补发布日期；末尾保留 DOI 或稳定 URL。

## Word 场景下怎么执行最省事

在 Word 里整理参考文献时，最实用的思路不是死记所有细则，而是走一条固定流水线：

> **先判类型 -> 统一作者 -> 统一标题大小写 -> 统一来源名格式 -> 补卷期页码或 article number -> 补日期和链接 -> 按 GB/T 7714 顺序输出**

这条流程特别适合毕业论文和申请书，因为这两类材料通常存在几个现实问题：

- 文献来源很杂，既有期刊，也有会议、arXiv、官网页面和白皮书
- 不同数据库导出的格式不一致
- Word 引文管理工具导出的样式往往接近国标，但不完全等于你的最终要求

所以比较稳妥的做法是：

1. 先用 Zotero、EndNote、NoteExpress 之类工具导出接近 GB 的样式。
2. 再按本文这套规则做一次人工统一。
3. 最后用学校模板或申报指南做终审。

## 常用模板

下面给几种最常见的模板骨架，实际使用时把占位内容替换掉就可以。

### 期刊论文 `[J]`

```text
中文：
作者. 题名[J]. 期刊名, 年, 卷(期): 页码.

英文：
SURNAME A B, SURNAME C D, SURNAME E F, et al. Title Case Title[J]. Journal Full Name (Abbrev.), Year, Volume(Issue): Pages.
```

### 会议论文 `[C]`

```text
中文：
作者. 题名[C]//会议论文集名. 出版地: 出版者, 年: 页码.

英文：
SURNAME A B, SURNAME C D, SURNAME E F, et al. Title Case Title[C]//Proceedings Full Name (Conference Acronym). Place: Publisher, Year: Pages.
```

### 学位论文 `[D]`

```text
中文：
作者. 题名[D]. 城市: 单位, 年.

英文：
SURNAME A B. Title Case Title[D]. City: Institution, Year.
```

### 技术报告 / 预印本 `[R]` 或 `[R/OL]`

```text
中文：
作者. 题名[R]. 单位, 年.

英文在线版：
SURNAME A B, SURNAME C D, SURNAME E F, et al. Title Case Title[R/OL]. (Year-Month-Day)[Access Date]. URL.
```

### 网页 / 官网页面 / 博客文章 `[EB/OL]`

```text
中文：
作者或机构. 页面标题[EB/OL]. (发布日期)[引用日期]. URL.

英文：
AUTHOR OR ORGANIZATION. Title Case Page Title[EB/OL]. (Year-Month-Day)[Access Date]. URL.
```

## 两条默认约定

为了以后不在细节上来回纠结，我建议再固定两条：

### 约定 A：英文作者一律大写姓

例如：

- `WANG S`
- `LIANG Y`
- `FRASER K C`

这样最整齐，也便于和中文条目拉开视觉区分。

### 约定 B：arXiv 默认按 `[R/OL]` 处理

在计算机领域，很多 arXiv 条目本质上都是：

- technical report
- survey
- preprint

默认按 `[R/OL]` 处理，比把它误当成 `[A]` 或普通网页更稳定。

## 适用提醒

这套规则特别适合下面这些写作需求：

- 学校没有给出极细的参考文献逐条模板，但要求“按 GB/T 7714”
- 申报书要求中文规范格式，且文献既有中文也有英文
- 文献里混有会议论文、期刊论文、技术报告、官网页面与在线资源
- 你希望整份 Word 文档风格统一，而不是完全照搬数据库自动导出结果

如果你已经拿到了单位提供的论文模板或申报指南，还是那句话：

> **先看模板，再用本文补空白。**

## TODO

LaTeX 版规则这里先留个坑，后面再单独写。

原因也很直接：LaTeX / BibTeX / BibLaTeX 的处理链和 Word 不完全一样，很多问题不是“著录规则本身”，而是“样式文件、条目字段、大小写保护、引文宏包配置”带来的。那部分值得单开一篇。

## 参考资料

1. 全国标准信息公共服务平台. [国家标准 GB/T 7714 相关页面](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A&utm_source=chatgpt.com).
2. 清华大学图书馆. [GB/T 7714—2015 整理版 PDF](https://lib.tsinghua.edu.cn/wj/GBT7714-2015.pdf?utm_source=chatgpt.com).
