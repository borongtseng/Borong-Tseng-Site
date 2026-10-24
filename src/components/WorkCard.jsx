import { Link } from 'react-router-dom'
import SafeImage from './SafeImage.jsx'

// 主頁上的作品卡片：標題 + 日期 + 最多 3 張圖的拼貼，滑過顯示「點擊觀看」
// type = 'photo' | 'design'，決定點擊後前往 /photo/:id 或 /design/:id
export default function WorkCard({ work, type }) {
  const thumbs = work.images.length
    ? work.images.slice(0, 3)
    : [{ src: '/images/placeholder.svg' }]

  // 離開主頁前記住捲動位置，按「上一頁」時才能回到原處
  const rememberScroll = () => sessionStorage.setItem('homeScroll', String(window.scrollY))

  return (
    <Link to={`/${type}/${work.id}`} className="work-card" onClick={rememberScroll}>
      <div className="work-card__head">
        <div>
          <h3 className="work-card__title">{work.title}</h3>
        </div>
        <p className="work-card__date">{work.date} / {work.location}</p>
      </div>
      <div className={`collage collage--${thumbs.length}`}>
        {thumbs.map((img, i) => (
          <SafeImage key={i} src={img.src} alt={work.title} />
        ))}
      </div>
    </Link>
  )
}
