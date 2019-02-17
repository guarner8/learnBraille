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

}

function clear() {
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll(".braille")[i].classList.add("inactive");
    }
}

function dealWithKeyboard(e) {
    if (e.keyCode === 65) {
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

function createBitMap() {
    const first = isActive(83);
    const second = isActive(68);
    const third = isActive(70);
    const fourth = isActive(76);
    const fifth = isActive(75);
    const sixth = isActive(74);

    return [first, second, third, fourth, fifth, sixth];
}

function isActive(id) {
    if (document.getElementById(""+id).classList.includes("inactive")) {
        return false;
    return true;
}

