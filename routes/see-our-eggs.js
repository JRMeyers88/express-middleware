'use strict';

const { Router } = require('express');
const router = Router();
const { getEggs } = require('../controllers/eggCtrl');

router.get('/see-our-eggs', getEggs);

module.exports = router;