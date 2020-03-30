
exports.up = function(knex) {
  return knex.schema
  .createTable("likes", tbl=>{
      tbl.increments("Like_ID")

      tbl
      .timestamp("Like_Time")
      .notNullable().defaultTo(knex.fn.now());

      tbl
      .boolean("Like_Type")
      .defaultTo(false)

      //foreign key(1)
      tbl
      .integer("Like_Post_ID")
      .unsigned()
      .notNullable()
      .references('Post_ID')
      .inTable('posts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

      //foreign key(2)
      tbl
      .integer("Like_User_ID")
      .unsigned()
      .notNullable()
      .references('User_ID')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');    

  })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists("likes") 
  
};
