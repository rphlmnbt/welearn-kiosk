import axios from "axios";
import env from "react-dotenv";

const SESSION_URL = env.API_URL + '/session'

const getSession = (
    uuid_session
) => {
    return axios.get(SESSION_URL + `/${uuid_session}`)
}

const deleteSession = ( 
    uuid_session
) => {
    return axios.put(SESSION_URL + `/del/${uuid_session}`)
}

const getAllSessions = () => {
    return axios.get(SESSION_URL)
}

const updateSession = (
    uuid_session,
    session_name,
    date,
    time,
    session_creator,
    uuid_room
) => {
    return axios.put(SESSION_URL+ `/${uuid_session}`, {
        session_name,
        date,
        time,
        session_creator,
        uuid_room
    })
}

const createSession = (
    session_name,
    date,
    time,
    session_creator,
    uuid_room
) => {
    return axios.post(SESSION_URL, {
        session_name,
        date,
        time,
        session_creator,
        uuid_room
    })
}


export default {
    getSession,
    deleteSession,
    getAllSessions,
    updateSession,
    createSession
}