---
title: "🐳 Docker 容器資源限制說明文件"
description: "使用 `--cpus` 參數設定容器最多可使用的 CPU 核心數，例如："
permalink: "/Grimoires/Docker 容器資源限制說明文件"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🐳 Docker 容器資源限制說明文件 
#規劃 

## 1. 限制 CPU 使用量

### 1.1 限制可使用的 CPU 數量

使用 `--cpus` 參數設定容器最多可使用的 CPU 核心數，例如：

```
docker run --cpus="1.5" my_container
```

- `1.5` 表示最多可使用 **1.5 顆 CPU**。

### 1.2 綁定特定 CPU 核心

使用 `--cpuset-cpus` 參數讓容器僅在指定的 CPU 核心上運行，例如：

```
docker run --cpuset-cpus="0,1" my_container
```

- 只允許容器在 **CPU 0 和 CPU 1** 上運行。

### 1.3 設定 CPU 權重 (CPU Shares)

使用 `--cpu-shares` 設定容器 CPU 權重（預設值為 1024），當 CPU 忙碌時影響資源分配，例如：
```
docker run --cpu-shares=512 my_container
```

- `512` 表示此容器的 CPU 權重為 **其他容器的一半**。

---

## 2. 限制記憶體使用量

### 2.1 限制最大記憶體

使用 `—memory `參數限制容器可用的記憶體大小，例如：
```
docker run --memory="512m" my_container
```

- 限制容器最多可使用 **512MB 記憶體**。

### 2.2 限制記憶體交換（Swap）

使用 `--memory-swap` 參數設定記憶體 + Swap 總量，例如：
```
docker run --memory="512m" --memory-swap="1g" my_container
```

- 記憶體限制為 **512MB**，Swap 限制為 **512MB**，總計 **1GB**。

---

## 3. 限制 GPU 使用量

### 3.1 限制使用特定 GPU（適用於 NVIDIA GPU）

使用 `--gpus` 參數控制容器可使用的 GPU 數量，例如：

```
docker run --gpus 1 my_container
```

- 限制容器最多使用 **1 張 GPU**。

---

## 4. 綜合限制（CPU、記憶體、綁定 CPU）

可同時限制 CPU、記憶體及綁定特定 CPU，例如：

```
docker run --cpus="2" --memory="1g" --cpuset-cpus="0,1" my_container
```

- 限制最多 **2 顆 CPU**
- 限制最大 **1GB 記憶體**
- 綁定到 **CPU 0 和 1**

---

## 5. 其他注意事項

- 若未限制資源，容器預設可使用主機的所有 CPU 和記憶體。
- `--memory-swap` 需大於 `--memory`，否則可能導致容器無法啟動。
- 以上指令適用於 Docker CLI，若在 Kubernetes 中運行，請改用 `limits` 設定。

