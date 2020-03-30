const Helper = require("./helpers");

const GetCommentsByPost = (req, res) => {
  const { Comment_Post_ID } = req.params;
  Helper.getCommentsPostsByID(Comment_Post_ID)
    .then(comments => {
      res.status(200).json({ data: { comments } });
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
};

const newComment = (req, res) => {
  const {Comment_Post_ID} = req.params
  const comment = {
    Comment_Text: req.body.Comment_Text,
    Comment_User_ID: req.body.Comment_User_ID,
    Comment_Post_ID: Comment_Post_ID
  };
  Helper.addComment(comment)
    .then(comment => {
      res.status(200).json({ data: { comment } });
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
};
const removeComment = (req, res) => {
  const { Comment_ID } = req.params;
  Helper.removeComment(Comment_ID)
    .then(() => res.status(201).end())
    .catch(err => {
      res.status(500).json({ message: err });
    });
};

const updateComment = (req, res) => {
  const { Comment_ID } = req.params;
  const comment = {
    Comment_Text: req.body.Comment_Text,
  };
  Helper.updateComments(comment, Comment_ID)
    .then(() => {
      Helper.getCommentByID(Comment_ID)
        .then(comment => {
          res.status(200).json({ data: { comment } });
        })
        .catch(err => res.status(500).json({ message: err }));
    })
    .catch(err => res.status(500).json({ message: err }));
};

module.exports = {
  GetCommentsByPost,
  newComment,
  removeComment,
  updateComment
};
