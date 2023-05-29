import axios from 'axios'

const BASE_URL = 'https://my-blog-api-9nne.onrender.com/api'

export default axios.create({
  baseURL: BASE_URL,
})
