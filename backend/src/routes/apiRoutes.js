const express = require('express');
const router = express.Router();
const { api1Handler } = require('../controllers/api1Controller');
const { api2Handler } = require('../controllers/api2Controller');
const { api3Handler } = require('../controllers/api3Controller');
const { api4Handler} = require('../controllers/api4Controller');
const { api5Handler} = require('../controllers/api5Controller');

router.post('/api1', api1Handler);
router.post('/api2', api2Handler);
router.post('/api3', api3Handler);
router.post('/api4', api4Handler);
router.post('/api5', api5Handler);

module.exports = router;