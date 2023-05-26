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
const newFunction = function (array, function1) {
  return function1(array);
};
function sumOfArray(array1) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
  }
  return sum;
}
function evenOfArray(array1) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}
// newFunction([1, 2, 3, 4, 6, 8, 5, 75, 84,], sumOfArray);
console.log(newFunction([1, 2, 3, 4, 6, 8, 5, 75, 84], sumOfArray));
console.log(newFunction([1, 2, 3, 4, 6, 8, 5, 75, 84], evenOfArray));

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
const btn = document.querySelector("button");

function clickBtn() {
  alert("Hello!");
}
btn.onclick = clickBtn;
btn.addEventListener("click", clickBtn);

btn.onclick = () => {
  alert("Hello!");
};
// eventListener("click", callback function)
btn.addEventListener("click", () => {
	alert("Hello!");
});

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
let number = 0;
const minOfButton = document.createElement("button");
minOfButton.innerText = "-";
const plusOfButton = document.createElement("button");
plusOfButton.innerText = "+";
document.body.append(minOfButton, plusOfButton);

minOfButton.onclick = () => {
	number--;
  console.log(number);
};
plusOfButton.onclick = () => {
	number++;
  console.log(number);
};

//-------------------------------------------//
// Создать в скриптах 2 кнопки. первая с знаком + а вторая с знаком минус.
// При клике на плюс увидеть на странице (не в консоли) слово плюс, а при клике на минус увидеть слово минус.

// let number = 0;
// const minOfButton = document.createElement("button");
// minOfButton.innerText = "-";
// const plusOfButton = document.createElement("button");
// plusOfButton.innerText = "+";
// document.body.append(minOfButton, plusOfButton);

const text = document.createElement("p");
text.innerText = "0";
document.body.appendChild(text);

minOfButton.onclick = () => {
	number--;
	text.innerText = number;
	text.innerText --
};

plusOfButton.onclick = () => {
	number++;
	text.innerText = number;
	text.innerText ++
};

// -------------------------------------------------//
// object event
//  Это обьект в котором сохранена
//  иформация о событиях.

//-------------------------------------------//
// Отследить все клики на клавиатуре.
// Это осуществляется с помощью обьекта  event.
const text = document.createElement("p");
document.body.append(text);
// Если событие относится к чему то глобальному,
//  например ко всей клавиатуре,
//  тогда используем: addEventListener.
let pContent = text.textContent;
addEventListener("keydown", (e) => {
	e.key -  //Выводятся буквы которые нажал пользователь.
	console.log(e.key);
	// Если мы хотим к предидущему тексту сохранить новы текст.
	pContent += e.key;
	text.innerText = pContent;
});

//---------------------------------------//
// На основе массива создать параграфы.
// При клике на параграф
// должны появляться звёздочки.
const array = [
	"This is some text",
	"You can use event listener",
	"Future frontend developer",
	"Neve give up",
];
for (let i = 0; i < array.length; i++) {
	const creat = document.createElement("p");
	creat.innerText = array[i];
	document.body.append(creat);
	creat.onclick = () => {
		let textLength = "";
		for (let i = 0; i < creat.innerText.length; i++) {
			textLength += "*";
		}
		creat.innerText = textLength;
	}
};

//------------------------------------------//
// Создайте программу, которая генерирует кнопки
// на основе массива строк и выводит их в интерфейс
// При нажатии на кнопку текст должен меняться на "Clicked"
const text = ["Text1", "Text2", "Text3"];
for (let i = 0; i < text.length; i++){
	const button = document.createElement("button");
	button.innerText = text[i];
	document.body.append(button);
	button.onclick = () => {
		button.innerText = "Clicked";
	 }
	}


