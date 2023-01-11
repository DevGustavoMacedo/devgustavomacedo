import style from './Card.module.css'

import cards from '../../data'

export function Card() {
  return (
    <main className={style.main}>
      <ul className={style.cards}>
        {cards.map((card) => (
          <li className={style.card} key={card.title}>
            <h3>{card.title}</h3>
            <a href={card.link} target="_blank" rel="noreferrer">
              <img src={card.image} alt={card.title} />
            </a>
            <div>
              <p>
                <b>About:</b> {card.about}
              </p>
              <p className="made">
                <b>Made with: </b>
                {card.made.map((item) => (
                  <img
                  key={item.name}
                  src={`https://img.shields.io/badge/${item.name}-4545e5.svg?style=for-the-badge&logo=${item.logo}&logoColor=white`}
                  alt={item.name}
                  />
                  ))}
              </p>
            </div>
            <span className={style.cursor}>
            <img src={'/cursor.svg'} alt='Click here' />

            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
