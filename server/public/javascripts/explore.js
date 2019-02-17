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

