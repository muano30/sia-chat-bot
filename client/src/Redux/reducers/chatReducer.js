// import { CHATBOT_MESSAGES } from "../actionTypes/actiontypes";
// import { WELCOME_MESSAGES } from "../actionTypes/actiontypes";
// import { MESSAGES } from "../actionTypes/actiontypes";
// import { SUB_OPTIONS } from "../actionTypes/actiontypes";
// import { RESET } from "../actionTypes/actiontypes";

// // const initialState = {
// //     messages: []
// // };

// export const chatMessageReducer = (state = [], action) => {
//     switch (action.type) {
//         case WELCOME_MESSAGES:
//             return { ...state, welcomeMessage: action.payload }
//         case CHATBOT_MESSAGES:
//             return { ...state, message: action.payload }
//         case MESSAGES:
//             return { ...state, options: action.payload }
//         case SUB_OPTIONS:
//             return { ...state, subOptions: action.payload }
//             // case RESET:
//                 // return initialstate
//         default:
//             return state;
//     }
// }

import {CHATBOT_DATA} from '../actionTypes/actiontypes'
import { WELCOME_MESSAGE } from '../actionTypes/actiontypes'
import { OPTIONS } from '../actionTypes/actiontypes'
import { OPTIONS_SOLUTION } from '../actionTypes/actiontypes'
import { RESET_CHAT } from '../actionTypes/actiontypes'




const initialState = {
    chatBot: [] 
}

export const chatBotReducer = (state = initialState, action) => {
    switch(action.type){
        case CHATBOT_DATA:
            // console.log('action.payLoad', action.payload)
            return{...state, chatBot: action.payload}
            case WELCOME_MESSAGE:
            return{...state, welcomeMessage: action.payload}
            case OPTIONS:
                // console.log('action.payload', action.payload)
            return{...state, options: action.payload}
            case OPTIONS_SOLUTION:
                // console.log('action.payload', action.payload)
            return{...state, optionsSolutions: action.payload}
            case RESET_CHAT:
                // console.log('action.payload', action.payload)
            return initialState
            default: 
            return state
    }

}