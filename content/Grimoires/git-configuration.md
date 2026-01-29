---
title: "🛠️ Git 配置秘笈"
description: "~/.gitconfig 個人客製化設定，影響使用者**所有**的 Git 專案。"
permalink: "/git-configuration"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🛠️ Git 配置秘笈

~/.gitconfig 個人客製化設定，影響使用者**所有**的 Git 專案。
```ini
[user]
	name = Ke Clark # 你的名字
	email = xxxx@gmail.com # 你的 Email
[core]
	compression = 9 # 設定 Git 儲存物件時的壓縮等級 (1-9, 9 為最高，壓縮比越高越耗時)
	whitespace = error # 設定 Git 如何處理程式碼中的空白問題
	preloadindex = true # 預先載入索引檔案到記憶體中，以提高效能
[advice]
	addEmptyPathspec = false # 關閉當 add pathspec 為空時的建議
	pushNonFastForward = false # 關閉當 push non-fast-forward 時的建議
	statusHints = false # 關閉 git status 的提示訊息
[url "git@github.com:clark/"]
	insteadOf = "ck:" # 將 "ck:" 替換為 "git@github.com:clark/"，方便 SSH 連線，設定後可以使用 `git clone ck:repo`

[init]
	defaultBranch = dev # 設定 `git init` 後的預設 branch 名稱

[diff]
	context = 3 # 顯示 diff 時，顯示變更內容前後的行數
	renames = copies # 偵測檔案的重新命名，並使用複製的方式
	interHunkContext = 10 # 在 hunk 之間顯示的 context 行數
```
~/.gitignore_global  全域忽略檔案，設定後會影響所有 Git 專案。

~/.stCommitMsg git commit 範本
```git
# <type>(<scope>): <簡短描述>
#
# [可選] 更詳細描述，說明修改原因和內容
#
# BREAKING CHANGE: 描述不相容改動
# Closes #issue
#
# 類型說明：
# feat:     新功能
# fix:      修 bug
# docs:     文件
# style:    格式（空白、排版等）
# refactor: 重構（不改變功能）
# perf:     性能提升
# test:     測試相關
# build:    建置腳本或依賴
# ci:       CI 配置
# chore:    其他雜務
# revert:   回退

```
~/.zshrc 個人指令捷徑設定 (alias)
```zsh
alias gd="git diff --output-indicator-new=' ' --output-indicator-old=' '" # 簡化 git diff 輸出
alias ga="git add --patch" # 使用互動模式添加變更
alias gs="git status --short" # 簡短顯示 git 狀態
alias gc="git commit" # git commit
alias gp="git push" # git push
alias gu="git pull" # git pull
alias gl="git log" # git log
alias gb="git branch" # git branch
alias gi="git init" # git init
alias gcl="git clone" # git clone


```