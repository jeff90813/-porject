var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/', apiController.getcpu);
router.get('/motherboard', apiController.getmotherboard);
router.get('/ram', apiController.getram);
router.get('/motherboard_id/:socket_id',apiController.getmotherboard_id);
router.get('/list', apiController.getselection);

module.exports = router;
