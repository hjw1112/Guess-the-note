//show the game div
function start() {
    const hiddenPage = document.querySelector('.game');
    const startbutton = document.getElementById("start_button")
    if (hiddenPage.style.display === 'none' || hiddenPage.style.display === '') {
        hiddenPage.style.display = 'block'; 
        startbutton.style.display = 'none';
    }
    play();
}

//get note no
function get_note() {
    const note = Math.floor(Math.random() * 7) + 1;
    console.log(note);
    return note
}
//get audio for note
function get_audio(note) {
    if (note == 1) {
        var audio = document.getElementById("c_audio");
    } else if (note == 2) {
        var audio = document.getElementById("d_audio");
    } else if (note == 3) {
        var audio = document.getElementById("e_audio");
    } else if (note == 4) {
        var audio = document.getElementById("f_audio");
    } else if (note == 5) {
        var audio = document.getElementById("g_audio");
    } else if (note == 6) {
        var audio = document.getElementById("a_audio");
    } else if (note == 7) {
        var audio = document.getElementById("b_audio");
    }
    return audio
}
//replay the note
function replay(audio) {
    audio.currentTime = 0;
    audio.play();
}

//main game logics
function play() {
    note = get_note();
    audio = get_audio(note);
    audio.play();
    const replaybutton = document.getElementById("replaybutton");
    replaybutton.addEventListener("click", () => replay(audio));
}


//increment for looping game 5 times. 
function main() {
    if (iteration < 6) {
      iteration++;
      play();
    } 
    else {
        console.log("end game")
    }
  }



const buttondiv = document.querySelectorAll(".buttons");

buttondiv.addEventListener("click", (event) => {
  // Check if the clicked element is a button
  if (event.target && event.target.matches(".buttons")) {
    main(event.target);
  }
});