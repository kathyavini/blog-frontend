import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://mac:3000',
  baseURL: 'https://kathyavini-blog-api.cyclic.app/',
});

export default instance;
