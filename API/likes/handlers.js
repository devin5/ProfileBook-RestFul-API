const Helper = require("./helpers")



 const getAllLikes = (req,res) =>{
   Helper.getAllLikes()
   .then(likes=>res.status(200).json(likes))
   .catch(err=>res.status(500).json(err))
 }
 //----------
 const getLikesByPostId = (req,res)=>{
  const {Like_Post_ID} = req.params
  Helper.getLikesByPostId(Like_Post_ID)
  .then(like=>res.status(200).json(like))
  .catch(err=>res.status(500).json({message:err}))
 }
 //------------
  const addLike = (req,res)=>{
    const {Like_Post_ID} = req.params
    const {Like_Type, Like_User_ID} = req.body

    const like = {
      Like_Type,
      Like_Post_ID,
      Like_User_ID
    }

    Helper.addLike(like)
    .then(likeres => res.status(200).json({data: {likeres}}))
    .catch(err=>res.status(500).json({message:err}))
 }
 //-----------
 const deleteLike = (req,res)=>{
  const {id} = req.params
  Helper.deleteLike(id)
  .then(deleted=>res.status(204).json({message:"Your like has been deleted"}))
  .catch(err=>res.status(500).json(err))
 }
 //------------
 const updateLike = (req,res) =>{
   const {id} = req.params
   const {Like_Time, Like_Type}= req.body
   changes = {Like_Time, Like_Type}
   Helper.updateLike(id, changes)
   .then(changes=>{
     Helper.getLikesByPostId(id)
     .then(like=>res.status(200).json(like))
     .catch(err=>res.status(500).json({message:err}))
   })
   .catch(err=>{
     res.status(500).json(err)
   })

 }  

 module.exports = {
  getAllLikes,
  getLikesByPostId,
  addLike,
  deleteLike,
  updateLike
  }; 