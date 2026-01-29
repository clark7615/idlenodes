---
title: "🏗️ 後端 CSD 架構"
description: "*   **MVC 架構：** 一種軟體設計模式，將應用程式分為三個相互連接的部分："
permalink: "/backend-csd-architecture"
class: "Oracle"
rarity: "Rare"
icon: "📖"
tags:
  - Grimoires
---

# 🏗️ 後端 CSD 架構
#教學 #後端

### 關鍵概念：

*   **MVC 架構：** 一種軟體設計模式，將應用程式分為三個相互連接的部分：
    *   **Model (模型)：** 處理資料和商業邏輯。
    *   **View (視圖)：** 向使用者呈現資料（在現代後端中較不重要）。
    *   **Controller (控制器)：** 管理請求並在 Model 和 View 之間導向流量。

*   **Controller-Service-Dao 模式**： 後端實現 MVC 的方式： 
    *   **Controller：** 接收 HTTP 請求並驗證參數。
    *   **Service：** 實現商業邏輯。
    *   **Dao (資料存取物件)：** 與資料庫通信。

### 主要優點

*   **職責分離：** 提高程式碼的可維護性。
*   **團隊協作：** 促進團隊合作。
*   **程式碼可重複使用：** 能夠重複使用程式碼。

### 重點注意事項：

*   類別名稱應指示層級（例如，`StudentController`、`StudentService`、`StudentDao`）。
*   Controllers 不應直接使用 Daos；它們應該透過 Services 進行互動。
*   Daos 應僅包含 SQL 查詢，而不包含商業邏輯。
# Java 範例

以下是一個簡化的範例，展示了 Controller、Service 和 Dao 之間的互動：

```java
// Controller
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

// Service
@Service
public class StudentService {

    @Autowired
    private StudentDao studentDao;

    public Student getStudentById(Long id) {
        return studentDao.getStudentById(id);
    }
}

// Dao
@Repository
public class StudentDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Student getStudentById(Long id) {
        String sql = "SELECT * FROM students WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new BeanPropertyRowMapper<>(Student.class));
    }
}
```

**說明：**

*   `StudentController` 接收請求並呼叫 `StudentService`。
*   `StudentService` 處理商業邏輯並呼叫 `StudentDao`。
*   `StudentDao` 執行 SQL 查詢從資料庫中獲取學生資料。
# Go 範例

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

// Service
type StudentService struct {
	StudentRepo StudentRepository
}

func (s *StudentService) GetStudentById(id string) (Student, error) {
	return s.StudentRepo.GetStudentById(id)
}

// Repository (Dao)
type StudentRepository struct {
	db *sql.DB
}

func (r *StudentRepository) GetStudentById(id string) (Student, error) {
	var student Student
	err := r.db.QueryRow("SELECT * FROM students WHERE id = $1", id).Scan(&student.ID, &student.Name)
	if err != nil {
		return Student{}, err
	}
	return student, nil
}

// Model
type Student struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}
```

**說明：**

*   `GetStudent` 是一個 Gin handler，它接收請求並呼叫 `studentService.GetStudentById`。
*   `StudentService` 處理商業邏輯並呼叫 `StudentRepository.GetStudentById`。
*   `StudentRepository` 執行 SQL 查詢從資料庫中獲取學生資料。

---

## 相關主題

> 💡 **延伸閱讀**：
> - 想了解如何為CSD架構建立API文檔？參考 [[Grimoires/swagger-multi-site-ui|Swagger多站據合UI]]
> - 想了解如何測試後端API？參考 [[Grimoires/newman-cicd-testing|使用 Newman 在 CICD 中執行自動化測試]]
> - Swagger是後端API文檔化的重要工具，與CSD架構搭配使用能建立完整的後端開發流程。

