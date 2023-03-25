const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// cookie middleware
app.use(cookieParser());
const userRoute = require('./routes/userRoute');
app.use('/api/user',userRoute);

app.get('/', (req, res) => {
    res.send("Hi from prisma")
});

app.listen(5000, ()=> {
    console.log("Server running at 5000")
});