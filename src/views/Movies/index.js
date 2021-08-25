import React from 'react'

function Movies() {
  return (
    <section className="books">
      <header className="home__header">
        <h1 className="home__title">Movies!</h1>
        <h2 className="home__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam minima ducimus corrupti omnis impedit tempore!</h2>
      </header>

      <div className="books__body">
        <div className="books__buttons-container">
          <button className="books__button">Movie 1</button>
          <button className="books__button">Movie 2</button>
          <button className="books__button">Movie 3</button>
          <button className="books__button">Movie 4</button>
          <button className="books__button">Movie 5</button>
          <button className="books__button">Movie 6</button>
          <button className="books__button">Movie 7</button>
          <button className="books__button">Movie 8</button>
          <button className="books__button">Movie 9</button>
        </div>

        <div className="books__books-content">
          <div className="books__books-container">
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Movie 1</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Movie 2</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Movie 3</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
          </div>
          <div className="books__books-container">
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Movie 4</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Movie 5</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Movie 6</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {Movies}
