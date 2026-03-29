---
title: "🏰 奧術核心：後端 CSD 架構"
description: "解構後端魔法的核心配置，理解如何透過 Controller、Service 與 Dao 建立穩定的奧術共鳴。"
permalink: "/backend-csd-architecture"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🏰 奧術核心：後端 CSD 架構

> [!BOOK] 架構定義
> 在龐大的後端界域中，維持代碼的秩序是每位先知的必修課。**CSD (Controller-Service-Dao)** 模式是一種經典的奧術分層結構，確保每一部分都各司其職，不互相干擾。

### 關鍵概念
*   **Controller (奧術中樞/控制器)**：接收外界的 HTTP 共鳴請求，驗證參數並決定流向。
*   **Service (商業邏輯/服務靈魂)**：處理複雜的規則與轉換邏輯，是整個法術的核心所在。
*   **Dao / Repository (資料存取/資料根源)**：負責與深層的資料庫（影之界域）直接通訊。

---

## 🏛️ 分層試煉：職責規範

為了確保結界的穩定，請遵循下列禁律：
1.  **禁絕越級**：控制器不應直接觸碰資料根源 (Dao)，必須透過服務靈魂 (Service) 進行引導。
2.  **純淨根源**：Dao 應僅包含純粹的 SQL 查詢或操作，不應摻雜複雜的邏輯（邏輯應留在 Service）。
3.  **清晰命名**：每個類別應清楚標示其位階，如 `StudentController`, `StudentService`。

---

## 📜 奧術代碼範例 (Java & Go)

````carousel
```java
// Controller：奧術中樞
@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }
}

// Service：服務靈魂
@Service
public class StudentService {
    @Autowired
    private StudentDao studentDao;

    public Student getStudentById(Long id) {
        return studentDao.getStudentById(id);
    }
}
```
<!-- slide -->
```go
// Handler (Controller)
func GetStudent(c *gin.Context) {
	id := c.Param("id")
	student, err := studentService.GetStudentById(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, student)
}

// Repository (Dao)
func (r *StudentRepository) GetStudentById(id string) (Student, error) {
	var student Student
	err := r.db.QueryRow("SELECT * FROM students WHERE id = $1", id).Scan(&student.ID, &student.Name)
	return student, err
}
```
````

> [!SAGE] 總結
> 透過 CSD 分層，你能建立一個**可重複利用、易於測試且易於維護**的穩定結構。這是在任何技術專案中都能發揮作用的通用奧術藍圖。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 想了解如何為 API 建立視覺化卷軸？參考 [[Grimoires/swagger-multi-site-ui|元素匯聚：Swagger 多站整合 UI]]
> - 進行自動化測試？參考 [[Grimoires/newman-cicd-testing|自動戰鬥：Newman 測試召喚]]

