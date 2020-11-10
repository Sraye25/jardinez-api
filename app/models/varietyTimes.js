const sql = require('../db.js');

const VarietyTime = function(time) {
    this.id = time.id;
    this.varietyId = time.varietyId;
    this.climateId = time.climateId;
    this.seedingIndoorBegin = time.seedingIndoorBegin;
    this.seedingIndoorEnd = time.seedingIndoorEnd;
    this.seedingOutdoorBegin = time.seedingOutdoorBegin;
    this.seedingOutdoorEnd = time.seedingOutdoorEnd;
    this.harvestBegin = time.harvestBegin;
    this.harvestEnd = time.harvestEnd;
};

VarietyTime.getAll = result => {
    sql.query("SELECT * FROM varietyTimes", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res.rows);
    });
};
