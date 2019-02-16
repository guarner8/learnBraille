document.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementById("generateRand").addEventListener("click", function (event) {
        let min = 0;
        let max = 26;
        let rand = Math.floor(Math.random()*26) + 65;
        console.log(rand);
        document.querySelector("#randomNumber").innerHTML = String.fromCharCode(rand);
    });

}

    //let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //document.querySelector("#RandomNumber").innerHTML = Math.floor(Math.random() * (+max - +min)) + +min;
