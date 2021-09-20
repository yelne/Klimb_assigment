var express = require('express');
var router = express.Router();
var uploadRouter = require('./upload/route');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello World  !!!")
});

router.use(uploadRouter)

module.exports = router;
