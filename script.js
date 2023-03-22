const NINE = 9;
let player1;
let player2;
let currentPlayer = 1;
let player1Buttons = [];
let player2Buttons = [];

function setPlayer1() {
    let text = document.getElementById("player1");
    player1 = text.value;
}

function setPlayer2() {
    let text = document.getElementById("player2");
    player2 = text.value;
}

function checkTheWinner(arrayPlayer) {
    let pointsOfWin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let j = 1;
    for (let i = 0; i <= arrayPlayer.length; ++i) {
        if (arrayPlayer[i] == 1 || arrayPlayer[i] == 2 || arrayPlayer[i] == 3) {
            ++pointsOfWin[j];
            console.log(pointsOfWin[j]);
        }
        ++j;
        if (arrayPlayer[i] == 4 || arrayPlayer[i] == 5 || arrayPlayer[i] == 6) {
            ++pointsOfWin[j];
        }
        ++j;
        if (arrayPlayer[i] == 7 || arrayPlayer[i] == 8 || arrayPlayer[i] == 9) {
            ++pointsOfWin[j];
        }
        ++j;
        if (arrayPlayer[i] == 1 || arrayPlayer[i] == 4 || arrayPlayer[i] == 7) {
            ++pointsOfWin[j];
        }
        ++j;
        if (arrayPlayer[i] == 2 || arrayPlayer[i] == 5 || arrayPlayer[i] == 8) {
            ++pointsOfWin[j];
        }
        ++j;
        if (arrayPlayer[i] == 3 || arrayPlayer[i] == 6 || arrayPlayer[i] == 9) {
            ++pointsOfWin[j];
        }
        ++j;
        if (arrayPlayer[i] == 1 || arrayPlayer[i] == 5 || arrayPlayer[i] == 9) {
            ++pointsOfWin[j];
        }
        ++j;
        if (arrayPlayer[i] == 3 || arrayPlayer[i] == 5 || arrayPlayer[i] == 7) {
            ++pointsOfWin[j];
        }
        j = 1;
    }
    for (let i = 0; i < NINE; ++i) {
        console.log(pointsOfWin[i]);
        if (pointsOfWin[i] == 3) {
            return 1;
        }
    }
}

function displayOnTheTable(buttonPressed) {
    let buttonAux = document.getElementById(buttonPressed);
    let dimensionsAndLocation = buttonAux.getBoundingClientRect();
    let width = dimensionsAndLocation.width;
    let height = dimensionsAndLocation.height;
    let top = dimensionsAndLocation.top;
    let left = dimensionsAndLocation.left;
    let p = document.createElement("p");
    p.style.position = "absolute";
    p.style.fontSize = "3rem"
    p.style.width = width + "px";
    p.style.height = height + "px";
    p.style.top = (top - 48) + "px";
    p.style.left = (left + 12) + "px";
    p.style.zIndex = "1";
    if (currentPlayer) {
        p.innerHTML = "X";
        currentPlayer = 0;
        let aux = buttonPressed.replace("button", "");
        player1Buttons.push(aux);
        if (checkTheWinner(player1Buttons)) {
            alert("A castigat jucatorul: " + player1);
        }
    } else {
        p.innerHTML = "0";
        currentPlayer = 1;
        let aux = buttonPressed.replace("button", "");
        player2Buttons.push(aux);
        if (checkTheWinner(player2Buttons)) {
            alert("A castigat jucatorul: " + player2);
        }
    }
    document.body.appendChild(p);
}

function startGame() {
    let inputPlayer1 = document.getElementById("player1");
    inputPlayer1.style.display = "none";
    let inputPlayer2 = document.getElementById("player2");
    inputPlayer2.style.display = "none";
    let sendPlayer1 = document.getElementById("sendPlayer1");
    sendPlayer1.style.display = "none";
    let sendPlayer2 = document.getElementById("sendPlayer2");
    sendPlayer2.style.display = "none";
    let start = document.getElementById("start");
    start.style.display = "none";
    let paragraph = document.getElementById("paragraph");
    paragraph.style.display = "none";
    const button = document.querySelectorAll("[id^='button']");
    let buttonPressed;
    let buttonGame = document.getElementById("buttonGame");

    for (let i = 0; i <= NINE; ++i) {
        button[i].style.display = "block";
    }

    buttonGame.addEventListener("click", (event)=> {
        let aux = event.target;
        buttonPressed = aux.id;
        displayOnTheTable(buttonPressed);
    });
}
