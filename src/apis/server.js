import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.xivstatus.com/api',
});
