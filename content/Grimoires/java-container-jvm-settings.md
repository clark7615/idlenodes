---
title: "☕ JVM 強化：Java Container 高效設置法"
description: "掌握 JVM 記憶體分配的秘術，在容器結界中精準控制奧術能量的流動。"
permalink: "/java-container-jvm-settings"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# ☕ JVM 強化：Java Container 高效設置法

> [!BOOK] 背景卷軸
> 當 Java 應用在 JVM 聖域中運行時，預設會分配大額的能量（記憶體）。在容器（如 Docker）的限制環境中，這種貪婪的行為常導致**能量過載 (OOM)**。本法典旨在教導如何精準禁錮這些能量，確保應用程式穩定運行。

## 核心問題
在容器中，JVM 預設可能無法感知到外部結界 (cgroup) 的限制，導致它試圖索取超出限額的資源，最終引發環境崩潰。

---

## 奧術解決方案

### 1. 啟用容器感應 (-XX:+UseContainerSupport)
這是基礎的「感應術」，讓 JVM 能自動偵測自己是否處於容器結界中。

*   **效果**：JVM 會主動查詢容器的 **cgroup 資訊**，自動調整其能量分配邏輯，大幅降低意外崩潰的風險。

### 2. 能量上限禁錮 (-Xmx)
手動設定堆積記憶體 (Heap Memory) 的最高上限。

```shell
-Xmx<大小> # 例如：-Xmx512m
```

### 3. 使用 G1 奧術回收器 (-XX:+UseG1GC)
這是一種專為處理複雜分配而設計的高效回收術，在資源受限的環境中表現尤為平衡。

---

## 召喚範例與建議配置

> [!TOOL] 完整召喚指令
> `java -XX:+UseContainerSupport -Xmx512m -XX:+UseG1GC -jar your-artifact.jar`

### 各職業建議配置基準

*   **小型驗證系統 (Auth):**
    *   `-Xmx256m` + `G1GC`
*   **後端 API 法師 (處理 DB):**
    *   `-Xmx1024m` + `G1GC`
    *   `-XX:MaxRAMPercentage=75.0` (保留 25% 給系統維持結界)
*   **即時控制程式 (Modbus/IoT):**
    *   `-Xmx512m` + `G1GC`
    *   `-XX:InitiatingHeapOccupancyPercent=35` (更早開始回收以保持反應速度)

> [!CAUTION] 注意
> 請務必根據實際戰況（監控數據）隨時微調這些數值。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 如何管理容器資源？參考 [[Grimoires/docker-resource-limits|容器禁錮：資源限制方案]]
> - 建立穩定的開發工坊？參考 [[Grimoires/intellij-devcontainer-guide|魔法工坊配置：DevContainer 教學]]

