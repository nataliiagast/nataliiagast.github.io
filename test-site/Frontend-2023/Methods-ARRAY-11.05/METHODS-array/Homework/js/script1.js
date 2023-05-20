// 1 уровень сложности: Прочитать следующие темы:
// 1)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/GlobalObjects/Array/Reduce
// 2)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/GlobalObjects/Array/sort


// Выполнить следующие задачи:
// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"
const num = [1, 3, 5, 7, 9, -76];
let newStr = num.join(', ');
console.log('"' + newStr + '"');


// 2)Используя метод reduce, посчитайте сколько людей проголосовали.
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let current = voters.reduce((acc, elem) => elem.voted === true ? acc + elem.voted : acc , 0);
console.log("Количество людей которые проголосовали: " +  current);

// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let sumOfProducts = wishlist.reduce((sum, product) => sum + product.price, 0);
console.log("Сумма всех выбранных товаров состовляет: " +  sumOfProducts);

// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.
const shop = [
	{ name: "Sem", orders: ["Телефон", "Наушники", "Флешка", "Зарядное устройство", "Телевизор", "Чехол"] },
	{ name: "Semona", orders: ["Наушники", "Чехол", "Зарядное устройство", "Флешка"] },
	{ name: "Karolina", orders: ["Телефон", "Чехол", "Наушники"] },
	{ name: "Semmy", orders: ["Чехол", "Наушники"] },
	{ name: "Lord", orders: ["Наушники", "Флешка", "Зарядное устройство"] },
	{ name: "Nikol", orders: ["Телефон", "Чехол", "Наушники"] }	
];
shop.forEach(product => {
	product.totalOrders = product.orders.length;
	delete product.orders;
});
console.log(shop);

// 5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
const isAge = [
	{ name: "Nik", age: 9 },
	{ name: "Nikol", age: 19 },
	{ name: "Robi", age: 16 },
	{ name: "Olha", age: 23 },
	{ name: "Oliver", age: 33 },
	{ name: "Sem", age: 23 },
	{ name: "Robert", age: 14 },
	{ name: "Albert", age: 12 },
	{ name: "Alina", age: 18 },
	
];
let isSmall = [];
let isBig = [];
isAge.forEach(person => {
	if (person.age < 16) {
		isSmall.push(person);
	}
	if (person.age >= 16){
		isBig.push(person);
	}
});

console.log("Количесво несовершеннолетних людей: " + isSmall.length);
console.log("Количество совершеннолетних людей: " + isBig.length);

// 6)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.
const ofAge = [
	{ name: "Nik", age: 33 },
	{ name: "Nikol", age: 19 },
	{ name: "Robi", age: 16 },
	{ name: "Olha", age: 23 },
	{ name: "Oliver", age: 33 },
	{ name: "Sem", age: 23 },
	{ name: "Robert", age: 44 },
	{ name: "Albert", age: 52 },
	{ name: "Alina", age: 18 },
	
];
const ofBigAge = ofAge.filter(person => person.age > 30);
console.log(ofBigAge);

// Дополнительная задача:

// Изучить все оставшиеся методы из данного источника(особенно concat, split, splice, includes,fill, flat) :
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array 