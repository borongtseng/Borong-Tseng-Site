import { profile } from '../data/profile.js'

export default function HomeSection() {
  return (
    <section id="home" className="section section--home">
      <img src="/images/S__2400258.jpg" alt="bio-pic" className="home__biopic" />

      <div className="beside__pic">
        <div className="home__id">
          <p className="home__name">{profile.name}</p>
          <p className="home__name__en">{profile.name_en}</p>
          <p className="home__school">{profile.school}</p>
          <p className="home__title">{profile.title}</p>
        </div>
        

        <div className="home__info">
          <div className="section__title-bar">bar</div>

          <div className="home__info__line">
            <img src="/images/envelope.svg" alt="mail" />
            <p>{profile.email_nycu}</p>
          </div>

          <p>{profile.email}</p>

          <div className="home__info__line">
            <img src="/images/marker.svg" alt="marker" />
            <p>{profile.location}</p>
          </div>
          
        </div>
        <div className="home__barcode">
          <img src="/images/barcode.png" alt="barcode" className='barcode' />
        </div>
      </div>


    </section>
  )
}
