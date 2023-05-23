// setTimeout(callback, 2000)
// setTimeout(() => {
// 	console.log("Hello world")
// }, 5000);

// setInterval
// setInterval(() => {
// 	console.log("Hello world")
// }, 3000);

//
// const btn = document.querySelector("#open");
// const message = document.querySelector("#message");
// btn.onclick = function () {
// 	setTimeout(() => {
// 		message.style.display = "block";
// 	}, 2000);
// };
// --------------------------------





//------------ forEach--------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach((element, index, array) => {
// 	console.log(element + " -" + index + " . " + array);
// });

// ---------------------------------------
// const nam = ["Peter", "Rosa", "Sem", "Nikolia"];
// nam.forEach((element, index, array) => {
// 	console.log(`${element} ${index + 1}`);
// });

// --------------------
// const nams = ["Peter", "Rosa", "Sem", "Nikolia", "Vlad", "Max"];
// nams.forEach((element, index) => {
// 	if (index % 2 === 0) {
// 		 console.log(element);
// 	}
// })

// -------------------
// const numbers = [1, 2, 3, 1, 1, 2, 5, 6, 1, 4, 5, 1, 1, 5, 3, 1];
// let sum = 0;
// numbers.forEach((element) => {
// 	if (element == 1) {
// 		sum++;
// 	};
// });
// console.log(sum);
// ----------------------------






//----------------- MAP--------------------
// const a = [1, 2, 2, 3, 5, 4];
// ---------------------------------
// const a = [];
// a[0] = 5;
// a[4] = 6;

// let b = a.map(item => {
// 	console.log(item);
// 	return item * 3;
// });
// console.log(b);
// ---------------------------------------
// let b = a.map((item, index) => {
// 	// console.log(item);
// 	return item * 4;
// });
// console.log(b);

// ---------------------------------------------
// [1,2,3] => [2,3,4]

// const numb = [1, 2, 3, 4];
// const news = numb.map((element, index, array) => {
//   return element ** 2;
// });
// console.log(numb, news);

// -------------------------------------
// const numbers = [1, 2, -5, 5, -6, -8, 1, 6, 7, -1];
// let plus = numbers.map((element) => {
// 	if (element < 0) {
// 		return element * -1;
// 	} else {
// 		return element;
// 	}
// });
// console.log(plus);
// -----------------------------------------
// const numbers = [1,2,-5,5,-6,-8,1,6,7,-1];
// let plus = numbers.map((element ) => element < 0 ? element*(-1) : element
// );
// console.log(plus);
// -----------------------------------
// const string = ["hello", "my", "friend"];

// let fixed = string.map((element, index, array) => {
//     let newString = "";
//     for(let i = element.length - 1;i >= 0; i--){
//        newString += element[i];
//     }
//     return newString;
// });
// console.log(fixed);

// ----------------------
// const string = ["hello", "my", "friend"];
// //                ["h","e","l","l", "o"]
// const fixed = string.map((word) => word.split("").reverse().join(""));

// console.log(fixed);
// ---------------------------------------------------

// -------------------------------------------------------
// Выведение температуры по цельсию.
// const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2];
// F =C*1.8 + 32 Формула перевода с цельсий в ференгейты.

// const z = [];
// let tF = temp.map(item => {
// 	console.log(item);
// 	return 10+item * 1.8;
// });
// console.log(tF);

// ------------------------------------
// let a = [33, 44, 55];
// a[10] = 90;

// let b = a.map((item, index, array) => {
// 	if (index == 1) {
// 		array[index + 1] = 66;
// 	}
// 	return item;
// });
// console.log(b);

// -------------------------------
// Форматируем строки, убираем пробелы - trim() -
// const z = [
// 	{ "name": 'Ivan', 'order': 12, 'sum': '123,5' },
// 	{ "name": 'Sergey     ', 'order': 12, 'sum': '123.5' },
// 	{ "name": 'matilda  ', 'order': 12, 'sum': '123, 5' },
// 	{ "name": 'Ivanov Petr  ', 'order': 12, 'sum': '123,50' },
// ];
// const zBack = z.map(item => {
// 	item.name = item.name.trim().toLocaleLowerCase();
// 	return item;
// });
// console.log(zBack);
// --------------------------------------






