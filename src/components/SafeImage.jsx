// 圖片載入失敗時自動換成佔位圖，避免出現破圖
export default function SafeImage({ src, alt = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = '/images/placeholder.svg'
      }}
      {...props}
    />
  )
}
