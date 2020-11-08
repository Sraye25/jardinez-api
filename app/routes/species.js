module.exports = app => {
    const species = require("../controllers/species.js");

    // Create a new species
    app.post("/species", species.create);
  
    // Retrieve all species
    app.get("/species", species.findAll);
  
    // Retrieve a single species with speciesId
    app.get("/species/:speciesId", species.findOne);
  
    // Update a species with speciesId
    app.put("/species/:speciesId", species.update);

    // Create a new variety
    app.post("/species/:speciesId/varieties", species.createVariety);

    // Get all varieties from species
    app.get("/species/:speciesId/varieties", species.findVarietiesFromSpecies);
};