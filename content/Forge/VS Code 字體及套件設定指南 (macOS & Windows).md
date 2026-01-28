---
title: "💻 VS Code 字體及套件設定指南 (macOS & Windows)"
description: "這份指南旨在協助您在 macOS 和 Windows 系統上快速配置 VS Code 的字體和套件，以便在重灌系統後能快速恢復您的開發環境。"
permalink: "/Forge/VS Code 字體及套件設定指南 (macOS & Windows)"
class: "Oracle"
rarity: "Common"
icon: "🛠️"
tags:
  - Forge
---

# 💻 VS Code 字體及套件設定指南 (macOS & Windows)
#軟體設定 
這份指南旨在協助您在 macOS 和 Windows 系統上快速配置 VS Code 的字體和套件，以便在重灌系統後能快速恢復您的開發環境。
## 字體安裝
### 1. 字體下載
*   JetBrains Mono: [https://www.jetbrains.com/lp/mono/](https://www.jetbrains.com/lp/mono/)
*   Hack Nerd Font: [https://www.nerdfonts.com/font-downloads](https://www.nerdfonts.com/font-downloads) (選擇 Hack)
*   Fira Code: [https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)

### 2. 字體安裝

#### macOS

**手動安裝**
1.  下載字體壓縮包後解壓縮。
2.  雙擊每個 `.ttf` 或 `.otf` 字體文件。
3.  點擊 "安裝字體" 按鈕。

**使用 Homebrew 安裝**
如果您使用 Homebrew，可以使用以下指令安裝字體：
```bash
# 首先確保已經安裝了 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 檢查是否已經安裝了 cask-fonts
brew tap homebrew/cask-fonts
# 安裝字體
brew install --cask font-jetbrains-mono
brew install --cask font-hack-nerd-font
brew install --cask font-fira-code
```
#### Windows

**手動安裝**

1.  下載字體壓縮包後解壓縮。
2.  選取所有 `.ttf` 字體文件。
3.  右鍵點擊並選擇 "安裝"，或複製到 `C:\Windows\Fonts` 目錄。

## VS Code 套件安裝

1.  **Catppuccin 主題**

    *   Catppuccin Frappé: 在 VS Code 擴充商店搜尋 "Catppuccin Frappé" 並安裝。
    *   Catppuccin Latte: 在 VS Code 擴充商店搜尋 "Catppuccin Latte" 並安裝。
2.  **Bongocat 產品圖示主題**

    *   在 VS Code 擴充商店搜尋 "bongocat" 並安裝。

## VS Code 設定 (settings.json)

1.  **開啟 settings.json**

    *   在 VS Code 中，按下 `Cmd + Shift + P` (macOS) 或 `Ctrl + Shift + P` (Windows) 開啟命令面板。
    *   輸入 "Preferences: Open Settings (JSON)" 並選擇它。
2.  **複製設定**

    將以下設定複製到 `settings.json` 文件中：

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
        "workbench.auxiliaryActivityBar.location": "default",
    }
    ```

## 總結

1.  **字體**

    *   下載並安裝 JetBrains Mono, Hack Nerd Font, Fira Code 字體。
    *   (macOS 可選) 使用 Homebrew 安裝 Nerd Font:
        `brew tap homebrew/cask-fonts && brew install --cask font-hack-nerd-font`
2.  **VS Code 套件**

    *   安裝 Catppuccin Frappé, Catppuccin Latte, bongocat 套件。
3.  **VS Code 設定**

    *   將提供的 `settings.json` 設定複製到 VS Code 的設定文件中。

## 備註

*   請確保 VS Code 已經安裝。
*   如果使用 Homebrew 安裝字體，請先安裝 Homebrew (macOS)。
*   您可以根據個人喜好調整 `settings.json` 中的設定。

希望這份指南對您有幫助！

---

## 相關主題

> 💡 **延伸閱讀**：
> - 想了解 IntelliJ IDEA 的設定建議？參考 [[IntelliJ IDEA 設定建議]]
> - 想了解 Git 配置？參考 [[Git 配置秘笈]]
> - 兩種 IDE 的設定可以保持一致性，讓你在不同開發環境中都有相同的體驗。

