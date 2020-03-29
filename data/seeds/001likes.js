
exports.seed = async function(knex) {
  
  const likes =[
   {Like_Type:"true"},
   {Like_Type:"true"},
   {Like_Type:""},
   
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('likes').truncate();
  
    return knex('likes').insert(likes);   
  };

