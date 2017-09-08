'use strict';

const { Router } = require('express');
const router = Router();
const { getChickens } = require('../controllers/chickenCtrl');

router.get('/see-our-chickens', getChickens);

module.exports = router;