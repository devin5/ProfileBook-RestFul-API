const db = require("../../data/KnexConfig");

const GetByEmail = User_Email => {
  return db("users").where(User_Email).first()
  
};

const getUserByfilter = filter => {
  return db("users")
    .select(
      "User_ID",
      "User_First_Name",
      "User_Last_Name",
      "User_Created_At",
      "User_Email",
      "User_Birthday"
    )
    .where(filter);
};

const addUser = userObj => {
  return (
    db("users")
      .insert(userObj, "id")
      //destructure out of the array as an array
      .then(([User_ID]) => {
        //destructure out of the object to pass to filter
        return getUserByfilter({ User_ID });
      })
  );
};
// by email or ID
const deleteUser = filter => {
  return db("users").where(filter).del()
}
const updateUser = (User_ID, changes) => {
  return db("users").where({User_ID}).update(changes, "id")
}
const allUsers = () => {
  return db("users")
}
module.exports = {
  getUserByfilter,
  addUser,
  GetByEmail,
  deleteUser,
  updateUser,
  allUsers
};
