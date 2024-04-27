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
    userClass:{
        type: Number,
        default: 1,
    },
    semester:{
        type: String,
        default: "2024-02"
    },
    d11:{
        type: Number,
        default: 0
    },
    d12:{
        type: Number,
        default: 0
    },
    d13:{
        type: Number,
        default: 0
    },
    d14:{
        type: Number,
        default: 0
    },
    d21:{
        type: Number,
        default: 0
    },
    d22:{
        type: Number,
        default: 0
    },
    d23:{
        type: Number,
        default: 0
    },
    d24:{
        type: Number,
        default: 0
    },
    d25:{
        type: Number,
        default: 0
    },
    d31:{
        type: Number,
        default: 0
    },
    d32:{
        type: Number,
        default: 0
    },
    d33:{
        type: Number,
        default: 0
    },
    d41:{
        type: Number,
        default: 0
    },
    d42:{
        type: Number,
        default: 0
    },
    d51:{
        type: Number,
        default: 0
    },
    d52:{
        type: Number,
        default: 0
    },
    d53:{
        type: Number,
        default: 0
    },
    d54:{
        type: Number,
        default: 0
    },
    d55:{
        type: Number,
        default: 0
    },
    d56:{
        type: Number,
        default: 0
    },
    d57:{
        type: Number,
        default: 0
    },
    d58:{
        type: Number,
        default: 0
    },
    drl:{
        type: Number,
        default: function(){
            return 70 - (this.d11 + this.d12 + this.d13 + this.d14) - (this.d21 + this.d22 + this.d23 + this.d24 + this.d25)  + (this.d31 + this.d32 - this.d33) - (this.d41 + this.d42) + (this.d51 + this.d52 + this.d53 + this.d54 + this.d55 + this.d56 + this.d57 + this.d58)
        }
    },
    user_id:{
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('DiemRenLuyen', drlSchema);