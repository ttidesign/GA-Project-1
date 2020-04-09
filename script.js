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

//reload page to restart game
function restartGame() {
	window.location.reload();
	//clearBoard();
	//gameStart()
}

//event handler to target individual card when card is clicked
gameBoard.addEventListener('click', flipCard);
function flipCard(event) {
	let userInput = parseInt(event.target.dataset.number);
	console.log(userInput);
	if (event.target.classList.contains('box')) {
		let currentCard = event.target.getAttribute('src');
		console.log(currentCard);
		//if card is back then flip, if card is front then flip
		if (currentCard === 'images/card-back.png') {
			event.target.setAttribute('src', deck[userInput].image);
		} else {
			event.target.setAttribute('src', 'images/card-back.png');
		}
		event.target.classList.toggle('temp');
	}
}

setTimeout(letsPlay, 4000);
