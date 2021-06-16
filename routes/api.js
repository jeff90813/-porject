var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/', apiController.getcpu);
router.get('/motherboard', apiController.getmotherboard);
router.get('/ram', apiController.getram);
router.get('/motherboard_id/:id',apiController.getmotherboard_id); 
router.get('/ram_id/:cpu_id/:id',apiController.getram_id);
router.get('/list', apiController.getselection);
router.get('/select/:cpu_id/:motherboard_id/:id',apiController.getselection);

module.exports = router;
