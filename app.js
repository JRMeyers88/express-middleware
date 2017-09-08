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

const easterEgg = (req, res, next) => {
    if (req.path.includes('egg')){
    console.log(`        ,ggadddd8888888bbbbaaa,_
    ,ad888,      Y88,      Y888baa,
  ,dP"  "Y8b,      "Y8b,      "Y8888ba,
 ,88      "Y88b,      "Y8ba,       "Y88Ya,
,P88b,       "Y88b,      "Y8ba,_        ""8a,
,P'"Y88b,        "Y88b,        "Y8ba,_      Ya,
8'    "Y88b,        ""Y8ba,        ""Y8ba,_   8,
8b       "Y88b,         ""Y8ba,_       ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_        ""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_  ,P'
b,"Y88ba,         ""Y88baa,_         """Y888bd"
b, "Y88ba,_           ""Y888baa,_         ,8"
  8,  ""Y88ba,_            """Y8888baaaaaP"
    Ya,    ""Y888ba,_             "d88P"
      "Yb,,_    ""Y888baa,__,,  adP""'
          """YYYY8888888PPPP"""''`);
    }
    next();
};

app.use(easterEgg);

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