import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://job-portal-backend-lhgu.onrender.com'
})
