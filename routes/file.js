const router = require('express').Router();
const { uploadFile } = require('../controller/file')

router.post('/upload', uploadFile);


module.exports = router;






