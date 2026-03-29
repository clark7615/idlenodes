---
title: "🧪 自動化試煉：Newman & CI/CD 測試祭壇"
description: "在部署門戶開啟前，必須通過嚴苛的自動化試煉。掌握 Newman 與 Postman 的融合術式，確保每一道 API 咒語都能精準命中目標。"
permalink: "/newman-cicd-testing"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🧪 自動化試煉：Newman & CI/CD 測試祭壇

> [!BOOK] 秘卷記載
> 未經測試的代碼如同不穩定的魔法能量。在進入生產環境的「永恆位面」前，所有術式必須在 **CI/CD 試煉祭壇** 中接受 **Newman** 的審判。

### 為什麼需要這場試煉？
單元測試僅能確保個別符文（程式碼單元）的完整，而 **API 自動化測試** 則能驗證多重咒語間的連鎖反應（整合），模擬真實冒險者（使用者）的行為路徑，確保整體結界的穩固。

---

## 1. 撰寫 NPC 交互測試 (Postman)

在進入祭壇前，我們需先在 **Postman** 工坊中鍛造測試腳本。

### 範例：`getUserData` API 審查
我們要求此咒語必須達成以下指標：
*   **響應時延**：小於 300ms（急速施法）。
*   **能量狀態**：Status 200（法力充盈）。
*   **屬性檢驗**：`UserData.Enable` 必須為 `true`。

> [!TOOL] Postman 測試術式
> ```javascript
> pm.test("響應時延小於 300ms", function () {
>     pm.expect(pm.response.responseTime).to.be.below(300);
> });
>
> pm.test("能量狀態為 200", function () {
>     pm.response.to.have.status(200);
> });
>
> pm.test("確認隨從處於啟用狀態", function () {
>     var jsonData = pm.response.json();
>     pm.expect(jsonData.Enable).to.eql(true);
> });
> ```

---

## 2. 匯出試煉卷軸 (JSON)

將鍛造好的 **Collection** 與 **Environment** 轉化為試煉祭壇可辨識的 JSON 卷軸。
*   `YourCollectionName.json` (咒語集)
*   `YourEnvironmentName.json` (場景能量配置)

---

## 3. 構築 Bitbucket 試煉管道

透過 `bitbucket-pipelines.yml` 來驅動自動化審判。若試煉失敗，**部署門戶將會關閉**，防止污染生產位面。

> [!SAGE] 試煉管道配置
> ```yaml
> pipelines:
>   default:
>     - step:
>         name: 鍛造編譯 (Compile)
>         script:
>           - # 執行 mvn clean install 或 npm run build
>         artifacts:
>           - target/*
>
>     - step:
>         name: Newman 自動化試煉 (Run Newman tests)
>         image: postman/newman:alpine
>         script:
>           - # 施展 Newman 審判咒語
>           - newman run YourCollectionName.json -e YourEnvironmentName.json -r cli
>
>     - step:
>         name: 開啟部署門戶 (Deploy)
>         script:
>           - # 僅在試煉通過後執行
> ```

---

## 相關主題

> 💡 **延伸閱讀**：
> - 了解後端咒語結構？參考 [[Grimoires/backend-csd-architecture|奧術核心：後端 CSD 架構法典]]
> - 整合多位面文件？參考 [[Grimoires/swagger-multi-site-ui|Swagger 多位面傳輸：跨站點 UI 整合法典]]

