---
title: "💻 輕量化武裝：VS Code 設定指南 (macOS & Windows)"
description: "這份鍛造配方旨在協助你在技術荒野中快速恢復你的 VS Code 開發武裝。"
permalink: "/vscode-setup-guide"
class: "Oracle"
rarity: "Common"
icon: "🛠️"
tags:
  - Forge
---

# 💻 輕量化武裝：VS Code 設定指南

> [!TOOL] 鍛造指南
> 在多變的開發大陸上，一套穩定且高效的 VS Code 裝備是必不可少的。本配方將引導你收集必要的符文字體與擴充插件，並完成最終的環境鍛造。

## 一、 符文收集：字體安裝

### 1. 取得字體原胚
*   **JetBrains Mono**: [傳送門](https://www.jetbrains.com/lp/mono/)
*   **Hack Nerd Font**: [傳送門](https://www.nerdfonts.com/font-downloads) (推薦選用 Hack)
*   **Fira Code**: [傳送門](https://github.com/tonsky/FiraCode)

### 2. 打印符文 (安裝)

#### macOS
*   **傳統鍛造**：雙擊 `.ttf` 或 `.otf` 文件並點選「安裝」。
*   **奧術指令 (Homebrew)**：
    ```bash
    brew tap homebrew/cask-fonts
    brew install --cask font-jetbrains-mono font-hack-nerd-font font-fira-code
    ```

#### Windows
*   **傳統鍛造**：選取字體右鍵點選「安裝」，或將其置入 `C:\Windows\Fonts` 聖域。

## 二、 擴充武裝：插件安裝

1.  **Catppuccin 視覺幻術**
    *   在商店搜尋「Catppuccin」並安裝。這是調和視覺靈魂的核心色彩。
2.  **Bongocat 守護靈 (Product Icon)**
    *   在商店搜尋「bongocat」，為你的編輯器注入活潑的靈性能量。

## 三、 最終鍛造配方 (settings.json)

> [!IMPORTANT] 核心配方
> 按下 `Cmd/Ctrl + Shift + P` 並輸入 `Preferences: Open Settings (JSON)`，將以下奧術序列寫入你的配置法典：

```json
{
    "editor.fontFamily": "'JetBrains Mono', 'Hack Nerd Font', 'Fira Code'",
    "editor.lineHeight": 20,
    "editor.fontLigatures": true,
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.smoothScrolling": true,
    "editor.minimap.enabled": false,
    "editor.renderLineHighlight": "all",
    "editor.renderWhitespace": "boundary",
    "window.zoomLevel": 1,
    "window.autoDetectColorScheme": true,
    "workbench.preferredDarkColorTheme": "Catppuccin Frappé",
    "workbench.preferredLightColorTheme": "Catppuccin Latte",
    "workbench.sideBar.location": "right",
    "workbench.iconTheme": "catppuccin-frappe",
    "workbench.productIconTheme": "bongocat",
    "editor.fontSize": 13,
    "workbench.auxiliaryActivityBar.location": "default"
}
```

---

## 相關主題

> 💡 **延伸閱讀**：
> - 想要更強力的裝備？參考 [[Forge/intellij-idea-settings|核心裝備強化：IntelliJ IDEA 設定建議]]
> - 守護你的代碼靈魂？參考 [[Grimoires/git-configuration|版本控制咒語：Git 配置秘笈]]

