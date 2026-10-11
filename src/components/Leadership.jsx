import { certificates } from '../data.js'

export default function Certificates() {
  return (
    <section className="dark wv" id="certificates">
      <div className="head">
        <h2>Certificates &amp; achievements</h2>
        <p>Courses I have completed and skills I have formally validated along the way.</p>
      </div>
      <div className="line">
        {certificates.map(([meta, title, text]) => (
          <div className="proj" key={title}>
            <small>{meta}</small><h3>{title}</h3><p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}