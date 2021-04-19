import axios from 'axious'
;
const KEY = 'AIzaSyArg3AcEi_bEvXf85zyxfRGV7vOoM7xVtY';

export default axios.create({
    baseURL: 'https://googleapis.com/youtube.com/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})