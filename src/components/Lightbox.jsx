import { useEffect, useRef } from 'react'
import SafeImage from './SafeImage.jsx'

// 圖片放大檢視
// images：[{ src, caption }]，index：目前顯示第幾張，onChange(i)：切換，onClose()：關閉
// 操作：點背景 / 按 × / 按 Esc 關閉；← → 或左右滑動切換上一張、下一張
export default function Lightbox({ images, index, onChange, onClose }) {
  const touchStartX = useRef(null)
  const count = images.length
  const img = images[index]

  const prev = () => onChange((index - 1 + count) % count)
  const next = () => onChange((index + 1) % count)

  // 鍵盤操作（每次 render 重新綁定，才能拿到最新的 index）
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && count > 1) prev()
      else if (e.key === 'ArrowRight' && count > 1) next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // 開啟時鎖住背景捲動，關閉時還原
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  // 手機左右滑動切換
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null || count < 2) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > 50) (dx > 0 ? prev() : next())
  }

  const stop = (fn) => (e) => {
    e.stopPropagation()
    fn()
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" className="lightbox__close" aria-label="關閉" onClick={stop(onClose)}>×</button>

      {count > 1 && (
        <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="上一張" onClick={stop(prev)}>❮</button>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <SafeImage src={img.src} alt={img.caption || ''} className="lightbox__img" loading="eager" />
        <figcaption className="lightbox__caption">
          {img.caption && <p>{img.caption}</p>}
          {count > 1 && <span className="lightbox__count">{index + 1} / {count}</span>}
        </figcaption>
      </figure>

      {count > 1 && (
        <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="下一張" onClick={stop(next)}>❯</button>
      )}
    </div>
  )
}
