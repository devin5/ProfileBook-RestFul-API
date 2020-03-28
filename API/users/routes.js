// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version
const express = require('express')
const router = express.Router();

const {register, logIn } = require("./handlers")
const {validateRegistration, validateLogin} = require("./validators")



router.post("/register",validateRegistration,  register)
router.post("/login" , validateLogin, logIn)



module.exports = router;