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
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});


jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {
    
    });
});
