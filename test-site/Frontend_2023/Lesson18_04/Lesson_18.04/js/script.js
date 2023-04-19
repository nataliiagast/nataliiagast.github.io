// function decloration
// function expression
// arrow function


// function decloration //hositing (function dekloration, var)
hi();
function hi() {
	console.log("Hello!");
};
hi();


// function expression
const hello = function () {
	console.log('Hello!');
};
hello();


// arrow function
const hel = () => {
	console.log("Hello!");
};
const helLo = () => console.log("Hello!");
const helReturn = () => "Hello";


//callback funtion
// Эта функция которую мы передаём другой функции в виде аргумента.
// Переданная функция в аргументах это - callback function.
const function1 = function () {
	console.log("This is function1");
};
const function2 = function () {
	console.log("This is function2");
	return callback();
};
function2(function1);
