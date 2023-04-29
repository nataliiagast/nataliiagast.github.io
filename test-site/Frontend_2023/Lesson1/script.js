// const text = document.createElement("p");
// text.innerText = "This is text!!!";
// document.body.append(text);

// console.log(text.style);


// text.style.color = "red";
// text.style.fontWeight = "bold";
// text.style.fontSize = "20px";

// WRONG!!! text.style = "color: 'red'";


// text.style.csstext = "color: red; font-weight: bold; font-size: 20px";
// text.style.fontSize = "30px"; // Перезаписывает предыдущие условия.

//-----------------------------------------//
// onmouseover
// onmouseout
// const div = document.createElement("div");
// div.style.width = "200px";
// div.style.height = "200px";
// div.style.border = "1px solid black";
// div.style.backgroundColor = "yellow";

// document.body.append("div");

// div.onmouseover = () => {
// 	div.style.backgroundColor = "yellow";
// };
// div.onmouseout = () => {
// 	div.style.backgroundColor = "pink";
// };

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.

// for (let i = 0; i <= 255; i+=5){
// 	const div = document.createElement("div");
// 	div.style.width = "200px";
// 	div.style.height = "200px";
// 	div.style.backgroundColor = `rgb(128, 128, ${i})`;
// 	div.style.border = "1px solid black";
// 	div.onmouseover = () => {
// 		div.style.backgroundColor = "orange";
// 	};
// 	div.onmouseout = () => {
// 		div.style.backgroundColor = `rgb(128, 128, ${i})`;
// 	};
// 	document.body.append(div);

// };

// classList
// const p = document.querySelector("p");
// console.log(p.classList);
//classList.add()

// p.classList.add("color", "test", "test2");
// console.log(p.classList);

//classlist.remove() - only one class

// p.classList.remove("color");
// conso;
le.log(p.classList);

//classList.replace(1class, 2class);

// p.classList.replace("test", "color");


// const div = document.querySelector("div");
// for (let i = 1; i <= 10; i++) {
//   const p = document.createElement("p");
//   p.innerText = i;
//   div.append(p);

// 	p.onclick = () => {
	// 	if (p.classList[0] === "active") {
	// 		p.classList.remove("active"); 
	// 	} else {
	// 		p.classList.add("active");
	//   }
// 		p.classList.toggle("active");
//   }
// };

//-------------------------------//

// const text = document.querySelector("p");
// const but = document.querySelector("button");
// but.onclick = () => {
// 	text.classList.toggle("color");
// };

//----------------------------//
// const body = document.querySelector("body");
// const button = document.querySelector("button");
// button

//---------------------//

// const words = [
// 	{
// 	  en: "book",
// 	  ru: "книга",
// 	},
// 	{
// 	  en: "sun",
// 	  ru: "солнце",
// 	},
// 	{
// 	  en: "cup",
// 	  ru: "кружка",
// 	},
// 	{
// 	  en: "pen",
// 	  ru: "ручка",
// 	},
// 	{
// 	  en: "table",
// 	  ru: "стол",
// 	},
//  ];


	// В каждом диве должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на див один параграф получает класс с display: none а второй с display: block.

	// for (let i = 0; i < words.length; i++) {
	// 	const div = document.createElement("div");
	// 	const pRu = document.createElement("p");
	// 	const pEn = document.createElement("p");
	// 	pRu.classList.add("show");
	// 	pEn.classList.add("hide");

	// 	document.body.append(div);
	// 	div.append(pRu);
	// 	div.append(pEn);
	// 	pRu.innerText = words[i].ru;
	// 	pEn.innerText = words[i].en
	// 	div.onclick = () => {
	// 		pRu.classList.toggle("hide");
	// 		pEn.classList.toggle("show");
	// 		pRu.classList.toggle("show");
	// 		pEn.classList.toggle("hide");
	// 	}
	// }
// .hide {
// 	display: none;
//  }
 
//  .show {
// 	display: block;
//  }
 

//--------------------------------------//

// ["Task1", "Task2", "Task3", "Task4", "Task5","Task6", "Task7"].

// Создайте список ul с элементами из массива. При клике на пункт из списка добавляйте класс "completed" (можете добавить любой стиль). 

// Создайте кнопку, которая при нажатии скрывает все пункты с классом "completed".

const task = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"];
const body = document.querySelector("body");
const button = document.querySelector("button");

const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"];

const ul = document.createElement("ul");
document.body.append(ul);

for (i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerText = tasks[i];

    ul.append(li);

    li.onclick = () => {
        li.classList.add("completed");
    };

    console.log(li.classList);

    button.onclick = () => {
        const compl = document.querySelectorAll(".completed");

        for (let i = 0; i <compl.length; i++) {
            compl[i].classList.replace("completed", "hide");
        };

    };
}



