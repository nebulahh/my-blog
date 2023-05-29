import { useQuery } from 'react-query'
import axios from 'axios'

const fetchDrafts = () => {
  return axios.get(`https://my-blog-api-9nne.onrender.com/api/draft`)
}

const useDrafts = (onSuccess, onError) => {
  return useQuery('drafts', fetchDrafts, {
    onSuccess,
    onError,
  })
}

export default useDrafts
