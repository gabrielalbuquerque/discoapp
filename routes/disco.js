var models  = require('../models');
var express = require('express');
var router = express.Router();

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
router.post('/createdisco/:discocollection_id', function(req, res){
  models.Disco.create({
    name: req.body.name,
    description: req.body.description,
    discoCollectionId: req.params.discocollection_id
  }).then(function() {
    res.json({msg: 'Disco adicionado com sucesso!'});
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
        }).then(function() {
          res.json({msg: 'Disco atualizado com sucesso!'});
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
    res.json({msg: 'Disco removido com sucesso!'});
  });
});

module.exports = router;
