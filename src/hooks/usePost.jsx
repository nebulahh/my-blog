import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const fetchPost = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`https://my-blog-api-9nne.onrender.com/api/posts/${id}`);
};

const usePost = (id) => {
  return useQuery(['posts', id], fetchPost, {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });
};

export default usePost;
