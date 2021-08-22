import '../../scss/_global.scss'
import '../../scss/_home.scss'
import {Login} from '../../components/Login'

function UnauthenticatedApp() {
  return (
    <section className="home">
      <div className="home__img-container">
        <div className="home__img" />
      </div>
      <Login />
    </section>
  )
}

export {UnauthenticatedApp}
