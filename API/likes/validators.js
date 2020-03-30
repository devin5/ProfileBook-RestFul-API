const helper = require("./helpers")
const PostHelper = require("../posts/helpers")


// this is a terrible naming convention and this is wrong
  // const validateId = (req,res, next)=>{
  //   const {id} = req.params

  //   helper.getLikesByPostId(id)
  //   .then(resource=>{
  //     if(!resource){
  //       res.status(400).json({message:"Sorry! We are unable to find resource with the given id"})
  //     }else{
  //       next()
  //     }
  //   })
  //   .catch(err=>res.status(500).json(err))
  // }
  const validatePostID = (req,res,next) => {
    const {Like_Post_ID} = req.params
    PostHelper.getPostByFilter({Post_ID: Like_Post_ID})
    .then(([post]) => {
      if(!post){
        res.status(400).json({ message: "No post wioth this ID exists" });
      }
      else{
        next()
      }
    })
  }



  module.exports = {
    validatePostID 
     }