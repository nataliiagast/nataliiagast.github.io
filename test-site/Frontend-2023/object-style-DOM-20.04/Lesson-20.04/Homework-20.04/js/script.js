// 1)  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
// 2)  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// 3)  https://www.javatpoint.com/javascript-classlist

// Задача:
// В js объявляйте создайте массив с ссылками на картинки. На основе этого массива формируйте множество маленьких картинок в верхней части интерфейса.Пользователь нажимая на маленькие картинки видит их отображение в большем размере(только ту картинку, на которую он нажимал).

const image = [
  "./img/alec-favale-Ivzo69e18nk-unsplash.jpg",

  "./img/baptist-standaert-mx0DEnfYxic-unsplash.jpg",

  "./img/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg",

  "./img/cody-board-tnNVJd_nrw8-unsplash.jpg",

  "./img/jamie-street-UtrE5DcgEyg-unsplash.jpg",

  "./img/jamie-street-wcO2PWLuQ3U-unsplash.jpg",

  "./img/oscar-sutton-yihlaRCCvd4-unsplash.jpg",

  "./img/kevin-turcios-rls2bfqYh8E-unsplash.jpg",

	"./img/mike-burke-gxyfJQg7Lno-unsplash.jpg",

  "./img/kieran-white-NKN25UfGfkQ-unsplash.jpg",
];
const div = document.createElement("div");
div.classList.add("wrapper");
document.body.append(div);
const textOfAlt = "dog img";
for (let i = 0; i < image.length; i++) {
	const img = document.createElement("img");
	img.setAttribute("src", image[i]);
	img.setAttribute("alt", textOfAlt);
	img.classList.add("image");
	const p = document.createElement("p");
	p.append(img);
	p.classList.add("wrap");	
	div.append(p);
	img.onclick = () => {
		if(img.classList[0] === "image")
			img.classList.toggle("big");		
	};
};









