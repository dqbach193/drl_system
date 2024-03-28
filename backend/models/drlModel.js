const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drlSchema = new Schema({
    mssv:{
        type: Number,
        required: true
    },
    hoTen:{
        type: String,
        required: true
    },
    drl:{
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('DiemRenLuyen', drlSchema);