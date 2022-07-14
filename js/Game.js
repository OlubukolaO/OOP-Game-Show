/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // the game class is created here 
 class Game {

 	constructor (){
 		this.missed =0;
 		this.phrase = [new Phrase ('A match made in heaven'), 
 					   new Phrase ('Ahead of the game'),
 					   new Phrase ('A dime a dozen'),
 					   new Phrase ('A Piece of cake'),
						new Phrase ('Beating around the bush'),
						new Phrase ('A chip on your shoulder'),
						new Phrase ('An arm and a leg'),
						new Phrase ('Paint the town red'),
						new Phrase ('Let bygones be Bygones'),
						new Phrase ('Take it with a grain of salt')
						];
		 this.activePhrase = null;
		 
 	}

	 // uses math.random to generate a number and selects a phrase wit the index
 	getRandomPhrase(){
 		let index = Math.floor(Math.random() * this.phrase.length);
 		return this.phrase[index];
	 }
	
	 // initialises the game 
	 startGame(){
		 this.resetGame();
		 document.getElementById('overlay').style.display ='none';
		 this.activePhrase = this.getRandomPhrase();
		 this.activePhrase.addPhraseToDisplay();	  
	 }

	 // handles the function relating to chosing a key
	 handleInteraction(key){
	
		 key.disabled = true;  
		if(this.activePhrase.checkLetter(key.textContent) === true){
			//this.checkForWin();
			
			this.activePhrase.showMatchedLetter(key.textContent);
			key.classList.add('chosen');
			key.animate([{
				color:'#FFFFFF'
				},
				{
					color:'black'
				}
			],1000);
			if(this.checkForWin()){
				this.gameOver(true);
				start.animate([{
							fontSize: '20px'
						},
						{
							fontSize: '22px'
						}
					],1000);
				}			
		}

		// removes a life is wrong key  is selected 
		if(this.activePhrase.checkLetter(key.textContent) !== true){
			this.removeLife();
			key.classList.add('wrong');
		}

			if(this.missed === 5){
				this.gameOver();
			}
	 	}


	 // continuouls checks if all the letters in the phrase have been revealed 
	 checkForWin(){
		 console.log('a');
		let letters = document.querySelectorAll('.letter'); // get all the letters 		
		let every = Array.from(letters).filter(letter => letter.classList.contains('show')); // check if every element in the array has a class 'show'
		// if the letters length is equal to length of array with show class, then all elements have been revealed
		return letters.length === every.length
		
	 	}

	 // removes a life when wrong key is selected 
	 removeLife(){
		const hearts = document.querySelectorAll('.tries img');
		hearts[this.missed].src= 'images/lostHeart.png';
		this.missed ++;

	 }

	 // Handles display for game over( win or lose)
	 gameOver(value = false){
		
		 let message = document.getElementById('game-over-message');
	

		if(value === true){
			message.textContent = " You win, way to go";
			document.getElementById('overlay').style.display ='block';
			document.getElementById('overlay').style.backgroundColor = 'green';			
		}
		else {
			message.textContent = "Sorry, you lose, better luck next time";
			document.getElementById('overlay').style.display ='block';
			document.getElementById('overlay').style.backgroundColor = 'red';
		}

		// animates the start button 
		start.animate([{
			fontSize: '20px'
			},
			{
				fontSize: '22px'
			}
			],1000);
	 	}
	 
	 
	 // reets the game , addd classes removed and imaves set back to default, the padded phrase removed 
	 resetGame(){
		for(const key of keys){
			key.classList.remove('wrong');
			key.classList.remove('chosen');
			key.disabled=false;
		}
		const hearts = document.querySelectorAll('.tries img');
		for(let i=0; i< hearts.length; i++){
			hearts[i].src= 'images/liveHeart.png';
		}
		document.getElementById('phrase').firstElementChild.innerHTML='';
	 }

 }