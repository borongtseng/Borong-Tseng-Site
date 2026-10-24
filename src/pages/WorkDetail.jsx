import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { photoWorks } from '../data/photoWorks.js'
import { designWorks } from '../data/designWorks.js'
import SafeImage from '../components/SafeImage.jsx'
import FileList from '../components/FileList.jsx'
import Lightbox from '../components/Lightbox.jsx'
import NotFound from './NotFound.jsx'

const collections = { photo: photoWorks, design: designWorks }

// 作品頁：攝影與設計共用。type 由路由決定 (/photo/:id 或 /design/:id)
export default function WorkDetail({ type }) {
  const { id } = useParams()
  const [zoomIndex, setZoomIndex] = useState(null) // 目前放大的是第幾張；null = 沒有放大
  const work = collections[type].find((w) => w.id === id)

  if (!work) return <NotFound />

  const meta = [work.date, work.location, work.category].filter(Boolean).join(' / ')

  // 第一張圖是上方的 hero 大圖，其餘的圖用網格排列，說明文字（img.caption）顯示在圖片下方
  const [hero, ...rest] = work.images

  // 讓圖片可以點擊放大（也支援鍵盤 Tab + Enter）。i 是這張圖在 work.images 裡的位置
  const zoom = (i) => ({
    onClick: () => setZoomIndex(i),
    onKeyDown: (e) => e.key === 'Enter' && setZoomIndex(i),
    tabIndex: 0,
    role: 'button',
  })

  return (
    <article className="page work-detail">
      <Link to={`/#${type}`} className="work-detail__back">↼ 返回 Back to {type.toUpperCase()}</Link>

      <h1 className="work-detail__title">{work.title}</h1>
      <p className="work-detail__meta">{meta}</p>
      {work.tags?.length > 0 && (
        <ul className="tags">{work.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      )}

      {work.description?.length > 0 && (
        <div className="work-detail__text">
          {work.description.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      )}

      {hero && (
        <figure className="work-detail__hero">
          <SafeImage src={hero.src} alt={hero.caption || work.title} className="zoomable" {...zoom(0)} />
          {hero.caption && <figcaption>{hero.caption}</figcaption>}
        </figure>
      )}

      {rest.length > 0 && (
        <div className="work-gallery">
          {rest.map((img, i) => (
            <figure key={i} className="work-gallery__item">
              <SafeImage
                src={img.src}
                alt={img.caption || work.title}
                className="work-gallery__img zoomable"
                {...zoom(i + 1)}
              />
              {img.caption && <figcaption className="work-gallery__caption">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      <FileList files={work.files} />

      {zoomIndex !== null && (
        <Lightbox
          images={work.images}
          index={zoomIndex}
          onChange={setZoomIndex}
          onClose={() => setZoomIndex(null)}
        />
      )}
    </article>
  )
}