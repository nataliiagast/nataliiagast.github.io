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
// classList  -  Свойство.
// Можно посмотреть какие классы есть у нашего элемента
// Можем использовать методы из этого свойства
// const p = document.querySelector("p");
// console.log(p.classList);

// classList.add(); - Этот метод добавляет классы элементу. Он принимает 2 или более аргументов - название класса.
// p.classList.add("color", "test", "test2");
// console.log(p.classList);

// classList.remove(); - Этот метод удаляет только один класс.
// p.classList.remove("color");
// console.log(p.classList);

// classList.replace(1class 2class) - Этот метод заменяет классы и принимает 2 аргумента. 1 - класс который хотим заменить, 2 - имя класса на что нужно заменить.
// p.classList.replace("test", "color");

// classList.toggle()  - ПЕРЕКЛЮЧАТЕЛЬ. Принимает только один аргумент - имя класса на которій будет переключать. Этот метод может добавлять и удалять только один класс.
// p.classList.toggle("active");


//----------------1111-----------------------//
//Создать 10 парагрофов и внутри параграфов будут числа от 1 до 10.При нажатии на параграф добавим ему класс .active  который будет менять ему цвет файла.
const div = document.querySelector("div");
for (let i = 0; i <= 10; i++){
	const p = document.createElement("p");
	p.innerText = i;
	div.append(p);
	p.onclick = () => {
		if (p.classList[0] === "active") {
			p.classList.remove("active");
		} else {
			p.classList.add("active");
		}
		p.classList.toggle("active");
	};
};
//----------------2222------------------//
// Добавляем параграф и кнопку в HTML Приклике на кнопку паруграфу добавляем класс.
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
// Создать массив из обьектов. У каждого из обьектов есть 2 ключа.Реализовать параграф который изначально будет показывать слова на английском, но при клике на него слова иеняются на русский. И также наоборот.
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
//Создать на основе обьекта создать 2 параграфа. В одном слова на русском в другом на английском. изначально скрыть параграф на русском. Приклике на английский параграф скрыть его и показать на русском. На основе каждого обьекта создать div и внутри уже 2 параграфа. onclick вешать уже на сам div.
for (let i = 0; i < words.length; i++){
	const div = document.createElement("div");
	const isRu = document.createElement("p");
	const isEn = document.createElement("p");
	isRu.classList.add("show");
	isEn.classList.add("hide");

	document.body.append(div);
	div.append(isRu);
	div.append(isEn);
	isRu.innerText = words[i].ru;
	isEn.innerText = words[i].en;
	div.onclick = () => {
		isRu.classList.toggle("hide");
		isEn.classList.toggle("show");
		isRu.classList.toggle("show");
		isEn.classList.toggle("hide");
	};
};

//-----------------5555--------------------//
// Создать список с элементами из массива. При клике на пункт из списка, добавляйте класс  "completed" (можете добавить любой стиль) Создайте кнопку, которая при нажатии скрывает все пункты с классом "completed"
const text = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"];
const ul = document.createElement("ul");
const button = document.createElement("button");
button.style.borderRadius = "15px";
button.style.padding = "15px 25px";
document.body.append(ul, button);


for (let i = 0; i < text.length; i++){
	const li = document.createElement("li");
	li.innerText = text[i];
	ul.append(li);
	li.onclick = () => {
		li.classList.add("completed")
	};
	button.onclick = () => {
		let isCom = document.querySelectorAll(".completed");
		for (let i = 0; i < isCom.length; i++) {
			isCom[i].classList.replace("completed", "hide");
		};
	};
};
