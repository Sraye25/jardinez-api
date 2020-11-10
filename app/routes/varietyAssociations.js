module.exports = app => {
    const associations = require("../controllers/varietyAssociations.js");

    // Retrieve all associations
    app.get("/varietyAssociations", associations.findAll);
};