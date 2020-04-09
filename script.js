//console.log('hello world)

//mvp
//game rules
//show image of cards
//user press play then cards flip down, 5 second timer/delay
//users click- card flip up, check for match, if there's a match add to score board if card is not match deduct 1 point, max point each game =10
//if all cards flipped game end
//add restart game button add restart score board
//shuffle cards' place

//silver goal
// card flip back if pair is not match
//if pair is match, no flip down

//gold  goal
//more cards, shuffle while play

//create variable that contains all cards
let deck = [
	{ name: 'Advanced Ritual Art', image: 'images/advanced-ritual.png' },
	{ name: 'Black Luster Soldier', image: 'images/black-luster.png' },
	{ name: 'Blue Eyes Alternative White Dragon', image: 'images/blue-eyes.png' },
	{ name: 'Dark Magician', image: 'images/dark-magician.png' },
	{ name: 'Gaia the Fierce Knight', image: 'images/gaia.png' },
	{ name: 'Magician of Black Chaos', image: 'images/magician-chaos.png' },
	{ name: 'Mirror Force', image: 'images/mirror-force.png' },
	{ name: 'Mirror Wall', image: 'images/mirror-wall.png' },
	{ name: 'Red Eyes Black Dragon', image: 'images/red-eyes.png' },
	{ name: 'Sword of Revealing Light', image: 'images/sword.png' },
	{ name: 'Advanced Ritual Art', image: 'images/advanced-ritual.png' },
	{ name: 'Black Luster Soldier', image: 'images/black-luster.png' },
	{ name: 'Blue Eyes Alternative White Dragon', image: 'images/blue-eyes.png' },
	{ name: 'Dark Magician', image: 'images/dark-magician.png' },
	{ name: 'Gaia the Fierce Knight', image: 'images/gaia.png' },
	{ name: 'Magician of Black Chaos', image: 'images/magician-chaos.png' },
	{ name: 'Mirror Force', image: 'images/mirror-force.png' },
	{ name: 'Mirror Wall', image: 'images/mirror-wall.png' },
	{ name: 'Red Eyes Black Dragon', image: 'images/red-eyes.png' },
	{ name: 'Sword of Revealing Light', image: 'images/sword.png' },
];

//start game with board full of images of cards
let gameBoard = document.querySelector('.game-board');

function gameStart() {
	for (let i = 0; i < deck.length; i++) {
		let cardFront = document.createElement('img');
		cardFront.setAttribute('class', 'box');
		cardFront.setAttribute('data-number', i);
		cardFront.setAttribute('src', deck[i].image);
		gameBoard.appendChild(cardFront);
	}
}
gameStart();

//Let's-play button that flip down all cards
let playBtn = document.querySelector('.play');

playBtn.addEventListener('click', letsPlay);

function letsPlay() {
	clearBoard();
	for (let i = 0; i < deck.length; i++) {
		let backCard = document.createElement('img');
		backCard.setAttribute('class', 'box');
		backCard.setAttribute('data-number', i);
		//console.log(backCard);
		backCard.setAttribute('src', 'images/card-back.png');
		gameBoard.appendChild(backCard);
	}
}

//create const to target the restart button
const restartBtn = document.querySelector('.restart');

//add event handler for the reset button
restartBtn.addEventListener('click', restartGame);

//clear the board game
function clearBoard() {
	let existingCards = gameBoard.firstElementChild;
	while (existingCards) {
		gameBoard.removeChild(existingCards);
		existingCards = gameBoard.firstElementChild;
	}
}

let cardInPlay = [];
let matchedCard = [];
//reload page to restart game
function restartGame() {
	window.location.reload();
	//clearBoard();
	//gameStart()
}

let allCards = document.getElementsByTagName('img');
console.log(allCards);
console.log();
//allCards[0].setAttribute('src', 'images/card-back.png')
//event handler to target individual card when card is clicked
gameBoard.addEventListener('click', flipCard);
let input = parseInt(allCards[0].dataset.number);
function flipCard(event) {
	let userInput = parseInt(event.target.dataset.number);
	if (event.target.classList.contains('box')) {
		let currentCardImage = event.target.getAttribute('src');
		let currentCardName = deck[userInput].name;
		console.log(event.target);
		cardInPlay.push(currentCardName);
		console.log(cardInPlay);

		//if card is back then flip to front
		if (currentCardImage === 'images/card-back.png') {
			event.target.setAttribute('src', deck[userInput].image);
			// if card is already flipped click again will check for matching
		} else {
			event.target.setAttribute('src', 'images/card-back.png');
		}
	}
	//input = allCards[0].dataset.number
	checkIfMatch(userInput);
	checkGame();
	console.log(input);
	//return input;
}
console.log(allCards[0].src);
console.log(input);

// function flipBack(input) {
//     console.log(input)
//     allCards[2].setAttribute('src', 'images/card-back.png');
//     //return allCards[input]
// }
//setTimeout(letsPlay, 4000);
//function to check if the pair is match
//if the second card image
function checkIfMatch(userInput) {
	console.log(allCards[userInput].getAttribute('src'));
	console.log(cardInPlay.length);
	console.log(deck[userInput].image);
	console.log(cardInPlay[0], cardInPlay[1]);
	if (cardInPlay.length === 2) {
		if (cardInPlay[0] === cardInPlay[1]) {
			//if pair is matched, push to matched card array, reset cardsInplay array
			matchedCard.push(cardInPlay[0], cardInPlay[1]);
			cardInPlay = [];
			console.log(matchedCard, cardInPlay);
		} else if (cardInPlay[0] !== cardInPlay[1]) {
			// if pair is not match, remove the last click item
			//allCards[userInput].removeAttribute('src')
			//setTimeout(flipBack, 2000);
			//console.log(gameBoard[0]);
			console.log(allCards);
			console.log(allCards[0]);
			cardInPlay.pop();
			console.log(matchedCard);
			console.log(cardInPlay);
			console.log(allCards[userInput].src);

			console.log(allCards[userInput].src);
			//allCards[userInput].removeAttribute('src')
			setTimeout(function () {
				allCards[userInput].setAttribute('src', 'images/card-back.png');
			}, 2000);
		}
	}
}

//add function to check if the game is over
function checkGame() {
	if (matchedCard.length === 20) {
		console.log('game over');
	} else {
		return;
	}
}
