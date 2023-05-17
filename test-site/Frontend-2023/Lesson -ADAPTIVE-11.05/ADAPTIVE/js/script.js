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

// forEach
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

// map
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

// filter
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

// find
// const num = [1, 2, 3, 4, 5];
// const evenElement = num.find((element) => element % 2 === 0);
// console.log(evenElement);

// findLast
// const nums = [1, 2, 3, 4, 5];
// const evenElements = nums.findLast((element) => element % 2 === 0);
// console.log(evenElements);

// some

// every

// -----------------------------------------------------------------
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
// Напишите функцию sortStrings, которая принимает в качестве аргумента массив строк и возвращает новый массив со строками, отсортированными в алфавитном порядке.

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

// Math.random
// Перемешиваем элементы массива.
// const array = [25, 16, 7, 45, "Joe", "John"];
// array.sort(() => {
// 	return 0.5 - Math.random();
// });
// console.log(array);

// ----reduce----------
// const array = [1, 2, 3, 4];
// const sum = array.reduce((acc, current) => acc + current);
// console.log(sum);

// const string = ["q", "r", "t", "h"];
// const newString = string.reduce((acc, current) => acc + current);
// console.log(newString);

// const array = [1, 2, 3, 4];
// const sum = array.reduce((acc, current) => acc + current, 0);
// console.log(sum);

// const num = [1, 3, 5, -6. - 9, -2, 4, 7];
// const result = num.reduce((acc, current) => {
// 	if (current > 0) {
// 		return acc + current;
// 	} else {
// 		return acc;
// 	}
// }, 0);
// console.log(result);

// Найти сумму всех чётных чисел с использованием reduce и тернарного оператора.
// const num = [1, 2, 3, 6, 5, 8, 16, 12, 31];
// const result = num.reduce((acc, current) => current % 2 === 0 ? acc + current : acc ,0);
// console.log(result);

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

const products = [
		{ id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
		{ id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
		{ id: 3, title: "сноуборд", price: 20000, marks: [4, 4, 5, 4] },
		{ id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
	 ];
	 
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


products.forEach((element) => {
	element.avgMark = element.marks.reduce((acc, current) => acc + current) / element.marks.length;
	delete element.marks;
});
console.log(products);
