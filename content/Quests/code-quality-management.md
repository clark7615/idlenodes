---
title: "🔍 冒險者自我守護：SonarQube 品質監控系統"
description: "建立一套基於 Docker 與 SonarQube 的審判天平，持續監控程式碼的純淨度，消除潛在的 Bug 詛咒。"
permalink: "/code-quality-management"
class: "Oracle"
rarity: "Epic"
icon: "📜"
tags:
  - Quests
---

# 🔍 冒險者自我守護：SonarQube 品質監控系統

> [!BOOK] 任務簡報
> 雖然我的法力（編碼能力）已具備一定水平，但在追求技術巔峰的道路上，必須建立一套 **「自我審判系統」**。透過這場試煉，我能即時發現咒語中的裂紋（Bug）與不潔（Code Smell），並在部署前完成淨化。

---

## ⚡ 壹、召喚 SonarQube 審判塔

1. **容器啟動術**
   ```bash
   docker run -d --name sonarqube-altar \
     -p 9000:9000 \
     -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true \
     sonarqube:community
   ```
2. **開啟視界門戶**：前往 [http://localhost:9000](http://localhost:9000)
3. **初次契約**：預設帳號密碼為 `admin` / `admin`。

---

## 💎 貳、建立專案與產生靈力 Token

在審判塔介面中開啟新專案，並生成專屬的 **Token**。這將是導引 IDE（工坊）與審判塔連結的密鑰。

---

## 🛡️ 參、安裝 SonarLint 近衛守護

在你的開發工坊（IDE）中安裝 **SonarLint**，這是你的隱形守護者，它會在每一行代碼寫下時即時給予提示。

---

## 🔗 肆、建立連線：將工坊鏈結至審判塔

1. 在工坊的工具設定中，將 Server URL 指向 `http://localhost:9000`。
2. 注入剛剛生成的 Token。
3. 選擇要同步的專案規則。

---

## 🔮 伍、實行自動化監控

*   **即時告警**：編寫代碼時，SonarLint 會根據審判塔的規則即時標示隱患。
*   **規則同步**：在網頁介面修正規則，所有守護者都會自動同步。

> [!TIP] **進階召喚：Docker MCP 整合**
> 在 [[Grimoires/docker-mcp-toolkit|Docker MCP 召喚術法]] 中安裝 SonarQube MCP server，讓你的 AI 使魔（如 Antigravity）也能直接讀取審判報告，協助修復。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 了解基礎容器技術？參考 [[Grimoires/docker-resource-limits|🐳 容器禁錮：資源限制方案]]
> - 建立雲端圖床？參考 [[Quests/obsidian-image-hosting-gcp|雲端圖床召喚術：GCP & Cloud Run]]

