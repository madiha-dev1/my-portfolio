import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import HoloCard from './HoloCard'
import { ArrowRight } from './Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function AboutPreview() {
  return (
    <section className="section" id="about">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-12">
        <div className="min-w-[300px] flex-1">
          <Reveal as="p" className="kicker">
            About
          </Reveal>
          <Reveal as="h2" className="sec-title">
            {profile.aboutHeading}
          </Reveal>
          <Reveal as="p" className="lede">
            {profile.aboutBody}
          </Reveal>
          <Reveal className="mt-7">
            <Link className="btn btn-ghost" to="/about">
              <span>More about me</span>
             <FontAwesomeIcon icon={faArrowRight}/>
            </Link>
          </Reveal>
        </div>

        <HoloCard />
      </div>
    </section>
  )
}
