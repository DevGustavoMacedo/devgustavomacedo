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
              speed: 150,
              waitUntilVisible: true,
            }}
            getBeforeInit={(instance) => {
              instance
              .type('Worked for 5 years as an IT technician').pause(300).delete()
              .type('Bachelor in Information Technology at Univesp').pause(300).delete()
              .type('Working as a Volunteer Frontend Developer')
              
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
