const note = Math.floor(Math.random() * 7) + 1;
console.log(note);
if (note = 1) {
    const audio = document.getElementById("c_audio");
} else if (note = 2) {
    const audio = document.getElementById("d_audio");
} else if (note = 3) {
    const audio = document.getElementById("e_audio");
} else if (note = 4) {
    const audio = document.getElementById("f_audio");
} else if (note = 5) {
    const audio = document.getElementById("g_audio");
} else if (note = 6) {
    const audio = document.getElementById("a_audio");
} else if (note = 7) {
    const audio = document.getElementById("b_audio");
}

function start() {
    Math.random
    const hiddenPage = document.querySelector('.game');
    const startbutton = document.getElementById("start_button")
    if (hiddenPage.style.display === 'none' || hiddenPage.style.display === '') {
        hiddenPage.style.display = 'block'; 
        startbutton.style.display = 'none';
    }
    audio.play();

}

function replay() {
    audio.play();
}