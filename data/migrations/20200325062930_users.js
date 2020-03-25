
exports.up = function(knex) {
    return knex.schema.createTable("employer", users => {
        users.increments("User_ID")
        users.string("User_First_Name", 128).notNullable();
        users.string("User_Last_Name", 128).notNullable();
        users.string("User_Password", 18).notNullable();
        users.datetime('User_Time_Stamp')
        users.string("User_Email").notNullable();
        //yyyy-mm-dd format for postgres I think ? 
        users.date("birthday").notNullable();







    })
  
};

exports.down = function(knex) {
  
};
