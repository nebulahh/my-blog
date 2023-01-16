import { useQuery } from "react-query"
import axios from "axios"


const fetchPost = () => {
  return axios.get(`https://my-blog-api-9nne.onrender.com/api`)
}

const usePosts = (onSuccess, onError) => {
  return useQuery('posts', fetchPost, {
    onSuccess,
    onError
  })
}

export default usePosts