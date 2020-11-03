const Species = require("../models/species.js");

/**
 * Create and Save a new Species
 */
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    // Create a Species
    const species = new Species({
        name: req.body.name,
        description: req.body.description
    });

    // Save Species in the database
    Species.create(species, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Species."
            });
        else res.status(201).send(data);
    });
};

/**
 * Retrieve all Species from the database.
 */
exports.findAll = (req, res) => {
    Species.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.status(200).send(data);
    });
};

/**
 * Find a single Species with a speciesId
 */
exports.findOne = (req, res) => {
    const id = parseInt(req.params.speciesId);
    Species.findById(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        } else {
            if(data) {
                res.status(200).send(data);
            } else {
                res.status(404).send(data);
            }
        }
    });
};

// Update a Species identified by the speciesId in the request
exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const id = parseInt(req.params.speciesId);
  
    // Create a Species
    const species = new Species({
        name: req.body.name,
        description: req.body.description
    });

    // Save Species in the database
    Species.updateById(id, species, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Species."
            });
        } else {
            if(data) {
                res.status(200).send(data);
            } else {
                res.status(404).send(data);
            }
        }
    });
};

// Delete a Species with the specified speciesId in the request
exports.delete = (req, res) => {
    const id = parseInt(req.params.speciesId);
    Species.remove(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        } else {
            if(data) {
                res.status(200).send(data);
            } else {
                res.status(404).send(data);
            }
        }
    });
};
