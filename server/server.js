const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const {clientsChats} = require('./routes/chatRoutes')


app.use(express.json());
app.use(cors());
clientsChats(app)


app.listen(port, console.log(`Example app listening on port ${port}!`));