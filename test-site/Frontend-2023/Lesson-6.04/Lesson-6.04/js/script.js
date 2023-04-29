
// ! /* С помощью этого метода создаём элементы.*/
// createElement('tagName');

// const text = document.createElement('p');
// text.innerText = 'Test text!!!';

// !  /* Добавляем наши элементы в DOM. */
// append, appendChild
// appendChild - one element
// 	append - one and more elements / text
//  append("Text dgddgdg", p, div);

//  !  /* Добавляем элемент в DOM в body.*/
// document.body.append(text);

// TODO:  ЗАДАЧА.
// const div = document.createElement('div');
// const _name = document.createElement('h3');
// const advice = document.createElement('p');

// _name.innerText = "Nataliia";
// advice.innerText = "Верь в себя, иди только вперёд и необорачивайся назад.!"

// div.append(_name, advice);
// document.body.appendChild(div);

// TODO:  ЗАДАЧА.
// /*Создать множество параграфов с числами от 0 до 19 и добавить в див с id container, который находится в HTML документе. */

const number = document.querySelector('#container');

for(let i = 0; i <= 19; i++){
let num = document.createElement('p');
num.innerText = i;
number.appendChild(num);
}

// TODO:  ЗАДАЧА.
// /* Создайте маркированный список с  нечетными числами из диапазона от 1 до 10 и добавьте этот список в body. */

const list = document.createElement('ul');

for(let i = 1; i <= 10; i++){
	if(i % 2 !== 0){
		const listLi = document.createElement('li');
		listLi.innerText = i;
		list.appendChild(listLi);
	}
}
document.body.appendChild(list);

// TODO:  ЗАДАЧА.
/* Создайте пронумерованный список из квадратов чисел от 1 до 10. */

const listOf = document.createElement('ol');
for(let i = 0; i <= 10; i++){
	const listOfLi = document.createElement('li');
	listOfLi.innerText = i ** 2;
	listOf.appendChild(listOfLi);
}
document.body.appendChild(listOf);

// TODO:  ЗАДАЧА.
/* Программа которая запрашивает у пользователя картинку и ссылку на сайт. Мы будем брать 2 ссылки от него. С помощью первой ссылки содавать картинку и с помощью второй линк сайт. */

// https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89

// const imgSrc = prompt("Add image's source:");
// const linkHref = prompt("Add link:");

// const image = document.createElement('img');
// image.setAttribute("src", imgSrc);

// const link = document.createElement('a');
// link.innerText = "ССылка от пользователя";
// link.setAttribute("href", linkHref);
// link.setAttribute('target', '_blank');
//  ?  link.append(image); /* Добавляем в ссылку картинку. */
// document.body.append(link);

// TODO:  ЗАДАЧА.
// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в div #root.

let links = [
	{
		title: "Google",
		link: "https://www.google.com/",
	},
	{
		title: "Baidu",
		link: "http://www.baidu.com/",
	},
	{
		title: "Bing",
		link: "https://www.bing.com/",
	},
	{
		title: "Yahoo!",
		link: "https://www.yahoo.com/",
	},
	{
		title: "Yandex(dzen)",
		link: "https://www.dzen.ru/",
	},
];
const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);
for(let i = 0; i < links.length; i++){
	let link = document.createElement("a");
	link.setAttribute('href', links[i].link);
	link.innerText = links[i].title;

	div.appendChild(link);
}

// TODO:  ЗАДАЧА.
// Создаем функцию, которая как аргумент \принимает ссылку на картинку и ссылку на сайт и возвращает картинку со ссылкой внутри.

// https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89  


// https://www.pexels.com/

function magicOfImage(img, website) {
	const linkOf = document.createElement('a');
	linkOf.setAttribute('href', website);
	const imagOf = document.createElement('img');
	imagOf.setAttribute('src', img);

	linkOf.append(imagOf);
	return linkOf;
}
const creatOfWebsite = magicOfImage("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89 ",
	"https://www.pexels.com/"
);
document.body.append(creatOfWebsite);

