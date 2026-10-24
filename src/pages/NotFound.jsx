import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <h1>找不到這個頁面 Page doesn't exist. ~_~</h1>
      <Link to="/">回去首頁看看！ Back to home page!</Link>
    </div>
  )
}
