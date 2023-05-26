//TODO /*Создать множество параграфов с числами от 0 до 19 и добавить в див с id container, который находится в HTML документе. */
// const a = document.querySelector('#container');
// for (let i = 0; i <= 19; i++){
// 	let b = document.createElement('p');
// 	b.innerText = i;
// 	a.append(b);
// }

//TODO /* Создайте маркированный список с  нечетными числами из диапазона от 1 до 10 и добавьте этот список в body. */
// const a = document.createElement('ul');
// document.body.append(a);
// for (let i = 1; i <= 10; i++){
// 	if (i % 2 !== 0) {
// 		let b = document.createElement('li');
// 		b.innerText = i;
// 		a.append(b);
// 	}
// }

//TODO /* Создайте пронумерованный список из квадратов чисел от 1 до 10. */
// const list = document.createElement('ol');
// document.body.append(list);
// for (let i = 1; i <= 10; i++){
// 	let item = document.createElement('li');
// 	item.innerText = i ** 2;
// 	list.append(item);
// }

//TODO Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в div #root.
// const links = [
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
// const div = document.querySelector('#container');
// for (let i = 0; i < links.length; i++){
// 	let a = document.createElement('a');
// 	a.setAttribute('href', links[i].link);
// 	a.innerText = links[i].title;
// 	let p = document.createElement('p');
// 	p.append(a);
// 	div.append(p);
// }

//TODO Создаем функцию, которая как аргумент \принимает ссылку на картинку и ссылку на сайт и возвращает картинку со ссылкой внутри.
// function magic(img, link) {
// 	const image = document.createElement('img');
// 	image.setAttribute('src', img);
// 	const a = document.createElement('a');
// 	a.setAttribute('href', link);
// 	a.append(image);
// 	return a;
// };
// const web = magic("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89", "https://www.pexels.com/");
// document.body.append(web);

//TODO 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.
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
// const list = document.createElement('ol');
// let total = document.createElement('p');
// const div = document.querySelector('#container');
// div.append(list, total);
// let sumOf = 0;
// for (let i = 0; i < product.length; i++){
// 	let item = document.createElement('li');
// 	list.append(item);
// 	let sum = product[i].price - (product[i].price * (product[i].count / 100));
// 	let sumProduct = sumOf += sum;
// 	let x = product.length;
// 	item.innerText = ("Product: " + product[i].title + "; price with count is: " + sum);
// 	total.innerText = ("Total products: " + x + "; sum of products is: " + sumProduct);
// }

//TODO 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.
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
// for (let i = 0; i < dog.length; i++){
// 	let p = document.createElement('p');
// 	p.innerText = (`${dog[i].breed}'s;  age is:   ${dog[i].age}`);
// 	document.body.append(p);
// }

//TODO 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.
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
// const listOf = document.createElement('ul');
// document.body.append(listOf);
// for (let i = 0; i < list.length; i++){
// 	let item = document.createElement('li');
// 	item.innerText = (`name: ${list[i].name},  year: ${list[i].year}`);
// 	listOf.append(item);
// }

//TODO  Создать в скриптах 2 кнопки. первая с знаком + а вторая с знаком минус -. При клике на плюс увидеть слово плюс, а при клике на минус увидеть слово минус.
// const btn1 = document.createElement('button');
// btn1.innerText = "+";
// const btn2 = document.createElement('button');
// btn2.innerText = "-";
// const p = document.createElement('p');
// document.body.append(btn1, btn2, p);
// btn1.onclick = () => {
// 	p.innerText = "plus";
// }
// btn2.onclick = () => {
// 	p.innerText = "minus";
// }

 //TODO Создать переменную с значением 0. При клике на плюс увеличить переменную на 1, а при клике на минус уменьшаем переменную на 1.
// const btn1 = document.createElement('button');
// btn1.innerText = "+";
// const btn2 = document.createElement('button');
// btn2.innerText = "-";
// const p = document.createElement('p');
// let num = 0;
// document.body.append(btn1, btn2, p);
// btn1.onclick = () => {
// 	p.innerText = num++;
// }
// btn2.onclick = () => {
// 	p.innerText = num--;
// }

//TODO  Отследить все клики на клавиатуре.
// const text = document.createElement('p');
// document.body.append(text);
// let tContent = text.textContent;
// addEventListener('keydown', (e) => {
// 	tContent += e.key;
// 	text.innerText = tContent;
// });

 //TODO На основе массива создать параграфы. При клике на параграф должны появляться звёздочки.
//   const array = [
// 	 "This is some text",
// 	 "You can use event listener",
// 	 "Future frontend developer",
// 	 "Neve give up",
// ];
// for (let i = 0; i < array.length; i++){
// 	let text = document.createElement('p');
// 	text.innerText = array[i];
// 	document.body.append(text);
// 	text.onclick = () => {
// 		let pContent = '';
// 		for (let i = 0; i < text.innerText.length; i++){
// 			pContent += "*";
// 		}
// 		text.innerText = pContent;
// 	}
// };

//TODO Создайте программу, которая генерирует кнопки на основе массива строк и выводит их в интерфейс. При нажатии на кнопку текст должен меняться на "Clicked"
// const text = ["Text1", "Text2", "Text3"];
// for (let i = 0; i < text.length; i++){
// 	let btn = document.createElement('button');
// 	btn.innerText = text[i];
// 	document.body.append(btn);
// 	btn.onclick = () => {
// 		btn.innerText = "Clicked";
// 		btn.style.padding = '15px';
// 		btn.style.borderRadius = '15px';
// 		btn.style.backgroundColor = 'orange';
// 		btn.style.color = 'white';
// 		btn.style.border = '2px solid brown';
// 	}
// };

//TODO Создать 10 парагрофов и внутри параграфов будут числа от 1 до 10. При нажатии на параграф добавим ему класс.active, который будет менять ему цвет файла.
// for (let i = 1; i <= 10; i++){
// 	let p = document.createElement('p');
// 	p.innerText = i;
// 	document.body.append(p);
// 	p.onclick = () => {
// 		if (p.classList[0] !== 'active') {
// 			p.classList.remove('active');
// 		} else {
// 			p.classList.add('active');
// 		}
// 		p.classList.toggle('active');
// 	}
// }

//TODO Добавляем параграф и кнопку в HTML. Приклике на кнопку паруграфу добавляем класс.
// const p = document.createElement('p');
// p.innerText = "Hello friend!";
// const btn = document.createElement("button");
// btn.innerText = "Click";
// btn.style.padding = '15px 30px';
// btn.style.borderRadius = "15px";
// document.body.append(p, btn);
// btn.onclick = () => {
// 	p.classList.add("active");
// }

//TODO Работаем с body.  Создаём параграф и кнопку. Изначально текст в боди был чёрного цвета.
// const p = document.createElement('p');
// p.innerText = "I love my live!";
// p.style.color = "yellow";
// p.style.backgroundColor = "gray";
// const btn = document.createElement('button');
// btn.innerText = "Click";
// btn.style.padding = '15px 30px';
// btn.style.borderRadius = "15px";
// document.body.append(p, btn);

// const body = document.querySelector("body");

// btn.onclick = () => {
// 	body.classList.toggle("active");
// }

//! --------------FORM--------------------








