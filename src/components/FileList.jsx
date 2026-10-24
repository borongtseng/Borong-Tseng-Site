// 可下載檔案清單：files = [{ label, src }]
export default function FileList({ files = [] }) {
  if (!files.length) return null
  return (
    <ul className="file-list">
      {files.map((f) => (
        <li key={f.src}>
          <a href={f.src} download>{f.label}</a>
        </li>
      ))}
    </ul>
  )
}
