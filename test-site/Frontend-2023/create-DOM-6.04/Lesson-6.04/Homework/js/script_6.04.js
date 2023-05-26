

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
const newTable = [
	{
		numer: 1,
		name: "Bill Gates",
		position: "Founder Microsoft",
		salary: "$1000",
	},
	{
		numer: 2,
		name: "Steve Jobs",
		position: "Founder Apple",
		salary: "$1200",
	},
	{
		numer: 3,
		name: "Larry Page",
		position: "Founder Google",
		salary: "$1100",
	},
	{
		numer: 4,
		name: "Mark Zuckeberg",
		position: "Founder Facebook",
		salary: "$1300",
	},
];
const isNumer = "No.";
const isName = "Full Name";
const isPosition = "Position";
const isSalary = "Salary";

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);
const table = document.createElement('table'); div.appendChild(table);
const thead = document.createElement('tr');
table.appendChild(thead);
let th_1 = document.createElement('th');
th_1.innerText = isNumer;
let th_2 = document.createElement('th');
th_2.innerText = isName;
let th_3 = document.createElement('th');
th_3.innerText = isPosition;
let th_4 = document.createElement('th');
th_4.innerText = isSalary;
thead.append(th_1, th_2, th_3, th_4);

for (let i = 0; i < newTable.length; i++) {
	let list = document.createElement('tr');
	const { numer, name, position, salary } = newTable[i];
	let list_1 = document.createElement('td');
	list_1.innerText = numer;
	let list_2 = document.createElement('td');
	list_2.innerText = name;
	let list_3 = document.createElement('td');
	list_3.innerText = position;
	let list_4 = document.createElement('td');
	list_4.innerText = salary;

	table.appendChild(list);
	list.append(list_1, list_2, list_3, list_4);
};
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