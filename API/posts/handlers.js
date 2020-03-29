const Posts = require("./helpers")

const getPosts = (req, res) => {
  Posts.getPosts()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

const getPostsByID = (req, res) => {
  Posts.getPostsByID(req.params.id)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

// const getPostsByFilter = (req, res) => {
//   Posts.getPostsByFilter(req.params.filter)
//     .then(posts => {
//       res.status(200).json(posts)
//     })
//     .catch(err => {
//       res.status(400).json(err)
//     })
// }

const addPost = (req, res) => {
  console.log(req.body)
  Posts.addPost(req.body)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

const updatePost = (req, res) => {
  Posts.updatePost(req.body, req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

const removePost = (req, res) => {
  Posts.removePost(req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

// const getPostsLikes = (req, res) => {
//   Posts.getPostsLikes(req.params.id)
//     .then(post => {
//       res.status(200).json(post)
//     })
//     .catch(err => {
//       res.status(400).json(err)
//     })
// }

// const getPostsComments = (req, res) => {
//   Posts.getPostsComments(req.params.id)
//     .then(post => {
//       res.status(200).json(post)
//     })
//     .catch(err => {
//       res.status(400).json(err)
//     })
// }

// const getPostsAll = (req, res) => {
//   const { id } = req.params
//   const PostsAll = []

//   Users.getUserPostsByID(id)
//     .then(PostsArray => {
//       PostsArray.forEach(Post => {
//         Post.Comments = []
//         Post.Likes = []
//         Posts.getPostsLikes(Post.Post_ID)
//           .then(likes => {
//             Post.Likes.push(likes)
//           })
//           .catch(err => res.status(400).json({ Message: "error in getting likes", err }))

//         Posts.getPostsComments(Posts.Post_ID)
//           .then(comment => {
//             Post.Likes.push(comment)
//           })
//           .catch(err => {
//             res.status(400).json({ Message: "error in getting comments", err })
//           })

//         PostsAll.push(Post)
//       })

//       res.status(200).json({ PostsAll })
//     })
//     .catch(err => res.status(400).json(err))
// }
module.exports = {
  getPosts,
  getPostsByID,
  // getPostsByFilter,
  addPost,
  updatePost,
  removePost,
  // getPostsLikes,
  // getPostsComments,
  // getPostsAll
};
