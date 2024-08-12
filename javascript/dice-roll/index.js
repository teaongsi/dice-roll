function load(){
    alert("Press the dice icon below to roll the dice and the home icon to reset");
}

function rollDice() {
    var randomNumber1=Math.random()*6;
    randomNumber1=Math.floor(randomNumber1)+1;
    var randomDice1="images/dice"+randomNumber1+".png";
    var image1=document.querySelector(".img1");
    image1.setAttribute("src", randomDice1);

    var randomNumber2=Math.random() * 6;
    randomNumber2=Math.floor(randomNumber2) + 1;
    var randomDice2="images/dice"+randomNumber2+".png";
    var image2=document.querySelector(".img2");
    image2.setAttribute("src", randomDice2);

    if(randomNumber1>randomNumber2) {
        document.querySelector("h1").textContent="Player 1 wins!";
    } else if(randomNumber1<randomNumber2) {
        document.querySelector("h1").textContent="Player 2 wins!";
    } else {
        document.querySelector("h1").textContent="Draw!";
    }
}
function resetGame() {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    document.querySelector("h1").textContent="Roll the Dice";
}
