import axios from 'axios';

const BASE_URL = 'https://my-blog-api.onrender.com/api';

export default axios.create({
  baseURL: BASE_URL,
});
