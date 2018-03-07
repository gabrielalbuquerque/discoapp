var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/discos', function(req, res) {
  models.Disco.findAll().then(function(discos) {
    res.json(discos);
  });
});

router.post('/disco', function(req, res){
  models.Disco.create({
    name: req.body.name,
    description: req.body.description
  }).then(function() {
    res.json({msg: 'Disco adicionado com sucesso!'});
  });
});

router.delete('/disco/:id', function(req, res){
  models.Disco.findById(req.params.id).then(function(disco) {
    disco.destroy().then(function(){
      res.json({msg: 'Disco removido com sucesso!'});
    });
  });
});

module.exports = router;
