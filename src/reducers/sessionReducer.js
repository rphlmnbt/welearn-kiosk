import { SET_SESSION } from "../constants";

const initialState = {
    session: '',
}

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SESSION:
            return {
                ...state,
                session: action.payload.session,
            };
        default:
            return state;
    }
}


export default sessionReducer