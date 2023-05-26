
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

// const number = document.querySelector('#container');

// for(let i = 0; i <= 19; i++){
// let num = document.createElement('p');
// num.innerText = i;
// number.appendChild(num);
// }

// TODO:  ЗАДАЧА.
// /* Создайте маркированный список с  нечетными числами из диапазона от 1 до 10 и добавьте этот список в body. */

// const list = document.createElement('ul');

// for(let i = 1; i <= 10; i++){
// 	if(i % 2 !== 0){
// 		const listLi = document.createElement('li');
// 		listLi.innerText = i;
// 		list.appendChild(listLi);
// 	}
// }
// document.body.appendChild(list);

// TODO:  ЗАДАЧА.
/* Создайте пронумерованный список из квадратов чисел от 1 до 10. */

// const listOf = document.createElement('ol');
// for(let i = 0; i <= 10; i++){
// 	const listOfLi = document.createElement('li');
// 	listOfLi.innerText = i ** 2;
// 	listOf.appendChild(listOfLi);
// }
// document.body.appendChild(listOf);

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

// let links = [
// 	{
// 		title: "Google",
// 		link: "https://www.google.com/",
// 	},
// 	{
// 		title: "Baidu",
// 		link: "http://www.baidu.com/",
// 	},
// 	{
// 		title: "Bing",
// 		link: "https://www.bing.com/",
// 	},
// 	{
// 		title: "Yahoo!",
// 		link: "https://www.yahoo.com/",
// 	},
// 	{
// 		title: "Yandex(dzen)",
// 		link: "https://www.dzen.ru/",
// 	},
// ];
// const div = document.createElement('div');
// div.setAttribute('id', 'root');
// document.body.appendChild(div);
// for(let i = 0; i < links.length; i++){
// 	let link = document.createElement("a");
// 	link.setAttribute('href', links[i].link);
// 	link.innerText = links[i].title;

// 	div.appendChild(link);
// }

// TODO:  ЗАДАЧА.
// Создаем функцию, которая как аргумент \принимает ссылку на картинку и ссылку на сайт и возвращает картинку со ссылкой внутри.

// https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89


// https://www.pexels.com/

// function magicOfImage(img, website) {
// 	const linkOf = document.createElement('a');
// 	linkOf.setAttribute('href', website);
// 	const imagOf = document.createElement('img');
// 	imagOf.setAttribute('src', img);

// 	linkOf.append(imagOf);
// 	return linkOf;
// }
// const creatOfWebsite = magicOfImage("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89 ",
// 	"https://www.pexels.com/"
// );
// document.body.append(creatOfWebsite);

//! ---------------------------6.04------------------------

// 1 уровень сложности: Прочитать следующие темы:
// 1)  https://www.w3schools.com/jsref/metdocumentcreateelement.asp
// 2) https://developer.mozilla.org/ru/docs/Web/API/Document/createElement
// 3)  https://www.w3schools.com/jsref/metnodeappendchild.asp
// 4) https://developer.mozilla.org/en-US/docs/Web/API/Document/append
// 5) https://developer.mozilla.org/ru/docs/Web/API/Node/appendChild
// 6)https://drive.google.com/drive/folders/1TmjXloBiRYIa-lKlAu8hxvKObZFyEWk?usp=sharelink
// (ссылка на книгу для закрепления материала)((9 глава - часть “Поиск элементов DOM”)
// 7) https://learn.javascript.ru/searching-elements-dom

// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.
// const product = [
// 	{
// 		title: "BMW",
// 		price: "40000",
// 		count: "15"
// 	},
// 	{
// 		title: "Toyota",
// 		price: "20000",
// 		count: "13"
// 	},
// 	{
// 		title: "Ford",
// 		price: "30000",
// 		count: "20"
// 	},
// 	{
// 		title: "Chevrolet",
// 		price: "60000",
// 		count: "9"
// 	},
// 	{
// 		title: "Volkswagen",
// 		price: "30000",
// 		count: "13"
// 	},
// ];
// const div = document.createElement('div');
// div.setAttribute('id', 'newProduct');
// document.body.appendChild(div);
// let sumOfProduct = 0;
// let allOfProduct = 0;
// for (let i = 0; i < product.length; i++) {
// 	let title = document.createElement('p');
// 	title.innerText = "title: " + product[i].title;
// 	let price = document.createElement('p');
// 	price.innerText = "price: " + product[i].price;
// 	let sum = (product[i].price - (product[i].price * (product[i].count / 100)));
// 	let count = document.createElement('p');
// 	count.innerText = "count is : " + product[i].count;
// 	let result = document.createElement('p');
// 	result.innerText = "price with cont: " + sum;
// 	let red = document.createElement('p');
// 	red.innerText = "________________________________";
// 	sumOfProduct += sum;
// 	allOfProduct = product.length;
// 	div.append(title, price, count, result, red);

