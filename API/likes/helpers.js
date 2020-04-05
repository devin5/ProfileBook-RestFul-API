const db = require("../../data/KnexConfig");

module.exports = {
  getAllLikes,
  getLikesByPostId,
  getLikesByLikeId,
  addLike,
  deleteLike,
  updateLike
};

function getAllLikes() {
  return db("likes");
}
//--------------

//we dont need join here just an array

// function getLikesByPostId(id){
//   return db("likes")
//   .select("*")
//   .join('posts', 'posts_Post_ID', '=', 'likes.Like_Post_id')
//   .where('Like_Post_id', '=', id)
// }

function getLikesByPostId(Like_Post_ID) {
  return db("likes").where({ Like_Post_ID });
}

//--------------

function getLikesByLikeId(id) {
  return db("likes").where("Like_id", "=", id);
}
//--------------
//I see what your doing here I just dont like making reducers that work this way
// async function addLike(like){
//    const [id] = await db("likes")
//   .insert(like, 'Like_id')
//    return getLikesByPostId(id)
// }

function addLike(like) {
  return db("likes")
    .insert(like, "id")
    .then(([id]) => {
      return getLikesByLikeId(id);
    });
}
//---------------

function deleteLike(id) {
  return db("likes")
    .where("Like_ID", "=", id)
    .del();
}
//----------------

function updateLike(id, changes) {
  return db("likes")
    .where("Like_id", "=", id)
    .update(changes);
}
