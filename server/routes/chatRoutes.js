const chatBot = require('../config/chats.json')

const clientsChats = (app) => {

app.get('/get_questions', async(req,res)=>{
    let questions = chatBot
    // console.log(questions)
    res.send(questions.chatBot)
    // console.log('server',questions.chatBot.messages)
})

}

module.exports = { clientsChats }