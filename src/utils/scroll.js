// 捲動到主頁的某個區塊（id 對應 section 的 id）
// Navbar 高度的位移由 CSS 的 scroll-margin-top 處理
export function scrollToSection(id, behavior = 'smooth') {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior, block: 'start' })
}
