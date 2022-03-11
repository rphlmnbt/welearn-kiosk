import { LOGIN } from "../constants";

const initialState = {
    uuid_user: '',
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    contact_number: '',
    university: ''
}

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                uuid_user: action.payload.uuid_user,
                email: action.payload.email,
                first_name:action.payload.first_name,
                last_name:action.payload.last_name,
                gender:action.payload.gender,
                contact_number:action.payload.contact_number,
                university:action.payload.university,
            };
        default:
            return state;
    }
}


export default adminReducer