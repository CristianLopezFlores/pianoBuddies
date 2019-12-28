var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
users = [];
app.use('/', express.static(__dirname));
server.listen(process.env.PORT || 3000);

var clients = [];

io.sockets.on('connection', function(socket) {
    socket.on('playNote', function(note) {
        socket.broadcast.emit('buddiesNote', note);
    });
    socket.on('stopPlaying', function(note) {
        socket.broadcast.emit('buddiesStop', note);
    });
});