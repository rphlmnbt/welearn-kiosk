import axios from "axios";
import env from "react-dotenv";

const SESSION_URL = env.API_URL + '/session'

const getSession = (
    uuid_session
) => {
    console.log(SESSION_URL)
    return axios.get(SESSION_URL + `/${uuid_session}`)
}

export default {
    getSession
}