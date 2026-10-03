import { useMemo } from 'react'

const skills = [
  ['HTML5', '#ff6b00', 'HTML', 'Structure of the web'],
  ['CSS3', '#3182ff', 'CSS', 'Styling for beautiful UI'],
  ['JavaScript', '#ffd21c', 'JS', 'Bringing interactivity'],
  ['Bootstrap', '#a855f7', 'B', 'Responsive & modern UI'],
  ['React', '#00e5ff', '⚛', 'Building dynamic UIs'],
  ['Tailwind', '#28d8f5', '≈', 'Fast & flexible styling'],
  ['Python', '#ffd04a', 'Py', 'Powerful backend logic'],
  ['Django', '#2ee6a6', 'dj', 'Robust web framework'],
  ['PostgreSQL', '#62a8e0', 'PG', 'Reliable database'],
  ['Git', '#ff5a18', '◆', 'Version control made easy'],
]

export default function SkillsPage() {
  const style = useMemo(() => `
    .skills-page {
      min-height: 100vh;
      color: #fff;
      background:
        radial-gradient(circle at 10% 20%, #00f6fe18, transparent 25%),
        radial-gradient(circle at 90% 75%, #008cff18, transparent 28%),
        linear-gradient(135deg, #050b14, #071522 55%, #02070d);
      padding: 42px 4% 90px;
    }

    .skills-wrap {
      max-width: 1450px;
      margin: 0 auto;
    }

    .skills-head {
      text-align: center;
      margin-bottom: 42px;
    }

    .skills-kicker {
      letter-spacing: 5px;
      color: #00f6fe;
      font-size: 14px;
      font-weight: 700;
      margin: 5px 0 12px;
      text-shadow: 0 0 15px #00f6fe88;
    }

    .skills-title {
      font-size: clamp(38px, 5vw, 52px);
      margin: 0 0 14px;
      color: #f5f7fa;
    }

    .skills-title span {
      color: #00f6fe;
      text-shadow: 0 0 20px #00f6fe66;
    }

    .skills-sub {
      max-width: 690px;
      margin: 0 auto;
      color: #c9d5df;
      font-size: 18px;
      line-height: 1.6;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 22px;
    }

    .skill-card {
      min-height: 285px;
      padding: 27px 16px 22px;
      border: 1px solid #00e5ff35;
      border-radius: 22px;
      background:
        linear-gradient(
          145deg,
          rgba(16, 35, 50, 0.92),
          rgba(5, 15, 25, 0.96)
        );
      overflow: hidden;
      position: relative;
      transition: .45s cubic-bezier(.2,.8,.2,1);
      box-shadow:
        inset 0 0 35px #00e5ff08,
        0 12px 35px #00000066;
      text-align: center;
    }

    .skill-card::before {
      content: "";
      position: absolute;
      inset: -80% -20%;
      background:
        linear-gradient(
          115deg,
          transparent 40%,
          #ffffff35 50%,
          transparent 60%
        );
      transform: translateX(-55%) rotate(8deg);
      transition: .7s;
      pointer-events: none;
    }

    .skill-card:hover {
      transform: translateY(-10px);
      border-color: #00f6fe;
      box-shadow:
        0 0 25px #00e5ff55,
        0 18px 45px #00000088;
    }

    .skill-card:hover::before {
      transform: translateX(55%) rotate(8deg);
    }

    .skill-orbit {
      width: 125px;
      height: 125px;
      margin: 0 auto 18px;
      border-radius: 50%;
      border: 2px solid var(--skill-color);
      display: grid;
      place-items: center;
      position: relative;
      box-shadow:
        0 0 28px var(--skill-color),
        inset 0 0 24px var(--skill-color);
    }

    .skill-orbit::after {
      content: "";
      position: absolute;
      width: 155px;
      height: 45px;
      border: 2px solid var(--skill-color);
      border-radius: 50%;
      transform: rotate(-20deg);
      opacity: .9;
    }

    .skill-card:hover .skill-orbit {
      animation: skill-spin 1.8s linear infinite;
    }

    .skill-icon {
      font-size: 48px;
      font-weight: 900;
      color: var(--skill-color);
      text-shadow: 0 0 18px var(--skill-color);
      user-select: none;
    }

    .skill-card h3 {
      font-size: 21px;
      margin: 5px 0 7px;
      color: #f5f7fa;
    }

    .skill-card p {
      font-size: 13px;
      color: #aebdca;
      margin: 0 0 18px;
    }

    .skill-arrow {
      display: inline-grid;
      place-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid var(--skill-color);
      border-radius: 50%;
      color: var(--skill-color);
      transition: .35s;
    }

    .skill-card:hover .skill-arrow {
      transform: rotate(360deg);
      box-shadow: 0 0 15px var(--skill-color);
    }

    .learning-card {
      margin-top: 32px;
      width: 100%;
      min-height: 96px;
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 20px 22px;
      border-radius: 18px;

      border: 1px solid #00e5ff35;

      background:
        linear-gradient(
          135deg,
          rgba(12, 39, 53, 0.92),
          rgba(5, 17, 28, 0.96)
        );

      box-shadow:
        inset 0 0 30px #00e5ff08,
        0 10px 35px #00000055;

      transition: .4s ease;
    }

    .learning-card:hover {
      transform: translateY(-5px);
      border-color: #00f6fe;
      box-shadow:
        0 0 25px #00e5ff35,
        inset 0 0 30px #00e5ff0c;
    }

    .learning-icon {
      width: 48px;
      height: 48px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;

      background: #00e5ff12;
      border: 1px solid #00e5ff35;

      font-size: 22px;

      box-shadow:
        0 0 18px #00e5ff22;
    }

    .learning-content {
      flex: 1;
    }

    .learning-content h3 {
      margin: 0 0 5px;
      font-size: 18px;
      font-weight: 700;
      color: #f5f7fa;
    }

    .learning-content p {
      margin: 0;
      color: #aebdca;
      font-size: 15px;
      line-height: 1.5;
    }

    .learning-badge {
      padding: 10px 17px;
      border-radius: 8px;

      border: 1px solid #00e5ff40;

      background: #00e5ff0c;

      color: #8ffaff;
      font-size: 14px;
      white-space: nowrap;

      box-shadow: 0 0 12px #00e5ff15;
    }

    @keyframes skill-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 1050px) {
      .skills-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 700px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .skills-page {
        padding-left: 18px;
        padding-right: 18px;
      }

      .learning-card {
        align-items: flex-start;
        flex-wrap: wrap;
      }

      .learning-content {
        min-width: calc(100% - 70px);
      }

      .learning-badge {
        margin-left: 66px;
      }
    }

    @media (max-width: 460px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }

      .learning-card {
        flex-direction: column;
        align-items: flex-start;
      }

      .learning-content {
        min-width: 100%;
      }

      .learning-badge {
        margin-left: 0;
      }
    }
  `, [])

  return (
    <section className="skills-page">
      <style>{style}</style>

      <div className="skills-wrap">

        <div className="skills-head">
          <div className="skills-kicker">
            MY SKILLS
          </div>

          <h1 className="skills-title">
            Technologies I <span>Work With</span>
          </h1>

          <p className="skills-sub">
            Here are the tools and technologies I use to build modern,
            responsive and user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(([name, color, icon, description]) => (
            <article
              className="skill-card"
              key={name}
              style={{ '--skill-color': color }}
            >
              <div className="skill-orbit">
                <div className="skill-icon">
                  {icon}
                </div>
              </div>

              <h3>{name}</h3>

              <p>{description}</p>

              <div className="skill-arrow">
                →
              </div>
            </article>
          ))}
        </div>

        <div className="learning-card">

          <div className="learning-icon">
            💡
          </div>

          <div className="learning-content">
            <h3>
              Continuous Learning
            </h3>

            <p>
              Currently expanding into AI integration, automation workflows
              and scalable backend systems.
            </p>
          </div>

          <div className="learning-badge">
            Always Improving
          </div>

        </div>

      </div>
    </section>
  )
}