import { profile } from '../data/profile.js'

export default function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <h2 className="section__title">CONTACT</h2>
      <div className="home__info">
        <div className="home__info__line">
          <img src="public/images/envelope.svg" alt="mail" />
          <p>{profile.email_nycu}</p>
        </div>
        <p>{profile.email}</p>
        <div className="home__info__line">
          <img src="public/images/marker.svg" alt="marker" />
          <p>{profile.location}</p>
        </div>
        <div className="home__info__line">
          <img src="public/images/globe.svg" alt="globe" />
          <ul className="socials">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </section>
  )
}
