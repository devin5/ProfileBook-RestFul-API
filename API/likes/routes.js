// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version

const express = require('express')
const router = express.Router();

const {getLikesByPostId, addLike, deleteLike} = require("./handlers")
const {validatePostID} = require("./validators")


//My updated routes
router.post("/:Like_Post_ID", validatePostID, addLike)
router.get("/:Like_Post_ID", validatePostID, getLikesByPostId)
router.delete("/:id",  deleteLike)


// router.put("/:Like_ID",  updateLike)



// router.get("/", getAllLikes)
// router.delete("/:id", validateId, deleteLike)
// router.put("/:id", validateId, updateLike)

module.exports = router;