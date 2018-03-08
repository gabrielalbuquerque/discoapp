var models  = require('../models');
var express = require('express');
var router = express.Router();

// get discocollections
router.get('/getdiscocollections', function(req, res) {
  models.DiscoCollection.findAll().then(function(discoCollections) {
    res.json(discoCollections);
  });
});

// create discocollection
router.post('/creatediscocollection', function(req, res){
  models.DiscoCollection.create({
    name: req.body.name,
    description: req.body.description
  }).then(function() {
    res.json({msg: 'Coleção adicionada com sucesso!'});
  });
});

// update discocollection
router.post('/updatediscocollection/:id', function(req, res){
  models.DiscoCollection.find({
    where: {
      id: req.params.id
    }
  }).then(function(discoCollection) {
    if(discoCollection){
      discoCollection.updateAttributes({
          name: req.body.name,
          description: req.body.description,
        }).then(function() {
          res.json({msg: 'Coleção atualizada com sucesso!'});
        });
    }
  });
});

// delete discocollection
router.delete('/deletediscocollection/:id', function(req, res){
  models.DiscoCollection.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.json({msg: 'Coleção removida com sucesso!'});
  });
});
module.exports = router;
