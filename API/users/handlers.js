const Helper = require("./helpers")


const addNewUser = (req, res) => {
  const {User_First_Name, User_Last_Name, User_Password, User_Time, User_Email, User_Birthday} = req.body
  const user = {User_First_Name, User_Last_Name, User_Password, User_Time, User_Email, User_Birthday} 
  Helper.addUser(user)
  .then(user =>res.status(200).json({message: "user successfully created", user}))
  .catch(err => res.status(500).json({message: err}))

}



module.exports = {
  addNewUser
  
  };