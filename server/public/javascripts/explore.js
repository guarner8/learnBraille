document.addEventListener("DOMContentLoaded", main);
var timeOut;


function main() {
   for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".braille")[i].addEventListener("click", function(e) {
            this.classList.toggle("inactive");
            getLetter();
        });
    }

    document.querySelector("#clear").addEventListener("click", function(e) {
        clear();
    });

    window.addEventListener("keydown", dealWithKeyboard, true);

}

function clear() {
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".braille")[i].classList.add("inactive");
    }
    document.querySelector("#result").innerHTML = "";
}

function dealWithKeyboard(e) {
    if (e.keyCode === 65) {
        document.getElementById("clear").click();
    } else {
        playTap();
        clearTimeout(timeOut);
        document.getElementById(e.keyCode).classList.toggle("inactive");
        getLetter();
    }
}

function tts(word) {
    if (typeof(word)!=typeof("")) {
        return;
    } else {
        var msg = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(msg);
    }
}

function playCorrect() {
    var audio = new Audio('../audio/correct.mp3');
    audio.play();
}

function playTap() {
    var audio = new Audio('../audio/tap.mp3');
    audio.play();
}

function playError() {
    var audio = new Audio('../audio/error.mp3');
    audio.play();
}

function brailleToASCII(arr) {
    return {"100000":"A",
            "110000":"B",
            "100001":"C",
            "100011":"D",
            "100010":"E",
            "110001":"F",
            "110011":"G",
            "110010":"H",
            "010001":"I",
            "010011":"J",
            "101000":"K",
            "111000":"L",
            "101001":"M",
            "101011":"N",
            "101010":"O",
            "111001":"P",
            "111011":"Q",
            "111010":"R",
            "011001":"S",
            "011011":"T",
            "101100":"U",
            "111100":"V",
            "010111":"W",
            "101101":"X",
            "101111":"Y",
            "101110":"Z",
            "000000":null}
}

function createBitMap() {
    const first = isActive(83);
    const second = isActive(68);
    const third = isActive(70);
    const fourth = isActive(76);
    const fifth = isActive(75);
    const sixth = isActive(74);

    //console.log( first+ fourth + second+ fifth+ third+ sixth);
    return first+  second+ third +sixth + fifth+ fourth;
}

function isActive(id) {
    if (document.getElementById(""+id).classList.contains("inactive")) {
        return "0";
    }
    return "1";
}

function getLetter() {
    let letterMap = brailleToASCII();
    let letter = letterMap[createBitMap()];
    console.log("letter");
    if (letter === undefined) {
        document.getElementById("result").innerHTML = "";
    } else {
    document.getElementById("result").innerHTML = letter;
    }

    timeOut = setTimeout(function() {tts(letter);}, 1000);
    return letter;
}

