const db = require("../../data/KnexConfig")

const getPosts = () => {
  return db("posts")
 .join("users" , "User_ID", "=", "Post_User_ID")


  // .join("likes" , "Like_Post_ID", "=", "Post_ID")

  // var data = db()

  // // start object with common
  // var commondata  = {}; 

  // // loop through data to combine like infor into an array
  
}

// function getLikesByPostId(id){
//   return db("likes")
//   .select("*")
//   .join('posts', 'posts_Post_ID', '=', 'likes.Like_Post_id')
//   .where('Like_Post_id', '=', id)
// }

const getPostsByID = Post_ID => {
  return db("posts").where({ Post_ID }).first()
};


const getPostByFilter = filter => {
  return db("posts")
    .select("*")
    .where(filter);
};

const addPost = postObj => {
  return (
    db("posts")
      .insert(postObj, "id")
      .then(([Post_ID]) => {
        return getPostByFilter({ Post_ID });
      })
  );
};

const updatePost = (changes, Post_ID) => {
  return db("posts")
    .where({ Post_ID })
    .update(changes)
    .then(() => {
      return getPostByFilter({ Post_ID });
    })
}

const removePost = Post_ID => {
  return db("posts")
    .where({ Post_ID })
    .del()
}


module.exports = {
  getPosts,
  getPostsByID,
  addPost,
  updatePost,
  removePost,
  getPostByFilter
};
