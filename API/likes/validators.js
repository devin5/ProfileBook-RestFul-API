const helper = require("./helpers")

module.exports = {
 validateId
  }

  const validateId = (req,res, next)=>{
    const {id} = req.params

    helper.getLikesByPostId(id)
    .then(resource=>{
      if(!resource){
        res.status(400).json({message:"Sorry! We are unable to find resource with the given id"})
      }else{
        next()
      }
    })
    .catch(err=>res.status(500).json(err))
  }