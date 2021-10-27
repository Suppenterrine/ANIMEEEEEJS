"use strict";
const socket = io('http://localhost:8000');

function whoopsie(id) {
    let element = document.getElementById(id);

    anime({
        targets: element,
        keyframes: [
            { translateY: 20 },
            { translateY: 0 }
        ],
        duration: 200,
        easing: 'easeInOutQuad',
    });

    socket.emit('clicked_thing', id);
}

socket.on('connect', function () {
    console.log('Connected');
});

socket.on('server_reply', function (msg) {
    let split = msg.split(':');
    let last = split.at(-1);
    document.getElementById('info').innerHTML = split.at(0) + ':';
    document.getElementById('boldy').innerHTML = '<b>' + last + '</b>';
});

