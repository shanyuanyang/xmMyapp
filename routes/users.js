var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dddd', function(req, res, next) {
  res.send('respond with a dddd');
});

module.exports = router;
