import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID C4APz2t01zD9qJf4lGYAeoL_r4LPa-1MUngrOwkgxnE'
    }
})