// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version
const express = require("express");
const router = express.Router();

const {
  register,
  logIn,
  delUserByID,
  delUserByEmail,
  updateUser,
  getUser,
  getUsers
} = require("./handlers");

const {
  validateIsEmailTaken,
  validateRegistration,
  validateLogin,
  validateID,
  validateDeleteByEmail
} = require("./validators");

router.get("/", getUsers);
router.post("/register", validateRegistration, validateIsEmailTaken, register);
router.post("/login", validateLogin, logIn);
router.delete("/:User_ID", validateID, delUserByID);
router.get("/:User_ID", validateID, getUser);
router.delete("/verify/delete", validateDeleteByEmail, delUserByEmail);
router.put("/:User_ID", validateID, updateUser);

module.exports = router;
