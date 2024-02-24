// config/seeds/locations.js
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('locations').del()
      .then(function () {
        // Inserts seed entries
        return knex('locations').insert([
          { city: 'Tel Aviv' },
          { city: 'Jerusalem' },
          { city: 'Haifa' },
          // Add more cities as needed
        ]);
      });
  };
  