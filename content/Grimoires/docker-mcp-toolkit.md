---
title: "🔮 容器召喚術：Docker MCP Toolkit"
description: "探討如何利用 Model Context Protocol (MCP) 技術，在數位結界中擴展奧術先知的視野。"
permalink: "/docker-mcp-toolkit"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🔮 容器召喚術：Docker MCP Toolkit

> [!BOOK] 秘法定義：AI MCP 伺服器
> AI MCP 伺服器是一種基於 **Model Context Protocol (模型上下文協定)** 的技術，旨在擴展奧術應用的感知能力與工具箱。

### 核心概念
*   **MCP 伺服器 (Server)**：輕量級的奧術僕從，負責提供資料或執行特定的實體操作。
*   **MCP 主機 (Host)**：如 Windsurf 等 AI 應用，作為「奧術核心（大腦）」，透過 MCP 伺服器獲取外部資訊。
*   **定位**：如同附加的能量模組，能無縫增強 AI 的施法精度，簡化繁雜的解析流程。

### 深入探究
MCP 伺服器可被視為 AI 代理程式的「知識圖書館」或「魔法道具箱」。它允許應用存取各種外部界域的資源，而不必將所有知識都禁錮在核心代碼中。

*   **運作邏輯**：透過標準協定通訊，主機向伺服器發出「共鳴請求」，伺服器執行處理後回傳結果。
*   **奧術優勢**：
    *   **模組化**：易於更新且不互相干擾。
    *   **靈活性**：可連接至不同的資料源。
    *   **可重用性**：同一個伺服器可同時支援多個 AI 主機。

---

## 🛠️ Docker MCP Toolkit：召喚工具箱

**Docker MCP Toolkit** 是一個專為簡化「容器化 MCP 伺服器」設計的召喚藍圖，旨在降低管理難度並提升安全性。

### 強化屬性
*   **簡化法陣**：提供安全的預設配置，實現一鍵設置。
*   **集中統籌**：在 Docker 結界中無縫執行多個容器化伺服器。
*   **安全防護**：自動處理身分驗證與通訊加密，確保奧術鏈接不被干擾。

## 📜 在 Windsurf 結界中進行共鳴

1.  **開啟 Docker 管理頁面**：啟動 Docker Desktop 並導航至 MCP Toolkit 頁面。
2.  **挑選僕從 (Catalog)**：在目錄中找到需要的服務（例如 DuckDuckGo），點擊「+」號將其召喚至你的結界。
3.  **配置 Client 鏈接**：在 Clients 分頁選擇 Windsurf 或直接使用 `docker mcp gateway run` 指令。
4.  **注入設定**：
    *   在 Windsurf 的 Cascade 視窗點擊「槌子圖示」(MCP Server)。
    *   在 `mcp_config.json` 中注入以下奧術序列：
    ```json
    {
        "mcpServers": {
            "docker MCP gateway": {
                "command": "docker",
                "args": ["mcp", "gateway", "run"]
            }
        }
    }
    ```
5.  **法術重裝**：重啟 IDE 後，Cascade 將能感知到所有已部署的 Tool，你可以正式調用這些 MCP 功能了。

> [!SAGE] 總結
> 透過此法典，你已學會如何利用 Docker 結界擴展 Windsurf 的視野。你的 AI 不再受限於靜態知識，而是能**即時感知外界變化，為你的決策提供更具時效性的共鳴。**

---
## 相關主題

> 💡 **延伸閱讀**：
> - 想了解如何撰寫更好的AI提示詞？參考 [[Grimoires/ai-prompts-guide|AI提示詞完全攻略：有效引導大型語言模型]]
> - 想了解AI與提示詞的基礎概念？參考 [[Grimoires/gpt-prompt-engineering|AI與提示詞工程學：高效使用GPT的策略]]
> - 想了解如何設定DevContainer開發環境？參考 [[Grimoires/intellij-devcontainer-guide|IntelliJ DevContainer 設定教學手冊]]
> - 想了解Docker容器資源管理？參考 [[Grimoires/docker-resource-limits|Docker 容器資源限制說明文件]]
> - 了解代碼品質監控？參考 [[Quests/code-quality-management|冒險者自我守護：SonarQube 品質監控系統]]


