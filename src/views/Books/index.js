import React from 'react'

import './styles.scss'
import {client} from '../../utils/api-client'
import {createResource} from '../../utils/create-resource'
import {SmallSpinner} from '../../components/FullPageSpinner'
import {ErrorBoundaryComponent} from '../../utils/errorBoundary'
import book1 from '../../assets/authenticated-app/book1.jpeg'
import book2 from '../../assets/authenticated-app/book2.jpeg'
import book3 from '../../assets/authenticated-app/book3.jpeg'

function Books() {
  const [bookInfoReady, setBookInfoReady] = React.useState(false)
  const [bookId, setBookId] = React.useState('')
  const [bookName, setBookName] = React.useState('')
  const [bookResource, setBookResource] = React.useState(null)

  async function handleBook(id) {
    const response = await client(`book/${id}`)
    setBookResource(response.docs)
  }

  React.useEffect(() => {
    handleBook(bookId)
  }, [bookId])

  
  function BookInfo() {
    if(!bookResource) {
      return
    }

    return (
      <>
        {bookResource ? bookResource.map(book => (
          <div className="books__buttons-container">
            <div className="books__book">
              <img 
                className="books__book-img" 
                src={bookName === 'The Fellowship Of The Ring' ? book1 : bookName === 'The Two Towers' ? book2 : bookName === 'The Return Of The King' ? book3 : null} 
                alt={book.name} 
              />
            </div>
            <div>
              <h3>{book.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos optio pariatur quae similique iure inventore suscipit porro impedit id, nisi minus magnam quo laborum corrupti animi, quisquam officia voluptatum sapiente quibusdam? Deleniti, nesciunt provident.</p>
            </div>
            <div>
              <button onClick={() => setBookInfoReady(false)}>Return</button>
            </div>
          </div>
        )) : null}
      </>
    )
  }

  let resource = createResource(client('book'))

  function handleBookId(id, name) {
    setBookId(id)
    setBookName(name)
    setBookInfoReady(true)
  }
  
  function ButtonsComponent() {
    const buttons = resource.read()
    
    let buttonsArray = []

    if(!buttons) {
      return
    }
    buttonsArray = buttons.docs

    return (
      <div className="books__buttons-container">
        {buttonsArray.map(book => (
          <button 
            key={book._id} 
            className="books__button" 
            style={{padding: '4px', height: "3.5rem"}}
            onClick={() => handleBookId(book._id, book.name)}
          >
            {book.name}
          </button>
        ))}
      </div>
    )
  }

  return (
    <section className="books">
      <header className="home__header">
        <h1 className="home__title">Books!</h1>
        <h2 className="home__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam minima ducimus corrupti omnis impedit tempore!</h2>
      </header>

      <div className="books__body">
        <ErrorBoundaryComponent>
          <React.Suspense fallback={<div className="books__buttons-container"><SmallSpinner /></div>}>
            <ButtonsComponent />
          </React.Suspense>
        </ErrorBoundaryComponent>

        {
          bookInfoReady ? (
            <BookInfo />
          ) : (
            <div className="books__books-content">
              <div className="books__books-container">
                <div className="books__book-container">
                  <div className="books__book">
                    <img className="books__book-img" src={book1} alt="Book-1" />
                  </div>
                  <p className="books__book-title">The Fellowship of the Ring</p>
                </div>
                <div className="books__book-container">
                  <div className="books__book">
                    <img className="books__book-img" src={book2} alt="Book-2" />
                  </div>
                  <p className="books__book-title">The Two Towers</p>
                </div>
                <div className="books__book-container">
                  <div className="books__book">
                    <img className="books__book-img" src={book3} alt="Book-3" />
                  </div>
                  <p className="books__book-title">The Return of the King</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export {Books}
