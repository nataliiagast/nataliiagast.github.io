// id
//  tag
//  class
//  selector


/*  id - getElementById */

//  document   /* Все методы хранятся в document.*/
// const paragraph = document.getElementById("test");
// console.log(paragraph);

//  innerText    /* Можно изменить текст. */
// paragraph.innerText = "My first lesson";
// console.log(paragraph);

// innerHTML    /* Можно добавлять не только текст а и теги. */
// div.innerHTML = "<p>My first lesson</p>"

//  textContent  /* Можно выбрыть часть текста или даже кода. */
// console.log(paragraph.textContent);


/*  tag - getElementsByTagName */

// const ps = document.getElementsByTagName("p");
// console.log(ps);

/*   class  -  getElementsByClassName*/

// const pClass = document.getElementsByClassName("test");
// pClass[0].innerText = "Hello!"; /* Изменяем текст по индексу.*/
// console.log(pClass);
// for(let i = 0; i < pClass.length; i++){
// 	pClass[i].innerText = "Hallo friend!"
// }

//         /* ЗАДАЧКИ */
// const listOfLi = document.getElementsByClassName("text");
// for(let i = 0; i < listOfLi.length; i++){
// 	listOfLi[i].innerText = i + 1;
// }
// console.timeLog(listOfLi);


/* SELECTOR */
// querySelector() /* Возвращает нам первый найденный элемент. */

// querySelektorAll() /* Находит в  HTML любой элемент или много элементов по их селекторам.*/

// const text_li = document.querySelectorAll("li.text");
// for (let i = 0; i < text_li.length; i++){
// 	text_li[i].innerText = text_li[i].textContent + "!!!!"; 
// !	/* textContent  сохраняет наш старый текст и дописывает новый.*/
// }


/* setAttribute  -  Изменяет или добавляет атрибуты элементов.*/

/* Изменим src картинки */
// const image = document.querySelector("img");
// image.setAttribute("src", "https://via.placeholder.com/100");
// image.setAttribute("alt", "cat");

/* ......... */
// const link = document.querySelectorAll("a");
// const link_a = [];
// for(let i = 0; i < link.length; i++){
// 	link_a.push(link[i].textContent); /* Записываем наши ссылки в новый массивю. Методом push.*/
// }
// console.log(link_a);

/* Сщздать 3 ссылки без атрибутов в . Создайте адресс каждой ссылке используя следующий массив*/

const links = [
	"https://www.google.com/",
"https://www.freepik.com/",
"https://www.pexels.com/"	
];
const arrLink = document.querySelectorAll("a");
for(let i = 0; i < arrLink.length; i++){
	arrLink[i].setAttribute("href", links[i]);
}
console.log(arrLink);
