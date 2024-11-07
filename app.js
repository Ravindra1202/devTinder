const express = require('express');
const cookiesParser = require('cookie-parser');
const app = express();
app.use(express.json());  // read the request data (middleware)
app.use(cookiesParser());
const { connectDB } = require('./config/database');



const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');
const userConnection = require('./routes/user');

app.use("/", authRouter);
app.use('/', profileRouter);
app.use('/', requestRouter);
app.use('/' , userConnection);


connectDB().then(() => {
    console.log('Database connection establised...');
    app.listen(7777, () => {
        console.log('Server start successfully port 7777 !')
    })
}).catch((error) => {
    console.log('Database can not be connected !', error.message);
})





