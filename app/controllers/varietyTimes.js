const Utils = require("./utils.js");
const VarietyTime = require("../models/varietyTimes.js");

/**
 * Retrieve all associations from the database.
 */
exports.findAll = (req, res) => {
    VarietyTime.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message});
        else 
            res.status(200).send(data);
    });
};