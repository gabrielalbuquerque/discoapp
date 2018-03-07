var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/discos', function(req, res) {
  //res.render('disco', { title: 'Express' });
  //res.send('Teste');
  models.Disco.findAll().then(function(discos) {
    /*res.render('disco', {
      title: 'get Discos',
      discos: discos
    });*/
    console.log("select_data: " + JSON.stringify(discos));
  });
});

router.post('/disco', function(req, res, next){

});

router.delete('/disco/:id', function(req, res, next){

});

module.exports = router;
