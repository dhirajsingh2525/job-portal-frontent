import axios from 'axios';

 const instance = axios.create({
       // axios instance to set default configurations
        // baseURL is the root URL for all requests made using this instance
    baseURL: 'https://job-portal-backend-mb8f.onrender.com'
            
})
export default instance;