// -----------------FILTER-----------------------------
// const a = [1, 2, 2, 3, 5, 4, 8, 143, 0, 678, 54];

// let b = a.filter((item, index) => {
// 	if (item > 7 && item % 2 === 0) {
// 		return true;
// 	}
// });
// console.log(b);
// -------------------------

// const nums = [1, 2, -6, -3, 2, 7, 8];
// const positive = nums.filter((element) => element > 0);
// console.log(positive);
// console.log(nums);

// --------------------------------
// const nums = [1, 2, 6, 3, 2, 7, 8];
// const even = nums.filter((element) => element % 2 == 0);
// console.log(even);

// --------------------------------------------
// const str = ['apple', 'banana', 'cherry', 'kiwi'];
// const newStr = str.filter((element) => element.length >= 5);
// console.log(newStr);

// -----------------------------------
// const number = [10, 20, 3, 50, 17, 16, 12, 13, 70];
// const bigNum = number.filter((element) => element >= 10 && element <= 30);
// console.log(bigNum);

// ------------------------
// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Shirt", category: "Clothing" },
//   { name: "Smartphone", category: "Electronics" },
//   { name: "Dior", category: "bag" },
//   { name: "Kafka", category: "book" },
// ];
// const newProducts = products.filter((element) => element.category === "Electronics");
// console.log(newProducts);

// -------------------------------------
// const object = [
// 	{ name: 'Alice', age: 30, isActive: true },
// 	{ name: 'Bob', age: 25, isActive: false },
// 	{ name: 'Charlie', age: 35, isActive: true },
// 	{ name: 'David', age: 28, isActive: false }
//  ];
// const isActiv = object.filter((element) => element.age >= 30 && element.isActive);
// console.log(isActiv);

// ------------------------------------







//---------------- find---------------------------
// const a = [20, 30, 40, 50, 60];
// let b = a.find(item => {
// 	if (item >= 33 && item <= 45) {
// 		return true;
// 	}
// });
// console.log(b);
// ------------------------------------------
// const z = [
// 	{ name: 'Alice', age: 30 },
// 	{ name: 'Bob', age: 25 },
// 	{ name: 'Charlie', age: 35 },
// 	{ name: 'David', age: 14 }
// ];
// let s = z.find(item => {
// 	if (item.age <= 18) {
// 		return true;
// 	}
// });
// console.log(s);
// ----------------------------------
// const num = [1, 2, 3, 4, 5];
// const evenElement = num.find((element) => element % 2 === 0);
// console.log(evenElement);
// ----------------------------------------------------------




// ------------------findIndex-----------------------
// const n = [1, 2, 3, 6, 8, 9, 5, 1, 7];
// let b = n.findIndex(item => {
// 	if (item > 30) {
// 		return true;
// 	}
// });
// console.log(b);
// -----------------------------------------




// ------------------findLast-----------------------
// const nums = [1, 2, 3, 4, 5];
// const evenElements = nums.findLast((element) => element % 2 === 0);
// console.log(evenElements);
// -----------------------------------------------------------------




// --------lastIndexOf---------------------
// const d = [20, 30, 40, 50, 60];
// const a = 'hello';
// let b = a.lastIndexOf('s');
// console.log(b);
// ------------------------------






// -----sort--------
// const nums = [1, 2, 3, 6, 8, 9, 5, 1, 7];
// по возрастанию
// nums.sort((a, b) => a - b);
// console.log(nums);
// по убыванию
// nums.sort((a, b) => b - a);
// console.log(nums);

// const str = [aq, ar, ba, uu, kk, ga, uf, ih, kv];
// str.sort();
// str.reverse();
// console.log(str);

