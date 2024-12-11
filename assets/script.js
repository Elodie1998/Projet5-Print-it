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

let diapositiveActuelle = 0; //pour utilisation du tableau
const carouselSlide = document.querySelector(".banner-img"); //Dans index.html, l'image du banner 

function afficherDiapositive () {
	carouselSlide.src = slides[diapositiveActuelle].image; //source const = dans tableau, diapo n°x des images

	const tagline = document.querySelector("#banner p"); //Dans index.html, le paragraphe dans #banner
	tagline.innerHTML = slides[diapositiveActuelle].tagLine; //texte const = dans tableau, tagLine n°y des images
	
	const dots = document.querySelectorAll(".dot"); //Dans index.html, le bullet pt dans les <div> 
	dots.forEach((dot, i) => { // pour chaque élément de la collection dots
		if (i === diapositiveActuelle) { //Si i de l'élément actuel === diapo actuelle, b-pt cor image affichée
			dot.classList.add("dot_selected"); //Si b-pt cor image affichée, ".dot_selected"
		} else { //sinon
			dot.classList.remove("dot_selected");// b-pt cor pas image affichée, pas ".dot_selected"
		}
	})
}

document.querySelector(".prev").addEventListener("click", function() {//écouteur d'événement de ".prev"
	diapositiveActuelle = (diapositiveActuelle - 1 + slides.length) % slides.length; /* opération modulo (%)
	= permet de gèrer le cas où l'indice (diapositiveActuelle) devienne négatif et de naviguer dans le carousel
	de manière cyclique (= infinie) sans dépasser le nombre de slides du tableau (ici 4)
	Calcul si on a la 1ère slide du tableau (diapositiveActuelle = 0) : 
	(0 - 1 + 4) % 4 = 3 % 4 = 3 puisque 3/4 = 0 reste 3 donc la dernière slide est affichée ensuite !*/

  	afficherDiapositive(); // on appelle la fonction pour mettre à jour la slide du carousel
})

document.querySelector(".next").addEventListener("click", function() { //écouteur d'événement de ".next"
	diapositiveActuelle = (diapositiveActuelle + 1 + slides.length) % slides.length; /* opération modulo (%)
	Calcul si on a la dernière slide du tableau (diapositiveActuelle = 3) : 
	(3 + 1 + 4) % 4 = 8 % 4 = 0 puisque 8/4 = 2 reste 0 donc la 1ère slide est affichée ensuite !*/

  	afficherDiapositive();
})

afficherDiapositive(); //initialisation du carousel


