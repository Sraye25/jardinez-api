const sql = require('../db.js');

const Climate = function(climate) {
    this.id = climate.id;
    this.name = climate.name;
    this.description = climate.description;
};

Climate.getAll = result => {
    sql.query("SELECT * FROM climates", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res.rows);
    });
};
