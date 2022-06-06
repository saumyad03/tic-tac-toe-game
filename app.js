//Sets color for player and AI
let playerColor = "blue";
let aiColor = "red";
//Sets default AI difficulty and gets buttons for setting difficulty
let aiDifficulty = "Hard"
const easyBtn = document.querySelector("#easy-btn");
const hardBtn = document.querySelector("#hard-btn");
//Gets array of all the boxes
const boxes = document.querySelectorAll(".box");
console.log(boxes);
//Adds event listeners to each box so if user clicks on it, they can choose their move
for (const box of boxes) {
    box.addEventListener("click", (e) => {
        //Places player's move and generates AI move if box isn't already occupied
        if (e.target.textContent == "") {
            e.target.textContent = "X";
            e.target.style.color = playerColor;
            checkDraw();
            checkWin("X");
            aiMove();
            checkWin("O");
        }
    });
}
//Changes AI difficulty to easy if easy button is clicked
easyBtn.addEventListener("click", (e) => {
    aiDifficulty = "Easy";
    alert(aiDifficulty);
})
//Changes AI difficulty to hard if hard button is clicked
hardBtn.addEventListener("click", (e) => {
    aiDifficulty = "Hard";
    alert(aiDifficulty);
})
//Generates AI move based on difficulty
function aiMove() {
    let aiBox;
    if (aiDifficulty == "Easy") {
        //RNG to place move
        do {
            aiBox = getRandomInt(9);
        }
        while (boxes[aiBox].textContent != "")
    } else {
        //Blocks you if you're about to win
        let moveMade = false;
        //For each box
        for (let i = 0; i < boxes.length; i++) {
            //If it's empty
            if (boxes[i].textContent == "") {
                //Test out if user would win if symbol placed here
                boxes[i].textContent = "X";
                //If so, hijack and break out of loop
                if (checkWin("X")) {
                    aiBox = i;
                    moveMade = true;
                    break;
                }
                //Otherwise, revert
                boxes[i].textContent = "";
            }
        }
        if (!moveMade) {
            do {
                aiBox = getRandomInt(9);
            }
            while (boxes[aiBox].textContent != "")
        }
    }
    boxes[aiBox].textContent = "O";
    boxes[aiBox].style.color = aiColor;
}
//Generates random integer from 0 to max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random()*max)
}
//Returns false if it comes across unfilled box and true if all filled
function checkDraw() {
    for (const box of boxes) {
        if (box.textContent == "") {
            return false;
        }
    }
    alert("draw");
    return true;
}
//Checks if certain symbol won
function checkWin(symbol) {
    //Check left-right win
    for (let i = 0; i < boxes.length; i+= 3) {
        if (boxes[i].textContent == symbol && boxes[i+1].textContent == symbol && boxes[i+2].textContent ==symbol) {
            return true;
        }
    }
    //Checks up down win
    for (let i = 0; i < 3; i++) {
        if (boxes[i].textContent == symbol && boxes[i+3].textContent == symbol && boxes[i+6].textContent == symbol) {
            return true;
        }
    }
    //Checks win top-left to bottom-right
    if (boxes[0].textContent == symbol && boxes[4].textContent == symbol && boxes[8].textContent == symbol) {
        return true;
    }
    //Checks win top-right to bottom-left
    if (boxes[2].textContent == symbol && boxes[4].textContent == symbol && boxes[6].textContent == symbol) {
        return true;
    }
    return false;
}