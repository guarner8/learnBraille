document.addEventListener("DOMContentLoaded", main);
var words=[];


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
            this.classList.toggle("inactive");
        });
    }

    document.querySelector("#clear").addEventListener("click", function(e) {
        clear();
    });

    window.addEventListener("keydown", dealWithKeyboard, true);

    let j = 0;
    easy(j); 
}

function clear() {
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".braille")[i].classList.add("inactive");
    }
}

function dealWithKeyboard(e) {
    if (e.keyCode === 186) {
        document.getElementById("generateNext").click();
    } else if (e.keyCode === 65) {
        document.getElementById("clear").click();
    } else {
        document.getElementById(e.keyCode).classList.toggle("inactive");
    }
}

function brailleToASCII(arr) {
    return {[1,0,0,0,0,0]:"A",
            [1,1,0,0,0,0]:"B",
            [1,0,0,0,0,1]:"C",
            [1,0,0,0,1,1]:"D",
            [1,0,0,0,1,0]:"E",
            [1,1,0,0,0,1]:"F",
            [1,1,0,0,1,1]:"G",
            [1,1,0,0,1,0]:"H",
            [0,1,0,0,0,1]:"I",
            [0,1,0,0,1,1]:"J",
            [1,0,1,0,0,0]:"K",
            [1,1,1,0,0,0]:"L",
            [1,0,1,0,0,1]:"M",
            [1,0,1,0,1,1]:"N",
            [1,0,1,0,1,0]:"O",
            [1,1,1,0,0,1]:"P",
            [1,1,1,0,1,1]:"Q",
            [1,1,1,0,1,0]:"R",
            [0,1,1,0,0,1]:"S",
            [0,1,1,0,1,1]:"T",
            [1,0,1,1,0,0]:"U",
            [1,1,1,1,0,0]:"V",
            [0,1,0,1,1,1]:"W",
            [1,0,1,1,0,1]:"X",
            [1,0,1,1,1,1]:"Y",
            [1,0,1,1,1,0]:"Z"};
}

function tts(word) {
    if (typeof(word)!=typeof("")) {
        return;
    } else {
        var msg = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(msg);
    }
}

function getWords(length) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            words = JSON.parse(this.responseText).words;
            let text = document.querySelector("#randomNumber"); 
            text.innerHTML = words.pop().toUpperCase();
            tts(text.innerHTML);
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
        tts(text.innerHTML);
    }
}

function easy(n) {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function(e) {
        text = document.querySelector("#randomNumber")
        text.innerHTML = String.fromCharCode(n+65);
        if (n < 25) {n++} else {n = 0}


        event.stopPropagation();
    });
}

function medium() {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {
        let rand = Math.floor(Math.random()*26) + 65;
        text = document.querySelector("#randomNumber")
        text.innerHTML = String.fromCharCode(rand);

        event.stopPropagation();
    });
}

function hard() {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {

        let rand = Math.floor(Math.random()*26) + 65;
        let rand1 = Math.floor(Math.random()*26) + 65;
        let rand2 = Math.floor(Math.random()*26) + 65;
        let text = document.querySelector("#randomNumber"); 
        text.innerHTML = String.fromCharCode(rand).concat(String.fromCharCode(rand1)).concat(String.fromCharCode(rand2));

        event.stopPropagation();
    });
}

function endless(j) {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {
        getWords(j);
        event.stopPropagation();
    });


    j++;
}

    //let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //document.querySelector("#RandomNumber").innerHTML = Math.floor(Math.random() * (+max - +min)) + +min;
