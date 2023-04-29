/* <form action="" method="get/post" name="" target="">
<input name="userName" type="checkbox"/>
<input name="userName" type="checkbox"/>
<input name="userName" type="radio"/>
<input name="userName" type="radio"/>
<input name="userName" type="radio"/>
<input type="text" name="text"/>
<button>Send</button>
placeholder="Write your name" 
value="Hey"
size="5"
 maxlength="2" 
</form> */

// const form = document.querySelector("form");
// const btn = document.querySelector("button");

// btn.onclock = (e) => {
// 	e.preventDefault();
// 	alert("Good");
// }

// form.onsubmit = (e) => {
// 	e.preventDefault();
// 	alert("Gooood")
// };
//-----------------------------------------------------------//
// form
const form = document.querySelector('.form');
const _name = document.querySelector('#name');
const priceOf = document.querySelector('#price');

// form2
const form2 = document.querySelector(".form2");
const searchInput = document.querySelector("#search");

// sort button
/*Создаём кнопку для сортировки карточек.*/
const sortBtn = document.querySelector("#sortBtn");

//section for products
/* Создаём фразу - Продуктов нет. -  если недобавлено никаких заказов эта фраза будет появляться. */
const section = document.querySelector("#productsList");
const noProduct = document.createElement("h2");
noProduct.innerText = "No product!";
noProduct.style.textAlign = "center";
section.append(noProduct);

// section sum of products
const sumBtn = document.querySelector('.sum__button');
const deleteBtn = document.querySelector('.dlete');
const section2 = document.querySelector('.total');

// ----------------------------------------------------------

let products = [];
form.onsubmit = (e) => {
	e.preventDefault(); /* Отменяем действие браузера по умолчанию.*/
	products.push({ title: _name.value, price: priceOf.value });/* каждая карточка передаётся в виде обьекта. Значение - value - берутся из - input - которые писал пользователь.*/
	_name.value = "";
	priceOf.value = ""; /* Опустошаем input.*/
	newProducts();/* Вызывая функцию, отображаем каpточки на странице.*/
};

/* Записываем функцию. которая как аргумент принимает имя продукта и цену и создаёт - div - с дмя ззаголовками внутри и будет возвращать нам этот - div -. И создаём кнопку.*/
function createNode(title, price, index) { /*Добавим  - index -  чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку */   
	const div = document.createElement('div');

	const h1 = document.createElement('h3');
	h1.innerText = title;

	const h2 = document.createElement('h3');
	h2.innerText = price;

	const btn = closeBtn(); /*Добавляем удаляющую кнопку в карточки.*/

	/* Добавляем действие  - onclick - на появляющуюся кнопку - btn - для удаления карточки. */
	btn.onclick = () => {
		section.removeChild(div); /* Удаляем сам тег карточки при помощи метода - removeChild().*/

		/* Способ удаления элемента из массива.*/
		/* Можно удалить элемент из массива при помощи метода  - splice - */
		/*  products.splice(id, 1); */
		const result = [];
        for (let i = 0; i < products.length; i++) {
            if (i !== index) {  /* не равен */
                result.push(products[i]);
			  }; /*console.log(result);*/
        }; 
        products = result;
		newProducts();
		if (!products.length) {
			section.append(noProduct);
		}
	};  //----------------------------------------------------------------------

	div.append(h1, h2, btn); /* Добавляем удаляющую кнопку в карточки.*/
	div.classList.add('productCard');

	/* Добавляем событие на div карточку при наведении меняем значение - opacity -  будет появляться удаляющая кнопка btn */
	div.onmouseover = () => {
		btn.style.opacity = "1";
	};

	div.onmouseleave = () => {
		btn.style.opacity = "0";
	};  // -----------------------------------------------------------------------

	section.append(div);
	let isBody = document.querySelector('.productCard'); 


};

function summe() {
	const arr = [];
	for (let i = 0; i < products.length; i++){
		if(products[0])
	}
}

/* Записываем функцию, которая на основании нашего массива будет содавать наши  - div - карточки*/
function newProducts() {
	section.innerHTML = ""; /* Делаем обнуление  - section -  кaждый раз при добавлении чего то  форму т.е при onsubmit. */
	for (let i = 0; i < products.length; i++){
		createNode(products[i].title, products[i].price, i); /*Добавим - i - чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку */
	}

};

// Создаём функцию function closeBtn() удаляющей кнопки при помощи которой мы сможем удалять наши карточки.
function closeBtn() {
	const btn = document.createElement("button");
	btn.innerText = "X";
	btn.classList.add("close");
	return btn;
}  // ---------------------------------------------------

/* При помощи поиска - Мы берём значение из нашей формы -  input - и оставим только те карточки  - title - которых такие же как и значение  - title - в - input -*/
form2.onsubmit = (e) => {
	e.preventDefault();
	section.innerText = "";
	for (let i = 0; i < products.length; i++) {
		if (products[i].title === searchInput.value) {
			createNode(products[i].title, products[i].price, i);
		}
	}
};
// ----------------------------------------------------------------

//sort button
/* Используем метод  - sort -  для сортировки карточек.*/
/* Этот метод  - sort -  принимает только одну - callback -  функцию. Эта функция называется сравнение.  Эта функция принимает 2 аргумента  a  и  b - Это элементы в нашем массиве. Где - a - это первый елемент и - b - это второй. Они сравниваются между собой и меняются местами (по возрастанию и убыванию), таким образом сравниваются все эдементы массива.
a.price - b.price  - сравнение при возрастании.  
b.price - a.price  - сравнение при убывании.*/

sortBtn.onclick = () => {
	products.sort((a, b) => a.price - b.price);
	newProducts();
};
// -------------------------------------------------------------------

function totalSum() {
	const div = document.createElement('div');
	const h5 = document.createElement('h4');
	h5.innerText = "Total sum:";
	const h6 = document.createElement('h4');
	div.append(h5, h6);
	div.classList.add('sumOfProducts');
	section2.append(div);

};

/* 
Изменить эту функцию так, что бы могли использовать её как и для  - form2.onsubmit -  и для первоночальной её формы - newProducts();
function newProducts() {
	section.innerHTML = "";
	for (let i = 0; i < products.length; i++){
		createNode(products[i].title, products[i].price, i); /*Добавим - i - чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку 
	}
};
*/