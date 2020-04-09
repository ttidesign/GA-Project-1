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
function gameStart() {
	let gameBoard = document.querySelector('.game-board');
	for (let i = 0; i < 20; i++) {
		let startCard = document.createElement('img');
		startCard.setAttribute('class', 'box');
		startCard.setAttribute('src', deck[i].image);
		gameBoard.appendChild(startCard);
	}
}
gameStart();

//Let's play button that flip down all cards

