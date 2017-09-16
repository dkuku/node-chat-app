var socket = io();

socket.on('connect', function () {
    console.log('connected to server !');

});

socket.on('disconnect', function () {
    console.log('disconnected from erver !');
});

socket.on('newMessage', function (message) {
   console.log(`Received new message from ${message.from} at ${message.createdAt}:`);
   console.log(message.text);
});
