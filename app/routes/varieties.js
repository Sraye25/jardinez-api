module.exports = app => {
    const varieties = require("../controllers/varieties.js");

    // Retrieve all varieties
    app.get("/varieties", varieties.findAll);
  
    // Retrieve a single varieties with varietyId
    app.get("/varieties/:varietyId", varieties.findOne);
  
    // Update a varieties with varietyId
    app.put("/varieties/:varietyId", varieties.update);
  
    // Delete a varieties with varietyId
    app.delete("/varieties/:varietyId", varieties.delete);
};