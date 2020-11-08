const Utils = require("./utils.js");
const Species = require("../models/species.js");
const Variety = require("../models/varieties.js");

/**
 * Get a species from id
 */
function getSpeciesById(id) {
    return new Promise((resolve, reject) => {
        Species.findById(id, (err, data) => {
            if (err) reject(err);
            else if(data == null) reject(null);
            else resolve(data);
        });
    });
}

/**
 * Get all verieties by species id
 */
function getVarietiesBySpeciesId(speciesId) {
    return new Promise((resolve, reject) => {
        Variety.findBySpecies(speciesId, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

/**
 * create a variety
 */
function createVariety(varietyName, varietyDescription, varietySpeciesId) {
    const variety = new Variety({
        name: varietyName,
        description: varietyDescription,
        speciesId: varietySpeciesId
    });

    return new Promise((resolve, reject) => {
        Variety.create(variety, (err, data) => {
            if (err) 
            {
                console.log(err);
                reject(err);
            }
            else resolve(data);
        });
    });
}

/**
 * Create and Save a new Species
 */
exports.create = (req, res) => {
    if (!Utils.isValidSpeciesBody(req.body)) res.status(400).send({message: "Content can not be empty!"});
  
    // Create a Species
    const species = new Species({
        name: req.body.name,
        description: req.body.description
    });

    // Save Species in the database
    Species.create(species, (err, data) => {
        if (err)
            res.status(500).send({ message: err.message || "Unknown error"});
        else 
            res.status(201).send(data);
    });
};

/**
 * Retrieve all Species from the database.
 */
exports.findAll = (req, res) => {
    Species.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message || "Unknown error"});
        else 
            res.status(200).send(data);
    });
};

/**
 * Find a single Species with a speciesId
 */
exports.findOne = (req, res) => {
    const id = parseInt(req.params.speciesId);
    getSpeciesById(id)
        .catch((err) => res.status(500).send({message: err.message || "Unknown error"}))
        .then((data) => {
            if(data)
                res.status(200).send(data);
            else
                res.status(404).send(data);
    });
};

/**
 * Update a Species identified by the speciesId in the request
 */
exports.update = (req, res) => {
    if (!Utils.isValidSpeciesBody(req.body)) res.status(400).send({ message: "Content can not be empty!" });
    const id = parseInt(req.params.speciesId);
  
    // Create a Species
    const species = new Species({
        name: req.body.name,
        description: req.body.description
    });

    // Save Species in the database
    Species.updateById(id, species, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Unknown error"});
        } else {
            if(data)
                res.status(200).send(data);
            else
                res.status(404).send(data);
        }
    });
};

/**
 * Delete a Species with the specified speciesId in the request
 */
exports.createVariety = (req, res) => {
    if (!Utils.isValidVarietyBody(req.body)) res.status(400).send({ message: "Content can not be empty!" });
    const id = parseInt(req.params.speciesId);

    getSpeciesById(id)
        .catch((err) => {
            res.status(404).send({message: `Can't find species ${id}`});
            return;
        })
        .then((data) => createVariety(req.body.name, req.body.description, id))
        .catch((err) => {
            res.status(500).send({ message: err.message || "Unknown error" });
            return;
        })
        .then((data) => res.status(201).send(data));
};

exports.findVarietiesFromSpecies = (req, res) => {
    const id = parseInt(req.params.speciesId);

    getSpeciesById(id)
        .catch((err) => {
            res.status(404).send({message: `Can't find species ${id}`});
            return;
        })
        .then((data) => getVarietiesBySpeciesId(id))
        .catch((err) => {
            res.status(500).send({ message: err.message || "Unknown error" });
            return;
        })
        .then((data) => res.status(200).send(data));
};