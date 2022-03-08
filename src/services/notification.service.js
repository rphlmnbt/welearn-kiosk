import axios from "axios";
import env from "react-dotenv";

const NOTIFCATION_URL = env.API_URL + '/notification'

const sendNotifications = (
    users
) => {
    return axios.post(NOTIFCATION_URL, {
        users
    })
}



export default {
    sendNotifications
}