// }
// let newSum = document.createElement('p');
// newSum.innerText = "Sum of all product is: " + sumOfProduct;
// let products = document.createElement('p');
// products.innerText = "All of products is: " + allOfProduct;
// div.append(newSum, products);

// 2)Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):
// const newTable = [
// 	{
// 		numer: 1,
// 		name: "Bill Gates",
// 		position: "Founder Microsoft",
// 		salary: "$1000",
// 	},
// 	{
// 		numer: 2,
// 		name: "Steve Jobs",
// 		position: "Founder Apple",
// 		salary: "$1200",
// 	},
// 	{
// 		numer: 3,
// 		name: "Larry Page",
// 		position: "Founder Google",
// 		salary: "$1100",
// 	},
// 	{
// 		numer: 4,
// 		name: "Mark Zuckeberg",
// 		position: "Founder Facebook",
// 		salary: "$1300",
// 	},
// ];
// const isNumer = "No.";
// const isName = "Full Name";
// const isPosition = "Position";
// const isSalary = "Salary";

// const div = document.createElement('div');
// div.setAttribute('id', 'root');
// document.body.appendChild(div);
// const table = document.createElement('table'); div.appendChild(table);
// const thead = document.createElement('tr');
// table.appendChild(thead);
// let th_1 = document.createElement('th');
// th_1.innerText = isNumer;
// let th_2 = document.createElement('th');
// th_2.innerText = isName;
// let th_3 = document.createElement('th');
// th_3.innerText = isPosition;
// let th_4 = document.createElement('th');
// th_4.innerText = isSalary;
// thead.append(th_1, th_2, th_3, th_4);

// for (let i = 0; i < newTable.length; i++) {
// 	let list = document.createElement('tr');
// 	const { numer, name, position, salary } = newTable[i];
// 	let list_1 = document.createElement('td');
// 	list_1.innerText = numer;
// 	let list_2 = document.createElement('td');
// 	list_2.innerText = name;
// 	let list_3 = document.createElement('td');
// 	list_3.innerText = position;
// 	let list_4 = document.createElement('td');
// 	list_4.innerText = salary;

// 	table.appendChild(list);
// 	list.append(list_1, list_2, list_3, list_4);
// };
// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.
// const dog = [
// 	{
// 		breed: "golden retriever",
// 		age: 7,
// 	},
// 	{
// 		breed: "labrador retriever",
// 		age: 4,
// 	},
// 	{
// 		breed: "french bulldog",
// 		age: 12,
// 	},
// 	{
// 		breed: "beagle",
// 		age: 6,
// 	},
// 	{
// 		breed: "german shepherd dog",
// 		age: 2,
// 	},
// 	{
// 		breed: "poodle",
// 		age: 3,
// 	},
// 	{
// 		breed: "bulldog",
// 		age: 4,
// 	},
// ];
// const div = document.createElement('div');
 // div.setAttribute('id', 'root');
// document.body.appendChild(div);
// for (let i = 0; i < dog.length; i++){
// 	let list = document.createElement('p');
// 	list.innerText =  dog[i].breed + "'s age is " + dog[i].age;
// 	let last = document.createElement('p');
// 	last.innerText = "_____________________";
// 	div.append(list, last);
// }

