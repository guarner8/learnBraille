document.addEventListener("DOMContentLoaded", main);

function main() {
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

function getWords(length) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhr.open("GET", "/data/words", true);
  xhr.send();
}

function easy(n) {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function(e) {
        document.querySelector("#randomNumber").innerHTML = String.fromCharCode(n+65);
        if (n < 25) {n++} else {n = 0}
    });
}

function medium() {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {
        let rand = Math.floor(Math.random()*26) + 65;
        document.querySelector("#randomNumber").innerHTML = String.fromCharCode(rand);
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
    });
}

function endless(j) {
    document.querySelector("#randomNumber").innerHTML = "Press [;] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {

        let rand = Math.floor(Math.random()*26) + 65;
        let rand1 = Math.floor(Math.random()*26) + 65;
        let rand2 = Math.floor(Math.random()*26) + 65;
        let text = document.querySelector("#randomNumber"); 
        text.innerHTML = String.fromCharCode(rand).concat(String.fromCharCode(rand1)).concat(String.fromCharCode(rand2));
    });

    j++;
}


