require('dotenv').config();
const express = require('express');
const app = express();
const diemRenLuyen = require('./routes/diemRenLuyen')

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.use('/drl', diemRenLuyen);

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log("listening on port " + process.env.PORT);
})


