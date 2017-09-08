'use strict';

let express = require('express');
let app = express();
require('dotenv').config();

//middleware func. goes between req and res
const logParams = (req, res, next) => {
    console.log('middleware func');
    console.log('req.params', req.params);
    next();
};

//defaults to finding the index
let routes = require('./routes/');
console.log('routes', routes);

//without route arg, will run every req
app.use(logParams);

//will only use these routes matching route param
app.use('/farm/', routes);
app.use(express.static('./webpages/'))

app.use( (req, res, next) => {
    let err = new Error('Not found yo');
    err.status = 404;
    next(err);
});

app.use( (err, req, res, next) =>{
    res.status( err.status || 500 );
    res.json({
        "message": "Sup sucka",
        err: err
    })
});

let port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`listenin on ${port}`);
});