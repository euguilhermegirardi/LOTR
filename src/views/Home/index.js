import React from 'react'
import {FaBook} from 'react-icons/fa'
import {MdLocalMovies} from 'react-icons/md'
import {RiCharacterRecognitionFill} from 'react-icons/ri'
import {ImQuotesRight} from 'react-icons/im'

import './styles.scss'

function Home() {
  return (
    <section className="home">
      <header className="home__header">
        <h1 className="home__title">The Lord of the Rings</h1>
        <h2 className="home__subtitle">Description of this awesome website exercise!</h2>
      </header>

      <div className="home__body">
        <section className="home__section">
          <div className="home__item-container">
            <FaBook size={45} color="#F7F7FF" />
            <h3 className="home__item-title">Books</h3>
            <p className="home__item-description">Books page description</p>
          </div>
          <div className="home__item-container">
            <MdLocalMovies size={45} color="#F7F7FF" />
            <h3 className="home__item-title">Movies</h3>
            <p className="home__item-description">Movies page description</p>
          </div>
        </section>
        <section className="home__section">
          <div className="home__item-container">
            <RiCharacterRecognitionFill size={45} color="#F7F7FF" />
            <h3 className="home__item-title">Characters</h3>
            <p className="home__item-description">Characters page description</p>
          </div>
          <div className="home__item-container">
            <ImQuotesRight size={45} color="#F7F7FF" />
            <h3 className="home__item-title">Quotes</h3>
            <p className="home__item-description">Quotes page description</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export {Home}
