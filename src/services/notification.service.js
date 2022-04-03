import axios from "axios";
import env from "react-dotenv";

const NOTIFCATION_URL = env.API_URL + '/notification'

const sendNotifications = (
    users,
    message
) => {
    return axios.post(NOTIFCATION_URL, {
        users,
        message
    })
}



export default {
    sendNotifications
}