// config/migrations/20240220000000_create_tables.js
exports.up = function(knex) {
    return knex.schema.createTable('packing', function(table) {
      table.increments('id');
      table.string('name');
      table.string('last_name');
      table.string('phone_number');
      table.string('location');
    })
    .createTable('helping', function(table) {
      table.increments('id');
      table.string('name');
      table.string('last_name');
      table.string('phone_number');
      table.string('location');
    })
    .createTable('cooking', function(table) {
      table.increments('id');
      table.string('name');
      table.string('last_name');
      table.string('phone_number');
      table.string('location');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('packing')
      .dropTableIfExists('helping')
      .dropTableIfExists('cooking');
  };
  