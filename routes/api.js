var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/', apiController.getcpu);
router.get('/motherboard', apiController.getmotherboard);
router.get('/ram', apiController.getram);

module.exports = router;
