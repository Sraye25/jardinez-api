module.exports = app => {
    const times = require("../controllers/varietyTimes.js");

    // Retrieve all times
    app.get("/varietyTimes", times.findAll);
};