---
title: 💻 C++ 系統程式語言培訓
description: 勇者之路：從基礎語法、記憶體管理到開發工具鏈，依據 §14.4.6 課程規劃建構工業級系統開發實力。
permalink: /cpp-system-programming
class: Oracle
rarity: Legendary
icon: 💻
tags:
  - SageTower
---

# C++ 系統程式語言培訓課程 — 基礎講稿
> 依據 §14.4.6 系統程式語言課程規劃編制｜May 2026

---

## 封面頁（第 1 頁）

各位好歡迎來到TPC C++ 系統程式語言培訓課程。

今天這堂課的主題叫做「勇者之路：從新手到系統大師」。我們刻意用遊戲的語言來設計整個課程架構，不是因為要把這件事變得簡單，而是因為學好 C++ 本來就像打 RPG——你需要一關一關地打，每過一關你的能力就真的提升了一個等級。

TPC 的系統工程師需要面對的是真實的電力系統環境：長時間運行、不能當機、資料不能錯。這門課要建立的，就是能在這種環境下寫出穩定程式的基礎能力。

這門課的依據是 §14.4.6 的系統程式語言課程規劃，涵蓋的範圍從程式結構、資料型別、控制流程，一路到指標、記憶體管理，以及實際工作中會用到的開發工具鏈。

讓我們開始吧。

---

## 第 2 頁：勇者之路 — 五大模組

在開始之前，我先讓大家對整個課程的全貌有個概念。

這次培訓分成五個 Level，我們把它叫做「五大模組」：

**Level 1 — 基礎魔法**：了解 C++ 程式的基本結構，寫出第一個程式。

**Level 2 — 屬性與決策**：掌握資料型別與控制流程，讓程式能「做判斷」、「重複執行」。

**Level 3 — 進階藍圖**：學會函式、陣列與指標，把程式從「能跑」推進到「設計良好」。

**Level 4 — 歷史與深淵**：處理檔案 I/O 與動態記憶體，讓資料能夠持久儲存、讓記憶體管理不出問題。

**Level 5 — 大師鍛造坊**：掌握開發工具鏈，包含 Git 版本控制、效能計時、靜態與動態分析，以及 VS Debugger。

完成這五大試煉之後，你就具備了扎實的 C++ 基礎實力，可以應用在 EMS 能源管理系統等工業級的場景。

---

### 💡 新手補給：線上 IDE 訓練場
我們全程使用線上 IDE。請務必掌握以下 SOP：
1. **建立專案**：於 IDE 選擇 C++ 範本。
2. **執行流程**：複製程式碼 -> 貼上 `main.cpp` -> 點擊「Run」-> 觀察 Console 輸出。
3. **常見狀況**：無法編譯多半是「複製了多餘內容」或「檔案名稱錯誤」。


---

## 第 3–4 頁：Level 1 — 詠唱你的第一個 C++ 魔法

好，Level 1 開始。

我們先從最經典的程式開始——`Hello World`。雖然每個教材都從這裡開始，但我想讓你真的看懂每一行在做什麼，而不只是「能跑就好」。

我們把這段程式碼拆成四個部分：

**第一步，準備材料**：`#include <iostream>`。這一行在做什麼？它告訴編譯器：「我需要標準輸出入的功能。」就像你煮菜之前要把食材備好，`#include` 就是你的備料步驟。沒有它，`cout` 根本不存在。

`iostream` 是「input/output stream」的縮寫，它提供了幾個你馬上就會用到的核心工具：

- **`cout`**（character output）：標準輸出，把資料送到螢幕。`cout << "Hello EMS!";`
- **`cin`**（character input）：標準輸入，讀取使用者從鍵盤輸入的資料。`cin >> guess;`
- **`cerr`**（character error）：標準錯誤輸出，通常用來輸出錯誤訊息。跟 `cout` 的差別是它不會被緩衝，訊息會立即輸出，適合在程式異常時確保訊息一定印得出來。
- **`endl`**：換行並清空輸出緩衝區。效果跟 `"\n"` 類似，但多了 flush 的動作，在除錯時確保內容即時顯示。

這四個是 `<iostream>` 的主要功能。課程前半段幾乎都是 `cout` 和 `cin` 在撐場，等到 Level 4 的檔案讀寫，才會換成 `<fstream>`。

**第二步之一，認識 `std` 是什麼**：先把這個問題想清楚——`cout` 是誰發明的？是 C++ 的開發團隊，寫進了「C++ 標準函式庫」裡。這個函式庫裡有幾百個工具：輸出入、字串處理、數學運算、資料容器……通通都有。

問題來了：這麼多工具全部堆在一起，名字要怎麼管理？萬一你自己也寫了一個叫 `sort` 的函式，跟標準函式庫的 `sort` 撞名怎麼辦？

C++ 的解法是**命名空間（namespace）**：把所有標準函式庫的工具，統一放進一個叫 `std` 的「房間」裡。想用裡面的東西，就要加上房間名稱和 `::` 來指定，`::` 念作「的」就好——`std::cout` 就是「std 的 cout」。

所以不加任何宣告的完整寫法是：
```cpp
#include <iostream>

int main() {
    std::cout << "Hello EMS!";
    std::cout << std::endl;
    return 0;
}
```
每個標準函式庫的工具前面都要加 `std::`。好處是看到任何一行程式碼，你馬上知道它用的是標準函式庫的東西，還是你自己寫的東西，來源一清二楚。

**第二步之二，`using namespace std;` 的取捨**：每次都寫 `std::` 有點囉唆，所以 C++ 提供了一個宣告：

```cpp
using namespace std;
```

加了這行之後，就像跟編譯器說「我接下來用的東西，你先去 std 這個房間找」，`std::cout` 就可以直接寫成 `cout`，`std::endl` 直接寫成 `endl`，程式碼簡潔很多。

對於剛開始學習的階段，用這個完全沒問題。但要知道它有一個潛在風險：如果你之後自己也定義了一個叫 `cout` 或 `sort` 的東西，編譯器就會搞混，不知道你要用哪個，造成難以追查的命名衝突。

**結論很簡單**：課程階段放心用 `using namespace std;`，讓程式碼保持簡潔、專注在學習邏輯上。等進入正式專案再養成寫 `std::` 的習慣，這是一個「先會用、再理解為什麼」的學習順序。

**第三步，魔法陣核心**：`int main()`。這是整個 C++ 程式的進入點，是唯一的。作業系統啟動你的程式，就是從這裡開始執行的。

**第四步，發動效果**：`cout << "Hello EMS!";`。`cout` 是標準輸出，`<<` 是輸出運算子，把右邊的字串送到螢幕上。最後 `return 0;` 告訴作業系統：程式正常且安全地結束了。

有一個很重要的詠唱要訣要記住：**程式碼由上而下執行，`#include` 一定要在最前面**。

> 💡 **教練筆記（零基礎補給）**：
> 1. **編譯 (Compile)**：解釋為「將人類寫的食譜，翻譯成廚房員工（電腦）聽得懂的行動指令」。
> 2. **預測練習**：在執行 Level 1 的 `Hello World` 程式前，請學員先預測輸出結果，增加參與感。


---

接下來談一個更完整的概念：**標頭檔與編譯單元**。

在進入之前，先讓大家知道兩個之後會一直碰到的名詞：

**函式（Function）** 是「把一段有特定任務的程式碼包起來，給它一個名字」。你呼叫這個名字，它就去執行那段邏輯、把結果還給你。好比說「計算功率因數」這件事，你不想每次都重寫一遍公式，就把它包成一個函式 `calcPowerFactor()`，需要的時候直接呼叫。

