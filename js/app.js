/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
// const phrase = new Phrase('Life is like a box of chocolates');


const start = document.getElementById('btn__reset');
let game;
const keysDiv = document.getElementById('qwerty');
const keys = document.querySelectorAll('.key')
const letters = document.querySelectorAll('.letter');


start.animate([{
    fontSize: '20px'
},
{
    fontSize: '25px'
}
],1000);

// start the game 
start.addEventListener("click", function() {
game = new Game();
game.startGame();
});

// clicking onscreen keyboard selects a key
keys.forEach(key =>{
    key.addEventListener('click', function(){
         game.handleInteraction(key);
    });
  
});

// pressing the computer physical keyboard selects a key
addEventListener('keyup', (e)=> {
    for(const key of keys) {
       if(e.key === key.textContent && key.disabled ===false){
        game.handleInteraction(key);
       }
    }
});
