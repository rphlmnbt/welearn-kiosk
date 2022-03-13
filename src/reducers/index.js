import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  session: sessionReducer
})

export default rootReducer