**類別（Class）** 是更進一步的封裝，把「資料」和「操作這份資料的函式」綁在一起，變成一個獨立的單元。以 EMS 為例，一台設備有 id、名稱、額定功率這些資料，也有「啟動」、「關機」、「讀取用電量」這些動作——把這些全部包在一個 `Device` 類別裡，就是類別的概念。這個課程後段會更完整地接觸，現在知道它是「資料＋函式的組合包」就夠了。

---

了解這兩個概念之後，標頭檔和實作檔的分工就好理解了：

**標頭檔（`.h` / `.hpp`）** 負責「宣告」——告訴外界「這個函式叫什麼名字、接收什麼參數、回傳什麼型別」，或是「這個類別有哪些資料欄位和函式」。它只說明有什麼，不說怎麼做，就像菜單，你看菜單知道有哪些菜，但廚房怎麼煮你不需要知道。

**實作檔（`.cpp`）** 負責「實作」——函式的實際邏輯在這裡，類別的每個函式怎麼運作也在這裡。這才是真正的廚房。每個 `.cpp` 會個別編譯成 `.o` 目的檔，最後再由連結器（Linker）把所有 `.o` 合併成一個可執行檔。

舉個具體例子：
```
device.h    ← 宣告：有一個 Device 類別，有 start() 這個函式
device.cpp  ← 實作：start() 函式實際上做什麼事
main.cpp    ← 主程式：呼叫 start()，不需要知道它怎麼實作的
```

這個機制在大型系統裡非常關鍵，因為你不需要每次都重新編譯全部程式碼，只需要重新編譯有改動的模組。TPC 的系統動輒幾十個模組，如果每次改一行就要全部重編，那開發效率會非常低。

常用標頭檔清單你不需要現在全部記住，需要的時候查就好：
- `<iostream>`：標準輸出入
- `<string>`：字串操作
- `<fstream>`：檔案讀寫
- `<vector>`：動態陣列
- `<chrono>`：高精度計時

---

## 第 5 頁：Level 2 — 裝備與屬性面板（資料型別）

進入 Level 2。我們要談的是**資料型別**。

我用一個 RPG 角色的屬性面板來解釋，這樣比較好記：

**HP（生命值）= `int`**，整數，佔 4 個 bytes。用在離散的計數場景，比如電表讀數，`int meterReading = 0;`。

**MP（魔法值）= `double`**，雙精度浮點數，佔 8 個 bytes。需要高精確度的小數用這個，比如用電量，`double powerUsage = 12.5;`。

**Status（狀態）= `bool`**，布林值，只有 `true` 和 `false`。設備的開/關、在線/離線，`bool isOnline = true;`。

**Name（稱號）= `string`**，字串，設備或感測器的名稱，`string deviceName = "EMS-01";`。

---

簡報上這四個是最核心的，但 C++ 還有幾個你很快就會遇到的常用型別，一起先認識一下：

**`float`**：單精度浮點數，佔 4 個 bytes，比 `double` 少一半記憶體，但精確度也較低（約 7 位有效數字）。`double` 有 15 位。在嵌入式系統或記憶體有限的場景會選 `float`，一般情況優先用 `double`。

**`char`**：單一字元，佔 1 個 byte，用單引號括起來，`char grade = 'A';`。字串 `string` 本質上就是一串 `char` 組成的序列，之後學字串處理的時候會很常看到它。

**`long` / `long long`**：當 `int` 的範圍（約 ±21 億）不夠用的時候升級用。`long long` 可以存到約 ±922 兆，用在電力系統累積用電量的大數字計算很實用。`long long totalKWh = 0;`

**`unsigned int`**：無號整數，只存非負數（0 以上），範圍比 `int` 多一倍（0 到約 42 億）。當你確定某個值永遠不會是負數，例如設備數量、陣列索引，用 `unsigned` 可以讓語意更清楚，也能多用一倍的正數範圍。

**`short`**：比 `int` 小的整數，佔 2 個 bytes，範圍約 ±32767。記憶體很吃緊的情況才會用，平常直接用 `int` 就好。

這樣整理起來，C++ 的基本型別可以用一個大原則記：**整數看範圍選大小，小數優先 `double`，文字單字元用 `char`、多字元用 `string`，是非判斷用 `bool`**。

這裡有一個實務提醒：**永遠為變數選擇「語意最清楚」的型別**。如果這個值永遠只會是整數，不要用 `double`；如果這個值只有是/否，用 `bool` 而不是 `int` 的 0 和 1。型別本身就是文件的一部分。

---

## 第 6 頁：Level 2 — 運算子分類

有了資料，接下來就要對資料做操作。C++ 的運算子分四大類：

**算術運算子**：`+`、`-`、`*`、`/`、`%`（取餘數）。這些基本上跟數學一樣，但要特別注意整數除法，`5 / 2` 結果是 `2` 不是 `2.5`。

**比較運算子**：`==`、`!=`、`>`、`<`、`>=`、`<=`。這些運算的結果是 `bool`，你在 `if` 條件裡寫的就是這個。

**邏輯運算子**：`&&`（且）、`||`（或）、`!`（非）。用來組合多個條件。

**指定運算子**：`=`、`+=`、`-=`、`*=`、`/=`、`%=`。

這裡要特別停一下講 `=`，因為它是你在 C++ 裡用到最頻繁的符號，但它的意思跟數學的「等於」完全不同。

在數學裡，`x = 5` 是在描述一個關係：「x 等於 5」。
在 C++ 裡，`x = 5` 是在下一道指令：**「把 5 這個值，存進 x 這個變數裡」**。

這就是為什麼它叫「指定」運算子——不是比較，是指定一個值給一個變數。執行方向是從右到左，右邊的值被放進左邊的變數。

```cpp
int voltage = 220;        // 把 220 存進 voltage
voltage = 230;            // 把 voltage 裡的值換成 230
voltage = voltage + 10;   // 把 voltage 目前的值加 10，再存回去
```

最後這行特別有趣：右邊先讀出 voltage 的值（230），加上 10 得到 240，再把 240 存回左邊的 voltage。所以 `voltage = voltage + 10` 完全合法，不是矛盾式。

這也是為什麼 C++ 要用 `==` 來表示「比較是否相等」，把 `=` 和 `==` 分開——一個是「指定」、一個是「比較」，兩件完全不同的事。**初學者最常見的 Bug 之一，就是在 `if` 條件裡把 `==` 誤寫成 `=`，結果變成指定而不是比較，程式還是能跑，但結果完全不對。**

`+=`、`-=` 這些是 `=` 的縮寫變形：`x += 1` 就等於 `x = x + 1`，把讀取、運算、存回三步合成一步，寫法更簡潔。

---

## 第 7 頁：Level 2 — 命運的分岔路（條件判斷）

程式能做決策，靠的就是條件判斷。有兩個主要工具：

**`if / else if / else`**：適合「連續區間」的判斷。以電壓監控為例：電壓大於 250V 進第一個分支顯示過高警告，小於 200V 進第二個分支顯示過低警告，其他情況進 `else` 顯示正常。邏輯清晰，一看就懂。

**`switch / case`**：適合「離散數值」的多路判斷。以設備狀態碼為例：`case 0` 是關機、`case 1` 是待機、`case 2` 是運行、`default` 處理未知狀態。

這裡有一個非常重要的警告，務必記住：**`case` 結尾一定要加 `break`**！如果忘記寫 `break`，程式會繼續往下執行所有 `case`，這叫做 Fall-through。在 EMS 系統裡，狀態邏輯一旦失控後果會很嚴重。

