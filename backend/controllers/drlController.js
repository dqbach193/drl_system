const DiemRenLuyen = require('../models/drlModel');
const mongoose = require('mongoose')
const User = require('../models/userModel')


// Xem tat ca drl
const getDRLAll = async (req, res) => {
    const drl = await DiemRenLuyen.find().sort({createdAt: -1});
    return res.status(200).json(drl);
}
const getDRL = async (req, res) => {
    const user_id = req.user._id;
    const user = await User.find({_id:user_id});
    const email = user[0].email;
    const userMssv = Number(email.split('@')[0]);
    const drl = await DiemRenLuyen.find({mssv:userMssv}).sort({createdAt: -1})
    return res.status(200).json(drl);
}

const getDRLbyClass = async (req, res) =>{
    const user_id = req.user._id;
    const user = await User.find({_id:user_id});
    const userClass = user[0].userClass;
    const drl = await DiemRenLuyen.find({userClass:userClass}).sort({createdAt: -1})

    return res.status(200).json(drl);
}

const getDRLbyYear = async (req, res) =>{
    
    console.log(req.body)
    console.log(req.body.class)
    const yearSelect = req.body.class
    if(yearSelect==1){
        const drl = await DiemRenLuyen.find({userClass:{ $in: [1, 2] }}).sort({createdAt: -1})
        return res.status(200).json(drl);
    }else if(yearSelect==2){
        const drl = await DiemRenLuyen.find({userClass:{ $in: [3, 4] }}).sort({createdAt: -1})
        return res.status(200).json(drl);
    }
}

//Xem DRL cu the
const getDRLbySV = async (req, res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Does not exists"});
    }

    const drl = await DiemRenLuyen.findById(id);
    if(!drl){
        return res.status(404).json({error: "Does not exists"});
    }

    return res.status(200).json(drl);
}

//Post DRL 1 sinh vien
const createDRL = async (req, res) =>{
    const {mssv, hoTen, drl, userClass, semester} = req.body;

    try{
        const user_id = req.user._id
        const newDRL = await DiemRenLuyen.create({mssv, hoTen, drl, user_id, userClass, semester});
        res.status(200).json(newDRL);
    }catch (error){
        res.status(400).json({error: error.message});
    }
}

//Delete DRL 1 sinh vien
const deleteDRL = async (req, res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Does not exists!"});
    }

    const drl = await DiemRenLuyen.findByIdAndDelete({_id: id});

    if(!drl){
        return res.status(404).json({error: "Does not exists!"});
    }
    return res.status(200).json(drl);
}

const updateDRL = async (req, res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Does not exists!"});
    }

    const drl = await DiemRenLuyen.findOneAndUpdate({_id: id},{
        ...req.body
    });

    if(!drl){
        return res.status(404).json({error: "Does not exists!"});
    }
    return res.status(200).json(drl);
}

module.exports = {
    getDRL,
    getDRLbySV,
    createDRL,
    deleteDRL,
    updateDRL,
    getDRLbyClass,
    getDRLbyYear,
    getDRLAll
}