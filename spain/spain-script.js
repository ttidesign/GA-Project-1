//create variable that contains all cards
const deck = [
	{
		name: 'Sagrada Familia',
		image: './images/Sagrada-Familia.png',
		about:
			'The Basílica de la Sagrada Família, also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in Barcelona, Catalonia, Spain (Click picture to read more)',
	},
	{
		name: 'Camp Nou',
		image: './images/Camp-Nou.png',
		about:
			"Camp Nou has been the home stadium of FC Barcelona since its completion in 1957, and it is located in Carrer d' Arístides Maillol (Click picture to read more)",
	},
	{
		name: 'Gothic Quarter',
		image: './images/Gothic-Quarter.png',
		about:
			'The charming Gothic Quarter, or Barri Gòtic, has narrow medieval streets filled with trendy bars, clubs and Catalan restaurants (Click picture to read more)',
	},
	{
		name: 'Casa Mila',
		image: './images/Casa-Mila.png',
		about:
			'Also known as La Pedrera, as the front of the building looks a bit like the face of a quarry, Casa Milà was completed in 1912 and is another emblematic Gaudí building (Click picture to read more)',
	},
	{
		name: 'St Josep',
		image: './images/Stjosep.png',
		about:
			'The Mercat de Sant Josep de la Boqueria, often simply referred to as La Boqueria, is a large public market in the Ciudad Vieja district of Barcelona, Catalonia, Spain (Click picture to read more)',
	},
	{
		name: 'Royal Palace',
		image: './images/Palacio-Real-Madrid.png',
		about:
			'The Royal Palace of Madrid  is the official residence of the Spanish royal family at the city of Madrid, although now only used for state ceremonies (Click picture to read more)',
	},
	{
		name: 'Park Guell',
		image: './images/Park-Guell.png',
		about:
			'The Park Güell is a public park system composed of gardens and architectural elements located on Carmel Hill, in Barcelona, Catalonia, Spain (Click picture to read more)',
	},
	{
		name: 'Temple Debod',
		image: './images/Temple-Debod.png',
		about:
			'Built in the 2nd Century BC, the temple was given to Spain in 1968 by the Egyptian government for Spain’s help in relocating the Abu Simbel temple before the construction of the Aswan dam (Click picture to read more)',
	},
	{
		name: 'Las Ramblas',
		image: './images/Las-Ramblas.png',
		about:
			'La Rambla may be a Barcelona cliché—but it is one of those classic experiences that no visitor should miss. Enjoy the living statues. Drop them a coin, and they will usually do a trick (Click picture to read more)',
	},
	{
		name: 'Buen Retiro Park ',
		image: './images/Parque-Del-Retiro.png',
		about:
			'The Buen Retiro Park (Parque del Retiro) is an oasis of peace in the heart of Madrid. Just beyond the busy streets, this lush 120-hectare park offers an escape from the hustle and bustle of the city (Click picture to read more)',
	},
	{
		name: 'Sagrada Familia',
		image: './images/Sagrada-Familia.png',
		about:
			'The Basílica de la Sagrada Família, also known as the Sagrada Família, is a large unfinished Roman Catholic minor basilica in Barcelona, Catalonia, Spain (Click picture to read more)',
	},
	{
		name: 'Camp Nou',
		image: './images/Camp-Nou.png',
		about:
			"Camp Nou has been the home stadium of FC Barcelona since its completion in 1957, and it is located in Carrer d' Arístides Maillol (Click picture to read more)",
	},
	{
		name: 'Gothic Quarter',
		image: './images/Gothic-Quarter.png',
		about:
			'The charming Gothic Quarter, or Barri Gòtic, has narrow medieval streets filled with trendy bars, clubs and Catalan restaurants (Click picture to read more)',
	},
	{
		name: 'Casa Mila',
		image: './images/Casa-Mila.png',
		about:
			'Also known as La Pedrera, as the front of the building looks a bit like the face of a quarry, Casa Milà was completed in 1912 and is another emblematic Gaudí building (Click picture to read more)',
	},
	{
		name: 'St Josep',
		image: './images/Stjosep.png',
		about:
			'The Mercat de Sant Josep de la Boqueria, often simply referred to as La Boqueria, is a large public market in the Ciudad Vieja district of Barcelona, Catalonia, Spain (Click picture to read more)',
	},
	{
		name: 'Royal Palace',
		image: './images/Palacio-Real-Madrid.png',
		about:
			'The Royal Palace of Madrid  is the official residence of the Spanish royal family at the city of Madrid, although now only used for state ceremonies (Click picture to read more)',
	},
	{
		name: 'Park Guell',
		image: './images/Park-Guell.png',
		about:
			'The Park Güell is a public park system composed of gardens and architectural elements located on Carmel Hill, in Barcelona, Catalonia, Spain (Click picture to read more)',
	},
	{
		name: 'Temple Debod',
		image: './images/Temple-Debod.png',
		about:
			'Built in the 2nd Century BC, the temple was given to Spain in 1968 by the Egyptian government for Spain’s help in relocating the Abu Simbel temple before the construction of the Aswan dam (Click picture to read more)',
	},
	{
		name: 'Las Ramblas',
		image: './images/Las-Ramblas.png',
		about:
			'La Rambla may be a Barcelona cliché—but it is one of those classic experiences that no visitor should miss. Enjoy the living statues. Drop them a coin, and they will usually do a trick (Click picture to read more)',
	},
	{
		name: 'Buen Retiro Park ',
		image: './images/Parque-Del-Retiro.png',
		about:
			'The Buen Retiro Park (Parque del Retiro) is an oasis of peace in the heart of Madrid. Just beyond the busy streets, this lush 120-hectare park offers an escape from the hustle and bustle of the city (Click picture to read more)',
	},
];
const extraDeck = [
	{
		name: 'Alicante',
		image: './images/Alicante.png',
		about:
			'Sun, sea and a soaring rocky peak make Alicante a prime coastal destination in Spain. But while many foreign tourists fly into the city’s airport then leave for resorts further along the coast, Alicante is worth exploring in itself. The port city has a buzzing city beach that has the dramatic Mount Benacantil as a backdrop, a huge rocky peak whose summit is home to Santa Bárbara Castle. Stroll by the city’s marina on an evening then do some tapas bar hopping in the old town.',
	},
	{
		name: 'Granada',
		image: './images/Granada.png',
		about:
			'Granada is like a Disney fairytale come to life: it has the stunning ancient fortress, the snowcapped peaks and winding cobbled streets. The Alhambra is one of Spain’s most famous attractions, and for good reason. The Moorish palace sits high over the city and contains some of the best-preserved Islamic art and architecture in the world.',
	},
	{
		name: 'Valencia',
		image: './images/Valencia.png',
		about:
			'The home of paella is a great place to sample what is perhaps Spain’s most famous dish. Head to a beachside restaurant and enjoy the rice dish for lunch (Spaniards never tend to eat the heavy dish for dinner) washed down with some Agua de Valencia, a potent local cava cocktail. Explore Valencia’s beautiful old town and don’t miss the incredible, spaceship-like Valencia City of Arts and Sciences, a futuristic complex in the city’s former river bed that holds an aquarium, IMAX cinema, opera house and science museum.',
	},
	{
		name: 'San Sebastian',
		image: './images/San Sebastian.png',
		about:
			'This elegant city on the Basque Country coast is a must for foodies; the pintxo – a Basque version of tapas that usually includes delicious morsels balanced on crusty bread – is the city’s gastronomic calling card and the bars of the Old Town lay out their pintxos on the bar tops so you can see everything on offer. The city’s Concha Beach is a beautiful, shell-shaped cove popular with families, while the nearby Zurriola beach is great for surfing.',
	},
];

//create variable to target game board
const gameBoard = document.querySelector('.game-board');
//create variable to targe play button
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
//add event handler to handle the close modal button
closeBtn.addEventListener('click', closeModal);
//add event listen and function to handle modal view
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
