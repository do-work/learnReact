import axios from "axios";

const clientId = '';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: `Client-ID ${clientId}`}
});
