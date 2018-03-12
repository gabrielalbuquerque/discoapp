var models  = require('../models');
var express = require('express');
var router = express.Router();

const errorMsg = "Ocorreu um erro, tente novamente mais tarde.";
const successAddMsg = "Coleção adicionada com sucesso!";
const successEditMsg = "Coleção atualizada com sucesso!";
const successDeleteMsg = "Coleção removida com sucesso!";

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
    res.json({successMsg: successAddMsg});
  }).catch(function (err) {
    res.json({errorMsg: errorMsg});
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
          res.json({successMsg: successEditMsg});
        }).catch(function (err) {
          res.json({errorMsg: errorMsg});
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
    res.json({successMsg: successDeleteMsg});
  }).catch(function (err) {
    res.json({errorMsg: errorMsg});
  });
});
module.exports = router;