> 💡 **教練筆記（零基礎補給）**：在講解 `if` 條件時，可故意將 `if (a == b)` 寫成 `if (a = b)`，請學員找出問題。這是新手必經的修煉。


---

## 第 8 頁：Level 2 — 永動機的核心（三大迴圈）

讓程式重複做事，靠的是迴圈。C++ 有三種：

**`for` 迴圈**：用在「已知執行次數」的場景。EMS 實戰：統計過去 24 小時的總用電量，`for(int i=0; i<24; i++)`，跑 24 次，每次處理一小時的資料。

**`while` 迴圈**：用在「條件成立時持續執行」的場景。EMS 實戰：只要感測器保持連線，就持續接收即時數據，`while(sensorOnline)`。這在 IoT 裝置裡極為常見。

**`do-while` 迴圈**：用在「無論如何至少執行一次」的場景。EMS 實戰：顯示操作選單，直到使用者明確按下 `Q` 才退出。

另外補充兩個中斷魔法：`break` 可以立即跳出迴圈，`continue` 可以跳過本次迴圈的剩餘程式碼直接進入下一輪。

---

## 第 9 頁：Level 1 實戰 — 猜數字挑戰（新手村首領戰）

好，Level 1 的知識點學完，來做第一個實戰練習。

**遊戲規則**：電腦隨機產生 1 到 100 之間的整數，玩家每次輸入猜測值，程式回應「太高了！」或「太低了！」，直到猜中為止。最後顯示玩家共猜了幾次。

**程式邏輯分成四步**：

1. 用 `rand() % 100 + 1` 產生隨機數。
2. 用 `cin >> guess` 接收玩家輸入。
3. 用 `if / else if` 判斷大小並給出提示。
4. 用 `while` 迴圈反覆詢問，直到猜中為止。

這個練習的精髓在於：它把你剛學的**輸出入、條件判斷、迴圈**完整地串在一起。這三個元素幾乎是所有程式的骨幹。

完成基本版之後，試試看 **Bonus Quest**：加入 7 次的生命值限制。這需要你多加一個計數器，以及判斷生命值歸零的條件。

```cpp
#include <iostream>
#include <cstdlib> // For rand() and srand()
#include <ctime>   // For time()

int main() {
    // Seed the random number generator
    srand(time(0));

    // Generate a random number between 1 and 100
    int secretNumber = rand() % 100 + 1;
    int guess;
    int attempts = 0;

    std::cout << "歡迎來到猜數字遊戲！" << std::endl;
    std::cout << "我心中想了一個 1 到 100 之間的數字。" << std::endl;

    // Game loop
    do {
        std::cout << "請輸入你的猜測：";
        std::cin >> guess;
        attempts++;

        if (guess > secretNumber) {
            std::cout << "太高了！請再試一次。" << std::endl;
        } else if (guess < secretNumber) {
            std::cout << "太低了！請再試一次。" << std::endl;
        } else {
            std::cout << "恭喜你！你猜對了！" << std::endl;
            std::cout << "你總共猜了 " << attempts << " 次。" << std::endl;
        }
    } while (guess != secretNumber);

    return 0;
}
```

---

## 第 10–11 頁：Level 2 實戰 — 剪刀石頭布（邏輯試煉）

Level 2 的實戰練習是剪刀石頭布，目的是練習**複合布林邏輯（Boolean Logic）**。

**判斷「玩家獲勝」的條件** 是這樣寫的：
```
if ( (p==1 && c==3) || (p==2 && c==1) || (p==3 && c==2) )
```
這裡用到了 `&&` 和 `||` 的組合。解讀方式：「玩家出剪刀（1）且電腦出布（3）」，或「玩家出石頭（2）且電腦出剪刀（1）」，或「玩家出布（3）且電腦出石頭（2）」，任何一種情況成立就是玩家贏。

**C++ 核心技術對應**：
- `int playerChoice, computerChoice = rand()%3+1;` — 整數型別與隨機數
- `switch(playerChoice){ case 1:... }` — switch-case 多路判斷
- `for(int round=1; round<=5; round++)` — for 迴圈控制回合數
- `int wins=0; wins+=1;` — 計分變數與 `+=` 運算子

**Boss Task**：完成基本版後，試著結合 `switch-case` 和 `for` 迴圈打滿 5 回合，並在最後統計總積分。

```cpp
#include <iostream>
#include <cstdlib> // For rand() and srand()
#include <ctime>   // For time()
#include <string>

// Function to convert choice number to string for display
std::string choiceToString(int choice) {
    switch (choice) {
        case 1: return "石頭";
        case 2: return "剪刀";
        case 3: return "布";
        default: return "未知";
    }
}

int main() {
    // Seed the random number generator
    srand(time(0));

    int rounds;
    std::cout << "歡迎來到剪刀石頭布遊戲！" << std::endl;
    std::cout << "請輸入您想進行的回合數：";
    std::cin >> rounds;

    int playerWins = 0;
    int computerWins = 0;
    int ties = 0;

    // Game loop for the specified number of rounds
    for (int round = 1; round <= rounds; ++round) {
        int playerChoice, computerChoice;

        // Get player's choice
        std::cout << "\n--- 回合 " << round << " ---" << std::endl;
        std::cout << "請選擇：(1) 石頭 (2) 剪刀 (3) 布：";
        std::cin >> playerChoice;

        // Validate player's input
        if (playerChoice < 1 || playerChoice > 3) {
            std::cout << "無效的輸入！請重新選擇。" << std::endl;
            round--; // Decrement round to re-play this round
            continue;
        }

        // Generate computer's choice
        computerChoice = rand() % 3 + 1;

        std::cout << "你的選擇: " << choiceToString(playerChoice) << std::endl;
        std::cout << "電腦的選擇: " << choiceToString(computerChoice) << std::endl;

        // Determine the winner for the round
        if ( (playerChoice == 1 && computerChoice == 3) || // Rock vs Paper
             (playerChoice == 2 && computerChoice == 1) || // Scissors vs Rock
             (playerChoice == 3 && computerChoice == 2) ) { // Paper vs Scissors
            std::cout << "你贏了！" << std::endl;
            playerWins++;
        } else if (playerChoice == computerChoice) {
            std::cout << "平手！" << std::endl;
            ties++;
        } else {
            std::cout << "電腦贏了！" << std::endl;
            computerWins++;
        }
    }

    // Display final scores
    std::cout << "\n--- 遊戲結束 ---" << std::endl;
    std::cout << "總回合數: " << rounds << std::endl;
    std::cout << "你的勝利: " << playerWins << std::endl;
    std::cout << "電腦勝利: " << computerWins << std::endl;
    std::cout << "平手: " << ties << std::endl;

    // Determine overall winner
    if (playerWins > computerWins) {
        std::cout << "恭喜你，成為最終贏家！" << std::endl;
    } else if (computerWins > playerWins) {
        std::cout << "電腦贏得了這場對決！" << std::endl;
    } else {
        std::cout << "最終結果是平手！" << std::endl;
    }

    return 0;
}
```


---

## 第 12 頁：Level 3 — 封裝魔法藍圖（函式與參數傳遞）

進入 Level 3，我們要談的概念變難了，但也更有力量了。

函式讓你把一段邏輯封裝起來，給它一個名字，之後隨時呼叫。參數傳遞有兩種方式，必須搞清楚差別：

**值傳遞（Pass by Value）**：函式收到的是資料的「副本」。在函式內部對這份副本做任何修改，都不會影響原本的變數。EMS 範例：`double calcPowerFactor(double kW, double kVA)`，傳入的是數值，不影響原始量測資料。