// -------------------------------------
// const string = [
// 	{id: 1, title: "велосипед", price: 45000},
// 	{id: 2, title:"самокат", price: 15000},
// 	{id: 3, title: "сноуборд", price: 20000},
// 	{id: 4, title: "лыжи", price: 22000}
// ];

// 	string.sort((a, b) => a.price - b.price);

// console.log(string);

// --------------------------------------------
// Напишите функцию sortStrings, которая принимает в качестве аргумента массив строк
//  и возвращает новый массив со строками,
// 	отсортированными в алфавитном порядке.

// const sortStrings = function (array) {
// 	const result = [];
// 	result.push(array.sort());
// 	return result
// }

// --------------------------------------
// Написать функцию, которая возвращает двa наименьших чиселa.
// function sumSmallNums(nums) {
// 	nums.sort((a, b) => a - b);
// 	return nums[0] + nums[1];
// }
// console.log(sumSmallNums([4, 6, 7, 2, 1, 2, 4, 8]));

// ---------------------------------------
// Написать функцию, которая возвращает сумму двух наименьших положительных чисел. Методы: filter, sort.
// function sumSmallNums(nums) {
// 	const arr = nums.filter((element) => element > 0);
// 	arr.sort((a, b) => a - b);
// 	return arr[0] + arr[1];
// }
// console.log(sumSmallNums([-1, 3, 5, 7, -4, 1, 6, -1]
// ));
// ---------------------------





//-------------- Math.random---------------------
// Перемешиваем элементы массива.
// const array = [25, 16, 7, 45, "Joe", "John"];
// array.sort(() => {
// 	return 0.5 - Math.random();
// });
// console.log(array);





// -------REDUCE----------
// Выводим все положительные числа.
// let a = [-3, 22, 33, 44, -5, 7, -6];

// let b = a.reduce((acc, item) => {
// 	// acc = acc + ' ' + item;
// 	if (item > 0) {
// 		acc += item;
// 	}
// 		return acc;
// }, 0);
// console.log(b);
// ---------------------------------

// Находим максимальное число в массиве.
// let a = [66, -3, 22, 33, 44, -5, 7, -6];

// let b = a.reduce((acc, item) => {
// 	if (item > acc) {
// 		acc = item;
// 	}
// 		return acc;
// });
// console.log(b);

// ----------------------------------
// Переиндексируем массив.
// Переиндексация  - это создание на основе массива обьекта.
//  Получить упрощённый вариант массива.
// Узнать только - id - но не тянуть весь массив.
// let a = [
// 	{ "id": 55, "city": "arc"},
// 	{ "id": 75, "city": "rca"},
// 	{"id": 175, "city": "bra"}
// ];
// let b = a.reduce((acc, item) => {
// 	acc.push(item.id);
// 		return acc;
// }, []);
// console.log(b);
// -------------------------------------

// const array = [1, 2, 3, 4];
// const sum = array.reduce((acc, current) => acc + current);
// console.log(sum);
// ----------------------------------

// const string = ["q", "r", "t", "h"];
// const newString = string.reduce((acc, current) => acc + current);
// console.log(newString);
// --------------------------------------

// const array = [1, 2, 3, 4];
// const sum = array.reduce((acc, current) => acc + current, 0);
// console.log(sum);
// -------------------------------------------

// const num = [1, 3, 5, -6, - 9, -2, 4, 7];
// const result = num.reduce((acc, current) => {
// 	if (current > 0) {
// 		return acc + current;
// 	} else {
// 		return acc;
// 	}
// }, 0);
// console.log(result);
// ----------------------------------------

// Найти сумму всех чётных чисел с использованием reduce и тернарного оператора.
// const num = [1, 2, 3, 6, 5, 8, 16, 12, 31];
// const result = num.reduce((acc, current) => current % 2 === 0 ? acc + current : acc ,0);
// console.log(result);
// ------------------------------------------------

