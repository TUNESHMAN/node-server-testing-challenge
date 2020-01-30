exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("movies")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("movies").insert([
        { name: "Terminator" },
        { name: "Titanic" },
        { name: "Cyborg" }
      ]);
    });
};
