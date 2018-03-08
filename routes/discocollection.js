var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/discocollections', function(req, res) {
  models.DiscoCollection.findAll().then(function(discoCollections) {
    res.json(discoCollections);
  });
});

router.post('/discocollection', function(req, res) {
  res.json("teste");
});

router.delete('/discocollection/:id', function(req, res) {
  res.json("teste");
});

module.exports = router;
