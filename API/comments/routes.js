// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version
const express = require('express')
const router = express.Router();

const {GetCommentsByPost, newComment, removeComment, updateComment} = require("./handlers")
const {validatePostID, validateCommentID} = require("./validators")


router.post("/:Comment_Post_ID", validatePostID, newComment);

router.get("/:Comment_Post_ID", validatePostID,  GetCommentsByPost);

router.delete("/:Comment_ID", validateCommentID, removeComment);
router.put("/:Comment_ID", validateCommentID, updateComment);



// router.post("/register", validateRegistration, validateIsEmailTaken, register);
// router.post("/login", validateLogin, logIn);
// router.delete("/:User_ID", validateID, delUserByID);
// router.get("/:User_ID", validateID, getUser);
// router.delete("/verify/delete", validateDeleteByEmail, delUserByEmail);
// router.put("/:User_ID", validateID, updateUser);

module.exports = router;