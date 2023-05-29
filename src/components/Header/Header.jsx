import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useLogout from '../../hooks/useLogout'
import '../styles/App.css'
import '../styles/App.min.css'

const Header = () => {
  const { auth } = useAuth()
  const logout = useLogout()
  const navigate = useNavigate()

  const signOut = async () => {
    await logout()
    navigate('/')
  }
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
          {auth.email ? (
            <NavLink
              onClick={signOut}
              className="mr-3 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            >
              Sign Out
            </NavLink>
          ) : (
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
