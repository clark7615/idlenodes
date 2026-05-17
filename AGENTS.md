# idlenodes 知識庫公約

## 目錄對照

| 目錄 | 用途 | TAG |
|------|------|-----|
| `Grimoires/` | 技術魔法（Git、Docker、Java、AI） | `Grimoires` |
| `Dictums/` | 管理敕令（Scrum、SMART、會議、復盤） | `Dictums` |
| `Artifice/` | 奧術工藝（UI、皮藝、Obsidian） | `Artifice` |
| `Quests/` | 任務記錄（CI/CD、內訓系統） | `Quests` |
| `Forge/` | 工具配置（IntelliJ、VS Code） | `Forge` |
| `SageTower/` | 學校作業 — YAML 遵守，其餘放生 | `SageTower` |
| `Assets/` | 圖片資源 | — |

## YAML Frontmatter

**所有檔案（含 SageTower/）** 必須包含以下 frontmatter（欄位順序固定）：

```yaml
---
title: "..."
description: "..."
permalink: "/kebab-case-slug"
class: "Oracle"
rarity: "Rare"
icon: "..."
tags:
  - DirectoryName
---
```

- `title`: 可用 emoji 開頭
- `permalink`: 與檔名 slug 一致
- `class`: 統一 `"Oracle"`
- `rarity`: 稀有度，對應顏色如下
- `icon`: 一個 emoji
- `tags`: YAML list，第一個值對應父目錄；跨主題才加第二個（如 `Career`）

### 稀有度配色

| 稀有度 | Hex | 色票 |
|--------|-----|------|
| `Common` | `#9d9d9d` | 灰 |
| `Rare` | `#0070dd` | 藍 |
| `Epic` | `#a335ee` | 紫 |
| `Legendary` | `#ff8000` | 橙 |
| `Unique` | `#e6cc80` | 金 |

## Wiki Link 格式

| 用途 | 格式 |
|------|------|
| 跨頁連結 | `[[Dir/file\|顯示名稱]]` |
| 同目錄連結 | `[[file\|顯示名稱]]` |
| 回首頁 | `[[index.md]]` |
| 圖片嵌入 | `![[Assets/file.png]]` |
| 外部 URL | Markdown `[text](url)` |

## 雙向連結原則

1. **相關文章區塊**：每篇文章底部 `> - 一句話描述？參考 [[Dir/file\|名稱]]`
2. **雙向對稱**：A 連到 B 時，B 也應該連回 A
3. **例外**：`index.md` 和 `persona.md` 是導覽入口，不需從各篇連回
4. 新文章建立後，需手動補上相關文章的雙向連結

## SageTower 放生原則

- **YAML Frontmatter 仍需遵守**（title、description、permalink、class、rarity、icon、tags），且 tag 不可有 `#` 前綴
- 不搬、不移、不改內部連結、不補雙向連結
