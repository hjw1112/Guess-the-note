let i = 0;
let score = 0;
//show the game div
function start() {
    const hiddenPage = document.querySelector('.game');
    const startbutton = document.getElementById("start_button");
    if (hiddenPage.style.display === 'none' || hiddenPage.style.display === '') {
        hiddenPage.style.display = 'block'; 
        startbutton.style.display = 'none';
    }
    increment();
}

function game(input, note) {
    if (note == input) {
        return true;
    } else {
        return false;
    }
}

function increment() {
    if (i < 5) {
        i++;
        play();
    } else {
        console.log("end game", score);
        alert(`Game over! Your score is: ${score}`);
    }
}

//get note no
function get_note() {
    const note = Math.floor(Math.random() * 7) + 1;
    console.log(note);
    return note;
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
    return audio;
}
//replay the note
function replay(audio) {
    audio.currentTime = 0;
    audio.play();
}

//main game logics
function play() {
    if (i >= 6) return;

    const note = get_note();
    const audio = get_audio(note);

    audio.play();

    // button event listeners for note choices (waiting for user interaction)
    const buttons = [
        { id: "c_button", note: 1 },
        { id: "d_button", note: 2 },
        { id: "e_button", note: 3 },
        { id: "f_button", note: 4 },
        { id: "g_button", note: 5 },
        { id: "a_button", note: 6 },
        { id: "b_button", note: 7 },
    ];

    buttons.forEach(button => {
        // add event listener to each button
        document.getElementById(button.id).onclick = () => {
            if (game(button.note, note)) {
                score += 1;  // increment score
            }
            increment();
        };
    });

    // replay button
    const replaybutton = document.getElementById("replaybutton");
    replaybutton.addEventListener("click", () => replay(audio));

    const playagain = document.getElementById("play_again");
    playagain.addEventListener("click", () => location.reload());
}