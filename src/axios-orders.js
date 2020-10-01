import axios from 'axios';


const instance = axios.create({
    baseURL:"https://react-my-burger-anvay.firebaseio.com/"
});

export default instance;