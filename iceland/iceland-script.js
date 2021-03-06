//create variable that contains all cards
const deck = [
	{
		name: 'Jokulsarlon',
		image: './images/Jokulsarlon.png',
		about:
			'Jökulsárlón is a glacial lagoon, bordering Vatnajökull National Park in southeastern Iceland. Its still, blue waters are dotted with icebergs from the surrounding Breiðamerkurjökull Glacier(Click picture to read more)',
	},
	{
		name: 'Kerid',
		image: './images/Kerid.png',
		about:
			'Kerið is a volcanic crater lake located in the Grímsnes area in south Iceland, along the Golden Circle. It is one of several crater lakes in the area, known as Iceland’s Western Volcanic Zone (Click picture to read more)',
	},
	{
		name: 'Eldhraun',
		image: './images/Eldhraun.png',
		about:
			'One of the most spectacular moss blanket is located on the southern coast of Iceland, over the Eldhraun Lava Field. The Eldhraun Lava Field was created in one of the most devastating eruptions in recorded history (Click picture to read more)',
	},
	{
		name: 'Solheimasandur',
		image: './images/Solheimasandur.png',
		about:
			'The Sólheimasandur plane wreckage is a famous site in Iceland where a plane crashed in November 1973. The US Navy airplane - a Douglas Super DC-3 - was forced to crash land on Sólheimasandur beach (Click picture to read more)',
	},
	{
		name: 'Geysir',
		image: './images/Geysir.png',
		about:
			'Geysir was the first geyser discovered in Europe, and has been attracting travellers since the 1800’s. The Great Geysir is currently dormant. It was last active following an earthquake in 2000 (Click picture to read more)',
	},
	{
		name: 'Seljalandsfoss',
		image: './images/Seljalandsfoss.png',
		about:
			'Seljalandsfoss is a waterfall that can be fully encircled, situated on the South Coast of Iceland with a drop of 60 metres (200 feet). It is one of the country’s most famous and visited falls (Click picture to read more)',
	},
	{
		name: 'BLue Lagoon',
		image: './images/Blue lagoon.png',
		about:
			'The Blue Lagoon is a geothermal spa in southwestern Iceland. The spa is located in a lava field near Grindavík on the Reykjanes Peninsula (Click picture to read more)',
	},
	{
		name: 'Reynisfjara',
		image: './images/Reynisfjara.png',
		about:
			'Its beautiful black sand, powerful waves, and the nearby Reynisdrangar sea stacks make Reynisfjara a truly unique place to visit and a popular filming location (Click picture to read more)',
	},
	{
		name: 'Solheimajokull',
		image: './images/Solheimajokull.png',
		about:
			'Sólheimajökull has several distinctive traits that separate it from other glaciers. Firstly, it is incredibly easy to find, laying just off of the Ring Road that encircles Iceland  (Click picture to read more)',
	},

	{
		name: 'Kirkjufell',
		image: './images/Kirkjufell.png',
		about:
			'Kirkjufell is a freestanding symmetric mountain, and is the most photographed mountain in Iceland. It is located in West Iceland on the north coast of Iceland’s Snæfellsnes peninsula (Click picture to read more)',
	},
	{
		name: 'Jokulsarlon',
		image: './images/Jokulsarlon.png',
		about:
			'Jökulsárlón is a glacial lagoon, bordering Vatnajökull National Park in southeastern Iceland. Its still, blue waters are dotted with icebergs from the surrounding Breiðamerkurjökull Glacier(Click picture to read more)',
	},
	{
		name: 'Kerid',
		image: './images/Kerid.png',
		about:
			'Kerið is a volcanic crater lake located in the Grímsnes area in south Iceland, along the Golden Circle. It is one of several crater lakes in the area, known as Iceland’s Western Volcanic Zone (Click picture to read more)',
	},
	{
		name: 'Eldhraun',
		image: './images/Eldhraun.png',
		about:
			'One of the most spectacular moss blanket is located on the southern coast of Iceland, over the Eldhraun Lava Field. The Eldhraun Lava Field was created in one of the most devastating eruptions in recorded history (Click picture to read more)',
	},
	{
		name: 'Solheimasandur',
		image: './images/Solheimasandur.png',
		about:
			'The Sólheimasandur plane wreckage is a famous site in Iceland where a plane crashed in November 1973. The US Navy airplane - a Douglas Super DC-3 - was forced to crash land on Sólheimasandur beach (Click picture to read more)',
	},
	{
		name: 'Geysir',
		image: './images/Geysir.png',
		about:
			'Geysir was the first geyser discovered in Europe, and has been attracting travellers since the 1800’s. The Great Geysir is currently dormant. It was last active following an earthquake in 2000 (Click picture to read more)',
	},
	{
		name: 'Seljalandsfoss',
		image: './images/Seljalandsfoss.png',
		about:
			'Seljalandsfoss is a waterfall that can be fully encircled, situated on the South Coast of Iceland with a drop of 60 metres (200 feet). It is one of the country’s most famous and visited falls (Click picture to read more)',
	},
	{
		name: 'BLue Lagoon',
		image: './images/Blue lagoon.png',
		about:
			'The Blue Lagoon is a geothermal spa in southwestern Iceland. The spa is located in a lava field near Grindavík on the Reykjanes Peninsula (Click picture to read more)',
	},
	{
		name: 'Reynisfjara',
		image: './images/Reynisfjara.png',
		about:
			'Its beautiful black sand, powerful waves, and the nearby Reynisdrangar sea stacks make Reynisfjara a truly unique place to visit and a popular filming location (Click picture to read more)',
	},
	{
		name: 'Solheimajokull',
		image: './images/Solheimajokull.png',
		about:
			'Sólheimajökull has several distinctive traits that separate it from other glaciers. Firstly, it is incredibly easy to find, laying just off of the Ring Road that encircles Iceland  (Click picture to read more)',
	},
	{
		name: 'Kirkjufell',
		image: './images/Kirkjufell.png',
		about:
			'Kirkjufell is a freestanding symmetric mountain, and is the most photographed mountain in Iceland. It is located in West Iceland on the north coast of Iceland’s Snæfellsnes peninsula (Click picture to read more)',
	},
];
const extraDeck = [
	{
		name: 'Myrdalsjokull',
		image: './images/Myrdalsjokull.png',
		about:
			'Caked in ice all year round, the soaring ridges of the mighty Katla caldera play host to Iceland’s wild and arctic Myrdalsjokull Glacier Park. This snow-packed field encompasses hundreds of square kilometers and represents the fourth-largest of its kind in the country.',
	},
	{
		name: 'Asbyrgi',
		image: './images/Asbyrgi.png',
		about:
			'Carving its way out of the rocky inland of north-east Iceland, the chiselled gorges and ridges of Asbyrgi rarely fail to draw a gasp. In all, the sheer-sided edges of the canyon run for more than three kilometers and come in at a whopping 100 meters in height at some points.',
	},
	{
		name: 'Gullfoss',
		image: './images/Gullfoss.png',
		about:
			'Visitors will find the majestic Gullfoss Waterfall roaring over the escarpments and bluffs of south-western Iceland. It’s famed as one of the most dramatic cataracts in the world, and cascades over a series of stepped rocks and terraces before plunging over the 32-meter high crevice that gives the fall its distinct appearance of disappearing into the Icelandic subterrane.',
	},
	{
		name: 'Landmannalaugar',
		image: './images/Landmannalaugar.png',
		about:
			'A deep-cut valley set in the very midst of south-western Iceland’s famous Fjallabak Nature Reserve, the Landmannalaugar is a hidden gem of a destination that comes complete with everything from bubbling volcanic hot springs to ochre-coloured mountain ridges',
	},
];

