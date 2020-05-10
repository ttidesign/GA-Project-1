const deck = [
	{
		name: 'Ban Gioc',
		image: 'images/ban-gioc.png',
		about:
			'Ban Gioc waterfall is a collective name for two waterfalls that straddle the international border between China and Vietnam',
	},
	{
		name: 'Da Lat',
		image: 'images/da-lat.png',
		about:
			'Located in the south of Vietnam is charming Da Lat which is known as a top destination for domestic honeymooners',
	},
	{
		name: 'Da Nang',
		image: 'images/da-nang.png',
		about:
			'The best attractions in Da Nang are a good mix of centuries-old pagodas, French colonial buildings, as well as tranquil beaches with clear blue waters and verdant park',
	},
	{
		name: 'Ha Long Bay',
		image: 'images/ha-long-bay.png',
		about:
			'Ha Long Bay is known for its emerald waters and thousands of towering lime stone topped by rainforests',
	},
	{
		name: 'Hoi An',
		image: 'images/hoi-an.png',
		about:
			"Hoi An is a city on Vietnam's central coast known for its well-preserved Ancient Town, cut through with canals",
	},
	{
		name: 'Hue',
		image: 'images/hue.png',
		about:
			'Hue is one of the most charming towns in Vietnam and is located on the banks of the beautifully name Perfume River',
	},
	{
		name: 'Nha Trang',
		image: 'images/nha-trang.png',
		about:
			'Nha Trang is a coastal resort city in southern Vietnam known for its beaches, diving sites and offshore islands',
	},
	{
		name: 'Phu Quoc',
		image: 'images/phu-quoc.png',
		about:
			"Phu Quoc is an island off the coast of Cambodia in the Guff of Thailand. It's known for white-sand beaches and resorts, most of which are along the palm-lined southwest coast",
	},
	{
		name: 'Saigon',
		image: 'images/saigon.png',
		about:
			'Saigon is a city in south Vietnam famous for its French colonial landmarks including Notre-Dame Cathedral, made of materials imported from France.',
	},
	{
		name: 'Sa Pa',
		image: 'images/sapa.png',
		about:
			'Sa Pa overlooked the terrace rice fields of the Muong Hoa Valley, and is near the 3143m-tall Phang Xi Pang peak',
	},
	{
		name: 'Ban Gioc',
		image: 'images/ban-gioc.png',
		about:
			'Ban Gioc waterfall is a collective name for two waterfalls that straddle the international border between China and Vietnam',
	},
	{
		name: 'Da Lat',
		image: 'images/da-lat.png',
		about:
			'Located in the south of Vietnam is charming Da Lat which is known as a top destination for domestic honeymooners',
	},
	{
		name: 'Da Nang',
		image: 'images/da-nang.png',
		about:
			'The best attractions in Da Nang are a good mix of centuries-old pagodas, French colonial buildings, as well as tranquil beaches with clear blue waters and verdant park',
	},
	{
		name: 'Ha Long Bay',
		image: 'images/ha-long-bay.png',
		about:
			'Ha Long Bay is known for its emerald waters and thousands of towering lime stone topped by rainforests',
	},
	{
		name: 'Hoi An',
		image: 'images/hoi-an.png',
		about:
			"Hoi An is a city on Vietnam's central coast known for its well-preserved Ancient Town, cut through with canals",
	},
	{
		name: 'Hue',
		image: 'images/hue.png',
		about:
			'Hue is one of the most charming towns in Vietnam and is located on the banks of the beautifully name Perfume River',
	},
	{
		name: 'Nha Trang',
		image: 'images/nha-trang.png',
		about:
			'Nha Trang is a coastal resort city in southern Vietnam known for its beaches, diving sites and offshore islands',
	},
	{
		name: 'Phu Quoc',
		image: 'images/phu-quoc.png',
		about:
			"Phu Quoc is an island off the coast of Cambodia in the Guff of Thailand. It's known for white-sand beaches and resorts, most of which are along the palm-lined southwest coast",
	},
	{
		name: 'Saigon',
		image: 'images/saigon.png',
		about:
			'Saigon is a city in south Vietnam famous for its French colonial landmarks including Notre-Dame Cathedral, made of materials imported from France.',
	},
	{
		name: 'Sa Pa',
		image: 'images/sapa.png',
		about:
			'Sa Pa overlooked the terrace rice fields of the Muong Hoa Valley, and is near the 3143m-tall Phang Xi Pang peak',
	},
];
const extraDeck = [
	{
		name: 'Nam Du',
		image: 'images/nam-du.png',
		about:
			'The immense blue sea and sky, imposing mountains erupting amidst the ocean, endless evergreen primeval forests, long stunning beaches and spendid rock cliffs of Nam Du Archipelago have seen it compared the "New Wonder of The World',
	},
	{
		name: 'Ling-Ung',
		image: 'images/ling-ung.png',
		about:
			'Linh Ung pagoda is considered as a work stamped development footprint of Buddhism in Vietnam in the 21st century and a meeting place of heaven and earth',
	},
	{
		name: 'Ha Noi Old Quarter',
		image: 'images/ha-noi.png',
		about:
			'The Old Quarter is the name commonly given to the historical civic urban core of Hanoi, this quarter used to be the residential, manufacturing and commercial center where each street was specialized in one specific type of manufacturing or commerce',
	},
	{
		name: 'Hai Van',
		image: 'images/hai-van.png',
		about:
			"Hai Van Pass is a 20-kilometer strip of road that joins the the city of Da Nang and Lang Co in Hue Province. At 500 meter above sea level, it's the highest pass in the whole of Vietnam",
	},
];