// Найти максимальное число массива.
// const num = [1, 2, 3, 6, 5, 8, 16, 12, 31];
// const maxNumber = num.reduce((acc, current) => {
// 	if (current > acc) {
// 		return current;
// 	} else {
// 		return acc;
// 	}
// }, 0);
// console.log(maxNumber);

// -----------------------------------------
// const arr = [
// 	{ id: 1, price: 130 },
// 	{ id: 2, price: 230 },
// 	{ id: 3, price: 100 },
// 	{ id: 4, price: 300 },
// ];
// const maxPrice = arr.reduce((acc, current) => current.price > acc.price ? current : acc);
// console.log(maxPrice);

// const maxPrice = arr.reduce((acc, current) => {
// 	if (current.price > acc.price) {
// 		return current;
// 	} else {
// 		return acc;
// 	}
// });
// console.log(maxPrice);

// const products = [
// 		{ id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
// 		{ id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
// 		{ id: 3, title: "сноуборд", price: 20000, marks: [4, 4, 5, 4] },
// 		{ id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
// 	 ];
	 
// products.forEach((elem) => {
// 	elem.sum_marks = elem.marks.reduce((acc, current) => acc + current);
// 	delete elem.marks;
// });
// console.log(products);


// products.forEach((element) => {
// 	element.maxMark = element.marks.reduce((acc, current) => acc > current ? acc : current);
// 	delete element.marks;
// });
// console.log(products);


// products.forEach((element) => {
// 	element.avgMark = element.marks.reduce((acc, current) => acc + current) / element.marks.length;
// 	delete element.marks;
// });
// console.log(products);
// ----------------------------------------------






// ----indexOf----------
// const a = [3, 9, 8, 7, 5, 7, 5, 2];
// const d = ['Hi', 'Hello'];
// console.table(a);
// console.log(d.indexOf('Hello'));

// 4 - добавляем номер (индекса) позиции с какой начинать искать.
// console.log(a.indexOf(5, 4));

// if (a.indexOf(-7) !== -1) {
// 	console.log('yes');
// } else {
// 	console.log('no');
// }

// function indexOfEmul(ar, item, from = 0) {
	
// 	let result = -1;
// 	for (let i = from; i < ar.length; i++) {
// 		if (ar[i] === item) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }
// console.log(indexOfEmul(a, 5, 5));
// ---------------------------------







// ------------INCLUDES-----------------------

// const test = [44, 55, 66, 77, 88, 2, 3, 4];

// if (test.includes(77, 3)) {
// 	console.log('yes');
// } else {
// 	console.log('no');
// }
// ---------------------
// const str = 'adghsnjfg';
// if (str.includes('a1dg')) {
// 	console.log('yes');
// } else {
// 	console.log('no');
// };
// ---------------------------

// const users = [
// 	{ "name": "Ivanov", "age": 44 },
// 	{ "name": "Petrov", "age": 14 },
// 	{ "name": "Pitrov", "age": 37 },
// 	{ "name": "Alexeev", "age": 43 },
// 	{ "name": "Ikonov", "age": 49 }
// ];
// let newUsers = users.filter(item => item.name.includes('ov'));

// console.log(newUsers);
// ---------------------------



	

	

// -----------------flat--------------------
// let a = [3, 4, 5, 6, 8, [6, 9, [45, 67, 89], 3]];
// let b = a.flat(2);

// console.log(b);
// ----------------------------
// let d = [3, [4, 5]];
// d[100] = 100;
// let z = d.flat();
// console.log(d);
// // (101) [3, Array(2), empty × 98, 100]
// console.log(z);
// // (4) [3, 4, 5, 100]

// -------------alternative---reduce, concat------------
// const arr = [1, 2, 3, , 4, [5, 6]];
// const array = arr.reduce((acc, val) => acc.concat(val), []);
// // const array = arr.flat(Infinity);
// console.log(array);

// const arr = [1, 2, 3, , 4, [5, 6, [1, 2, 3]]];
// function isFlat(arr, d = 1) {
// 	return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? isFlat(val, d - 1) : val), [])
// 		: arr.slice();
// };
// isFlat(arr, Infinity);
// ---------------------------------