// 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.
// const list = [
// 	{
// 		name: "The fifth element",
// 		year:  1997,
// 	},
// 	{
// 		name: "Die hard",
// 		year:  1988,
// 	},
// 	{
// 		name: "The sixth sense",
// 		year:  1999,
// 	},
// 	{
// 		name:  "Die hard 2",
// 		year:  1990,
// 	},
// 	{
// 		name: "The last boy",
// 		year: 1991,
// 	},
// 	{
// 		name: "Red",
// 		year: 2010,
// 	},
// 	{
// 		name: "Armagedon",
// 		year: 1998,
// 	},
// 	{
// 		name: "Ocean's twelve",
// 		year: 2004,
// 	},
// 	{
// 		name: "Looper",
// 		year: 2012,
// 	},
// ];
// const ul = document.createElement('ul');
// for (let i = 0; i < list.length; i++){
// 	let listOfLi = document.createElement('li');
// 	listOfLi.innerText = '"' + list[i].name + '"' + ",  " + list[i].year;
// 	ul.append(listOfLi);
// }
// document.body.appendChild(ul);

//! ---------------------18.04--------------------------------
// function declaration
// function expression
// arrow function

// function declaration // hositing (function deklaration, var)
// hi();
// function hi() {
//   console.log("Hello!!");
// }
// hi();

// function expression
// const hello = function () {
//   console.log("Hello");
// };
// hello();

// arrow function
// const hel = () => {
//   console.log("Hello");
// };

// const helLo = () => console.log("Hello");
// const helReturn = () => "Hello";

// callback function
// Это функция которую мы передаём другой функции в виде аргумента.
// Переданная функция в аргументах это - callback function

// const function1 = function () {
//   console.log("This is function1");
// };
// const function2 = function (callback) {
//   console.log("This is function2");
//   return callback();
// };
// function2(function1);

// --------------------------------------//
// const newFunction = function (array, function1) {
// 	return function1(array);
//  };
//  function sumOfArray(array1) {
// 	let sum = 0;
// 	for (let i = 0; i < array1.length; i++) {
// 	  sum += array1[i];
// 	}
// 	return sum;
//  }
//  function evenOfArray(array1) {
// 	const newArray = [];
// 	for (let i = 0; i < array1.length; i++) {
// 	  if (array1[i] % 2 === 0) {
// 		 newArray.push(array1[i]);
// 	  }
// 	}
// 	return newArray;
//  }
//  // newFunction([1, 2, 3, 4, 6, 8, 5, 75, 84,], sumOfArray);
//  console.log(newFunction([1, 2, 3, 4, 6, 8, 5, 75, 84], sumOfArray));
//  console.log(newFunction([1, 2, 3, 4, 6, 8, 5, 75, 84], evenOfArray));
 
 //-----------------------------------------//
 // Обработчики событий это - методы.
 // eventListener();
 // В этот метод мы передаём 2 аргумента
 // 1 - event,
 // eventListener("click", callback function)
 // onclick
 
 // Создаём кнопку в HTML,
 // достаём этот тег и вешаем на неё какое то событие.
 
 // onclick
//  const btn = document.querySelector("button");
 
//  function clickBtn() {
// 	alert("Hello!");
//  }
//  btn.onclick = clickBtn;
//  btn.addEventListener("click", clickBtn);
 
//  btn.onclick = () => {
// 	alert("Hello!");
//  };
//  // eventListener("click", callback function)
//  btn.addEventListener("click", () => {
// 	 alert("Hello!");
//  });
 
 //-------------------------------------------//
 // Создать в скриптах 2 кнопки. первая с знаком + а вторая с знаком минус.
 // Приклике на плюс увидеть слово плюс, а при клике на минус увидеть слово минус.
 // const minOfButton = document.createElement("button");
 // minOfButton.innerText = "-";
 // const plusOfButton = document.createElement("button");
 // plusOfButton.innerText = "+";
 // document.body.append(minOfButton, plusOfButton);
 
 // minOfButton.onclick = () => {
 //   console.log("minus");
 // };
 // plusOfButton.onclick = () => {
 //   console.log("plus");
 // };
 
 // --------------------------------------------//
 // Создать переменную с значением 0. При клике на плюс увеличить переменную на 1, а при клике на минус уменьшаем переменную на 1.
//  let number = 0;
//  const minOfButton = document.createElement("button");
//  minOfButton.innerText = "-";
//  const plusOfButton = document.createElement("button");
//  plusOfButton.innerText = "+";
//  document.body.append(minOfButton, plusOfButton);
 
