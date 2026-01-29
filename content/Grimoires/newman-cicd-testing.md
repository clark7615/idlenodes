---
title: "🧪 使用 Newman 在 CI/CD 中執行自動化測試"
description: "本教學將引導您如何使用 Newman 在 CI/CD 流程中執行自動化 API 測試。我們將使用 Postman 撰寫測試，匯出成 JSON 檔案，並在 Bitbucket CI/CD 中透過 Newman 執行這些測試。"
permalink: "/newman-cicd-testing"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🧪 使用 Newman 在 CI/CD 中執行自動化測試
#後端/部署 #教學 
## 簡介

本教學將引導您如何使用 Newman 在 CI/CD 流程中執行自動化 API 測試。我們將使用 Postman 撰寫測試，匯出成 JSON 檔案，並在 Bitbucket CI/CD 中透過 Newman 執行這些測試。

**為什麼需要 Newman 測試？**
雖然我們可能已經在程式碼中實作了單元測試，但 Newman 提供的 API 測試仍然有其獨特的價值。單元測試主要驗證程式碼的獨立單元（例如函式或類別）是否運作正常，而 API 測試則著重於驗證不同服務或模組之間的整合是否正確。此外，API 測試可以模擬真實的使用者情境，確保 API 在各種情況下都能正常運作。透過結合單元測試和 API 測試，我們可以更全面地確保應用程式的品質和穩定性。

## 1. 使用 Postman 撰寫 API 測試

首先，我們需要在 Postman 中撰寫 API 測試並設定環境。

### 範例：getUserData API 測試

假設我們有一個 `getUserData` API，我們希望驗證以下幾點：

*   響應時間小於 300ms
*   Status Code 為 200
*   `UserData.Enable` 為 `true`

以下是如何在 Postman 中設定這個測試的步驟：

1.  **建立 Request**:
    *   設定 Request Method (e.g., GET)
    *   輸入 URL (e.g., `https://your-api.com/getUserData`)

2.  **設定 Tests**:
    在 Postman 的 "Tests" 頁籤中，輸入以下 JavaScript 程式碼：

    ```javascript
    pm.test("Response time is less than 300ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(300);
    });

    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    });

    pm.test("User data is enabled", function () {
        var jsonData = pm.response.json();
        pm.expect(jsonData.Enable).to.eql(true);
    });
    ```

3.  **設定 Environment**:
    *   建立一個新的 environment (e.g., "Development").
    *   在 environment 中，您可以設定 API 的 base URL 或任何其他的變數。

## 2. 從 Postman 輸出 JSON 檔案

完成測試撰寫後，將 Postman Collection 和 Environment 輸出成 JSON 檔案。

1.  **Export Collection**:
    *   在 Postman 中，右鍵點擊您的 Collection。
    *   選擇 "Export"。
    *   選擇 "Collection v2.1" 格式並儲存為 `YourCollectionName.json`。

2.  **Export Environment**:
    *   在 Postman 中，點擊 Environment 選單 (右上角)。
    *   點擊 "Download Environment" 旁的眼睛圖示。
    *   選擇 "Export" 並儲存為 `YourEnvironmentName.json`。

將這兩個 JSON 檔案放到您的專案資料夾中。

## 3. 使用 Bitbucket CI/CD 和 Newman 執行測試

現在，我們將設定 Bitbucket CI/CD 來執行 Newman 測試。流程調整為先執行編譯，再執行 Newman 測試，測試失敗則停止部署。

1.  **設定 `bitbucket-pipelines.yml`**:
    在您的專案根目錄中，建立或修改 `bitbucket-pipelines.yml` 檔案。以下是一個範例設定：

    ```yaml
    pipelines:
      default:
        - step:
            name: Compile
            script:
              - echo "這裡執行編譯指令"
              - # 例如：mvn clean install 或 npm run build
            artifacts:
              - target/* # 如果是 Java 專案
              - dist/*   # 如果是 JavaScript 專案

        - step:
            name: Run Newman tests
            image: postman/newman:alpine
            script:
              - newman run YourCollectionName.json -e YourEnvironmentName.json -r cli
            after-script:
              - echo "Newman tests completed"

        - step:
            name: Deploy
            script:
              - echo "部署程式碼"
              - # 部署指令
            after-script:
              - echo "Deployment completed"
    ```

    這個設定檔做了以下事情：

    *   **Compile Step**:
        *   先執行編譯指令。
        *   使用 `artifacts` 將編譯後的檔案保存下來。
    *   **Newman Test Step**:
        *   使用 `postman/newman:alpine` 作為 Docker image，這個 image 已經預先安裝了 Newman。
        *   執行 `newman run` 命令，指定 Collection 和 Environment 檔案。
        *   使用 `-r cli` 參數，只將測試結果輸出到 Pipelines 的 Log 中。
    *   **Deploy Step**:
        *   測試通過後，執行部署指令。

2.  **提交程式碼並觸發 Pipeline**:
    將您的程式碼提交到 Bitbucket 倉庫。Bitbucket Pipeline 將會自動觸發，並按照設定的步驟執行。如果 Newman 測試失敗，Pipeline 將會停止，不會執行部署步驟。

3.  **查看測試結果**:
    在 Bitbucket Pipeline 的執行結果中，您可以查看每個步驟的輸出，包括編譯結果和 Newman 的測試報告。如果測試失敗，您可以在 Newman 的輸出中找到錯誤訊息。

## 結論

透過這個教學，您已經學會如何使用 Newman 在 Bitbucket CI/CD 中執行自動化 API 測試。這可以幫助您確保 API 的品質，並在開發過程中及早發現問題。

