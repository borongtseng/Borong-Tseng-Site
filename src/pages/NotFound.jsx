import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <h1>找不到這個頁面</h1>
      <Link to="/">回首頁</Link>
    </div>
  )
}
