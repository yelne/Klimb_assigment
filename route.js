var express = require('express');
var router = express.Router();
const api = require("./controller")
const path = require("path");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: path.join("uploads"),
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
  }
  })
const upload = multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } })

/* GET users listing. */
router.post('/upload', upload.single("file"), api.upload);

module.exports = router;
