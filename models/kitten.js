const orm = require("../config/orm.js");

const kitten = {
    // data for all kittens
    selectAll: function(cb) {
        orm.selectAll("kittens", function(res) {
            cb(res);
        });
    },
    // data for insert function
    insertOne: function(col, val, cb) {
        orm.insertOne("kittens", col, val, function(res) {
            cb(res);
        });
    },
    // data for update kitten petted status
    updateOne: function(colVals, condition, cb) {
        orm.updateOne("kittens", colVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = kitten;