//  minOfButton.onclick = () => {
// 	 number--;
// 	console.log(number);
//  };
//  plusOfButton.onclick = () => {
// 	 number++;
// 	console.log(number);
//  };
 
 //-------------------------------------------//
 // Создать в скриптах 2 кнопки. первая с знаком + а вторая с знаком минус.
 // При клике на плюс увидеть на странице (не в консоли) слово плюс, а при клике на минус увидеть слово минус.
 
 // let number = 0;
 // const minOfButton = document.createElement("button");
 // minOfButton.innerText = "-";
 // const plusOfButton = document.createElement("button");
 // plusOfButton.innerText = "+";
 // document.body.append(minOfButton, plusOfButton);
 
//  const text = document.createElement("p");
//  text.innerText = "0";
//  document.body.appendChild(text);
 
//  minOfButton.onclick = () => {
// 	 number--;
// 	 text.innerText = number;
// 	 text.innerText --
//  };
 
//  plusOfButton.onclick = () => {
// 	 number++;
// 	 text.innerText = number;
// 	 text.innerText ++
//  };
 
 // -------------------------------------------------//
 // object event
 //  Это обьект в котором сохранена
 //  иформация о событиях.
 
 //-------------------------------------------//
 // Отследить все клики на клавиатуре.
 // Это осуществляется с помощью обьекта  event.
//  const text = document.createElement("p");
//  document.body.append(text);
//  // Если событие относится к чему то глобальному,
//  //  например ко всей клавиатуре,
//  //  тогда используем: addEventListener.
//  let pContent = text.textContent;
//  addEventListener("keydown", (e) => {
// 	 e.key -  //Выводятся буквы которые нажал пользователь.
// 	 console.log(e.key);
// 	 // Если мы хотим к предидущему тексту сохранить новы текст.
// 	 pContent += e.key;
// 	 text.innerText = pContent;
//  });
 
 //---------------------------------------//
 // На основе массива создать параграфы.
 // При клике на параграф
 // должны появляться звёздочки.
//  const array = [
// 	 "This is some text",
// 	 "You can use event listener",
// 	 "Future frontend developer",
// 	 "Neve give up",
//  ];
//  for (let i = 0; i < array.length; i++) {
// 	 const creat = document.createElement("p");
// 	 creat.innerText = array[i];
// 	 document.body.append(creat);
// 	 creat.onclick = () => {
// 		 let textLength = "";
// 		 for (let i = 0; i < creat.innerText.length; i++) {
// 			 textLength += "*";
// 		 }
// 		 creat.innerText = textLength;
// 	 }
//  };
 
 //------------------------------------------//
 // Создайте программу, которая генерирует кнопки
 // на основе массива строк и выводит их в интерфейс
 // При нажатии на кнопку текст должен меняться на "Clicked"
//  const text = ["Text1", "Text2", "Text3"];
//  for (let i = 0; i < text.length; i++){
// 	 const button = document.createElement("button");
// 	 button.innerText = text[i];
// 	 document.body.append(button);
// 	 button.onclick = () => {
// 		 button.innerText = "Clicked";
// 	  }
// }
	 
// !----------------20.04------------------------------
// Object style

// const text = document.createElement("p");
// text.innerText = "This is text!!!";
// document.body.append(text);

// console.log(text.style); // смотрим то есть в этом параграфе

// text.style.color = "red";
// text.style.fontWeight = "bold";
// text.style.fontSize = "20px";

// WRONG!!!!!!!!!   text.style = "color: 'red'";  ТАК ПИСАТЬ НЕЛЬЗЯ

// text.style.cssText = "color: red; font-weight: bold; font-size: 20px;";

//------------------------------------------//
// Создаем div и добавим к нему эффектов при наведении на него.

// onmouseover - Меняется при наведении мышки.
// onmouseout  -  Меняется при отведении мышки.

// const div = document.createElement("div");
// div.style.width = "200px";
// div.style.height = "200px";
// div.style.border = "1px solid black";
// div.style.borderRadius = "15px";
// div.style.backgroundColor = "yellow";

