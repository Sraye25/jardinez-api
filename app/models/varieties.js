const sql = require('../db.js');

const Variety = function(variety) {
    this.id = variety.id;
    this.name = variety.name;
    this.description = variety.description;
    this.speciesId = variety.speciesId;
};

Variety.create = (newVariety, result) => {
    sql.query("INSERT INTO varieties (name, description, species_id) VALUES ($1, $2, $3) RETURNING *", [newVariety.name, newVariety.description, newVariety.speciesId], (err, res) => {
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

Variety.findById = (varietyId, result) => {
    sql.query("SELECT * FROM varieties WHERE id = $1", [varietyId], (err, res) => {
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

Variety.findBySpecies = (speciesId, result) => {
    sql.query("SELECT * FROM varieties WHERE species_id = $1", [speciesId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res.rows);
    });
};

Variety.getAll = result => {
    sql.query("SELECT * FROM varieties", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res.rows);
    });
};

Variety.updateById = (id, variety, result) => {
    console.log(variety);
    sql.query("UPDATE varieties SET name = $1, description = $2 WHERE id = $3", [variety.name, variety.description, id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result(null, null);
        } else {
            result(null, { id: id, ...variety });
        }
    });
};

Variety.remove = (id, result) => {
    sql.query("DELETE FROM varieties WHERE id = $1", [id], (err, res) => {
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

module.exports = Variety;