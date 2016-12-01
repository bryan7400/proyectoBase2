var express = require('express');
var router = express.Router();


var reclamo = { tipoReclamo: 'odeco', observacion: 'mal servicio', FechaReclamo: '29/11/2016'};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto final',reclamo:reclamo});
});


module.exports = router;