**參考傳遞（Pass by Reference）**：函式直接存取原始資料。函式內的修改**會**改變呼叫端的變數。用法是在參數型別後加 `&`，例如 `void swap(int& a, int& b)`。

選擇原則：**需要修改原始資料就用 Reference，只需要讀取就用 Value**。傳遞大型結構體時，即使只是讀取，也建議用 `const reference`，避免複製大量資料的效能損耗。

---

## Level 3 實戰範例更新：剪刀石頭布 — 封裝魔法藍圖

為了應用函式和參數傳遞的概念，我們將原先的剪刀石頭布遊戲進行模組化。

**原先的遊戲邏輯：**

```cpp
// ... (srand, cin, rand, cout, if/else if) ...
// 玩家選擇、電腦選擇、判斷勝負、顯示結果都在 main 裡
// ...
```

**修改後的程式碼結構（將遊戲邏輯拆分）：**

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>

// --- 函式宣告 ---
// 1. 取得玩家輸入
int getPlayerChoice();

// 2. 判斷勝負
int determineWinner(int player, int computer);

// 3. 顯示結果與更新分數
void displayResult(int playerChoice, int computerChoice, int winner, int& playerWins, int& computerWins, int& ties);

// 4. 顯示遊戲總結
void displayFinalSummary(int rounds, int playerWins, int computerWins, int ties);

// --- Helper Function ---
std::string choiceToString(int choice);

// --- 主程式 ---
int main() {
    srand(time(0)); // 初始化隨機數種子

    int rounds;
    std::cout << "歡迎來到剪刀石頭布遊戲！" << std::endl;
    std::cout << "請輸入您想進行的回合數：";
    std::cin >> rounds;

    int playerWins = 0;
    int computerWins = 0;
    int ties = 0;

    for (int round = 1; round <= rounds; ++round) {
        int playerChoice = getPlayerChoice(); // 呼叫函式取得玩家選擇
        int computerChoice = rand() % 3 + 1;  // 電腦隨機選擇

        // 判斷勝負
        int winner = determineWinner(playerChoice, computerChoice);

        // 顯示結果並更新分數
        displayResult(playerChoice, computerChoice, winner, playerWins, computerWins, ties);
    }

    // --- 遊戲結束後的總結 ---
    displayFinalSummary(rounds, playerWins, computerWins, ties); // 呼叫新的總結函式

    return 0;
}

// --- 函式實作 ---

// 1. 取得玩家輸入
//    這裡的回傳值是 int，代表玩家的選擇。
int getPlayerChoice() {
    int choice;
    do {
        std::cout << "\n--- 請選擇：(1) 石頭 (2) 剪刀 (3) 布：";
        std::cin >> choice;
        if (choice < 1 || choice > 3) {
            std::cout << "無效的輸入！請重新選擇。" << std::endl;
        }
    } while (choice < 1 || choice > 3);
    return choice;
}

// 2. 判斷勝負
//    使用值傳遞，因為我們只需要讀取 player 和 computer 的值來判斷
//    回傳值：1 (玩家贏), 0 (平手), -1 (電腦贏)
int determineWinner(int player, int computer) {
    if ( (player == 1 && computer == 3) || // 石頭 vs 布
         (player == 2 && computer == 1) || // 剪刀 vs 石頭
         (player == 3 && computer == 2) ) { // 布 vs 石頭
        return 1; // 玩家贏
    } else if (player == computer) {
        return 0; // 平手
    } else {
        return -1; // 電腦贏
    }
}

// 3. 顯示結果與更新分數
//    playerChoice, computerChoice, winner 是值傳遞 (只需要讀取)
//    playerWins, computerWins, ties 是參考傳遞 (需要修改主程式的計數器)
void displayResult(int playerChoice, int computerChoice, int winner, int& playerWins, int& computerWins, int& ties) {
    std::cout << "你的選擇: " << choiceToString(playerChoice) << std::endl;
    std::cout << "電腦的選擇: " << choiceToString(computerChoice) << std::endl;

    if (winner == 1) {
        std::cout << "你贏了！" << std::endl;
        playerWins++; // 修改傳入的參考變數
    } else if (winner == 0) {
        std::cout << "平手！" << std::endl;
        ties++; // 修改傳入的參考變數
    } else { // winner == -1
        std::cout << "電腦贏了！" << std::endl;
        computerWins++; // 修改傳入的參考變數
    }
}

// 4. 顯示遊戲總結
//    所有參數都是值傳遞，因為我們只需要讀取最終結果來顯示
void displayFinalSummary(int rounds, int playerWins, int computerWins, int ties) {
    std::cout << "\n--- 遊戲結束 ---" << std::endl;
    std::cout << "總回合數: " << rounds << std::endl;
    std::cout << "你的勝利: " << playerWins << std::endl;
    std::cout << "電腦勝利: " << computerWins << std::endl;
    std::cout << "平手: " << ties << std::endl;

    if (playerWins > computerWins) {
        std::cout << "恭喜你，成為最終贏家！" << std::endl;
    } else if (computerWins > playerWins) {
        std::cout << "電腦贏得了這場對決！" << std::endl;
    } else {
        std::cout << "最終結果是平手！" << std::endl;
    }
}


