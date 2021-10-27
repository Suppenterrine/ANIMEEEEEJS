const express = require('express');
const app = express();
const http = require('http').createServer(app);
const moment = require('moment');
const io = require('socket.io')(http);


const start = moment().format('DD.MM.YYYY, HH:mm');
moment.locale('de');

const port = 8000;

// Start Server
http.listen(port, function () {
    console.log('\n╳────────────────────────────────╳');
    console.log('│\x1b[1m Serverstart: ' + start + '\x1b[0m │');
    console.log('╳────────────────────────────────╳');

    console.log('\x1b[32m', '\n ✓' + '\x1b[0m Server listening on port ' + port);
});


// Serve Website
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public');
});


io.on('connection', function (socket) {
    // console.log('hello');
    // socket.on('aktivzeit', function (msg) {
    // });
});