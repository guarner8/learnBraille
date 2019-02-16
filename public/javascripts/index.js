document.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementById("generateRand").addEventListener("click", function (event) {
        let min = 0;
        let max = 26;
        let rand = Math.random()*26;
        console.log(rand);
        document.querySelector("#randomNumber").innerHtml = rand;
    });

}

    //let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //document.querySelector("#RandomNumber").innerHTML = Math.floor(Math.random() * (+max - +min)) + +min;
