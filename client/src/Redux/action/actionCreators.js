// import axios from 'axios'
// import { CHATBOT_MESSAGES } from "../actionTypes/actiontypes";
// import { WELCOME_MESSAGES } from "../actionTypes/actiontypes";
// import { MESSAGES } from '../actionTypes/actiontypes';
// import { SUB_OPTIONS } from '../actionTypes/actiontypes';
// // import { RESET } from '../actionTypes/actiontypes';


// // export const clearChatBot = () => {
// //     return async (dispatch) => {
// //         try {
// //             dispatch({ type:RESET , payload: [] })
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }
// // }


// export const messages = (message) => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: WELCOME_MESSAGES, payload: message })
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// // export const updateChat = () => {
// //     return async (dispatch) => {
// //         let chatbotData = await axios.get("http://localhost:3001/get_questions")
// //         try {
// //             setTimeout(() => {
// //                 dispatch({ type: CHATBOT_MESSAGES, payload: chatbotData.data.chatBot[1].options })

// //             }, 1800);
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }
// // }

// export const updateOptions = () => {
//     return async (dispatch) => {
//         let chatbotOptions = await axios.get("http://localhost:3001/get_questions")
//         try {
//             setTimeout(() => {
//                 dispatch({ type: MESSAGES, payload: chatbotOptions.data.chatBot })

//             }, 1000);
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// export const subOptions = (data) => {
//     return async (dispatch) => {
//         try {
//             setTimeout(() => {
//                 dispatch({ type: SUB_OPTIONS, payload: data })

//             }, 1000);
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }


import axios from 'axios'
import {CHATBOT_DATA, WELCOME_MESSAGE, OPTIONS, OPTIONS_SOLUTION, RESET_CHAT} from '../actionTypes/actiontypes'
// import { WELCOME_MESSAGE } from '../actionTypes/actiontypes'

export const getChatBotData = () => {
    
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/get_questions")

            dispatch({ type:CHATBOT_DATA , payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getWelcomeMessage = (welcomemessage) => {
    return async (dispatch) => {
        try {
            dispatch({ type:WELCOME_MESSAGE , payload: welcomemessage })

        } catch (error) {
            console.log(error)
        }
    }
}

export const getSubOptions = (options) => {
    // console.log('options', options)
    return async (dispatch) => {
        try {
            dispatch({ type:OPTIONS , payload: options })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSubOptionsSolutions = (optionsSolution) => {
    // console.log('optionsSolution', optionsSolution)
    return async (dispatch) => {
        try {
            dispatch({ type:OPTIONS_SOLUTION , payload: optionsSolution })
        } catch (error) {
            console.log(error)
        }
    }
}

export const resetChatBot = () => {
    // console.log('optionsSolution', optionsSolution)
    return async (dispatch) => {
        try {
            dispatch({ type: RESET_CHAT, payload: [] })
        } catch (error) {
            console.log(error)
        }
    }
}


