import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    // baseURL: 'http://restful-api-vercel-flax.vercel.app:3000',
});

export default axiosClient;
