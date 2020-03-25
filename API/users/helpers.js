const db = require("../../data/KnexConfig")


const  getUser = userId => {
  return db("users").where("User_ID", "=", userID)
}

const addUser =  userObj => {
  return db("users").insert(userObj)
  .then( ([id]) => {
    getUser(id)
  })
}

module.exports = {
  getUser,
  addUser
  
  };