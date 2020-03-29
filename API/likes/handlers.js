const Helper = require("./helpers")

module.exports = {
  getAllLikes,
  getLikesByPostId,
  getLikesByLikeId,
  addLike,
  deleteLike,
  updateLike
  }; 

 const getAllLikes = (req,res) =>{
   Helper.getAllLikes()
   .then(likes=>res.status(200).json(likes))
   .catch(err=>res.status(500).json(err))
 }
 //----------
 const getLikesByPostId = (req,res)=>{
  const {id} = req.params
  Helper.getLikesByPostId(id)
  .then(like=>res.status(200).json(like))
  .catch(err=>res.status(500).json({message:err}))
 }
 //------------
  const addLike = (req,res)=>{
    const {id} = req.params
    const {Like_Time, Like_Type} = req.body
    Helper.addLike({Like_Time, Like_Type, Like_Post_id: id})
    .then(like=>res.status(201).json({message:"You liked a post"}))
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