// Helper function for choiceToString (same as before)
std::string choiceToString(int choice) {
    switch (choice) {
        case 1: return "石頭";
        case 2: return "剪刀";
        case 3: return "布";
        default: return "未知";
    }
}
```

---

## 第 13–14 頁：Level 3 — 勇者的背包（陣列、結構體與指標）

**陣列（Array）**：儲存相同型別的多筆資料。注意：**索引從 0 開始**，`double hourlyKWh[24]` 的合法索引是 0 到 23，寫 `hourlyKWh[24]` 就是越界，這是 C++ 常見的 Bug 來源。

**結構體（Struct）**：把不同型別的欄位組合成一個資料包裹。以 EMS 設備為例：
```cpp
struct Device {
    int    id;
    string name;
    double ratedPower;
    bool   isActive;
};
```
這讓你可以用一個 `Device` 變數代表一台設備的全部資訊，而不是四個散落的變數。

**STL 動態容器**：如果陣列大小固定讓你覺得不方便，`vector<Device>` 可以動態擴充，不需要預先知道有幾筆資料。

**`main` 函式的 `argc` 和 `argv` 參數：**

當你從命令列執行一個 C++ 程式時，作業系統會傳遞一些額外的資訊給你的程式，這些資訊會透過 `main` 函式的特殊參數 `argc` 和 `argv` 提供：

```cpp
int main(int argc, char* argv[]) {
    // argc (argument count): 包含程式名稱本身在內，總共有多少個命令列參數。
    // argv (argument vector): 一個字串陣列 (char* 的陣列)，每個元素都是一個命令列參數。
    // argv[0] 通常是程式的名稱。
    // argv[1] 是第一個參數，依此類推。
    // argv[argc] 必定是 NULL 指標。

    std::cout << "程式名稱: " << argv[0] << std::endl;
    std::cout << "總共有 " << argc << " 個參數。" << std::endl;

    for (int i = 1; i < argc; ++i) {
        std::cout << "參數 " << i << ": " << argv[i] << std::endl;
    }

    return 0;
}
```

- **`argc` (Argument Count)：** 是一個整數，表示傳遞給程式的命令列參數的總數（包括程式本身的名稱）。
- **`argv` (Argument Vector)：** 是一個字元指標的陣列 (`char*[]` 或 `char**`)。`argv[0]` 是程式的名稱（路徑），`argv[1]` 是第一個實際參數，依此類推，直到 `argv[argc-1]`。`argv[argc]` 則是一個空指標 (`NULL`)，標示著參數列表的結束。

透過 `argc` 和 `argv`，你的程式可以接收來自命令列的輸入，這對於製作可配置的工具或腳本非常有用。


### **指標 (Pointers) — 記憶體裡的地址**

進入指標的世界，我們探討 C++ 最基礎也最具威力的概念之一：**指標（Pointers）**。指標是變數，但它儲存的不是值本身，而是另一個變數的「記憶體地址」。

想像一下，你的電腦記憶體就像一個巨大的倉庫，每個儲存空間都有一個獨一無二的「地址」。普通變數就像倉庫裡的貨物，指標則像是寫著貨物地址的「紙條」。

**指標的宣告：**  
使用星號 `*` 來宣告一個指標變數。

```cpp
int number = 10;
int* ptr_to_number; // 宣告一個指向 int 型別的指標
```

**取得變數的位址：**  
使用「位址運算子」`&` 來取得變數的記憶體地址。

```cpp
ptr_to_number = &number; // ptr_to_number 現在儲存了 number 變數的記憶體地址
```

**透過指標存取變數的值：**  
使用「解址運算子」`*`（也稱為間接參考運算子）來存取指標所指向記憶體地址中的值。

```cpp
std::cout << "Number 的值: " << number << std::endl;         // 輸出: 10
std::cout << "Number 的記憶體地址: " << &number << std::endl; // 輸出: (一個記憶體地址)
std::cout << "ptr_to_number 儲存的地址: " << ptr_to_number << std::endl; // 輸出: (與 &number 相同)
std::cout << "ptr_to_number 指向的值: " << *ptr_to_number << std::endl; // 輸出: 10
```

**指標的應用場景：**

- **動態記憶體管理：** 使用 `new` 和 `delete` 來在程式執行時分配和釋放記憶體。
- **函式參數傳遞：** 透過指標（或參考）來修改函式外部的變數。
- **資料結構：** 鏈結串列 (Linked List)、樹 (Tree) 等都依賴指標來串連節點。
- **陣列與指標的關係：** C++ 中，陣列名稱本身可以被視為指向陣列第一個元素的指標。

> 💡 **教練筆記（零基礎補給）**：
> 1. **指標比喻**：指標是「通訊錄」。變數是人，指標是紙條，上面寫著住址。`*ptr` 就是根據紙條上的地址去找人。
> 2. **類別比喻**：類別是「遙控器與電視」。遙控器是界面，電視內部電路（實作）你不需知道，會按按鈕就好。
> 3. **視覺化建議**：強烈建議在白板畫出格子圖，標註記憶體空間、數值與地址。


---

## 第 15 頁：Level 3 實戰 — 井字遊戲（空間座標之戰）

Level 3 的實戰是井字遊戲，核心挑戰是**二維陣列（2D Arrays）**。

棋盤用 `char board[3][3]` 宣告，存取方式是 `board[row][col]`。

把棋盤傳給函式印出時，參數這樣寫：`void printBoard(char b[][3])`。

這裡有一個非常精妙的進階技巧：**降維打擊**。玩家輸入的是 1 到 9 的格子號碼，要轉換成二維座標的公式是：
```
row = (pos - 1) / 3
col = (pos - 1) % 3
```
這個技巧值得記下來，把一維索引映射到二維座標，在處理感測器矩陣時也用得到。

本實戰範例將應用二維陣列、函式設計，並採用函數式程式設計的精神來撰寫，力求每個函式「一次只做一件事」，並達到程式碼的簡潔與效率。
  

---

### **程式碼結構設計**

- **棋盤表示：** 使用 `char board[3][3]` 來表示 3x3 的棋盤。`' '` 代表空格，`'X'` 代表玩家，`'O'` 代表電腦。
- **函式劃分：**
    1. `printBoard(const char board[3][3])`：負責「僅僅」顯示棋盤。
    2. `getPlayerMove(const char board[3][3])`：負責「僅僅」獲取並驗證玩家的輸入，返回一個有效的移動位置 (1-9)。
    3. `makeMove(char board[3][3], int move, char player)`：負責「僅僅」將棋子放置到棋盤上。
    4. `checkWin(const char board[3][3], char player)`：負責「僅僅」檢查某個玩家是否獲勝。
    5. `isBoardFull(const char board[3][3])`：負責「僅僅」檢查棋盤是否已滿（平局）。
    6. `getComputerMove(const char board[3][3])`：負責「僅僅」讓電腦決定並返回一個有效移動位置。
    7. `main()`：作為遊戲的流程控制器，協調以上各個函式。

---

### **程式碼實作**

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <cstdlib> // For rand() and srand()
#include <ctime>   // For time()

// --- 常數定義 ---
const int BOARD_SIZE = 3;
const char EMPTY_CELL = ' ';
const char PLAYER_MARK = 'X';
const char COMPUTER_MARK = 'O';

// --- 函式宣告 ---
void printBoard(const char board[BOARD_SIZE][BOARD_SIZE]);
int getPlayerMove(const char board[BOARD_SIZE][BOARD_SIZE]);
void makeMove(char board[BOARD_SIZE][BOARD_SIZE], int move, char player);
bool checkWin(const char board[BOARD_SIZE][BOARD_SIZE], char player);
bool isBoardFull(const char board[BOARD_SIZE][BOARD_SIZE]);
int getComputerMove(const char board[BOARD_SIZE][BOARD_SIZE]); // 簡單的隨機移動

// --- 主遊戲流程 ---
int main() {
    srand(time(0)); // 初始化隨機數種子

    char board[BOARD_SIZE][BOARD_SIZE];

    // 初始化棋盤
    for (int i = 0; i < BOARD_SIZE; ++i) {
        for (int j = 0; j < BOARD_SIZE; ++j) {
            board[i][j] = EMPTY_CELL;
        }
    }

    char currentPlayer = PLAYER_MARK;
    bool gameOver = false;

    // 遊戲主迴圈
    while (!gameOver) {
        printBoard(board); // 顯示當前棋盤

        int move;
        if (currentPlayer == PLAYER_MARK) {
            move = getPlayerMove(board); // 獲取玩家的有效移動
        } else {
            move = getComputerMove(board); // 獲取電腦的有效移動
        }

        makeMove(board, move, currentPlayer); // 執行移動

        // 檢查遊戲狀態
        if (checkWin(board, currentPlayer)) {
            printBoard(board); // 顯示最終棋盤
            std::cout << "玩家 " << currentPlayer << " 獲勝！" << std::endl;
            gameOver = true;
        } else if (isBoardFull(board)) {
            printBoard(board); // 顯示最終棋盤
            std::cout << "棋盤已滿，平局！" << std::endl;
            gameOver = true;
        } else {
            // 切換玩家
            currentPlayer = (currentPlayer == PLAYER_MARK) ? COMPUTER_MARK : PLAYER_MARK;
        }
    }

    return 0;
}

// --- 函式實作 ---

// 1. 顯示棋盤 (僅做顯示，不修改棋盤)
void printBoard(const char board[BOARD_SIZE][BOARD_SIZE]) {
    // 清屏 (簡單實現，可能在某些終端不適用)
    // std::cout << "\033[2J\033[1;1H"; // ANSI escape codes for clearing screen

    for (int i = 0; i < BOARD_SIZE; ++i) {
        for (int j = 0; j < BOARD_SIZE; ++j) {
            std::cout << " " << board[i][j] << " ";
            if (j < BOARD_SIZE - 1) std::cout << "|";
        }
        std::cout << std::endl;
        if (i < BOARD_SIZE - 1) {
            std::cout << "---|---|---" << std::endl;
        }
    }
    std::cout << std::endl;
}

// 2. 獲取玩家的有效移動 (僅獲取並驗證輸入)
int getPlayerMove(const char board[BOARD_SIZE][BOARD_SIZE]) {
    int move;
    int row, col;

    while (true) {
        std::cout << "請輸入你的移動位置 (1-9): ";
        std::cin >> move;

        // 將 1-9 的輸入轉換為二維陣列的 row, col
        // 1 2 3 -> row 0, col 0, 1, 2
        // 4 5 6 -> row 1, col 0, 1, 2
        // 7 8 9 -> row 2, col 0, 1, 2
        if (move >= 1 && move <= 9) {
            row = (move - 1) / BOARD_SIZE;
            col = (move - 1) % BOARD_SIZE;

            // 檢查該位置是否為空
            if (board[row][col] == EMPTY_CELL) {
                return move; // 返回有效的移動位置
            } else {
                std::cout << "該位置已被佔用，請重新選擇。" << std::endl;
            }
        } else {
            std::cout << "無效的輸入，請輸入 1 到 9 之間的數字。" << std::endl;
        }
    }
}

// 3. 將棋子放置到棋盤上 (僅執行移動操作)
void makeMove(char board[BOARD_SIZE][BOARD_SIZE], int move, char player) {
    int row = (move - 1) / BOARD_SIZE;
    int col = (move - 1) % BOARD_SIZE;
    board[row][col] = player;
}

// 4. 檢查某個玩家是否獲勝 (僅做檢查，不修改棋盤)
bool checkWin(const char board[BOARD_SIZE][BOARD_SIZE], char player) {
    // 檢查行
    for (int i = 0; i < BOARD_SIZE; ++i) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) return true;
    }
    // 檢查列
    for (int j = 0; j < BOARD_SIZE; ++j) {
        if (board[0][j] == player && board[1][j] == player && board[2][j] == player) return true;
    }
    // 檢查對角線
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) return true;
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) return true;

    return false;
}

// 5. 檢查棋盤是否已滿 (僅做檢查，不修改棋盤)
bool isBoardFull(const char board[BOARD_SIZE][BOARD_SIZE]) {
    for (int i = 0; i < BOARD_SIZE; ++i) {
        for (int j = 0; j < BOARD_SIZE; ++j) {
            if (board[i][j] == EMPTY_CELL) {
                return false; // 只要有一個空位，棋盤就未滿
            }
        }
    }
    return true; // 所有位置都已填滿
}

// 6. 獲取電腦的移動 (簡單的隨機策略，僅挑選空位)
int getComputerMove(const char board[BOARD_SIZE][BOARD_SIZE]) {
    std::vector<int> availableMoves; // 儲存所有可用的位置編號 (1-9)

    // 遍歷棋盤，找出所有空的位置
    for (int i = 0; i < BOARD_SIZE; ++i) {
        for (int j = 0; j < BOARD_SIZE; ++j) {
            if (board[i][j] == EMPTY_CELL) {
                // 將二維座標轉換回 1-9 的位置編號
                availableMoves.push_back(i * BOARD_SIZE + j + 1);
            }
        }
    }

    // 從可用的移動中隨機選擇一個
    if (!availableMoves.empty()) {
        int randomIndex = rand() % availableMoves.size();
        return availableMoves[randomIndex];
    }

    return -1; // 應該不會發生，除非棋盤已滿但 isBoardFull 檢查失敗
}
```
---

