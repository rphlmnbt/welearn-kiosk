import axios from 'axios'
import env from "react-dotenv";

const ROOM_URL = env.API_URL + '/room'

const getRooms = () => {
    return axios.get(ROOM_URL)
}

export default {
    getRooms
}