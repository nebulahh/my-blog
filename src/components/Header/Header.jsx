import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import '../styles/App.css'
import '../styles/App.min.css'

const Header = () => {
  const { auth } = useAuth()
  return (
    <header className="blog-header py-3 ml-20 mr-20 mb-4">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <nav>
            <NavLink className="blog-header-logo text-dark" to={'/'}>
              Blog
            </NavLink>
            {auth.email ? (
              <NavLink className="ml-4" to={'/post'}>
                New post
              </NavLink>
            ) : null}
          </nav>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          {auth.email && (
            <nav>
              <NavLink className="mr-4" to={'/signup'}>
                Register
              </NavLink>
              <NavLink to={'/login'}>Login</NavLink>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