const gameBoard = document.querySelector('.game-board');
//create variable to target play button
const playBtn = document.querySelector('.play');
//create variable to target all images in the game board
const cardsBoard = document.getElementsByTagName('img');
//create a variable to target the big image
const bigImage = document.getElementById('big-image');
//create variable to target the h2 inside paragraph
const nameOfPlace = document.querySelector('.about-place');
//create a variable to target the About paragraph
const placeAbout = document.querySelector('.about');
//create two arrays for holding temp values for checking match
//create variable with empty array for checking cards in play
let cardInPlay = [];
//create variable with empty array for checking winning game
let matchedCard = [];
//create variable to target score board and a variable to hold score
const scoreBoard = document.querySelector('.score');
//set initial score
let score = 0;
//create variable to target reset score button
const resetBtn = document.querySelector('.reset');
//create variable to target the restart button
const restartBtn = document.querySelector('.restart');
//create variable to target the winning message
const winningMessage = document.getElementById('modal');
// create a variable to target the search button
const searchBtn = document.querySelector('.search-button');
// create variable to target the value input
const addInput = document.querySelector('input');
// create variable to target button that let users add more cards
const addBtn = document.querySelector('.add');
//create a counter variable for counting added card
let addCard = 0;
//creat a variable to target the modal close button
let closeBtn = document.getElementById('close');
// create a variable to target the modal that show image
let modalImageView = document.getElementById('picture-modal');
let modalImage = document.createElement('img');
//create a variable to target the close button
let returnBtn = document.getElementById('return');

//event handler to target let's play button
playBtn.addEventListener('click', letsPlay);
//event handler to target individual card when card is clicked
gameBoard.addEventListener('click', flipCard);
//event handler to handle reset score function
resetBtn.addEventListener('click', resetScore);
//add event handler for the restart button
restartBtn.addEventListener('click', restartGame);
//add event handler for adding favorite button
searchBtn.addEventListener('click', searchResult);
//add event handler for handling adding more card function
addBtn.addEventListener('click', addMoreCards);
//add event handler to handle winning game message
closeBtn.addEventListener('click', closeModal);
//add event handler to handle modal image
bigImage.addEventListener('click', imageModal);
//add event handler to handle close modal image
returnBtn.addEventListener('click', closeModalImage);

//Game function
//start game with board full of images of cards
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

//start game function
function letsPlay() {
	clearBoard();
	for (let i = 0; i < deck.length; i++) {
		let backCard = document.createElement('img');
		backCard.setAttribute('class', 'box');
		backCard.setAttribute('data-number', i);
		backCard.setAttribute('src', 'images/card-back.png');
		gameBoard.appendChild(backCard);
	}
	shuffleDec();
}

