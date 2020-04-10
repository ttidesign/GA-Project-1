//console.log('hello world)

//mvp
//game rules
//show image of cards
//user press play then cards flip down, 5 second timer/delay
//users click- card flip up, check for match, if there's a match add to score board max point each game =100
//if all cards flipped game end
//add restart game button add restart score board

//silver goal
//card flip back if pair is not match
//if pair is match, keep them up, add message if pair is not match deduct 5 point,

//gold  goal
//more cards, shuffle while play, save favorite card

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
let myFavoriteCards = document.querySelector('.favorite-board');
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
//create variable to target the restart button
const restartBtn = document.querySelector('.restart');

//add event handler for the restart button
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
//create variable to target all images in the game board
let cardsBoard = document.getElementsByTagName('img');

//event handler to target individual card when card is clicked
gameBoard.addEventListener('click', flipCard);

function flipCard(event) {
	let userInput = parseInt(event.target.dataset.number);
	if (event.target.classList.contains('box')) {
		let currentCardImage = event.target.getAttribute('src');
		let currentCardName = deck[userInput].name;
		let addButton = document.createElement('button');
		addButton.setAttribute('class', 'add-button');
		addButton.innerText = 'Add';
		addButton.style.background = 'red';
		addButton.style.position = 'relative';
		addButton.style.zIndex = '3';
		console.log(cardsBoard[0]);
		cardsBoard[1].append(addButton);
		//push card's image to card-in-play array to check matching pair
		cardInPlay.push(currentCardName);
		//if card is back then flip to front
		if (currentCardImage === 'images/card-back.png') {
			event.target.setAttribute('src', deck[userInput].image);
			//myFavoriteCards.appendChild(addFavorite)
			// if card is already flipped click again will flip it back again
		} else {
			event.target.setAttribute('src', 'images/card-back.png');
		}
	}
	checkIfMatch(userInput); // check for matching pair
	checkGame(); // check if game is active
}

//setTimeout(letsPlay, 4000);

//function to check if the pair is matched
//create variable to target score board and a variable to hold score
let scoreBoard = document.querySelector('.score');
let score = 0;
function checkIfMatch(userInput) {
	if (cardInPlay.length === 2) {
		if (cardInPlay[0] === cardInPlay[1]) {
			//if pair is matched, push them to the matched-card array, reset card-in-play array
			matchedCard.push(cardInPlay[0], cardInPlay[1]);
			cardInPlay = [];
			score += 10;
			scoreBoard.innerText = 'Score: 00' + score;
		} else if (cardInPlay[0] !== cardInPlay[1]) {
			// if pair is not match, remove the last clicked item from card-in-play array
			cardInPlay.pop();
			// if pair is not matched flip the last clicked card back down after 2 seconds
			setTimeout(function () {
				cardsBoard[userInput].setAttribute('src', 'images/card-back.png');
			}, 2000);
		}
	}
}

//add function to check if the game is over
function checkGame() {
	let winningMessage = document.querySelector('.win');
	if (matchedCard.length === 20) {
		winningMessage.classList.toggle('game-over');
		console.log('game over');
	} else {
		return;
	}
}
