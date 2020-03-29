const db = require("../../data/KnexConfig")

module.exports = {
  getAllLikes,
  getLikesByPostId,
  getLikesByLikeId,
  addLike,
  deleteLike,
  updateLike  
  };

  function getAllLikes(){
   return db("likes")
  }
  //--------------
  
  function getLikesByPostId(id){
    return db("likes")
    .select("*")    
    .join('posts', 'posts_Post_ID', '=', 'likes.Like_Post_id')    
    .where('Like_Post_id', '=', id)
  }
  //--------------
  
  function getLikesByLikeId(id){
    return db("likes")
    .where("Like_id", "=", id)    
  }
  //--------------

  async function addLike(like){
     const [id] = await db("likes")
    .insert(like, 'Like_id')
     return getLikesByPostId(id)
  }
  //---------------
  
  function deleteLike(id){
     return db("likes")
     .where("Like_id", "=", id)
     .del()
  }
  //----------------

  function updateLike(id, changes){
    return db("likes")
    .where("Like_id", "=", id)
    .update(changes)
  }











