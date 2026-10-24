import WorkCard from '../components/WorkCard.jsx'

// PHOTO 與 DESIGN 共用同一個區塊元件
export default function WorkSection({ id, title, type, works }) {
  return (
    <section id={id} className="section section--works">
      <h2 className="section__title">{title}</h2>
      <div className="work-grid">
        {works.map((w) => (
          <WorkCard key={w.id} work={w} type={type} />
        ))}
      </div>
    </section>
  )
}
