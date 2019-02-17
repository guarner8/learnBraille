document.addEventListener("DOMContentLoaded", main);
var words=[];
var idx = 0;

function main() {
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".level")[i].addEventListener("click", function(e) {
            if (this.id === "easy") {
                let n = 0;
                easy(n);
            } else if (this.id === "medium") {
                medium();
            } else if (this.id === "hard") {
                hard();
            } else {
                let q = 3;
                endless(q);
            }
        });
    }
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".braille")[i].addEventListener("click", function(e) {
            playTap();
            this.classList.toggle("inactive");
        });
    }

    document.querySelector("#clear").addEventListener("click", function(e) {
        playTap();
        clear();
    });

    window.addEventListener("keydown", dealWithKeyboard, true);

    window.addEventListener("keyup", semicolon, true);

    let j = 0;
    easy(j); 
}

function clear() {
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".braille")[i].classList.add("inactive");
    }
}


function semicolon(e) {
    if (e.keyCode === 186 ) {

        letter = getLetter();
        text = document.getElementById("randomNumber").textContent;
        if (text == "Press [;] to start") {
            playSuperCorrect();
            clear();
            document.getElementById("generateNext").click();
        }

        console.log(letter, text.charAt(idx), text.length, idx);
        if (letter === text.charAt(idx)) {

            if (idx >= text.length-1) {
                playSuperCorrect();
                document.getElementById("generateNext").click();
                idx=0;
            } else {
                playCorrect();
                let ele = document.getElementById("randomNumber");
                ele.innerHTML = '<span style="color:#7df442;">' + text.substring(0,idx+1) + '</span>'+text.substring(idx+1,text.length);
                idx++;
            }
        } else {
            setTimeout(()=>{playError();},200);
        }
        clear();
    }
}

function dealWithKeyboard(e) {
    //ENTER KEYCODE IS 13
    if (e.keyCode == 13) {

    } else if (e.keyCode === 65) {
        document.getElementById("clear").click();
    } else {
        let ele = document.getElementById(e.keyCode)
        if (ele!==null) {
            playTap();
            ele.classList.toggle("inactive");
        }
        
        
    }
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
    console.log(createBitMap());
    return letter;
}

function playSuperCorrect() {
    var audio = new Audio('../audio/superCorrect.mp3');
    audio.play();
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

function tts(word) {
    if (typeof(word)!=typeof("")) {
        return;
    } else {
        var msg = new SpeechSynthesisUtterance(word);
        setTimeout(()=>{window.speechSynthesis.speak(msg);},500);
    }
}

function getWords(length) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            words = JSON.parse(this.responseText).words;
            let text = document.querySelector("#randomNumber"); 
            text.innerHTML = words.pop().toUpperCase();
            setTimeout(() => {tts(text.innerHTML);},500);
        } else {
            console.log(this.err);
        }
    };
    if(words.length < 1 || words == undefined){
        xhr.open("GET", "/data/words?length="+length, true);
        xhr.send();
    } else {
        let text = document.querySelector("#randomNumber"); 
        text.innerHTML = words.pop().toUpperCase();
        setTimeout(() => {tts(text.innerHTML);},500);
    }
}

function easy(n) {
    clear();
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function(e) {
        text = document.querySelector("#randomNumber")
        text.innerHTML = String.fromCharCode(n+65);
        tts(text.innerHTML)
        if (n < 25) {n++} else {n = 0}


            event.stopPropagation();
    });
}

function medium() {
    clear();
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {
        let rand = Math.floor(Math.random()*26) + 65;
        text = document.querySelector("#randomNumber")
        text.innerHTML = String.fromCharCode(rand);
        tts(text.innerHTML)
        event.stopPropagation();
    });
}

function hard() {
    clear();
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {

        let rand = Math.floor(Math.random()*26) + 65;
        let rand1 = Math.floor(Math.random()*26) + 65;
        let rand2 = Math.floor(Math.random()*26) + 65;
        let text = document.querySelector("#randomNumber"); 
        text.innerHTML = String.fromCharCode(rand).concat(String.fromCharCode(rand1)).concat(String.fromCharCode(rand2));
        tts(text.innerHTML)
        event.stopPropagation();
    });
}

function endless(j) {
    clear();
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {
        getWords(j);
        event.stopPropagation();
    });


    j++;
}

    //let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //document.querySelector("#RandomNumber").innerHTML = Math.floor(Math.random() * (+max - +min)) + +min;
