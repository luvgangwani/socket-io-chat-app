const socket = io.connect('http://localhost:5000');

const output = document.getElementById('output'),
        handle = document.getElementById('handle'),
        message = document.getElementById('message'),
        btnSend = document.getElementById('btnSend');


btnSend.addEventListener('click', function(){

    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });

});

socket.on('chat', function(data) {
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`;
});