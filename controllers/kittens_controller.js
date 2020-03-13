const express = require("express");
const router = express.Router();
const kitten = require("../models/kitten.js");

// routes
router.get("/", function(req, res) {
    kitten.selectAll(function(data) {
        let kitObject = {
            kittens: data
        };
        res.render("index", kitObject);
    });
});

router.post("/api/kittens", function(req, res) {
    kitten.insertOne(["name", "pet"], [req.body.name, req.body.pet], function(
        result
    ) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/kittens/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    kitten.updateOne(
        {
            pet: req.body.pet
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
