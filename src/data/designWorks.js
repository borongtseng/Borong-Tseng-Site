// 每一筆 = 主頁的一張卡片 = 一個作品頁 (/design/<id>)
const img = { src: '/images/placeholder.svg', caption: '' }

export const designWorks = [
  {
    id: 'design-1',
    title: '陽明交大交心志工團宣傳',
    date: '2026.09',
    category: '海報設計',
    tags: ['Logo', 'Branding'],
    description: ['專案背景與目標。', '設計過程與成果。'],
    images: [img, img, img, img],
    files: [{ label: '下載作品 PDF', src: '/files/design-1.pdf' }],
  },
  { id: 'design-2', title: '清大蘭友會返鄉服務營隊', date: '2026 09 12', category: '平面設計', tags: [], description: [], images: [img, img, img], files: [] },
  { id: 'design-3', title: '宜蘭高中科實班旗幟', date: '2026 09 12', category: '平面設計', tags: [], description: [], images: [img, img, img], files: [] },
  { id: 'design-4', title: '宜蘭高中科實班成果發表會', date: '2026 09 12', category: '平面設計', tags: [], description: [], images: [img, img, img], files: [] },
  { id: 'design-5', title: '宜蘭高中科實班科學營', date: '2026 09 12', category: '平面設計', tags: [], description: [], images: [img, img, img], files: [] },
]
