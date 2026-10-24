import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { scrollToSection } from '../utils/scroll.js'

// id 必須對應 Home.jsx 裡各區塊的 id
const links = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'photo', label: 'PHOTO' },
  { id: 'design', label: 'DESIGN' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false) // 手機版選單是否展開

  // 換頁時收起選單
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // 選單展開時，按 Esc 可收起
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // 在主頁：直接平滑捲動；在作品頁：交給 Link 導回主頁，Layout 會負責捲到該區塊
  const handleClick = (id) => (e) => {
    setOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      scrollToSection(id)
    }
  }

  return (
    <header className="navbar">
      <Link to="/#home" className="navbar__logo" onClick={handleClick('home')} aria-label="Home">
        {profile.logo ? <img src={profile.logo} alt="LOGO" /> : <span>LOGO</span>}
      </Link>

      {/* 漢堡按鈕：只在手機 / 平板直式（CSS 的 820px 以下）才會顯示 */}
      <button
        type="button"
        className="navbar__toggle"
        aria-label="選單"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <nav id="nav-links" className={open ? 'navbar__links is-open' : 'navbar__links'}>
        {links.map((l) => (
          <Link key={l.id} to={`/#${l.id}`} className="navbar__link" onClick={handleClick(l.id)}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
