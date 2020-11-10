const sql = require('../db.js');

const VarietyAssociation = function(asso) {
    this.id = asso.id;
    this.weight = asso.weight;
    this.variety1Id = asso.variety1Id;
    this.variety2Id = asso.variety2Id;
};

VarietyAssociation.getAll = result => {
    sql.query("SELECT * FROM varietyAssociations", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res.rows);
    });
};
