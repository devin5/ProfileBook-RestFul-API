// const Router = require("express").Router()
// creates a router off of express. ^ is a shorthand version

const express = require('express')
const router = express.Router();

const {getAllLikes, getLikesByPostId, addLike, deleteLike,updateLike} = require("./handlers")
const {validateId} = require("./validators")

router.get("/", getAllLikes)
router.get("/:id", validateId, getLikesByPostId)
router.post("/:id", addLike)
router.delete("/:id", validateId, deleteLike)
router.put("/:id", validateId, updateLike)

module.exports = router;