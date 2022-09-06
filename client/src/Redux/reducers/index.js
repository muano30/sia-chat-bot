import { chatBotReducer } from './chatReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    data: chatBotReducer
})
export default rootReducer