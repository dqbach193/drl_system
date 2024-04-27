const express = require('express')

// controller functions
const { loginUser, signupUser, getUsers, deleteUser } = require('../controllers/userController')

const router = express.Router()

router.get('/admin', getUsers)

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.delete('/:id', deleteUser)

module.exports = router