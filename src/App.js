import './scss/_global.scss'
import './scss/_home.scss'
import {Login} from './components/Login'

function App() {
  return (
    <section className="home">
      <div className="home__img-container">
        <div className="home__img" />
      </div>
      <Login />
    </section>
  )
}

export default App