## 第 16 頁：Level 4 — 歷史書記與記憶深淵（檔案 I/O 與動態記憶體）

到了 Level 4，我們要解決一個問題：**程式關閉之後，資料怎麼辦？**

答案是：把資料寫到檔案裡。

**`ofstream`（輸出/寫入）**：用 `outFile << "08:00,12.5,220" << endl;` 把資料寫入 CSV 檔。

**`ifstream`（輸入/讀取）**：用 `while(getline(inFile, line))` 逐行讀取，這個模式要記住，它幾乎是所有檔案讀取的標準寫法。

記得用完要 `close()`，或者善用 RAII（物件生命週期自動管理），讓 stream 物件離開作用域時自動關閉。

---

**動態記憶體（Dynamic Memory）** 是 C++ 最強大、也最危險的特性。

`new` 讓你在執行期向系統借用記憶體：`double* pUsage = new double;`

⚠️ **有借必有還**：用完必須呼叫 `delete pUsage;`。如果忘記 `delete`，那塊記憶體就不會被釋放，這叫做「記憶體洩漏（Memory Leak）」。對 EMS 這種長時間運行的系統來說，記憶體洩漏會讓系統越跑越慢，最終崩潰。

陣列用 `new[] / delete[]`，千萬不要混用。

---

### **理解記憶體管理：手動 vs 自動 (GC)**

在 C++ 中，我們主要使用的是 **手動記憶體管理**。這意味著，當你需要一塊記憶體時（使用 `new`），你必須自己負責在用完之後將它歸還給系統（使用 `delete`）。這種方式提供了最大的靈活性和效能，但也伴隨著較高的風險，尤其是記憶體洩漏（Memory Leak）和懸空指標（Dangling Pointer）等問題。

許多其他程式語言（如 Java, Python, C#）則採用 **自動記憶體管理**，通常是透過 **垃圾回收 (Garbage Collection, GC)** 機制來實現。

**垃圾回收 (GC) 是什麼？**

垃圾回收器是一個在執行時期（runtime）運作的程式，它會自動追蹤程式中哪些記憶體是被使用的，哪些是「不再被引用」且「不再被存取」的（也就是「垃圾」）。一旦 GC 發現不再被使用的記憶體，它就會自動將這些記憶體釋放，歸還給系統。

**GC 的優點：**

- **減少記憶體錯誤：** 極大地降低了記憶體洩漏和懸空指標的風險，因為開發者不再需要手動管理記憶體。
- **開發效率：** 開發者可以更專注於業務邏輯，而不是耗費精力在記憶體管理上。

**GC 的缺點：**

- **效能開銷：** GC 的運行本身需要佔用 CPU 和記憶體資源。
- **不可預測的暫停 (Pause)：** GC 可能會在運行時暫停程式的執行，這對於需要嚴格即時響應的系統（如工業控制系統 EMS）來說，是不可接受的。
- **彈性較低：** 相較於手動管理，GC 對記憶體分配和釋放的控制力較弱。

**C++ 的選擇：**

C++ 之所以不預設使用 GC，是因為它設計的目標之一是提供對系統底層的精確控制，以達到最高的效能和最大的靈活性，特別適用於系統程式設計、遊戲開發、嵌入式系統等領域。

然而，C++ 也在不斷演進，引入了一些更安全的記憶體管理模式，例如 **智慧指標 (Smart Pointers)**，它們在一定程度上提供了類似 GC 的自動化管理能力，同時又保留了 C++ 的效能優勢（如 `std::unique_ptr`, `std::shared_ptr`）。這些也是後續可以學習的重要主題。

> 💡 **教練筆記（零基礎補給）**：說明 `new` 是「租屋」，`delete` 是「退租並把垃圾清空」。沒丟垃圾（記憶體洩漏）會導致系統越跑越慢，最終崩潰。


---

## 第 17–18 頁：Level 4 實戰 — 英雄排行榜（銘刻英雄榜）

Level 4 的實戰是把遊戲成績存進 CSV 排行榜，並在每次啟動時讀取並顯示 Top 3。

**資料流程**：遊戲結束 → 產生 `struct Record { name, score }` → 追加寫入 `scores.csv`（使用 `ios::app` 模式） → 下次啟動時用 `ifstream` 讀取 → 放進動態陣列 `new Record[n]` → 排序後印出 Top 3。

