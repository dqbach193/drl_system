require('dotenv').config();
const express = require('express');
const app = express();

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) =>{
    res.json({msg: 'Welcome to behavioral scoring system'});
})

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log("listening on port " + process.env.PORT);
})