//create variable to target game board
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
//add event handler to handle close modal button
closeBtn.addEventListener('click', closeModal);
//add event handler to handle modal image view
bigImage.addEventListener('click', imageModal);
//add event handler to handle close modal image button
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

function letsPlay() {
	clearBoard();
	for (let i = 0; i < deck.length; i++) {
		let backCard = document.createElement('img');
		backCard.setAttribute('class', 'box');
		backCard.setAttribute('data-number', i);
		//console.log(backCard);
		backCard.setAttribute('src', './images/card-back.png');
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
		if (currentCardImage === './images/card-back.png') {
			event.target.setAttribute('src', deck[userInput].image);
			let currentCardName = deck[userInput].name;
			//push card's image to card-in-play array to check matching pair
			cardInPlay.push(currentCardName);
		} else {
			return;
		}
	}
	checkIfMatch(userInput); // check for matching pair
	checkGame(); // check if game is active
}

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
			score -= 1;
			scoreBoard.innerText = 'SCORE: ' + score;
			// if pair is not matched flip the last clicked card back down after 2 seconds
			setTimeout(function () {
				cardsBoard[userInput + 1].setAttribute('src', './images/card-back.png');
			}, 600);
		}
	}
}

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

//add function to handle event
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

function closeModal() {
	winningMessage.style.display = 'none';
}

function imageModal() {
	if (bigImage.getAttribute('src') === './images/card-back.png') {
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

function closeModalImage() {
	modalImageView.style.display = 'none';
	modalImageView.removeChild(modalImage);
}
