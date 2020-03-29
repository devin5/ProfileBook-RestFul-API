const express = require("express")
const configureFunc = require("./middleware/ConfigureAPI")
// const restricted = require("./middleware/restrict");
const userRouter = require("./API/users/routes")
<<<<<<< HEAD
<<<<<<< HEAD
const likeRouter = require("./API/likes/routes")
=======
const postRouter = require("./API/posts/routes")
const commentRouter = require("./API/comments/routes")

>>>>>>> 253c46cded36064bdb6f171258cd243f3fe7b114
=======

const postRouter = require("./API/posts/routes")
const commentRouter = require("./API/comments/routes")
const likeRouter = require("./API/likes/routes")

>>>>>>> ef0e1fe0fdc51ad187d711d6c93c5dcb19d557af

//Creates Server
const server = express()

//Configs **Json**Helmet**corse**Morgan***Logger**
configureFunc(server)
//Routers
server.use("/profilebook/auth/users", userRouter)
<<<<<<< HEAD
<<<<<<< HEAD
server.use("/profilebook/auth/likes", likeRouter)
=======
=======

>>>>>>> ef0e1fe0fdc51ad187d711d6c93c5dcb19d557af
server.use("/profilebook/posts", postRouter)
server.use("/profilebook/comments", commentRouter)
server.use("/profilebook/auth/likes", likeRouter)







<<<<<<< HEAD
>>>>>>> 253c46cded36064bdb6f171258cd243f3fe7b114

=======
>>>>>>> ef0e1fe0fdc51ad187d711d6c93c5dcb19d557af
//Test route
server.get("/", (req, res) => {
    res.status(200).send("<h3>It was 1942 when they took my mother, hung my sister, and burned the feilds....Wrath will not sleep until evil pays it's price </h3>")
})


module.exports = server