// ----------------reduceRight------------------
// const a = [[1, 2], [3, 4], [5, 6, 7, 8], [54, 32]];
// const b = a.reduceRight((a, b) => {
// 	return a.concat(b);
// }, []);
// console.log(b);

// const z = [1, 4, 6, 8, 56, 90];
// const x = z.reduceRight((a, b) => { return a + b });
// console.log(x);




// -------------fill----------------------
// let a = [1, 1, 1, 1, 1, 1, 1, 1];
// let b = a.fill(2, 1, 4);
// console.log(a);
// console.log(b);
// -------------------------------------





// ------------keys------------------------
// let a = [2, 4, 5, 6, 8, 9];
// console.log(Object.keys(a));
// // Мы получаем индексы вложенных элементов.
// // (6) ['0', '1', '2', '3', '4', '5']

// let b = { hi: 3, hello: 5 };
// console.log(Object.keys(b));
// ['hi', 'hello']
// -----------------------------------------------






// ------------flatMap------------
// const arr = [1, 2, 3, [6, 8, 9, 5, 9], 4, [56, 78, -9], 5];
// const a = arr.flatMap(item => item);
// console.log(a);
// ----------------------------------

// -----------alternative-----reduce----concat-------------
// const a = [1, 2, 4, 6, -9, 68];
// let b = a.flatMap(item => item * 2);
// console.log(b);

// let c = a.reduce((acc, elem) => acc.concat(elem * 2), []);
// console.log(c);

// const d = [3, 4, 5, [7, 8, 9, -7], 5, 6, [45, 'index', undefined, 0, 68, " "], 7];
// let flat = d.flat();
// console.log(flat);

// let z = d.flatMap(el => el);
// console.log(z);

// let r = d.reduce((acc, num) => acc.concat(num), []);
// console.log(r);

// const arr1 = [2, 4, 6, 8, 5];
// const arr2 = arr1.map(element => [element * 2]);
// const arr3 = arr1.flatMap(element => [element * 2]);
// console.log(arr2);
// console.log(arr3);
// ------------------------------------------

// const allActivities = [
// 	{ title: 'Офис', coordinates: [50.123, 3.291] },
// 	{ title: 'Спортзал', coordinates: [1.238, 4.292] },
// 	{ title: 'Спортзал', coordinates: [1.268, 4.293] },
// 	{ title: 'Спортзал', coordinates: [1.298, 4.294] },
// ];
// const mapArr = allActivities.map(elem => elem.coordinates);
// const arra = allActivities.flatMap(elem => elem.coordinates);

// console.log(mapArr);
// console.log(arra);
// ---------------------------------------------

// const orders = [
// 	{
// 		id: 1,
// 		products: [
// 			{ name: 'Чизкейк', price: 1.99 },
// 			{ name: 'Бисквит', price: 4.99 },
// 		]
// 	},
// 	{
// 		id: 2,
// 		products: [
// 			{ name: 'Шоколад', price: 5.59 },
// 			{ name: 'Зефир', price: 8.99 },
// 		]
// 	}
// ];

// const arr5 = orders.map(
// 	(order) => order.products.map(product => product.name)
// );
// console.log(arr5);
// const arr6 = arr5.flat();
// console.log(arr6);
 

// const arr7 = orders.flatMap(
// 	(elem) => elem.products.map(product => product.name));

// console.log(arr7);
// ------------------------------------





// ------------------------SHIFT----------------
// let a = [3, 4, 5, 6, 8];
// let b = a.shift();
// console.log(b);
// console.log(a);
// -----------------------------





// -----------unshift------------
// let c = a.unshift(22);
// console.log(a);
// console.log(c);
// -------------------------------






// ----------------------slice------------------
// let d = [22, 44, 66, 456, 3, 1, -8, 33, 12];
// let f = d.slice(3, 7);
// console.log(d);
// console.log(f);

