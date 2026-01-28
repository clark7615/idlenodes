---
title: "🛠️ Docker MCP Toolkit"
description: "AI MCP 伺服器是一種基於模型上下文協定 (Model Context Protocol) 的技術，旨在擴展 AI 應用程式的功能。"
permalink: "/Grimoires/Docker MCP Toolkit"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🛠️ Docker MCP Toolkit

## AI MCP 伺服器 (AI MCP Server)

AI MCP 伺服器是一種基於模型上下文協定 (Model Context Protocol) 的技術，旨在擴展 AI 應用程式的功能。

**核心概念：**
*   **MCP 伺服器**：輕量級程式，負責提供 AI 代理程式所需的資料或工具。
*   **MCP 主機**：AI 應用程式 (例如 Windsurf)，作為 "AI 大腦"，使用 MCP 伺服器獲取資訊。
*   **用途**：透過提供上下文，簡化 AI 工作流程，如同外掛程式一般增強 AI 能力，就像外掛程式一樣。

**更詳細的介紹：**

MCP 伺服器可以被視為 AI 代理程式的「知識庫」或「工具箱」。它允許 AI 應用程式存取各種外部資源和功能，而無需將這些功能直接內建於 AI 應用程式本身。

*   **運作方式：** MCP 伺服器透過定義好的協定 (MCP) 與 AI 應用程式 (MCP 主機) 通訊。AI 應用程式可以向 MCP 伺服器發送請求，要求特定資訊或執行特定操作。MCP 伺服器接收到請求後，會執行相應的處理，並將結果返回給 AI 應用程式。

*   **優勢：**
    *   **模組化：** 允許 AI 應用程式以模組化的方式擴展功能，易於維護和更新。
    *   **靈活性：** 可以輕鬆地連接到各種不同的資料來源和工具，提供豐富的上下文資訊。
    *   **可重用性：** 相同的 MCP 伺服器可以被多個 AI 應用程式使用，提高資源利用率。
    *   **降低複雜性：** 簡化 AI 應用程式的開發，無需處理底層的資料獲取和處理細節。

*   **應用範例：**
    *   **資訊檢索：** 連接到搜尋引擎或資料庫，為 AI 提供最新的資訊。
    *   **工具整合：** 允許 AI 應用程式使用各種工具，例如翻譯器、計算器等。
    *   **外部知識：** 提供特定領域的知識，例如醫學、法律等。

## Docker MCP Toolkit

**Docker MCP Toolkit** 是一個 Docker 工具，旨在簡化 AI 代理程式與 MCP 伺服器的連接、管理和執行。

**主要優勢：**

*   **簡化設定**：提供安全的預設配置和一鍵設定，降低使用門檻。
*   **集中管理**：無縫地設定、管理和執行容器化的 MCP 伺服器。
*   **擴展 AI 能力**：連接 AI 代理程式到各種工具，擴展其功能。
*   **安全**：處理設定、身份驗證和安全問題，確保安全連接。
*   **生態系統**：支援不斷增長的 LLM（大型語言模型）客戶端生態系統。

**使用方式：**

1.  安裝 Docker Desktop 4.10 或更高版本。
2.  從 Docker Desktop 的 Settings 中找到 Beta Features 頁面，啟用 Docker MCP Toolkit。

## 在 Windsurf 中使用 Docker MCP Toolkit

1.  **開啟 Docker Desktop 並切換到 MCP Toolkit 頁面**：
    *   啟動 Docker Desktop 應用程式。
    *   在 Docker Desktop 的介面中，找到並點擊 MCP Toolkit 的圖示或選項，進入 MCP Toolkit 的管理頁面。
2.  **從 Catalog 中選擇 MCP 服務**：
    *   在 MCP Toolkit 頁面中，瀏覽可用的 MCP 服務 Catalog。
    *   找到您需要的 MCP 服務，例如 DuckDuckGo。
    *   點擊該服務卡片右上角的「+」號，以新增該服務。
3.  **選擇 Clients**：
    *   切換到 Clients 分頁，選擇您要加入的服務。Docker Desktop 提供了許多 Clients 以供使用，例如 Claude Desktop、Continue.dev、Cursor、Gordon，以及直接使用 `docker mcp gateway run`。(這邊我們以 Windsurf 或是直接使用 `docker mpc gateway run` 的方式。)
4.  **設定 Windsurf IDE**：
    *   在 Cascade 視窗下找到槌子的圖示 MCP Server 後點擊。將會列出你有多少個 MCP Server 與 Cascade 串接在一起。這時我們點選後面的 Configure。
    *   會跳出 Manage plugins 頁面。點選 view raw config 並在 mcp_config.json 輸入以下內容：
    ```json
    {
        "mcpServers": {
            "docker MCP gateway": {
                "command": "docker",
                "args": [
                    "mcp",
                    "gateway",
                    "run"
                ]
            }
        }
    }
    ```
    *   關閉 IDE 重新啟動後，它就能抓到你多少個 tool 可以使用，這時你就能正常地調用這些 MCP 功能了。

**結論**

透過本教學，您已學會如何使用 Docker MCP Toolkit 將 Windsurf 連接到 MCP 伺服器，從而擴展 Windsurf 的 AI 功能。現在，您的 Windsurf 不僅可以執行傳統的 AI 任務，還能透過連接到搜尋網站等工具，**即時獲取最新的資訊，為您的 AI 提供更豐富、更即時的上下文，讓 AI 的回答更準確、更具時效性。**
---

## 相關主題

> 💡 **延伸閱讀**：
> - 想了解如何撰寫更好的AI提示詞？參考 [[AI提示詞完全攻略：有效引導大型語言模型]]
> - 想了解AI與提示詞的基礎概念？參考 [[AI與提示詞工程學：高效使用GPT的策略]]
> - 想了解如何設定DevContainer開發環境？參考 [[IntelliJ DevContainer 設定教學手冊]]
> - 想了解Docker容器資源管理？參考 [[Docker 容器資源限制說明文件]]
> - 想了解容器化開發環境的具體設定？MCP提供豐富的上下文給AI，而DevContainer則提供一致的開發環境，兩者配合使用效果更佳。