**C++ 核心技術對應**：
- `ofstream f("scores.csv", ios::app)` — 追加模式，不覆蓋舊資料
- `ifstream in("scores.csv"); getline(in, line)` — 逐行讀取
- `Record* arr = new Record[n]; delete[] arr;` — 動態陣列，用完要釋放

**延伸挑戰**：加入 `<ctime>` 紀錄時間戳記，或改用 `vector<Record>` 搭配 `std::sort` 來替代手動排序，這是更現代的 C++ 寫法。


**1. 創建 `Ranking.h` 標頭檔**
```cpp
#ifndef RANKING_H
#define RANKING_H

#include <string>
#include <vector>

// 定義一個結構體來儲存單一玩家的紀錄
struct PlayerRecord {
    std::string playerName;
    int score;
    // 可以在這裡新增時間戳記等其他欄位
};

// 函式宣告：將紀錄寫入排行榜檔案
// 參數：
//   filename: 要寫入的檔案名稱
//   record: 要寫入的玩家紀錄
// 返回：
//   true: 寫入成功
//   false: 寫入失敗
bool addRecordToRanking(const std::string& filename, const PlayerRecord& record);

// 函式宣告：從排行榜檔案讀取所有紀錄
// 參數：
//   filename: 要讀取的檔案名稱
// 返回：
//   一個包含所有玩家紀錄的 vector。如果檔案不存在或讀取失敗，則回傳空的 vector。
std::vector<PlayerRecord> loadRanking(const std::string& filename);

// 函式宣告：根據分數對排行榜進行排序 (分數越高越前面)
// 參數：
//   ranking: 要排序的玩家紀錄 vector
void sortRanking(std::vector<PlayerRecord>& ranking);

// 函式宣告：顯示排行榜的前 N 名
// 參數：
//   ranking: 已排序的玩家紀錄 vector
//   topN: 要顯示的前幾名
void displayTopN(const std::vector<PlayerRecord>& ranking, int topN);

#endif // RANKING_H
```

**創建 `Ranking.cpp` 實作檔**
```cpp
#include "Ranking.h"
#include <fstream>      // 為了檔案 I/O (ofstream, ifstream)
#include <algorithm>    // 為了 std::sort
#include <iostream>     // 為了 std::cout, std::endl

// --- 實作函式 ---

// 將紀錄寫入排行榜檔案
bool addRecordToRanking(const std::string& filename, const PlayerRecord& record) {
    // 以追加模式 (ios::app) 打開檔案，這樣新紀錄會加在檔案結尾
    std::ofstream outFile(filename, std::ios::app);
    if (!outFile.is_open()) {
        std::cerr << "錯誤：無法開啟檔案 " << filename << " 進行寫入。" << std::endl;
        return false; // 開啟失敗
    }

    // 寫入格式：playerName,score (CSV 格式，簡單起見)
    // 假設 playerName 不含逗號，否則需要更複雜的處理 (例如 quoting)
    outFile << record.playerName << "," << record.score << std::endl;

    outFile.close(); // 關閉檔案
    return true;    // 寫入成功
}

// 從排行榜檔案讀取所有紀錄
std::vector<PlayerRecord> loadRanking(const std::string& filename) {
    std::vector<PlayerRecord> ranking;
    std::ifstream inFile(filename);
    std::string line;

    if (!inFile.is_open()) {
        // 如果檔案不存在，這不是一個錯誤，只是代表排行榜是空的
        // std::cerr << "警告：排行榜檔案 " << filename << " 不存在，將建立一個空的排行榜。" << std::endl;
        return ranking; // 回傳空的 vector
    }

    // 逐行讀取檔案
    while (std::getline(inFile, line)) {
        // 解析每一行
        size_t commaPos = line.find(',');
        if (commaPos != std::string::npos) { // 找到逗號
            PlayerRecord record;
            record.playerName = line.substr(0, commaPos);
            try {
                // 將逗號後的部分轉換為分數 (整數)
                record.score = std::stoi(line.substr(commaPos + 1));
                ranking.push_back(record); // 將解析成功的紀錄加入 vector
            } catch (const std::invalid_argument& ia) {
                std::cerr << "警告：解析分數時發生錯誤，跳過無效行：" << line << std::endl;
            } catch (const std::out_of_range& oor) {
                std::cerr << "警告：分數超出範圍，跳過無效行：" << line << std::endl;
            }
        } else {
            std::cerr << "警告：讀取到格式錯誤的行，跳過：" << line << std::endl;
        }
    }

    inFile.close(); // 關閉檔案
    return ranking; // 回傳讀取到的所有紀錄
}

// 根據分數對排行榜進行排序 (分數越高越前面)
void sortRanking(std::vector<PlayerRecord>& ranking) {
    // 使用 std::sort 並提供一個 Lambda 表達式來定義排序規則
    // 規則是：如果 a.score > b.score，則 a 應該排在 b 前面 (遞減排序)
    std::sort(ranking.begin(), ranking.end(), [](const PlayerRecord& a, const PlayerRecord& b) {
        return a.score > b.score;
    });
}

// 顯示排行榜的前 N 名
void displayTopN(const std::vector<PlayerRecord>& ranking, int topN) {
    std::cout << "\n--- 英雄排行榜 (Top " << topN << ") ---" << std::endl;

    // 確保 topN 不會超過實際紀錄數量
    int count = std::min((int)ranking.size(), topN);

    if (count == 0) {
        std::cout << "排行榜是空的。" << std::endl;
        return;
    }

    // 顯示前 N 名
    for (int i = 0; i < count; ++i) {
        std::cout << (i + 1) << ". " << ranking[i].playerName << " - " << ranking[i].score << std::endl;
    }
    std::cout << "-----------------------" << std::endl;
}
```
**3. 修改主程式 (`main.cpp` 或您的遊戲主檔案) 以使用排行榜功能**

假設您的遊戲主程式名為 `Game.cpp`，您需要這樣修改：
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <ctime>
#include <algorithm> // For std::min

// --- 引入我們建立的排行榜模組 ---
#include "Ranking.h"

// --- 常數定義 ---
const int BOARD_SIZE = 3;
const char EMPTY_CELL = ' ';
const char PLAYER_MARK = 'X';
const char COMPUTER_MARK = 'O';
const std::string RANKING_FILENAME = "scores.csv"; // 定義排行榜檔案名稱

// --- 函式宣告 ---
// ... (printBoard, getPlayerMove, makeMove, checkWin, isBoardFull, getComputerMove 宣告) ...

