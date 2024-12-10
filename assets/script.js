const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const buttonLeft = document.querySelector('.prev');
buttonLeft.addEventListener('click', () => {
	console.log("Le bouton de gauche est cliqué");
})

const buttonRight = document.querySelector('.next');
buttonRight.addEventListener('click', () => {
	console.log("Le bouton de droite est cliqué");
})

