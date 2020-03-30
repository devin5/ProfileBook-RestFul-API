const Helper = require("./helpers")
const PostHelper = require("../posts/helpers")


const validatePostID = (req,res,next) => {
  const {Comment_Post_ID} = req.params
  PostHelper.getPostByFilter({Post_ID: Comment_Post_ID} )
  .then(([post]) => {
    if(!post){
      res.status(400).json({ message: "No post with this ID exists" });
    }
    else{
      next()
    }
  })
}

const validateCommentID = (req,res,next) => {
  const {Comment_ID} = req.params
  Helper.getCommentByID(Comment_ID)
  .then(([comment]) => {
    if(!comment){
      res.status(400).json({ message: "No comments with this ID exists" });
    }
    else{
      next()
    }
  })
}

module.exports = {
  validatePostID,
  validateCommentID
  }