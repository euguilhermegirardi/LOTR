import '../../scss/_global.scss'
import './_styles.scss'
import {Login} from '../../components/Login/index-new'

function UnauthenticatedApp() {
  return (
    <section className="unauthenticated-home">
      <div className="unauthenticated-home__img-container">
        <div className="unauthenticated-home__img" />
      </div>
      <Login />
    </section>
  )
}

export default UnauthenticatedApp
