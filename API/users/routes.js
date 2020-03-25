// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version
const express = require('express')
const router = express.Router();

const {addNewUser} = require("./handlers")
const {} = require("./validators")



router.post("/register", addNewUser)


module.exports = router;