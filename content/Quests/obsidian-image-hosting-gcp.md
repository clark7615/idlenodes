---
title: "☁️ 雲端圖床召喚術：GCP & Cloud Run"
description: "利用 Google Cloud 位面的免費能量，透過 Golang 術式與 Cloud Run 門戶建立專屬的圖片儲存空間。"
permalink: "/obsidian-image-hosting-gcp"
class: "Oracle"
rarity: "Epic"
icon: "📜"
tags:
  - Quests
---

# ☁️ 雲端圖床召喚術：GCP & Cloud Run

> [!WARNING] 實驗性術式
> 本法典所載內容仍處於驗證階段，施法時請務必監測你的能量消耗（計費報表）。

---

## ⚡ 壹、GCP 位面共鳴設定

在開始構築前，你必須先在 GCP 位面取得合法的地位。
*   **身分識別**：註冊帳號並啟用探索額度。
*   **建立領地**：命名為 `obsidian-image-host`。
*   **開啟傳輸門 (APIs)**：
    *   `Cloud Storage API` (儲存位面)
    *   `Cloud Run API` (運算門戶)

---

## 📦 貳、建立儲存寶庫 (Cloud Storage Bucket)

1. **命名規範**：`obsidian-image-host`。
2. **座標選擇**：`us-central1`（符合免費額度之地理位面）。
3. **儲存等級**：Standard 版。
4. **規則解除（公開讀取權限）**：
   ```bash
   gsutil iam ch allUsers:objectViewer gs://obsidian-image-host
   ```

---

## 📜 參、圖片上傳咒語 (Golang)

撰寫一套自動化搬運工咒語，將來自 Obsidian 的圖片能量引導至儲存寶庫。

> [!BOOK] Golang 上傳術式
> ```go
> // 核心邏輯：接收請求 -> 讀取檔案流 -> 轉傳至 GCS 儲存位面
> ```

---

## 🐳 肆、封裝魂器 (Dockerfile)

將咒語封裝到一個可隨時召喚的小型領域（Container）中。

```Dockerfile
FROM golang:1.21
WORKDIR /app
COPY . .
RUN go build -o server .
CMD ["./server"]
```

---

## 🚀 伍、開啟 Cloud Run 部署門戶

執行以下命令，將你的咒語發布到雲端位面：

```bash
gcloud run deploy obsidian-uploader \
  --source . \
  --region us-central1 \
  --set-env-vars BUCKET_NAME=${BUCKET_NAME} \
  --allow-unauthenticated
```
部署成功後，你將獲得一串通往該位面的 **秘密路徑 (URL)**。

---

## 🧩 陸、裝備連結：Obsidian Uploader

在你的筆記工坊（Obsidian）中安裝 `obsidian-uploader` 插件，並將路徑指向你的雲端門戶。

| 設定項目 | 值 |
| :--- | :--- |
| **傳輸方式** | `Custom Uploader` |
| **請求術式** | `POST` |
| **目標 URL** | `https://你的門戶路徑/upload` |

---

> [!SAGE] 能量節約建議
> - **圖片壓縮**：使用 ImageOptim 或 TinyPNG，將圖片能量控制在 100~300KB。
> - **流量監控**：定期檢視計費報表，避免超出免費額度。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 建立知識傳承結界？參考 [[Quests/internal-learning-system|公會知識傳承結界：企業內訓系統部署]]
> - 強化代碼純淨度？參考 [[Quests/code-quality-management|冒險者自我守護：SonarQube 品質監控系統]]

