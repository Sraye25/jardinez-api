const sql = require('../db.js');

const Species = function(species) {
    this.id = species.id;
    this.name = species.name;
    this.description = species.description;
};

Species.create = (newSpecies, result) => {
    sql.query("INSERT INTO species (name, description) VALUES ($1, $2)", [newSpecies.name, newSpecies.description], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newSpecies });
    });
};

Species.findById = (speciesId, result) => {
    sql.query(`SELECT * FROM species WHERE id = ${speciesId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.rows.length) {
            result(null, res.rows[0]);
        } else {
            result(null, null);
        }
    });
};

Species.getAll = result => {
    sql.query("SELECT * FROM species", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res.rows);
    });
};

Species.updateById = (id, species, result) => {
    sql.query("UPDATE species SET name = $1, description = $2 WHERE id = $3",
        [species.name, species.description, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result(null, null);
            } else {
                result(null, { id: id, ...species });
            }
        }
    );
};

Species.remove = (id, result) => {
    sql.query("DELETE FROM species WHERE id = $1", [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result(null, null);
        } else {
            result(null, {"id": id});
        }
    });
};

module.exports = Species;