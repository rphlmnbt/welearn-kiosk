import axios from "axios";
import env from "react-dotenv";

const ADMIN_URL = env.API_URL + '/auth'

const logIn = (
    email,
    password
) => {
    return axios.post(ADMIN_URL + `/adminSignIn`, {
        email,
        password
    })
}

export default {
    logIn
}


