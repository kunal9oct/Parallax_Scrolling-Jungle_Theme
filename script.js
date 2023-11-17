let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill-1');
let hill4 = document.getElementById('hill-4');
let hill5 = document.getElementById('hill-5');

 window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
 });


// !!!!!!!     FOR BACKGROUND MUSIC     !!!!!!!
// !!!!!  AUTOMATIC BACKGROUND MUSIC BUT NEEDS BROWSER TO ALLOW OR USER TO GIVE PERMISSION  !!!!! 
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    const icon = document.querySelector("#button > i");
    audio.volume = 0.3;
    audio.play();

    if (audio.paused) {
        icon.classList.remove('bx-volume-full');
        icon.classList.add('bx-volume-mute');
    } else {
        icon.classList.remove('bx-volume-mute');
        icon.classList.add('bx-volume-full');
    }
});

/*
// !!!!!  THIS BELOW FUNCTION WORKS TOO AND WE DON'T NEED TO ADD AUDIO ELEMENT IN HTML !!!!!
function playSound() {
let audio = document.createElement('audio');
audio.src = './India Fuse - French Fuse.mp3';
audio.volume = 0.3;
audio.play();
}

playSound();
*/

// Adding button to give users control over background music 
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
        icon.classList.remove('bx-volume-mute');
        icon.classList.add('bx-volume-full');
    } else {
        audio.pause();
        icon.classList.remove('bx-volume-full');
        icon.classList.add('bx-volume-mute');
    }
});
