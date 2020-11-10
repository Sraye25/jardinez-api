module.exports = app => {
    const climates = require("../controllers/climates.js");

    // Retrieve all associations
    app.get("/climates", climates.findAll);
};