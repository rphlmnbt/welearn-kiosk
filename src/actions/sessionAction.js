import { SET_SESSION } from "../constants";



export const setSession = (values) => ({
    type: SET_SESSION,
    payload: values
})
