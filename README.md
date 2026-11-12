# 📖 Vocab Flashcard Worker

> **極簡美式單字即時發音 & 艾賓浩斯複習庫**  
> 一個部署於 **Cloudflare Workers** 邊緣節點的極速、純淨單字學習工具。內建離線繁體中文轉換核心、雙欄無干擾介面、防猜答抽認卡與個人專屬零額度消耗雲端同步。

---

## ✨ 核心特色

- ⚡ **0ms 離線高精度繁體中文轉換**：
  - 內建基於 **OpenCC 臺灣正體標準** 的 2,712 組常用字元與 350 組高頻語法片語對照表（如：`过去式` ➔ `過去式`、`复习` ➔ `複習`、`温习` ➔ `溫習`、`短语` ➔ `片語`、`研制` ➔ `研製` 等）。
  - 完全無須依賴易受阻擋的外部翻譯 API，在邊緣端以 0ms 速度即時輸出優雅繁體中文。
- 🔊 **美式真人真音即時串流代理**：
  - 優先抓取 Dictionary API 美式真人發音，支援同源邊緣快取；必要時自動無縫容錯至 Google TTS。
- 🧠 **艾賓浩斯加權複習庫 (Spaced Repetition)**：
  - 支援 **1 生疏（6x 出現頻率）**、**2 模糊（3x 出現頻率）**、**3 精通（1x 出現頻率）** 三段階層演算法，動態調節複習權重。
- 🎯 **極致純淨、防猜答設計**：
  - 全面移除國際音標與英英長句干擾，正面僅呈現單字與發音按鈕。
  - 左側單字查詢區詞性與釋義膠囊完美置中，閱讀舒適不疲勞。
  - 採純直角設計（Square Corners），深色沉浸主題。
- ⌨ **全鍵盤盲打流暢操控**：
  - <kbd>Alt</kbd>：隨時隨地一鍵將查詢到的單字加入/移出收藏（帶金黃星星觸感微動效）。
  - <kbd>Tab</kbd>：隨時切換並立即聚焦至單字查詢框。
  - <kbd>Enter</kbd>：送出單字查詢並自動播放美式發音。
  - <kbd>ddd</kbd>：連續輸入三次快速清空查詢框。
  - <kbd>Space</kbd>：抽認卡翻面核對。
  - <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd>：評估單字熟悉度並自動載入下一張。
  - <kbd>R</kbd>：重新聽取目前卡片發音。
  - 底部提示列支援一鍵收合/展開，並保存偏好於本機。
- ☁ **個人專屬雲端同步（Cloudflare KV 零佔用防護）**：
  - **方案一（專屬密碼 Pre-Shared Secret）**：未授權請求在邊緣 1ms 立即攔截，0 消耗 KV 寫入額度。
  - **方案二（鎖定單一專屬槽位 `MY_DECK`）**：固定覆蓋更新，容量永遠小於 50KB，絕無殭屍殘留資料。
  - 支援智慧雙向合併（以最新複習時間與次數優先）、本地覆蓋上傳、雲端覆蓋下載。
- 📥 **本機備份與無痛遷移**：
  - 支援單字庫匯出為 JSON 檔案，以及隨時匯入合併。
  - 前端內建自動繁化邏輯，若歷史卡片含有簡體字，重新整理時將自動遷移繁化。

---

## 🚀 部署指南

### 方法一：使用 Cloudflare 線上編輯器（最快速，免安裝任何工具）

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ 前往 **Workers & Pages**。
2. 點擊 **Create application** ➔ **Create Worker**，輸入名稱（例如 `vocab-worker`）並完成建立。
3. 點擊 **Quick edit** 進入線上編輯器。
4. 打開本專案的 [`worker.js`](./worker.js)，全選複製並覆蓋編輯器中所有預設代碼。
5. 點擊右上角 **Save and deploy（儲存並部署）** 即可立即使用！

---

### 方法二：使用 Wrangler CLI 部署

```bash
# 1. 複製專案庫
git clone https://github.com/marker1111014/vocab-flashcard-worker.git
cd vocab-flashcard-worker

# 2. 安裝依賴
npm install

# 3. 本地預覽開發
npm run dev

# 4. 部署至 Cloudflare Workers
npm run deploy
```

---

## 🔒 設定個人專屬 KV 雲端同步（選填）

如果您希望在不同電腦或手機間同步單字庫進度：

1. **建立 KV 命名空間**：
   - 在 Cloudflare 儀表板前往 **Workers & Pages** ➔ **KV** ➔ **Create a namespace**，命名為 `VOCAB_KV`。
2. **綁定至您的 Worker**：
   - 進入您的 Worker ➔ **Settings** ➔ **Variables** ➔ **KV Namespace Bindings**。
   - 點擊 **Add binding**：
     - **Variable name**：`VOCAB_KV`
     - **KV namespace**：選擇剛剛建立的 `VOCAB_KV`。
3. **設定專屬防護密碼**：
   - 在 **Environment Variables** 區塊點擊 **Add variable**：
     - **Variable name**：`SYNC_SECRET`
     - **Value**：自訂一組只有您知道的密碼（例如 `my-super-secret-key-888`）。
4. **在網頁端使用**：
   - 打開 Worker 網頁，點擊右側 **☁ 雲端同步** 按鈕。
   - 輸入您設定的 `SYNC_SECRET`，即可享受安全的雲端同步與雙向合併！

---

## 📄 開源授權

本專案基於 [MIT License](./LICENSE) 開源。