// document.body.append(div);

// div.onmouseover = () => {
// 	div.style.backgroundColor = "pink";
// };
// div.onmouseout = () => {
// 	div.style.backgroundColor = "yellow";
// };
//-----------------------------------------------------------------//
// Написать цикл, который создаёт множество  div-ов с цветами от
// rgb(128, 128, 0) до rgb(128, 128, 255)
//  У дивов цвет должен меняться с шагом 5.
// При наведении на него мышкой меняется цвет.
// for (let i = 0; i <= 255; i += 5){
// 	const div = document.createElement("div");
// 	div.style.width = "100px";
// 	div.style.height = "100px";
// 	div.style.borderRadius = "15px";
// 	div.style.border = "1px solid black";
// 	div.style.backgroundColor = `rgb(128, 128, ${i})`;

// 	document.body.append(div);
// 	div.onmouseover = () => {
// 		div.style.backgroundColor = "orange";
// 	}
// 	div.onmouseout = () => {
// 		div.style.backgroundColor = `rgb(128, 128, ${i})`;
// 	}
// };
//-----------------------------------------------------------//
// Управление классами
// Для работы с классами есть свои свойства и методы.
//! classList  -  Свойство.
// Можно посмотреть какие классы есть у нашего элемента
// Можем использовать методы из этого свойства
// const p = document.querySelector("p");
// console.log(p.classList);

//! classList.add(); - Этот метод добавляет классы элементу.
// Он принимает 2 или более аргументов - название класса.
// p.classList.add("color", "test", "test2");
// console.log(p.classList);

//! classList.remove(); - Этот метод удаляет только один класс.
// p.classList.remove("color");
// console.log(p.classList);

//! classList.replace(1class 2class) - Этот метод заменяет классы и принимает 2 аргумента. 1 - класс который хотим заменить, 2 - имя класса на что нужно заменить.
// p.classList.replace("test", "color");

//! classList.toggle()  - ПЕРЕКЛЮЧАТЕЛЬ. Принимает только один аргумент - имя класса на которій будет переключать. Этот метод может добавлять и удалять только один класс.
// p.classList.toggle("active");

//! classlist.contains()  - Метод проверяет наличие класса элемента.
// p.classList.contains("test");   - true -
	


//----------------1111-----------------------//
//Создать 10 парагрофов и внутри параграфов будут числа от 1 до 10.
// При нажатии на параграф добавим ему класс.active
//  который будет менять ему цвет файла.
// const div = document.querySelector("div");
// for (let i = 0; i <= 10; i++){
// 	const p = document.createElement("p");
// 	p.innerText = i;
// 	div.append(p);
// 	p.onclick = () => {
// 		if (p.classList[0] === "active") {
// 			p.classList.remove("active");
// 		} else {
// 			p.classList.add("active");
// 		}
// 		p.classList.toggle("active");
// 	};
// };
//----------------2222------------------//
// Добавляем параграф и кнопку в HTML
// Приклике на кнопку паруграфу добавляем класс.
// const text = document.querySelector("p");
// const but = document.querySelector("button");
// but.onclick = () => {
	// text.classList.add("color");
// 	text.classList.toggle("color");
// };
//----------------------3333---------------//
// Работаем с body.  Создаём параграф и кнопку.
//Изначально текст в боди был чёрного цвета.
// const body = document.querySelector("body");
// const button = document.querySelector("button");

// button.onclick = () => {
// 	body.classList.toggle("active");
// }

//----------------4444-----------------//
// Создать массив из обьектов. У каждого из обьектов есть 2 ключа.
// Реализовать параграф который изначально будет
//  показывать слова на английском,
// 	но при клике на него слова иеняются на русский.И также наоборот.
// const words = [
// 	{
// 		en: "book",
// 		ru: "книга",
// 	},
// 	{
// 		en: "sun",
// 		ru: "солнишко",
// 	},
// 	{
// 		en: "cup",
// 		ru: "чашка",
// 	},
// 	{
// 		en: "pen",
// 		ru: "ручка",
// 	},
// 	{
// 		en: "table",
// 		ru: "стол",
// 	},
// ];

