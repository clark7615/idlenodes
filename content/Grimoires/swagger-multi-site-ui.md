---
title: "📜 Swagger 多位面傳輸：跨站點 UI 整合法典"
description: "運用 Spring Cloud Gateway 打造統一的奧術門戶，將散布於各個微服務位面的 API 文件聚合為一，實現全知視界。"
permalink: "/swagger-multi-site-ui"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 📜 Swagger 多位面傳輸：跨站點 UI 整合法典

> [!BOOK] 秘卷記載
> 在龐大的微服務帝國中，每一座孤島（服務）都有其專屬的 API 記載。然而，領袖需要的是一個 **「全知視界」**。透過構築 **Spring Cloud Gateway 門戶**，我們能將所有散落的文獻匯聚於一處。

---

## 🏛️ 奧術架構設計

*   **微服務位面**：各自維護 API 文件（例如 `/v2/api-docs`）。
*   **奧術門戶 (Spring Cloud Gateway)**：負責解析傳輸協議，將請求路由至正確位面，並聚合所有 API 指標。
*   **全知 UI (Swagger UI)**：提供單一視窗，呈現帝國整體的 API 布局。

---

## 🔮 實作術式

### 1. 喚醒依賴
在門戶項目中，引入必要的奧術組件：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webflux-ui</artifactId>
</dependency>
```

---

### 2. 構築動態通道 (Dynamic Routing)
除了靜態配置，我們能從「記錄石」（資料庫）中讀取位面座標，動態開啟門戶通道。

> [!SAGE] 動態引導術：Java 實現
> ```java
> @Component
> public class DynamicRouteLocator {
>     // 從資料庫讀取位面清單，動態構建 RouteLocator
>     // 運用 rewritePath 術式移除位面前綴，直達 API 核心
> }
> ```

---

### 3. 配置全知視界 (Swagger UI Config)
讓 UI 能夠感應到門戶所匯聚的所有位面：

```yaml
springdoc:
  swagger-ui:
    urls:
      - name: 位面一 (Service1)
        url: /service1/v2/api-docs
      - name: 位面二 (Service2)
        url: /service2/v2/api-docs
```

---

> [!CAUTION] 警告：位面相容性
> 確保不同位面的 Swagger 版本一致，否則傳輸協議可能發生衝突。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 構建奧術核心結構？參考 [[Grimoires/backend-csd-architecture|奧術核心：後端 CSD 架構法典]]
> - 通過自動化試煉？參考 [[Grimoires/newman-cicd-testing|自動化試煉：Newman & CI/CD 測試祭壇]]
件。

```yaml
springdoc:
  swagger-ui:
    urls:
      - name: service1
        url: /service1/v2/api-docs
      - name: service2
        url: /service2/v2/api-docs
```

## 4. 範例程式碼

以下是一個簡化的 Spring Cloud Gateway 配置範例：

```java
@SpringBootApplication
public class GatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("service1-swagger", r -> r.path("/service1/v2/api-docs")
                        .filters(f -> f.rewritePath("/service1/(?<segment>.*)", "/${segment}"))
                        .uri("http://service1:8080"))
                .route("service2-swagger", r -> r.path("/service2/v2/api-docs")
                        .filters(f -> f.rewritePath("/service2/(?<segment>.*)", "/${segment}"))
                        .uri("http://service2:8081"))
                .build();
    }
}
```

## 5. 注意事項

*   請確保每個微服務都啟用了 Swagger，並提供了 `/v2/api-docs` 接口。
*   請根據實際情況修改 Spring Cloud Gateway 的路由規則和 Swagger UI 的配置。
*   如果您的微服務使用了不同的 Swagger 版本，可能需要進行額外的配置。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 想了解後端架構的設計模式？參考 [[Grimoires/backend-csd-architecture|後端 CSD 架構]]
> - 想了解如何測試API？參考 [[Grimoires/newman-cicd-testing|使用 Newman 在 CICD 中執行自動化測試]]
> - Swagger是後端API文檔化的重要工具，與CSD架構搭配使用能建立完整的後端開發流程。

