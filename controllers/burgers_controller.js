//requiring express, defining router
const express = require('express');
const router = express.Router();

//requiring model
const burger = require('../models/burger');

//post route and passing to burger table as JSON object
router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        res.json({id: result.insertId});
    });
});

//get route and passing to Handlebars object
router.get("/", (req, res) => {
    // console.log(req);
    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//update or put route linking to burger table
router.put('/api/burger/:id', (req, res) => {
    var thisBurger = req.params.id;
    
//update one burger  
    burger.updateOne(thisBurger, result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
  });

// Export routes for server.js to use.
module.exports = router;
