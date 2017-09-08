'use strict';

// const { getAllChickens } = require('../models/Chicken');
const { sendFile } = require('fs');
const { join } = require('path');

module.exports.getEggs = (req, res, next) => {
    // console.log("chickens cluck");
    res.sendFile(join(__dirname, '../webpages/Egg.html'));
};