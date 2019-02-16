document.addEventListener("DOMContentLoaded", main);

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
    let j = 0;
    easy(j); 
}

function easy(n) {
    document.querySelector("#randomNumber").innerHTML = "Press [spacebar] to start";
    document.getElementById("generateNext").addEventListener("click", function(e) {
        document.querySelector("#randomNumber").innerHTML = String.fromCharCode(n+65);
        if (n < 25) {n++} else {n = 0}
    });
}

function medium() {
    document.querySelector("#randomNumber").innerHTML = "Press [spacebar] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {
        let rand = Math.floor(Math.random()*26) + 65;
        document.querySelector("#randomNumber").innerHTML = String.fromCharCode(rand);
    });
}

function hard() {
    document.querySelector("#randomNumber").innerHTML = "Press [spacebar] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {

        let rand = Math.floor(Math.random()*26) + 65;
        let rand1 = Math.floor(Math.random()*26) + 65;
        let rand2 = Math.floor(Math.random()*26) + 65;
        let text = document.querySelector("#randomNumber"); 
        text.innerHTML = String.fromCharCode(rand).concat(String.fromCharCode(rand1)).concat(String.fromCharCode(rand2));
    });
}

function endless(j) {
    document.querySelector("#randomNumber").innerHTML = "Press [spacebar] to start";
    document.getElementById("generateNext").addEventListener("click", function (event) {

        let rand = Math.floor(Math.random()*26) + 65;
        let rand1 = Math.floor(Math.random()*26) + 65;
        let rand2 = Math.floor(Math.random()*26) + 65;
        let text = document.querySelector("#randomNumber"); 
        text.innerHTML = String.fromCharCode(rand).concat(String.fromCharCode(rand1)).concat(String.fromCharCode(rand2));
    });

    j++;
}

    //let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //document.querySelector("#RandomNumber").innerHTML = Math.floor(Math.random() * (+max - +min)) + +min;
