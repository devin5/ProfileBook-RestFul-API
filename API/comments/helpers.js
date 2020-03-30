const db = require("../../data/KnexConfig")


const getComments = () => {
  return db("comments")
}

const getCommentsPostsByID = Post_ID => {
  return db("comments").where("Comment_Post_ID", "=" , Post_ID )
};

const getCommentByID = Comment_ID => {
  return db("comments").where({Comment_ID})
}


const addComment = comm => {
  return (
    db("comments")
      .insert(comm, "id")
      //destructure out of the array as an array
      .then(([Comment_ID]) => {
        //destructure out of the object to pass to filter
        return getCommentByID(Comment_ID);
      })
  );
};

const updateComments = (changes, Comment_ID) => {
  return db("comments")
    .where({ Comment_ID })
    .update(changes)
}

const removeComment = Comment_ID => {
  return db("comments")
    .where({ Comment_ID })
    .del()
}


module.exports = {
  getComments,
  getCommentsPostsByID ,
  addComment,
  updateComments,
  removeComment,
  getCommentByID

}