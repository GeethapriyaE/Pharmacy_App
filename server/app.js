const express = require('express');
const app=express();
const cors = require("cors");
const { default: mongoose } = require('mongoose');

require("dotenv/config");

app.get('/' ,(req,res)=>{
    return res.json('Hi there server is initialized');
})

app.use(cors({ origin: true }));
// user authentication route
const userRoute = require('./routes/user');
app.use('/api/users/',userRoute)


mongoose.connect(process.env.DB_STRING);
mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", (error) => {
        console.log(`ERROR : ${error}`);
    })

app.listen(4000, () => console.log("Listening to port 4000"));
