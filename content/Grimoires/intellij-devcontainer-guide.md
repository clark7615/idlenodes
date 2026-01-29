---
title: "📦 IntelliJ DevContainer 設定教學手冊"
description: "本教學將引導您如何在 IntelliJ 中設定 DevContainer，以便在隔離且一致的開發環境中工作。"
permalink: "/intellij-devcontainer-guide"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 📦 IntelliJ DevContainer 設定教學手冊 
#教學 
本教學將引導您如何在 IntelliJ 中設定 DevContainer，以便在隔離且一致的開發環境中工作。

## 1. 建立新的專案

1.  **建立專案但不選擇 JDK**：由於我們將使用 DevContainer，因此建立專案時，不需要特別指定 JDK。
2.  **選擇 Build System**：請記錄您選擇的 Build System (Maven 或 Gradle)，後續設定 DevContainer 時會用到。
3.  **開啟 Dev Container 設定**：點選 `File` > `New` > `Dev Container config...`。
4.  **選擇 Java 範本**：在彈出視窗的 "Dev Container Template" 下拉選單中，搜尋 "java"。
5.  **設定範本選項**：在 "Template Options" 中，選擇您使用的 Maven 或 Gradle。
6.  **確認**：點擊 "OK"。

完成以上步驟後，專案資料夾下會自動產生 `devcontainer` 資料夾，其中包含 `.json` 設定檔。

![[devcontainer_template_select.png]]
![[devcontainer_config_files.png]]

## 2. `.devcontainer.json` 設定檔說明
以下是一個 `.devcontainer.json` 設定檔的範例，並提供詳細說明：

```json
{
  "name": "Java", 
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/java:1-21-bullseye", // 使用的 Docker 镜像，這裡使用 Microsoft 提供的 Java 21 镜像

  "features": {
    "ghcr.io/devcontainers/features/java:1": { 
      "version": "none", // Java 版本，"none" 表示使用 Docker 镜像中預設的版本
      "installMaven": "true", // 是否安装 Maven
      "installGradle": "false" // 是否安装 Gradle
    }
  },

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  // "forwardPorts": [],
  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "java -version", 
  // Configure tool-specific properties.
  "customizations": {
    "jetbrains": {
      "backend": "IntelliJ" 
    }
  },

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root" 
}
```

### 參數說明:
*   **image**: 使用的 Docker 镜像。
*   **forwardPorts**: 端口映射，用於將容器內的端口映射到主機，例如用於 Web 應用程式的 port 8080。
*   **postCreateCommand**: 容器建立後執行的指令，例如安裝額外的依賴。
## 3. 建立並啟動 Dev Container
1.  **開啟 Dev Container**：在設定檔準備好後，IntelliJ 應該會自動偵測到，並顯示一個小盒子圖示。點擊 "Create Dev Container and Mount Source..."。
2.  **選擇 IDE**：選擇您要使用的 IDE，例如 IntelliJ。

![[devcontainer_creation_dialog.png]]
等待系統執行結束並開啟新的視窗。

## 4. 從 Git Repository 建立 Dev Container

![[devcontainer_new_remote_dev.png]]

從 remote development 選單選擇 `New Dev Container`。
在 git repository 欄位輸入您的 Git Repository 位址，然後點選 `Build Container and Continue`。

![[devcontainer_git_repo_config.png]]

## 5. 從本機檔案建立 Dev Container

直接選擇您本機檔案中的 `devcontainer.json` 檔案，然後點選 `Build Container and Continue` 即可。
![[devcontainer_local_file_config.png]]

## 6. 驗證

連線到 DevContainer 後，IntelliJ 右下角會顯示連線資訊，包括虛擬系統的資源使用狀態。

![[devcontainer_resource_usage.png]]

您也可以開啟終端機，執行 `java -version` 命令，確認 Java 版本是否為您設定的版本。

![[devcontainer_terminal_verify.png]]

## 7. 結語

恭喜您成功設定 IntelliJ DevContainer！現在您可以在一個隔離且一致的開發環境中，更安全、更便捷地進行 Java 開發。希望本教學對您有所幫助！

---

## 相關主題

> 💡 **延伸閱讀**：
> - 想了解如何擴展AI開發環境？參考 [[Grimoires/docker-mcp-toolkit|Docker MCP Toolkit]]
> - 想了解其他IDE設定？參考 [[Forge/intellij-idea-settings|IntelliJ IDEA 設定建議]]
> - 想了解Docker容器管理？參考 [[Grimoires/docker-resource-limits|Docker 容器資源限制說明文件]]
> - 想了解如何在容器化環境中為AI提供更好的上下文？MCP與DevContainer結合使用能建立強大的AI輔助開發環境。