// --- 主遊戲流程 ---
int main() {
    srand(time(0));

    // --- 遊戲啟動時：載入並顯示排行榜 ---
    std::vector<PlayerRecord> currentRanking = loadRanking(RANKING_FILENAME);
    sortRanking(currentRanking); // 確保載入後是排序好的
    displayTopN(currentRanking, 5); // 顯示 Top 5 (您可以調整數字)

    char board[BOARD_SIZE][BOARD_SIZE];
    // ... (初始化棋盤... 遊戲迴圈) ...

    // --- 遊戲結束時：處理排行榜 ---
    // (假設遊戲迴圈結束後，您已經獲得了玩家名稱和分數)
    std::string finalPlayerName = "Player1"; // 實際應從輸入獲取
    int finalPlayerScore = 0; // 實際應是遊戲得分

    std::cout << "\n遊戲結束！請輸入您的名字以記錄分數：";
    std::cin >> finalPlayerName;

    // 這裡您需要根據遊戲的實際得分來設定 finalPlayerScore
    // 例如，在猜數字遊戲中，可能是 100 - attempts (分數越高越好)
    // 在井字遊戲中，可能是勝利獎勵分數
    // 為了範例，我們假設一個得分機制，例如：
    finalPlayerScore = 100; // 假設一個預設得分

    PlayerRecord newRecord = {finalPlayerName, finalPlayerScore};
    addRecordToRanking(RANKING_FILENAME, newRecord); // 將新紀錄寫入檔案

    // 重新載入並顯示更新後的排行榜
    currentRanking = loadRanking(RANKING_FILENAME);
    sortRanking(currentRanking);
    displayTopN(currentRanking, 5); // 再次顯示 Top 5

    return 0;
}
```

---

## 第 19 頁：Level 5 — 大師鍛造坊（開發工具鏈概覽）

恭喜你走到 Level 5。這一關我們不寫遊戲，我們學的是讓程式**活在真實工程環境**所需的工具。

五個工具，五種角色：

1.  **Git（版本控制）** — 藍圖保險箱，每次提交都是一個快照，出問題可以回滾。
2.  **MSBuild（自動建置）** — 自動化鍛造爐，一道指令完成整個編譯流程。
3.  **Chrono（效能計時）** — 精密碼錶，確保 EMS 量測解析符合即時性需求（< 100ms）。
4.  **VS Code Analysis / Dr. Memory（品質檢驗）** — X 光掃描儀，靜態找語法漏洞，動態偵測 Memory Leak。
5.  **VS Debugger（深度除錯）** — 偵探放大鏡，設中斷點、逐行執行，揪出邏輯 Bug。

接下來我們逐一深入。

---

## 第 20 頁：Level 5 — Git 版本控制

學習目標（m）：維護與控制原始碼的連續版本。

為什麼 Git 很重要？你有沒有遇過「改壞了但不知道改了什麼」的情況？Git 就是解法。

**基本操作流程**：
```bash
git init                          # 建立新儲存庫
git add ems_main.cpp              # 把檔案加入暫存區
git commit -m "feat: 感測器讀取"   # 提交版本快照
git log --oneline                 # 看提交歷程
git diff HEAD~1 HEAD              # 比較最新兩版的差異
git checkout v1.0.0               # 切換到某個版本
```

**EMS 專案的分支策略**建議如下：
- `main`：穩定版，只接受通過測試的合併請求。
- `develop`：開發整合分支，多人協作的匯集處。
- `feature/alarm-module`：各功能獨立在自己的分支開發，完成後再合入 develop。

版本控制的核心價值不只是備份，更是**追蹤每次修改的原因與作者**。當你在生產環境追查一個月前的問題時，Git log 就是你的時光機。

---

## 第 21 頁：Level 5 — MSBuild 自動建置

學習目標（n）：使用編譯與連結選項，編譯與連結模組。

**MSVC 常用編譯選項**：
- `/W4`：開啟所有警告（**強烈建議**，警告是潛在 Bug 的先兆）
- `/std:c++17`：使用 C++17 標準，有更多現代語法可用
- `/Zi`：加入除錯資訊，搭配 VS Debugger 使用
- `/O2`：最佳化，發行版使用，不能跟 `/Zi` 同時開

**MSBuild 自動化建置**：
```bash
MSBuild ems.vcxproj /p:Configuration=Debug    # Debug 組態
MSBuild ems.vcxproj /p:Configuration=Release  # Release 組態
```
或是在 Visual Studio 裡直接按 `Ctrl+Shift+B`。

MSBuild 只會重新編譯有變動的檔案，大型專案的建置時間因此大幅縮短。這是從「會寫程式」到「會管理專案」的關鍵一步。

---

## 第 22 頁：Level 5 — Chrono 效能計時

學習目標（k）：對程式的執行進行計時。

EMS 系統有一個硬性需求：量測資料的解析必須在 100ms 以內完成。要怎麼確認？用 `<chrono>`。

```cpp
#include <chrono>
using namespace std::chrono;

auto start = high_resolution_clock::now();
processEnergyData(records);              // 欲計時的區段
auto end   = high_resolution_clock::now();
auto ms    = duration_cast<milliseconds>(end - start);
cout << "執行時間: " << ms.count() << " ms" << endl;
```

幾個實務建議：
- **多次測量取平均值**，排除作業系統排程的誤差。
- 在 Release 組態下計時，Debug 組態因為帶有除錯資訊，效能會不同。
- 計時結果作為「效能基準（Baseline）」，每次優化後比對，才能確認改動有效。

---

## 第 23 頁：Level 5 — 靜態分析與動態分析

學習目標（l）：對程式執行靜態分析與動態分析。

**靜態分析（不執行程式）**：用 Visual Studio 內建的 Code Analysis，或 Cppcheck，直接掃描原始碼找潛在問題。可以抓到記憶體洩漏、陣列越界、未初始化變數、除以零等問題。

在 Visual Studio 裡的操作路徑：分析 → 對方案執行程式碼分析。

**動態分析（執行時監控）**：用 Dr. Memory 在程式跑起來的時候，監控記憶體的使用狀況。

```bash
cl /Zi /Fe:ems.exe ems_main.cpp   # 含除錯資訊編譯
drmemory -- ems.exe               # 執行並偵測洩漏
```

Dr. Memory 可以抓到：Memory Leak、非法讀寫、Use-after-free（使用已釋放的記憶體）。

**品質目標很清楚：0 error，0 warning，這是基本線，不是加分題。每次提交程式碼前應該跑一次靜態掃描。**

---

## 第 24 頁：Level 5 — Visual Studio Debugger 深度除錯

學習目標（o）：對程式進行除錯。

除錯不是碰運氣改程式碼。我們有系統化的流程：

1.  以 Debug 組態建置：`Ctrl+Shift+B`
2.  按 F5 啟動偵錯
3.  點擊行號左側設中斷點（紅點），或按 F9
4.  在 Debug → Properties 設定命令列引數
5.  滑鼠懸停於變數查看數值，或在「監看式」視窗輸入變數名稱
6.  **F10**：逐步執行（不進入函式內部）
7.  **F11**：逐步執行（進入函式內部）
8.  F5 繼續執行，Shift+F5 停止偵錯

**常見的 EMS 程式錯誤類型**：
-   **邏輯錯誤**：程式能跑但結果不對，比如 kWh 計算公式有誤。最難找，靠 Debugger 逐步追蹤。
-   **執行期錯誤**：除以零、陣列越界、空指標解參考（Segmentation Fault）。有 Debugger 可以直接定位到出錯那行。
-   **記憶體錯誤**：Memory Leak、Use-after-free。需要 Dr. Memory 這類工具輔助。

---

## 第 25 頁：技能全開 — 迎向 EMS 系統實戰！

我們把整個課程拉回到最初的問題：**學這些到底是為了什麼？**

每一個遊戲練習，都對應到你在 EMS 系統中會真正遇到的問題：

| 遊戲練習       | §14.4.6 對應       | EMS 實戰場景                                           |
| :------------- | :--------------- | :--------------------------------------------------- |
| 猜數字         | 條件/迴圈控制      | 開發異常警報與重試機制                                 |
| 剪刀石頭布     | 表達式與邏輯       | 設備狀態的複雜布林邏輯判斷                             |
| 井字遊戲       | 陣列/指標/結構     | 處理多維度的感測器數據矩陣                             |
| 英雄排行榜     | 檔案 I/O 與記憶體   | 記錄用電歷史與高效記憶體管理                           |
| 除錯與工具鏈   | 分析/除錯/版控     | 確保工業級軟體的高可用性與零洩漏                         |

---

*講稿版本：v1.0｜依簡報 C++ System Programming Training 20260429 ZH 編制*