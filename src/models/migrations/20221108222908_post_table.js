/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('post', (table)=>{
        table.increments('id').primary()
        table.string('title')
        table.string('body', 'longtext')
        table.integer('user_id').unsigned().references('id').inTable('users')
        table.timestamps()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
