// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const inputRange = document.querySelector(".input-range"),
        maxRange = document.querySelector(".max-range"),
        guessForm = document.querySelector(".player-guess__form"),
        guessInput = document.querySelector(".player-guess__input"),
        guessBtn = document.querySelector(".player-guess__btn"),
        guessResult = document.querySelector(".guess-result"),
        playResult = document.querySelector(".play-result");
const SHOWING_ON = "show";
function randomInteger(max){
    return Math.floor(Math.random() * max);
}
function guessResultShow(player_num,machine_num){
    guessResult.innerHTML=`<span>Player : ${player_num} </span>
    <span> Machine : ${machine_num} </span>`;
    console.log(typeof(player_num));
    console.log(player_num,machine_num);
    if(player_num === machine_num){
        playResult.innerHTML=`<span> YOU WIN !!</span>`;
    }else{
        playResult.innerHTML=`<span> YOU LOSE !!</span>`;
    }
    guessResult.classList.add(SHOWING_ON);
    playResult.classList.add(SHOWING_ON);
}
function handlePlayerGuess(range,event){
    console.log(range);
    event.preventDefault();
    
    const playerInput = parseInt(guessInput.value);
    const machineRandom = randomInteger(range);
    // console.log(playerInput,machineRandom);
    guessResultShow(playerInput,machineRandom);

}
function handleEndOfInput(event){
    guessForm.addEventListener("submit",handlePlayerGuess.bind(null,inputRange.value));
}
function handleInput(event){
    // console.log(inputRange.value)
    maxRange.innerText = inputRange.value;
    inputRange.addEventListener("change",handleEndOfInput);
}
function init(){
    inputRange.addEventListener("input",handleInput);
}
init();
