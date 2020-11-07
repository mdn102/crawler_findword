const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')

// set aylien API credentials
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
//Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile('dist/index.html');
    // path.join(__dirname + 'dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//Post request 
app.post('/sentiment', function (req, res) {
    textapi.sentiment({
        'url': req.body.url
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
            // return;
        };

    });
});

module.exports = app;