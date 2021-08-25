import React from 'react'

function Characters() {
  return (
    <section className="books">
      <header className="home__header">
        <h1 className="home__title">Characters!</h1>
        <h2 className="home__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam minima ducimus corrupti omnis impedit tempore!</h2>
      </header>

      <div className="books__body">
        <div className="books__buttons-container">
          <button className="books__button">Character 1</button>
          <button className="books__button">Character 2</button>
          <button className="books__button">Character 3</button>
          <button className="books__button">Character 4</button>
          <button className="books__button">Character 5</button>
          <button className="books__button">Character 6</button>
          <button className="books__button">Character 7</button>
          <button className="books__button">Character 8</button>
          <button className="books__button">Character 9</button>
        </div>

        <div className="books__books-content">
          <div className="books__books-container">
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Character 1</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Character 2</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Character 3</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
          </div>
          <div className="books__books-container">
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Character 4</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Character 5</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
            <div className="books__book-container">
              <div className="example"></div>
              <p className="books__book-title">Character 6</p>
              <small className="books__book-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum?</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {Characters}
