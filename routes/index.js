'use strict';

const { Router } = require('express');
const router = Router();

// router.use(require('./home'));
router.use(require('./see-our-chickens'));
router.use(require('./see-our-eggs'));

router.get('/', (req, res) => {
    //provide endpoints
    res.json({
        "home": "/farm/home",
        "chickens": "/farm/see-our-chickens",
        "eggs": "/farm/see-our-eggs"
    });
});


module.exports = router;

