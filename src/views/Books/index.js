import React from 'react'

import './styles.scss'

function Books() {
  return (
    <section className="books">
      <header className="home__header">
        <h1 className="home__title">Books!</h1>
        <h2 className="home__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam minima ducimus corrupti omnis impedit tempore!</h2>
      </header>

      <div className="books__body">
        <div className="books__buttons-container">
          <button className="books__button">Book 1</button>
          <button className="books__button">Book 2</button>
          <button className="books__button">Book 3</button>
          <button className="books__button">Book 4</button>
          <button className="books__button">Book 5</button>
          <button className="books__button">Book 6</button>
          <button className="books__button">Book 7</button>
          <button className="books__button">Book 8</button>
          <button className="books__button">Book 9</button>
        </div>

        <div className="books__books-content">
          <div className="books__books-container">
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Book 1</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Book 2</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Book 3</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
          </div>
          <div className="books__books-container">
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Book 4</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Book 5</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Book 6</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {Books}
