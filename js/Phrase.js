/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	// takes the randomised phrase and displays it onscreen
	addPhraseToDisplay(phrase) {
		const phraseUL = document.getElementById('phrase').firstElementChild;
		for (const letter of this.phrase) {
			const phraseLi = document.createElement('li');
			phraseLi.classList.add('hide');

			if (letter === ' ') {
				phraseLi.classList.add('space');
			}
			else {
				phraseLi.classList.add('letter');
				phraseLi.innerHTML = letter
			}
			phraseUL.appendChild(phraseLi);
		}

	}

// checks if the selected key in the phrase
	checkLetter(key) {
		return this.phrase.includes(key);

	}
// reveals selected key if it is in the phrase
	showMatchedLetter(key) {
		const letters = document.querySelectorAll('.letter');

		for (const letter of letters) {
			if (letter.innerText === key) {
				letter.classList.remove('hide');
				letter.classList.add('show');
			}
		}

	}


}

