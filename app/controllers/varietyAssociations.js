const Utils = require("./utils.js");
const VarietyAssociation = require("../models/varietyAssociations.js");

/**
 * Retrieve all associations from the database.
 */
exports.findAll = (req, res) => {
    VarietyAssociation.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message});
        else 
            res.status(200).send(data);
    });
};