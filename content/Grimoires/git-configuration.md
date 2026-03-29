---
title: "📜 版本控制咒語：Git 配置秘笈"
description: "掌握 ~/.gitconfig 的核心奧秘，讓你的所有 Git 專案都受到全域規則的庇護。"
permalink: "/git-configuration"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 📜 版本控制咒語：Git 配置秘笈

> [!BOOK] 法典記載
> `~/.gitconfig` 是記錄每位先知行為偏好的基礎法典。一旦設定，所有的版本傳送 (Commit) 與追蹤 (Trace) 都將遵循這些全域準則。

## 1. 核心結界配置 (Core Config)

```ini
[user]
	name = Ke Clark # 你的真名 (或聖號)
	email = xxxx@gmail.com # 奧術聯絡信箱
[core]
	compression = 9 # 最高等級的壓縮法陣 (1-9)，壓縮比越高，空間節省越顯著但耗費魔力 (CPU)
	whitespace = error # 嚴格檢查空白符文的誤植
	preloadindex = true # 預先載入索引，加速感應效能
[advice]
	addEmptyPathspec = false # 減少不必要的建議干擾
	pushNonFastForward = false 
	statusHints = false # 屏蔽基礎提示，讓視界更清爽
[url "git@github.com:clark/"]
	insteadOf = "ck:" # 奧術縮寫：使用 `git clone ck:repo` 即可快速跨界傳送
[init]
	defaultBranch = dev # 預設的初始分支界域
[diff]
	context = 3 # 顯示變更前後的 3 行鄰近咒語
	renames = copies # 智能偵測重新命名
```

## 2. 傳送契約範本 (~/.stCommitMsg)

> [!SAGE] 契約說明
> 每次提交代碼都是一次正式的契約簽署。遵循下列格式，能讓未來的你或其他先知更輕易地理解這次變動的意圖。

```git
# <type>(<scope>): <簡短描述>
#
# [可選] 更詳細描述，說明修改原因與奧術邏輯
#
# BREAKING CHANGE: 描述不相容的毀滅性改動
# Closes #issue
#
# 咒語類型說明：
# feat:     新功能 (New Trait)
# fix:      修復 Bug (Cleanse Bug)
# docs:     文件 (Records)
# style:    格式 (Aesthetics)
# refactor: 重構 (Refactoring)
# perf:     效能提升 (Empower)
# test:     測試 (Trial)
# build:    建置相關 (Crafting)
# ci:       CI 配置 (Ritual)
# chore:    雜務 (Maintenance)
# revert:   回溯時空 (Revert)
```

## 3. 施法捷徑 (~/.zshrc Alias)

```zsh
# 快速施法術語
alias gd="git diff --output-indicator-new=' ' --output-indicator-old=' '" # 視覺淨化 Diff
alias ga="git add --patch" # 精細選擇要加入契約的變更
alias gs="git status --short" # 快速掃描當前界域狀態
alias gc="git commit" # 簽署契約
alias gp="git push" # 跨界傳送
alias gu="git pull" # 接收遠端召喚
alias gl="git log" # 查閱歷史卷軸
alias gb="git branch" # 查看分身界域
alias gi="git init" # 啟動新結界
alias gcl="git clone" # 複製現有法典
```

---

## 相關主題

> 💡 **延伸閱讀**：
> - 建立一致的 IDE 視野？參考 [[Forge/vscode-setup-guide|輕量化武裝：VS Code 設定指南]]
> - 想要更強力的裝備？參考 [[Forge/intellij-idea-settings|核心裝備強化：IntelliJ IDEA 設定建議]]