//clear the board game
function clearBoard() {
	let existingCards = gameBoard.firstElementChild;
	while (existingCards) {
		gameBoard.removeChild(existingCards);
		existingCards = gameBoard.firstElementChild;
	}
}

function flipCard(event) {
	let userInput = parseInt(event.target.dataset.number);
	if (event.target.classList.contains('box')) {
		nameOfPlace.innerText = deck[userInput].name;
		placeAbout.innerText = deck[userInput].about;
		nameOfPlace.appendChild(placeAbout);
		bigImage.setAttribute('src', deck[userInput].image);
		let currentCardImage = event.target.getAttribute('src');
		//if card is back then flip to front
		if (currentCardImage === 'images/card-back.png') {
			event.target.setAttribute('src', deck[userInput].image);
			let currentCardName = deck[userInput].name;
			//push card's image to card-in-play array to check matching pair
			cardInPlay.push(currentCardName);
			//console.log(cardInPlay);
		} else {
			return;
		}
	}
	checkIfMatch(userInput); // check for matching pair
	checkGame(); // check if game is active
}
//game auto start after 3 minutes
setTimeout(letsPlay, 180000);

//function to check if the pair is matched

function checkIfMatch(userInput) {
	if (cardInPlay.length === 2) {
		if (cardInPlay[0] === cardInPlay[1]) {
			//if pair is matched, push them to the matched-card array, reset card-in-play array
			matchedCard.push(cardInPlay[0], cardInPlay[1]);
			cardInPlay = [];
			score += 10;
			scoreBoard.innerText = 'SCORE: ' + score;
		} else if (cardInPlay[0] !== cardInPlay[1]) {
			// if pair is not match, remove the last clicked item from card-in-play array
			cardInPlay.pop();
			//deduct score point
			score -= 1;
			scoreBoard.innerText = 'SCORE: ' + score;
			// if pair is not matched flip the last clicked card back down after 2 seconds
			setTimeout(function () {
				cardsBoard[userInput + 1].setAttribute('src', 'images/card-back.png');
			}, 600);
		}
	}
}
//reset score function
function resetScore() {
	scoreBoard.innerText = 'SCORE: 0000';
}

//reload page to restart game
function restartGame() {
	window.location.reload();
}

//add function to check if the game is over

function checkGame() {
	if (matchedCard.length === 20) {
		winningMessage.style.display = 'block';
	} else {
		return;
	}
}
// add function to shuffle cards when user click play button
function shuffleDec() {
	for (let i = deck.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let randomizedCards = deck[i];
		deck[i] = deck[j];
		deck[j] = randomizedCards;
	}
	return deck;
}

//add function to handle search event
function searchResult() {
	let inputValue = addInput.value;
	for (let i = 0; i < deck.length; i++)
		if (inputValue == deck[i].name) {
			nameOfPlace.innerText = deck[i].name;
			placeAbout.innerText = deck[i].about;
			nameOfPlace.appendChild(placeAbout);
			bigImage.setAttribute('src', deck[i].image);
		}
}

//function to let users view more cards
function addMoreCards() {
	if (addCard < extraDeck.length) {
		let newCard = document.createElement('img');
		newCard.setAttribute('src', extraDeck[addCard].image);
		newCard.classList.add('box');
		gameBoard.appendChild(newCard);
		nameOfPlace.innerText = extraDeck[addCard].name;
		placeAbout.innerText = extraDeck[addCard].about;
		nameOfPlace.appendChild(placeAbout);
		bigImage.setAttribute('src', extraDeck[addCard].image);
		addCard++;
		return addCard;
	} else if (addCard > extraDeck.length) {
		return;
	}
}

//function to view bigger image and info
function imageModal() {
	if (bigImage.getAttribute('src') === 'images/card-back.png') {
		return;
	} else {
		modalImageSource = bigImage.getAttribute('src');
		modalImage.setAttribute('src', modalImageSource);
		modalImage.style.width = '450px';
		modalImage.style.height = '675px';
		modalImageView.appendChild(modalImage);
		modalImageView.style.display = 'block';
	}
}

//function to close winning modal message
function closeModal() {
	winningMessage.style.display = 'none';
}

//function to close modal image
function closeModalImage() {
	modalImageView.style.display = 'none';
	modalImageView.removeChild(modalImage);
}
