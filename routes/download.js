const router = require('express').Router()
const { downloadFile } = require('../controller/download')


router.get('/:uuid', downloadFile);

module.exports = router;