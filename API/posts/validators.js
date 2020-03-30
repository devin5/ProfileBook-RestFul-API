const Helper = require("./helpers");
const UserHelper = require("../users/helpers")

const checkPostLength = (req, res, next) => {
  Helper.getPosts().then(posts => {
    if (!posts.length) {
      res.status(200).json({ message: "no posts to show !" });
    } else {
      next();
    }
  });
};

const validateID = (req, res, next) => {
  const { Post_User_ID } = req.params;
  UserHelper.getUserByfilter({User_ID: Post_User_ID}).then(([user]) => {
    if (!user) {
      res.status(400).json({ message: "user with this ID does not exist" });
    } else next();
  });
};

const checkPost = (req, res, next) => {
  if(!req.body.Post_Text){
    res.status(400).json({ message: "Must include post text" });
  }
  else{
    next()

  }
};

const validatePostID = (req,res,next) => {
  const {Post_ID} = req.params
  Helper.getPostByFilter({Post_ID})
  .then(([post]) => {
    if(!post){
      res.status(400).json({ message: "No post wioth this ID exists" });
    }
    else{
      next()
    }
  })
}

module.exports = {checkPostLength, validateID, checkPost, validatePostID};
