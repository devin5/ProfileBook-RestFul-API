// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version
const express = require('express')
const router = express.Router();

const { getPosts, getPostsByUserID, addPost, updatePost, removePost} = require("./handlers")

const {checkPostLength, validateID, checkPost, validatePostID} = require("./validators")


router.get("/", checkPostLength, getPosts)
router.post("/:Post_User_ID", validateID, checkPost, addPost)
router.get("/:Post_User_ID", validateID, getPostsByUserID)
router.put("/:Post_ID", validatePostID,  updatePost)
router.delete("/:Post_ID", validatePostID, removePost)


module.exports = router;
