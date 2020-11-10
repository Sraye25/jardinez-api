const Utils = require("./utils.js");
const Climate = require("../models/climates.js");

/**
 * Retrieve all climates from the database.
 */
exports.findAll = (req, res) => {
    Climate.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message});
        else 
            res.status(200).send(data);
    });
};