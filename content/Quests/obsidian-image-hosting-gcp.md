---
title: "☁️ 使用 GCP 免費方案建立 Obsidian 圖床（含 Cloud Run API）尚未驗證"
description: "利用 Google Cloud Platform 免費額度，透過 Golang 與 Cloud Run 建立自定圖片上傳 API。"
permalink: "/obsidian-image-hosting-gcp"
class: "Oracle"
rarity: "Epic"
icon: "📜"
tags:
  - Quests
---

# ☁️ 使用 GCP 免費方案建立 Obsidian 圖床（含 Cloud Run API）尚未驗證

### ✅ 一、GCP 初始設定

- 註冊 GCP 並啟用 `$300` 試用（若尚未）
    
- 建立專案，例如 `obsidian-image-host`
    
- 啟用以下 API：
    
    - `Cloud Storage API`
        
    - `Cloud Run API`
        

---

### ✅ 二、建立儲存桶（Cloud Storage Bucket）

- 建立 bucket 名稱：`obsidian-image-host`
    
- 區域選擇：`us-central1`（符合免費額度）
    
- 存儲類型選擇：Standard
    
- 開啟「公開讀取權限」：
```bash
gsutil iam ch allUsers:objectViewer gs://obsidian-image-host
```
---

### ✅ 三、圖片上傳 API（Golang）
```go
package main

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"cloud.google.com/go/storage"
)

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	bucketName := os.Getenv("BUCKET_NAME")

	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "No file uploaded", http.StatusBadRequest)
		return
	}
	defer file.Close()

	client, err := storage.NewClient(ctx)
	if err != nil {
		http.Error(w, "GCS error", http.StatusInternalServerError)
		return
	}
	defer client.Close()

	filename := strings.ReplaceAll(header.Filename, " ", "_")

	obj := client.Bucket(bucketName).Object(filename)
	wc := obj.NewWriter(ctx)
	if _, err := io.Copy(wc, file); err != nil {
		http.Error(w, "Upload failed", http.StatusInternalServerError)
		return
	}
	wc.Close()

	publicURL := fmt.Sprintf("https://storage.googleapis.com/%s/%s", bucketName, filename)
	fmt.Fprint(w, publicURL)
}

func main() {
	http.HandleFunc("/upload", uploadHandler)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	http.ListenAndServe(":"+port, nil)
}

```

---
### 🐳 四、Dockerfile（用於 Cloud Run 部署）
```Dockerfile
FROM golang:1.21

WORKDIR /app
COPY . .
RUN go build -o server .

CMD ["./server"]

```

---

### 🚀 五、部署到 Cloud Run
```bash
# 設定環境變數
export PROJECT_ID=your-project-id
export BUCKET_NAME=obsidian-image-host

# 啟用 IAM 權限 + API（初次部署需要）
gcloud services enable run.googleapis.com
gcloud auth configure-docker

# 部署 Cloud Run
gcloud run deploy obsidian-uploader \
  --source . \
  --region us-central1 \
  --set-env-vars BUCKET_NAME=${BUCKET_NAME} \
  --allow-unauthenticated

```
部署成功後會得到一個 URL，例如：
```bash
https://obsidian-uploader-abc123-uc.a.run.app/upload
```

---

###  🧩 六、設定 Obsidian uploader 插件

- 安裝插件：`obsidian-uploader`
    
- 設定如下：
    
| 設定項目     | 值                            |
| -------- | ---------------------------- |
| 上傳方式     | `Custom Uploader`            |
| 請求方式     | `POST`                       |
| 上傳 URL   | `https://xxx.run.app/upload` |
| 表單欄位名稱   | `file`                       |
| 回應類型     | `Text`                       |
| 圖片連結插入方式 | 使用回傳結果當作圖片連結                 |

---

### 🧼 七、圖片壓縮建議（避免超過免費額度）

- 使用工具如：
    
    - `ImageOptim`（Mac）
        
    - `pngquant`, `jpegoptim`（Linux CLI）
        
    - `RIOT`（Windows）
        
- 壓縮目標建議：
    
    - 一般圖片：100~300KB
        
    - 小圖：50KB 內
        
    - 總存量 < 5GB / 月傳出流量 < 1GB
        

---

### 📊 八、監控與節省建議

- 使用 GCP 控制台的「計費」>「報表」查看用量
    
- 避免爆量：
    
    - 控制圖片大小
        
    - 定期刪除無用圖片
        
    - 可加 Cloud Scheduler 做清理（進階功能）

