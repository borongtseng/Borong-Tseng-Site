# My Portfolio

## 啟動
    pnpm install   # 第一次才需要
    pnpm run dev

## 網站結構（只有兩種頁面）
1. 主頁 `/`：HOME / ABOUT / PHOTO / DESIGN / CONTACT 由上而下的長頁面，Navbar 固定在最上方，點選會平滑捲動到該區塊
2. 作品頁 `/photo/:id`、`/design/:id`：點擊作品後進入（共用同一個 WorkDetail 頁面）

## 改內容 → 只改 src/data/
- profile.js      個人資料、社群、履歷 PDF 路徑
- resume.js       經歷 / 學歷 / 技能
- photoWorks.js   攝影作品（每筆 = 一組照片）
- designWorks.js  設計作品

## 圖片與檔案
- 圖片放 public/images/ → 資料裡寫 "/images/檔名.jpg"
- 檔案放 public/files/  → 資料裡寫 "/files/檔名.pdf"
- 每個作品的 images 陣列：前 3 張會用在主頁的拼貼縮圖，全部會顯示在作品頁

## 改版面
- 主頁各區塊：src/sections/
- 作品卡片：src/components/WorkCard.jsx
- 作品頁：src/pages/WorkDetail.jsx
- 樣式：src/styles/global.css（最上面有 :root 變數，如 Navbar 高度、背景色）
"# Borong-Tseng-Site" 
