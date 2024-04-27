const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const getUsers = async(req, res) =>{
    const users = await User.find({});

    res.status(200).json(users);
}

// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body
  
    try{
      const user = await User.login(email, password)
  
      //create a token
      const token = createToken(user._id)
      const role = user.role
      const userClass = user.userClass
  
      res.status(200).json({email, token, role, userClass})
      } catch(error){
          res.status(400).json({error: error.message})
      }
}

// signup a user
const signupUser = async (req, res) => {
    const {email, password, role} = req.body

    try{
        const user = await User.signup(email, password, role)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token, role})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async (req, res) =>{

}

module.exports = { signupUser, loginUser, getUsers, deleteUser }