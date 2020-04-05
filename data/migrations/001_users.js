exports.up = function(knex) {
    return knex.schema.createTable("users", users => {
        users.increments("User_ID")
        users.string("User_First_Name", 128).notNullable();
        users.string("User_Last_Name", 128).notNullable();
        users.string("User_Password", 18).notNullable();
        // users.datetime('User_Time_Stamp')
        users.timestamp("User_Created_At").defaultTo(knex.fn.now());
        users.string("User_Email").notNullable().unique();
        //yyyy-mm-dd format for postgres I think ? 
        users.date("User_Birthday").notNullable();

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };
  