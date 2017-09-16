const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');
    var time = new Date().getTime();

    socket.emit('newMessage', {
        from: "mike@ex.com",
        text: "cccccccc",
        createdAt: time
    });

    socket.on('createMessage', (message) => {
        console.log('create Message', message);

    });

    socket.on('disconnect', () => {
        console.log('user disconnected');

    });
});

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
