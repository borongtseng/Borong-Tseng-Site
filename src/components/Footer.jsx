import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name_en}</p>
    </footer>
  )
}
