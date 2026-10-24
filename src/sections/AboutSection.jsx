import { profile } from '../data/profile.js'
import { experience, education, skills } from '../data/resume.js'
import SafeImage from '../components/SafeImage.jsx'
import FileList from '../components/FileList.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <div className="section__title-set">
        <h2 className="section__title">ABOUT</h2>
        <div className="section__title-bar">bar</div>
      </div>

      <div className="about-intro">
        <SafeImage src={profile.avatar} alt={profile.name} className="about-intro__avatar" />
        <div>
          <p>{profile.intro}</p>
          <FileList files={[{ label: '下載履歷 (PDF)', src: profile.cvFile }]} />
        </div>
      </div>

      <div className="resume">
        {/* <div className="resume__block">
          <h3>經歷</h3>
          {experience.map((e) => (
            <article key={e.id} className="resume-item">
              <h4>{e.role}</h4>
              <p className="resume-item__meta">{e.org} / {e.period}</p>
              <p>{e.description}</p>
              {e.highlights?.length > 0 && (
                <ul>{e.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              )}
            </article>
          ))}
        </div> */}

        <div className="resume__block">
          <h3>學歷</h3>
          {education.map((e) => (
            <article key={e.id} className="resume-item">
              <h4>{e.school}</h4>
              <p className="resume-item__meta">{e.degree} / {e.period}</p>
              {e.description && <p>{e.description}</p>}
            </article>
          ))}
        </div>

        <div className="resume__block">
          <h3>經歷</h3>
          {experience.map((e) => (
            <article key={e.id} className="resume-item">
              <h4>{e.act}</h4>
              <p className="resume-item__meta">{e.pos} / {e.time}</p>
              {e.description && <p>{e.description}</p>}
            </article>
          ))}
        </div>

        {/* <div className="resume__block">
          <h3>技能</h3>
          {skills.map((s) => (
            <div key={s.category} className="skill-group">
              <h4>{s.category}</h4>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
