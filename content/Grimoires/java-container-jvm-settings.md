---
title: "☕ Java Container JVM 高效設置法"
description: "當 Java 應用程式在 JVM 上運行時，預設情況下 JVM 會預先分配一定量的記憶體。在容器環境（如 Docker）中，這種預設行為可能會導致系統資源的過度佔用，特別是當應用程式的實際需求遠小於 JVM 的預設分配量時。"
permalink: "/java-container-jvm-settings"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# ☕ Java Container JVM 高效設置法
#後端/部署 #教學 

## 前情提要

當 Java 應用程式在 JVM 上運行時，預設情況下 JVM 會預先分配一定量的記憶體。在容器環境（如 Docker）中，這種預設行為可能會導致系統資源的過度佔用，特別是當應用程式的實際需求遠小於 JVM 的預設分配量時。

## 問題

在 Docker 容器中運行 Java 應用程式時，若未經適當配置，JVM 可能會佔用大量系統記憶體，導致資源浪費，甚至影響系統效能。

## 目標

優化 JVM 在容器中的記憶體使用，使其更有效地利用資源，避免不必要的記憶體佔用。

## 解決方案

以下是幾種設置 JVM 以優化其在容器中運行的方式：

### 1. 告知 JVM 運行於容器中

使用 `-XX:+UseContainerSupport` 參數，可以讓 JVM 偵測到它正在容器中運行，並根據容器的資源限制進行調整。

**原理：**
在沒有這個參數的情況下，JVM 可能會嘗試使用主機系統的資源資訊，而不是容器的資源限制。啟用 `UseContainerSupport` 後，JVM 會查詢容器的 cgroup 資訊，以獲取 CPU 和記憶體限制。這允許 JVM 更準確地配置其記憶體使用，避免超出容器的限制，從而減少 OOM (Out of Memory) 錯誤的風險，並提高資源利用率。

### 2. 限制 JVM 的最大記憶體使用量

使用 `-Xmx` 參數來限制 JVM 的最大堆積記憶體使用量。這可以防止 JVM 佔用超過容器可用記憶體的資源。

```shell
-Xmx<size>
```

例如，若要限制 JVM 使用 512MB 的記憶體，可以使用：

```shell
-Xmx512m
```

### 3. 使用 G1 垃圾回收器

G1 (Garbage First) 垃圾回收器是專為大型堆積記憶體設計的，並且在資源受限的環境中表現良好。可以使用以下參數啟用 G1 回收器：

```shell
-XX:+UseG1GC
```

### 4. 調整其他 JVM 參數

根據應用程式的需求，還可以調整其他的 JVM 參數，例如：

*   `-XX:MaxRAMPercentage`: 設置 JVM 可以使用的最大 RAM 百分比。
*   `-XX:InitialRAMPercentage`: 設置 JVM 啟動時使用的初始 RAM 百分比。

### 範例

以下是一個完整的範例，展示如何設置 JVM 參數以優化在 Docker 容器中的運行：

```shell
java -XX:+UseContainerSupport -Xmx512m -XX:+UseG1GC -jar your-application.jar
```

### 建議設置基準

1.  **小型的 auth 系統:**

    *   `-XX:+UseContainerSupport`
    *   `-Xmx256m`
    *   `-XX:+UseG1GC`
2.  **後端的 API 伺服器 (處理 Database):**

    *   `-XX:+UseContainerSupport`
    *   `-Xmx1024m`
    *   `-XX:+UseG1GC`
    *   `-XX:MaxRAMPercentage=75.0`
3.  **Java base 的自動控制程式 (Modbus, 即時反應):**

    *   `-XX:+UseContainerSupport`
    *   `-Xmx512m`
    *   `-XX:+UseG1GC`
    *    `-XX:InitiatingHeapOccupancyPercent=35`

*請依照實際狀況調整以上建議值*
## 結論

通過適當配置 JVM 參數，可以顯著提高 Java 應用程式在容器中的效能和資源利用率。

