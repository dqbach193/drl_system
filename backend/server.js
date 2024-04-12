require('dotenv').config();
const express = require('express');
const app = express();
const diemRenLuyenRoutes = require('./routes/diemRenLuyen')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/drl', diemRenLuyenRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, ()=>{
            console.log("connected to the db & listening on port " + process.env.PORT);
        })
});



