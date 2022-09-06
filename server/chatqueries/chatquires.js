const { getChat } = require('../database/chat');

const chatQuery = async (insertQuery, parameters) => {
    const client = await getChat();

    try {
        res = await client.query(insertQuery, parameters);
        return res.rows;
    } catch (e) {
        console.log(e)
        await client.release()
    }
}


module.exports = {chatQuery}