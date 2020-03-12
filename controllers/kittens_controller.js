const express = require("express");
const burger = require("../models/kitten");
const router = express.Router();

router.get("/", function(req, res) {
    kitten.selectAll(function(data) {
        const kitObject = {
            kittens: data
        };
        console.log(kitObject);
        res.render("index", kitObject);
    });
});

router.post("/api/kittens", function(req, res) {
    kitten.insertOne(
        ["kitten_name", "petted"],
        [req.body.kitten_name, req.body.petted],
        function(result) {
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/kittens/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    kitten.updateOne({ petted: req.body.petted }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
