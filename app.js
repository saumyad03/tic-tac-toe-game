//Sets color for player and AI
let playerColor = "blue";
let aiColor = "red";
//Sets default AI difficulty and gets buttons for setting difficulty
let aiDifficulty = "Easy"
const easyBtn = document.querySelector("#easy-btn");
const hardBtn = document.querySelector("#hard-btn");
//Gets array of all the boxes
const boxes = document.querySelectorAll(".box");
//Adds event listeners to each box so if user clicks on it, they can choose their move
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (e) => {
        //Places player's move and generates AI move if box isn't already occupied
        if (e.target.textContent == "") {
            e.target.textContent = "X";
            e.target.style.color = playerColor;
            aiMove();
        } else {
            alert("occupied");
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
    if (aiDifficulty == "Easy") {
        //RNG to place move
        do {
            aiBox = getRandomInt(9);
        }
        while (boxes[aiBox].textContent != "")
    } else {
        //Actual tryhard AI
        pass;
    }
    boxes[aiBox].textContent = "O";
    boxes[aiBox].style.color = aiColor;
}
//Generates random integer from 0 to max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random()*max)
}