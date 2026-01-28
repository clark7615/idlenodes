# 📖 使用 Spring Cloud Gateway 整合多個微服務的 Swagger UI

## 1. 介紹

在微服務架構中，每個微服務通常都有自己的 Swagger API 文件，用於描述其提供的 API 接口。然而，當微服務數量眾多時，開發人員需要逐一查看每個微服務的 Swagger 文件，才能了解整個系統的 API 接口，這非常不方便。

為了解决這個問題，我們可以利用 Spring Cloud Gateway 將多個微服務的 Swagger API 文件整合到一個統一的 Swagger UI 中，方便開發人員查詢和使用。

## 2. 架構設計

本教學的架構如下：

*   **微服務**：每個微服務都提供自己的 Swagger API 文件，例如 `/v2/api-docs`。
*   **Spring Cloud Gateway**：作為 API 閘道，負責將外部請求路由到後端的微服務，並將多個微服務的 Swagger API 文件聚合成一個。
*   **Swagger UI**：提供一個 Web 界面，用於顯示整合後的 Swagger API 文件。

## 3. 實作步驟

### 3.1. 引入相關依賴

首先，在 Spring Cloud Gateway 項目中引入以下依賴：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webflux-ui</artifactId>
    <version>1.6.14</version>
</dependency>
```

### 3.2. 配置 Spring Cloud Gateway

除了在 `application.yml` 或 `application.properties` 文件中靜態配置路由規則，您也可以從資料庫動態讀取服務的 IP 位址和 Port，並配置 Gateway 的路由。

**範例**：

假設您有一個名為 `services` 的資料表，其中包含 `service_name`、`ip_address` 和 `port` 等欄位。您可以編寫一個 Spring Boot Component，在應用程式啟動時從資料庫讀取這些資訊，並動態地創建 RouteLocator。

```java
@Component
public class DynamicRouteLocator {

    @Autowired
    private RouteLocatorBuilder routeLocatorBuilder;

    @Autowired
    private ServiceRepository serviceRepository; // 假設您使用 JPA

    @PostConstruct
    public RouteLocator routeLocator() {
        RouteLocatorBuilder.Builder routesBuilder = routeLocatorBuilder.routes();

        List<Service> services = serviceRepository.findAll();

        for (Service service : services) {
            String serviceName = service.getServiceName();
            String uri = "http://" + service.getIpAddress() + ":" + service.getPort();
            String path = "/" + serviceName + "/v2/api-docs"; // 或 /v3/api-docs

            routesBuilder.route(serviceName + "-swagger",
                    r -> r.path(path)
                            .filters(f -> f.rewritePath("/" + serviceName + "/(?<segment>.*)", "/${segment}"))
                            .uri(uri));
        }

        return routesBuilder.build();
    }
}
```

**說明**：

*   `ServiceRepository` 是一個 JPA Repository，用於從資料庫讀取服務資訊。
*   `routeLocator()` 方法在應用程式啟動時執行，從資料庫讀取所有服務的資訊，並動態地創建 Route。
*   `rewritePath()` Filter 用於移除服務名稱的前綴。
*   請根據您的實際資料庫結構和 API 文件路徑進行調整。

**application.yml** (簡化，僅包含必要的配置)

```yaml
spring:
  cloud:
    gateway:
      routes:
        # 此處可以保留一些預設路由，或者留空
```

**請注意**：

*   這裡的 `/v2/api-docs` 僅為範例。您的微服務可能使用不同版本的 Swagger，API 文件路徑可能會是 `/v3/api-docs` 或其他路徑。請根據實際情況進行調整。
*   您需要根據您的資料庫類型和 ORM 框架配置 `ServiceRepository`。
*   您可能需要調整程式碼以處理資料庫連接錯誤或其他異常。

### 3.3. 配置 Swagger UI

配置 Swagger UI，使其能夠訪問 Spring Cloud Gateway 提供的整合後的 Swagger API 文件。

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
> - 想了解後端架構的設計模式？參考 [[後端 CSD 架構]]
> - 想了解如何測試API？參考 [[使用 Newman 在 CICD 中執行自動化測試]]
> - Swagger是後端API文檔化的重要工具，與CSD架構搭配使用能建立完整的後端開發流程。

