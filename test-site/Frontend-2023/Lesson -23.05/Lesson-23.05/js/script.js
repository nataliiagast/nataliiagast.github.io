// localStorage

// window.localStorage XXX

localStorage;
// setItem - добавляем данные в localStorage

// localStorage.setItem("name", "Nataliia");
// localStorage.setItem("gender", "female");

// localStorage.setItem("name", "Alina");


// // getItem - Получаем данные из localStorage

// const nameLocal = localStorage.getItem("name");
// const p = document.createElement("p");
// p.innerText = nameLocal;
// document.body.append(p);


// // removeItem - Удаляет данные из localStorage
// localStorage.removeItem("gender");


// // clear - очищает полностью localStorage
// localStorage.clear();


// const btn = document.querySelector("#toggle");
// btn.onclick = () => {
// 	const number = localStorage.getItem("value");
// 	if (number === "1") {
// 		localStorage.setItem("value", 0);
// 	} else {
// 		localStorage.setItem("value", 1);
// 	}
// };

// // !Задача.Создать форму с полем ввода.
// //  При отправке формы значение поля
// //  ввода должно сохраняться в localStorage.

// const form = document.querySelector("form");
// const input = document.querySelector("#textInput");
// form.onsubmit = (e)=>{
//     e.preventDefault();
//     const date = input.value;

// 	localStorage.setItem("value", date);
// 	input.value = "";
// }

// //! Задача.Добавьте еще одну кнопку "Загрузить".
// // При нажатии на эту кнопку, данные,
// // 	сохраненные в localStorage,
// // 		должны загружаться на страницу.
// // При отправке формы input должен очищаться
// const btn = document.querySelector("#for");
// btn.onclick = () => {
// 	input.value = localStorage.getItem('value');
// }

// //! Добавить кнопку которая будет очищать localStorage
// const btn1 = document.querySelector("#del");
// btn1.onclick = () => {
// 	localStorage.removeItem('value');
// 	input.value = "";
// }

//? --------------------------------------------
const btn = document.querySelector("#toggle");
const body = document.body;
btn.onclick = () => {
	if (body.classList.contains("light-mode")) {
		body.classList.replace("light-mode", "dark-mode");
		localStorage.setItem("mode", "dark");
	} else {
		body.classList.replace("dark-mode", "light-mode");
		localStorage.setItem("mode", "light");
	}
};

const mode = localStorage.getItem("mode");
if (mode === "dark") body.classList.replace("light-mode", "dark-mode");





// !1 уровень сложности: Прочитать следующие темы:
//      https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage 

//      https://learn.javascript.ru/localstorage 


// !Задача.Создать каунтер.Страница с двумя
//! кнопками “+” и “-” и при нажатии на какую - либо 
//! число должно меняться в соответствующую сторону.
//! Значение counter не должно слетать при перезагрузке страницы.
const btn1 = document.querySelector(".plus");
const btn2 = document.querySelector(".minus");
const a = document.querySelector(".num");
a.innerText = '';

btn1.onclick = () => {
	a.innerText++;
	const value = a.innerText;
	localStorage.setItem("number", value);
};
btn2.onclick = () => {
	a.innerText--;
	const value = a.innerText;
	localStorage.setItem("number", value);
};
const z = localStorage.getItem("number", "value");
a.innerText = z;


