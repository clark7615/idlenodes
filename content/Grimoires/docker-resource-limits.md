---
title: "🐳 容器禁錮：Docker 資源限制方案"
description: "精準掌控容器結界的能量消耗，防止單一僕從過度索取導致整個位面崩備。"
permalink: "/docker-resource-limits"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🐳 容器禁錮：Docker 資源限制方案

> [!BOOK] 秘卷記載
> 在多重容器共存的環境中，若不加限制，貪婪的僕從將會吞噬主機位面的所有精華。透過**資源限制 (Resource Limits)**，我們可以為每個結界建立鋼鐵般的能量邊限。

---

## 1. CPU 能量限制

### 1.1 核心配額
使用 `--cpus` 參數設定容器最多可調用的 CPU 力量核心數。

```bash
docker run --cpus="1.5" my_container
```
- **解讀**：該容器最多僅能發揮 **1.5 顆核心** 的效能。

### 1.2 核心綁定 (Affinity)
使用 `--cpuset-cpus` 將容器限制在特定的實體核心上運行。

```bash
docker run --cpuset-cpus="0,1" my_container
```
- **解讀**：該僕從僅能於 **CPU 0 與 CPU 1** 的範疇內施法。

### 1.3 優先級權重 (Shares)
使用 `--cpu-shares` 設定容器 CPU 權重（預設值為 1024）。

```bash
docker run --cpu-shares=512 my_container
```
- **解讀**：在能量枯竭的競爭時刻，此容器獲得的力量僅為標準容器的一半。

---

## 2. 記憶體容量禁錮

### 2.1 最大限額 (Memory)
使用 `--memory` 參數限制容器可汲取的記憶體精華。

```bash
docker run --memory="512m" my_container
```
- **解讀**：強行限制容器使用的記憶體不得超過 **512MB**。

### 2.2 交換空間限制 (Swap)
使用 `--memory-swap` 參數設定記憶體 + Swap 總量。

```bash
docker run --memory="512m" --memory-swap="1g" my_container
```
- **解讀**：實體限額 512MB，總能量（含虛擬空間）限額 1GB。

---

## 3. 元素感應限制 (GPU)

### 3.1 限制使用特定 GPU
針對需要強大元素計算（NVIDIA）的容器進行限制。

```bash
docker run --gpus 1 my_container
```
- **解讀**：僅允許調用 **1 張 GPU** 進行加速。

---

## 4. 綜合禁錮範例

同時施加多重限制，建立完美的穩定結界：

```bash
docker run --cpus="2" --memory="1g" --cpuset-cpus="0,1" my_container
```
- **效果**：限制 2 核心、1GB 記憶體，並精準定位於核心 0 與 1。

> [!CAUTION] 警告
> - 若未設置限制，僕從預設將佔用主機所有資源。
> - `--memory-swap` 必須大於 `--memory`，否則召喚儀式將失敗。
> - 在 **Kubernetes** 高階界域中，請使用 `limits` 配置代替 CLI 參數。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 如何設置 JVM 的內部能量？參考 [[Grimoires/java-container-jvm-settings|JVM 強化：Java Container 高效設置法]]
> - 建立一致的開發結界？參考 [[Grimoires/intellij-devcontainer-guide|魔法工坊配置：DevContainer 教學]]
> - 使用 Docker 召喚 MCP 工具？參考 [[Grimoires/docker-mcp-toolkit|容器召喚術：Docker MCP Toolkit]]
> - 結合容器與代碼品質監控？參考 [[Quests/code-quality-management|冒險者自我守護：SonarQube 品質監控系統]]

