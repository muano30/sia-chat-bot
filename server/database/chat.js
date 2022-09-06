const {Pool} = require('pg') 

const pool = new Pool({
    user: 'muano',
    host: 'localhost',
    database: "siachatdatabase",
    password: 'kevin30',
    port: 5432,
}) 

const getChat = async () => {
    const client = await pool.connect()
return client
}

module.exports = {
    getChat
}