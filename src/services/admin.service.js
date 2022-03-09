import axios from "axios";
import env from "react-dotenv";

const ADMIN_URL = env.API_URL + '/auth'

const logIn = (
    email,
    password
) => {
    axios.post(ADMIN_URL + `/adminSignIn`, {
        email,
        password
    })
    .then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}

export default {
    logIn
}


