const Helper = require("./helpers");

const getPosts = (req, res) => {
  Helper.getPosts()
    .then(posts => {
      res.status(200).json({
        data: {
          posts
        }
      });
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
};

const getPostsByUserID = (req, res) => {
  const {Post_User_ID} = req.params 
  Helper.getPostByFilter({Post_User_ID})
    .then(posts => {
      res.status(200).json({data: {posts}});
    })
    .catch(err => {
      res.status(500).json({message: err});
    });
};

const addPost = (req, res) => {
  const { Post_User_ID } = req.params;
  const Post = {
    Post_Text: req.body.Post_Text,
    Post_User_ID: Post_User_ID
  };

  Helper.addPost(Post)
    .then(post => {
      res.status(200).json({ data: {post}});
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
};

const updatePost = (req, res) => {
  const {Post_ID} = req.params

  const Post = {Post_Text: req.body.Post_Text}

  Helper.updatePost(Post, Post_ID)
    .then(([post]) => {
      res.status(200).json({data: {post}});
    })
    .catch(err => {
      res.status(500).json({message: err});
    });
};

const removePost = (req, res) => {
  const {Post_ID} = req.params
  
  Helper.removePost(Post_ID)
    .then(() => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).json({message: err});
    });
};



module.exports = {
  getPosts,
  getPostsByUserID,
  addPost,
  updatePost,
  removePost
};
