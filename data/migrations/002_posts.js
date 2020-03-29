
exports.up = function (knex) {
  return knex.schema.createTable("posts", posts => {
    posts.increments("Post_ID")
    posts.string("Post_Text", 128).notNullable();
    posts.integer("Post_User_ID")
      .unsigned()
      .notNullable()
      .references("User_ID")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    posts.timestamp("Post_Created_At").notNullable().defaultTo(knex.fn.now());

  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("posts");
};
