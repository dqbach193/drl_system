const DiemRenLuyen = require('../models/drlModel');
const mongoose = require('mongoose')


//Xem tat ca DRL
const getDRL = async (req, res) => {
    const drl = await DiemRenLuyen.find({}).sort({createdAt: -1});

    return res.status(200).json(drl);
}

//Xem DRL 1 sinh vien
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
    const {mssv, hoTen, drl} = req.body;

    try{
        const newDRL = await DiemRenLuyen.create({mssv, hoTen, drl});
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
    updateDRL
}