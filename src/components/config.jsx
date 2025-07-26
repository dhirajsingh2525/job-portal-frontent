import axios from 'axios';

export const instance = axios.create({
       // axios instance to set default configurations
        // baseURL is the root URL for all requests made using this instance
    baseURL: 'http://localhost:3000'
            // add base url
            
})