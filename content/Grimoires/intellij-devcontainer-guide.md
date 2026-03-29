---
title: "📦 魔法工坊配置：DevContainer 教學"
description: "本法典將引導你如何在 IntelliJ 中建立 DevContainer，構建一個絕對隔離且一致的開發工坊空間。"
permalink: "/intellij-devcontainer-guide"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 📦 魔法工坊配置：DevContainer 教學

> [!BOOK] 法典引言
> 為了避免開發環境中紛雜的殘留物（依賴衝突）干擾法術的純淨，我們使用 **DevContainer** 技術。這能為你的每一項專案建立獨立的「異世界工坊」，確保開發成果在任何環境下都能正常運作。

---

## 1. 啟動工坊藍圖

1.  **創立基礎專案**：在 IntelliJ 中新建專案，此時無需特別挑選本地 JDK，因為我們將使用隔離空間中的能量。
2.  **選擇建置系統**：記錄你使用的 **Maven** 或 **Gradle**。
3.  **開啟 Dev Container 設定**：導航至 `File` > `New` > `Dev Container config...`。
4.  **注入 Java 範本**：搜尋並選擇 "java" 範本。
5.  **配置範本選項**：確認 Build System 設定（如 Maven 21）。
6.  **確認**：點擊 "OK"，系統將自動產生 `.devcontainer` 資料夾。

---

## 2. `.devcontainer.json` 咒語解析

這是控制整個工坊環境的核心契約。

```json
{
  "name": "Java Workshop", 
  // 使用官方提供的能量鏡像 (Image)
  "image": "mcr.microsoft.com/devcontainers/java:1-21-bullseye", 

  "features": {
    "ghcr.io/devcontainers/features/java:1": { 
      "version": "none", 
      "installMaven": "true", 
      "installGradle": "false"
    }
  },

  // 門檻映射 (Ports Forwarding)
  // "forwardPorts": [8080],

  "customizations": {
    "jetbrains": {
      "backend": "IntelliJ" 
    }
  }
}
```

### 關鍵術語解釋
*   **image**: 魔法工坊的基礎環境鏡像。
*   **forwardPorts**: 將工坊內部的共鳴門檻（Port）映射至實體界域，方便測試。
*   **postCreateCommand**: 工坊建立完成後立即執行的自動化咒語（指令）。

---

## 3. 正式降臨 Dev Container

1.  **啟動隔離空間**：在設定檔完成後，點擊編輯器上方的小盒子圖示：「Create Dev Container and Mount Source...」。
2.  **選擇投射介面**：選擇使用 IntelliJ 作為你的操作介面。

> [!SAGE] 提示
> 等待進度條完成後，系統會開啟一個全新的視窗，那就是你的隔離工坊。

---

## 4. 驗證結界狀態

連線成功後，IntelliJ 右下角會顯示當前工坊的資源消耗。你可以開啟終端機，執行 `java -version`。

> [!TOOL] 驗證指令
> `java -version`
> 若輸出的版本與你契約中設定的一致，則代表召喚成功。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 擴展 AI 僕從的視覺？參考 [[Grimoires/docker-mcp-toolkit|容器召喚術：Docker MCP Toolkit]]
> - 強化本地裝備？參考 [[Forge/intellij-idea-settings|核心裝備強化：IntelliJ IDEA 設定建議]]
> - 控管工坊負載？參考 [[Grimoires/docker-resource-limits|容器禁錮：資源限制方案]]

