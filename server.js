const express = require("express")
const configureFunc = require("./middleware/ConfigureAPI")
// const restricted = require("./middleware/restrict");
const userRouter = require("./API/users/routes")
<<<<<<< HEAD
const likeRouter = require("./API/likes/routes")
=======
const postRouter = require("./API/posts/routes")
const commentRouter = require("./API/comments/routes")

>>>>>>> 253c46cded36064bdb6f171258cd243f3fe7b114

//Creates Server
const server = express()

//Configs **Json**Helmet**corse**Morgan***Logger**
configureFunc(server)
//Routers
server.use("/profilebook/auth/users", userRouter)
<<<<<<< HEAD
server.use("/profilebook/auth/likes", likeRouter)
=======
server.use("/profilebook/posts", postRouter)
server.use("/profilebook/comments", commentRouter)







>>>>>>> 253c46cded36064bdb6f171258cd243f3fe7b114

//Test route
server.get("/", (req, res) => {
    res.status(200).send("<h3>It was 1942 when they took my mother, hung my sister, and burned the feilds....Wrath will not sleep until evil pays it's price </h3>")
})


module.exports = server


