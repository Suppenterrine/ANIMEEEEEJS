"use strict";
const socket = io('http://localhost:8000');
let bb = false;


function makeItBrrt(id) {
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
}

socket.on('connect', function () {
    console.log('Connected')
});

