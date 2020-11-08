const Utils = require("./utils.js");
const Variety = require("../models/varieties.js");

/**
 * Retrieve all varieties from the database.
 */
exports.findAll = (req, res) => {
    Variety.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message});
        else 
            res.status(200).send(data);
    });
};

/**
 * Find a single varieties with a speciesId
 */
exports.findOne = (req, res) => {
    const id = parseInt(req.params.varietyId);
    Variety.findById(id, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            if(data)
                res.status(200).send(data);
            else
                res.status(404).send(data);
        }
    });
};

/**
 * Update a varieties identified by the varietiesId in the request
 */
exports.update = (req, res) => {
    // Validate request
    if (!Utils.isValidVarietyBody(req.body)) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const id = parseInt(req.params.varietyId);
  
    // Create a varieties
    const variety = new Variety({
        name: req.body.name,
        description: req.body.description
    });
    
    console.log(variety);
    // Save varieties in the database
    Variety.updateById(id, variety, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            if(data)
                res.status(200).send(data);
            else
                res.status(404).send(data);
        }
    });
};

/**
 * Delete a varieties with the specified varietiesId in the request
 */
exports.delete = (req, res) => {
    const id = parseInt(req.params.varietyId);
    Variety.remove(id, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            if(data) {
                res.status(200).send(data);
            } else {
                res.status(404).send(data);
            }
        }
    });
};
