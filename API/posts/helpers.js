const db = require("../../data/KnexConfig")

const getPosts = () => {
  return db("posts")
}

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
