import Cookies from 'js-cookie'
import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const res = await axios.get('/refresh', {
      withCredentials: true,
    })

    setAuth((prev) => {
      return { ...prev, email: res.data.email, token: res.data.token }
    })
    return res.data.token
  }
  return refresh
}

export default useRefreshToken
