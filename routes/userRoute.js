const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

//router object
const router = express.Router()

//router
//POST||LOGIN
router.post('/login',loginController)


//post route for register
router.post('/register',registerController)

module.exports = router