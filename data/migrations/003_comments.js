exports.up = function(knex) {
    return knex.schema.createTable("comments", comments => {
        comments.increments("Comment_ID")
        comments.string("Comment_Text", 500).notNullable();
        comments.integer("Comment_User_ID").notNullable().unsigned().references("User_ID")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        comments.timestamp("Comment_Created_At").notNullable().defaultTo(knex.fn.now());
        comments.integer("Comment_Post_ID").notNullable().unsigned().references("Post_ID")
        .inTable("posts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comments");
  };