// let e = 'hello';
// console.log(e.slice(1, 4));
// ------------------------------------





// ---------------concat-----------------------
// const a = [21, 22, 23, 24];
// const b = [31, 32, 33, 34];
// const c = [38, 39, 37, 32];
// const g = [];
// g[22] = 100;
// const d = a.concat(b, c, g);
// console.log(d);
// // concat -> string
// let f = 'hello';
// let h = 'hi';
// let z = f.concat(h);
// console.log(z);
// --------------------------------






// -----splice-------------------
// let a = [33, 44, 55, 66, 77, 88];
// a.splice(2, 2, 'hi', 'dd', 'tt', 'ss');
// console.log(a);
// --------------------------------







// ----------every-----------
// const a = [4, 5, 6, 7, 8];
// let b = a.every(element => {
// 	if (element > 3) {
// 		return true;
// 	}
// });
// console.log(b);

// Проверить всели посетители являются совершеннолетними.
// const d = [
// 	{ name: "ivan", age: 23 },
// 	{ name: "ikar", age: 20 },
// 	{ name: "islam", age: 20 },
// 	{ name: "sem", age: 22 },
// 	{ name: "rima", age: 21 },
// ];
// let z = d.every(user => {
// 	if (user.age >= 16) {
// 		return true;
// 	}
// });
// console.log(z);
// ---------------------------






// ------------some-----------------
// const d = [
// 	{ name: "ivan", age: 23 },
// 	{ name: "ikar", age: 20 },
// 	{ name: "islam", age: 20 },
// 	{ name: "sem", age: 15 },
// 	{ name: "rima", age: 21 },
// ];
// let z = d.some(user => {
// 	if (user.age < 16) {
// 		return true;
// 	}
// });
// console.log(z);
// ---------------------------------





// -----------------split--------------------
// let str = 'hello, hi word, friend test';
// let a = str.split('');
// ['h', 'e', 'l', 'l', 'o', ',', ' ', 'h', 'i', ' ', 'w', 'o', 'r', 'd', ',', ' ', 'f', 'r', 'i', 'e', 'n', 'd', ' ', 't', 'e', 's', 't']
// console.log(a);
// -----------------------------





// -------------------join-------------------
// let string = ['h', 'e', 'l', 'l', 'o'];
// let b = string.join(' ');

// console.log(b);
// -------------------------------------------



// -------------at-------------------
// const a = [2, 4, 5, 6, 8, 90, -65];
// // a.at(-1); a.at(0); a.at(5);
// const b = a.at(3);
// console.log(b);
// // ------------------------------
// const x = ['hello', 'my', 'friend'];

// function retLast(array) {
// 	return array.at(-1);
// };
// console.log(retLast(x));
// ----------------------------------------





// --------------copyWithin-------------------
// const a = [1, 2, 3, 4, 5, 6, 8, 9];
// const b = a.copyWithin(0, 4, 6);
// // Скопирует  элементы - 5, 6 -
// // и поставит их на позицию - 0 - вместо элементов - 1, 2 -
// // получаем - (8) [5, 6, 3, 4, 5, 6, 8, 9]
// // a.copyWithin(0, 4)
// // Скопирует  элементы - 5, 6, 8, 9 -
// // и поставит их на позицию - 0 -
// // вместо элементов - 1, 2, 3, 4 -
// // получаем  - (8) [5, 6, 8, 9, 5, 6, 8, 9]
// console.log(b);
// ----------------------------------






// --------------entries--------------------
// const a = ['a', 'b', 'd', 's', 'r'];
// const b = a.entries();
// console.log(b.next().value);
// console.log(b.next().value);
// console.log(b.next().value);
// console.log(b.next().value);
// console.log(b.next().value);
// Получаем: [0, 'a'] [1, 'b'] [2, 'd'] [3, 's'] [4, 'r']
// -----------------------------------------




// -----------values-------------------
// const c = a.values();
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
// Получаем: a  b  d  s  r
// -----------------------------




