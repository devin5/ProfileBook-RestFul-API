// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version
const express = require('express')
const router = express.Router();

const { getPosts, getPostsByID, getPostsByFilter, addPost, updatePost, removePost, /*getPostsLikes, getPostsComments, getPostsAll*/ } = require("./handlers")
// Import and apply this when restrict has been written
// const {} = require("../../middleware/Restrict")

router.get("/", getPosts)
router.get("/:id", getPostsByID)
// router.get("/filter/:filter", getPostsByFilter)
router.post("/", addPost)
router.put("/:id", updatePost)
router.delete("/:id", removePost)

// router.get("/:id/likes", getPostsLikes)
// router.get("/:id/comments", getPostsComments)
// router.get("/:id/all", getPostsAll)

module.exports = router;
