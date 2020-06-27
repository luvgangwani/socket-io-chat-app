const socket = io.connect('http://localhost:5000');

const output = document.getElementById('output'),
        handle = document.getElementById('handle'),
        message = document.getElementById('message'),
        btnSend = document.getElementById('btnSend'),
        typingMessage = document.getElementById('typing-message');


btnSend.addEventListener('click', function(){

    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });

});

socket.on('chat', function(data) {
    typingMessage.innerHTML = '';
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`;
});

message.addEventListener('keypress', function() {
    socket.emit('typingMessage', handle.value);
});

socket.on('typingMessage', function(data){
    typingMessage.innerHTML = `${data} is typing a message...`;
});