import HomeSection from '../sections/HomeSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import WorkSection from '../sections/WorkSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import { photoWorks } from '../data/photoWorks.js'
import { designWorks } from '../data/designWorks.js'

// 主頁：長頁面，區塊順序即由上而下的順序
// 要新增區塊：在這裡加一個 section，並在 Navbar.jsx 的 links 加對應的 id
export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <WorkSection id="design" title="DESIGN" type="design" works={designWorks} />
      <WorkSection id="photo" title="PHOTO" type="photo" works={photoWorks} />
      <ContactSection />
    </>
  )
}
