var models  = require('../models');
var express = require('express');
var router = express.Router();

const errorMsg = "Ocorreu um erro, tente novamente mais tarde.";
const successAddMsg = "Disco adicionado com sucesso!";
const successEditMsg = "Disco atualizado com sucesso!";
const successDeleteMsg = "Disco removido com sucesso!";

// get all discos
router.get('/getdiscos', function(req, res) {
  models.Disco.findAll().then(function(discos) {
    res.json(discos);
  });
});

// search discos
router.get('/searchdiscos/:search_char', function(req, res){
  models.Disco.findAll({
    where: {
      name: {
        $like: '%'+req.params.search_char+'%'
      }
    }
  }).then(function(discos) {
      res.json(discos);
  });
});

// get discos by id
router.get('/getdisco/:id', function(req, res){
  models.Disco.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(disco) {
    res.json(disco);
  });
});

// get discos by collection
router.get('/getdiscos/:discocollection_id', function(req, res){
  models.Disco.findAll({
    where: {
      discoCollectionId: req.params.discocollection_id
    }
  }).then(function(discos) {
    res.json(discos);
  });
});

// create disco
router.post('/createdisco', function(req, res){
  models.Disco.create({
    name: req.body.name,
    description: req.body.description,
    discoCollectionId: req.body.discoCollectionId
  }).then(function() {
    res.json({successMsg: successAddMsg});
  }).catch(function (err) {
    res.json({errorMsg: errorMsg});
  });
});

// update disco
router.post('/updatedisco/:id', function(req, res){
  models.Disco.find({
    where: {
      id: req.params.id
    }
  }).then(function(disco) {
    if(disco){
      disco.updateAttributes({
          name: req.body.name,
          description: req.body.description,
          discoCollectionId: req.body.discoCollectionId
        }).then(function() {
          res.json({successMsg: successEditMsg});
        }).catch(function (err) {
          res.json({errorMsg: errorMsg});
        });
    }
  });
});

// delete disco
router.delete('/deletedisco/:id', function(req, res){
  models.Disco.destroy({
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
