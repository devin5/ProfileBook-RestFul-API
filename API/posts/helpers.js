const db = require("../../data/KnexConfig")

const getPosts = () => {
  return db("posts")
}

const getPostsByID = Post_ID => {
  return db("posts").where({ Post_ID }).first()
};

// filter needs to be more specific 
// const getPostsByfilter = filter => {
//   return db("posts")
//     .select(
//       "Post_ID",
//       "Post_Text",
//       "Post_User_ID",
//       "Post_Created_At"
//     )
//     .where(filter);
// };

const addPost = postObj => {
  return (
    db("posts")
      .insert(postObj)
      //destructure out of the array as an array
      .then(([Post_ID]) => {
        //destructure out of the object to pass to filter
        return getPostByfilter({ Post_ID });
      })
  );
};

const updatePost = (changes, Post_ID) => {
  console.log(changes)
  return db("posts")
    .where({ Post_ID })
    .update(changes)
}

const removePost = Post_ID => {
  return db("posts")
    .where({ Post_ID })
    .del()
}

// const getPostsLikes = Post_ID => {
//   return db.select("*")
//     .from("likes as l")
//     .join("posts as p", "p.Post_ID", "=", "l.Like.Post.ID")
//     .where({ Post_ID })
// }

// const getPostsComments = Post_ID => {
//   return db.select("*")
//     .from("comments as c")
//     .join("posts as p", "p.Post_ID", "=", "c.Comment.Post.ID")
//     .where({ Post_ID })
// }

module.exports = {
  getPosts,
  getPostsByID,
  // getPostsByfilter,
  addPost,
  updatePost,
  removePost,
  // getPostsLikes,
  // getPostsComments,
};
