import Axios from "axios";

const instance = Axios.create({
    baseURL : 'https://react-my-burger-9b4c8.firebaseio.com/'
})

export default instance;