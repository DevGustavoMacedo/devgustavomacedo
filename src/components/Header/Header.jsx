import style from './Header.module.css'

import TypeIt from 'typeit-react'

export function Header() {
  return (
    <header className={style.header}>
      <img src="/stain.svg" alt="Stain" className={style.stain} />
      <div className={style.profile}>
        <div className={style.avatar} />
        <h1>Gustavo Macedo</h1>
        <h2>
          <TypeIt
            options={{
              speed: 50,
              waitUntilVisible: true,
            }}
            getBeforeInit={(instance) => {
              instance
              .type('Studying Computer Engineering at UNIVESP').pause(2000).delete()
              .type('Volunteered as a Frontend Developer at a Medical Startup').pause(2000).delete()
              .type('Worked 6 years as a Computer Technician').pause(2000).delete()
              .type('Looking for Internship in Web Development')
              
              return instance
            }}
          />
        </h2>
      </div>

      <div className={style.links}>
        <li>
          <a href="https://github.com/devgustavomacedo" target="_blank" rel="noreferrer">
            <img src="/github.svg" alt="Github Profile" />
            <h4>Github</h4>
          </a>
        </li>

        <li>
          <a href="https://linkedin.com/in/devgustavomacedo" target="_blank" rel="noreferrer">
            <img src="./linkedin.svg" alt="Linkedin Profile" />
            <h4>Linkedin</h4>
          </a>
        </li>
      </div>
    </header>
  )
}
