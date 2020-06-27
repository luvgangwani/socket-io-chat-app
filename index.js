const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static('public'));

const server = app.listen(5000, function() {
    console.log('Server listening at port 5000');
});

const io = socket(server);

io.on('connection', function(socket){
    console.log('Socket connection established', socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data); // server sends the message to all the clients connected
    });
});