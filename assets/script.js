const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let diapositiveActuelle = 0;
const carouselSlide = document.querySelector(".banner-img");

function afficherDiapositive () {
	carouselSlide.src = slides[diapositiveActuelle].image;

	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, i) => {
		if (i === diapositiveActuelle) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	})
}

document.querySelector(".prev").addEventListener("click", function() {
	diapositiveActuelle = (diapositiveActuelle - 1 + slides.length) % slides.length;
  	afficherDiapositive();
})

document.querySelector(".next").addEventListener("click", function() {
	diapositiveActuelle = (diapositiveActuelle + 1 + slides.length) % slides.length;
  	afficherDiapositive();
})

afficherDiapositive();


