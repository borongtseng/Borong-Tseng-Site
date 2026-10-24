import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { scrollToSection } from '../utils/scroll.js'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()
  const prevPath = useRef(pathname)

  // 路由切換時的捲動規則：
  // 1. 網址帶 #photo 之類的 hash → 捲到該區塊
  // 2. 按瀏覽器「上一頁」回主頁 → 回到離開時的位置
  // 3. 其他 → 回到頁面頂端
  useEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname

    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      if (document.getElementById(id)) {
        scrollToSection(id, samePage ? 'smooth' : 'auto')
        return
      }
    }
    if (navType === 'POP' && pathname === '/') {
      window.scrollTo(0, Number(sessionStorage.getItem('homeScroll')) || 0)
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, navType])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
