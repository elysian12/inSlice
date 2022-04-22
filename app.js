const express = require("express");
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const fileRouter = require('./routes/file')
const downloadRouter = require('./routes/download')
const path = require('path')



mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to DB');
}).catch((err) => {
    console.log(err);
});


// app.use(express.static('./uploads'));
app.use('/uploads', express.static('uploads'));


app.use('/api/v1/files', fileRouter);
app.use('/api/v1/files/download', downloadRouter);



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})