// for (let i = 0; i < words.length; i++){
// 	const p = document.createElement("p");
// 	p.innerText = words[i].en;
// 	document.body.append(p);

// 	p.onclick = () => {
// 		if (p.textContent === words[i].en) {
// 			p.innerText = words[i].ru;
// 		} else {
// 			p.innerText = words[i].en
// 		}
// 	};
// };
//Создать на основе обьекта создать 2 параграфа.
// В одном слова на русском в другом на английском.изначально
// скрыть параграф на русском.Приклике на английский параграф скрыть его
//  и показать на русском.На основе каждого обьекта создать div и
//   внутри уже 2 параграфа.onclick вешать уже на сам div.
// for (let i = 0; i < words.length; i++){
// 	const div = document.createElement("div");
// 	const isRu = document.createElement("p");
// 	const isEn = document.createElement("p");
// 	isRu.classList.add("show");
// 	isEn.classList.add("hide");

// 	document.body.append(div);
// 	div.append(isRu);
// 	div.append(isEn);
// 	isRu.innerText = words[i].ru;
// 	isEn.innerText = words[i].en;
// 	div.onclick = () => {
// 		isRu.classList.toggle("hide");
// 		isEn.classList.toggle("show");
// 		isRu.classList.toggle("show");
// 		isEn.classList.toggle("hide");
// 	};
// };

//-----------------5555--------------------//
// Создать список с элементами из массива.
// При клике на пункт из списка,
// 	добавляйте класс  "completed"(можете добавить любой стиль)
// Создайте кнопку, которая при нажатии скрывает все пункты
//  с классом "completed"
// const text = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"];
// const ul = document.createElement("ul");
// const button = document.createElement("button");
// button.style.borderRadius = "15px";
// button.style.padding = "15px 25px";
// document.body.append(ul, button);


// for (let i = 0; i < text.length; i++){
// 	const li = document.createElement("li");
// 	li.innerText = text[i];
// 	ul.append(li);
// 	li.onclick = () => {
// 		li.classList.add("completed")
// 	};
// 	button.onclick = () => {
// 		let isCom = document.querySelectorAll(".completed");
// 		for (let i = 0; i < isCom.length; i++) {
// 			isCom[i].classList.replace("completed", "hide");
// 		};
// 	};
// };
// 1)  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
// 2)  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// 3)  https://www.javatpoint.com/javascript-classlist

// Задача:
// В js объявляйте создайте массив с ссылками на картинки. На основе этого массива формируйте множество маленьких картинок в верхней части интерфейса.Пользователь нажимая на маленькие картинки видит их отображение в большем размере(только ту картинку, на которую он нажимал).

// const image = [
// 	"./img/alec-favale-Ivzo69e18nk-unsplash.jpg",
 
// 	"./img/baptist-standaert-mx0DEnfYxic-unsplash.jpg",
 
// 	"./img/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg",
 
// 	"./img/cody-board-tnNVJd_nrw8-unsplash.jpg",
 
// 	"./img/jamie-street-UtrE5DcgEyg-unsplash.jpg",
 
// 	"./img/jamie-street-wcO2PWLuQ3U-unsplash.jpg",
 
// 	"./img/oscar-sutton-yihlaRCCvd4-unsplash.jpg",
 
// 	"./img/kevin-turcios-rls2bfqYh8E-unsplash.jpg",
 
// 	 "./img/mike-burke-gxyfJQg7Lno-unsplash.jpg",
 
// 	"./img/kieran-white-NKN25UfGfkQ-unsplash.jpg",
//  ];
//  const div = document.createElement("div");
//  div.classList.add("wrapper");
//  document.body.append(div);
//  const textOfAlt = "dog img";
//  for (let i = 0; i < image.length; i++) {
// 	 const img = document.createElement("img");
// 	 img.setAttribute("src", image[i]);
// 	 img.setAttribute("alt", textOfAlt);
// 	 img.classList.add("image");
// 	 const p = document.createElement("p");
// 	 p.append(img);
// 	 p.classList.add("wrap");	
// 	 div.append(p);
// 	 img.onclick = () => {
// 		 if(img.classList[0] === "image")
// 			 img.classList.toggle("big");		
// 	 };
//  };

 
 
 