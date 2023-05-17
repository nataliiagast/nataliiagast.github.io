// document.getElementsByClassName("main-title")[0].style.color = "red";

// Выполняем плавный переход на отдел страницы выбора продуктов при нажатии на кнопку в отделе новое меню main-content.
document.getElementById("main-action-button").onclick = function () {
	document.getElementById("products").scrollIntoView({behavior: "smooth"});
}


// Выполняем плавный переход на отдел страницы при нажатии на ссылку в шапке страницы.
let links = document.querySelectorAll(".menu-item > a");
for(let i = 0; i < links.length; i++){
	links[i].onclick = function () {
		 document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
	}
}

// Выполняем плавный переход на отдел заполнения формы при нажатии на кнопку продукта.
let buttons = document.getElementsByClassName("product-button");
for(let i = 0; i < buttons.length; i++){
	buttons[i].onclick = function () {
		 document.getElementById("order").scrollIntoView({behavior: "smooth"});
	}
}
//  Выполняем валидацию нашей формы.
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("button-action").onclick = function () {
	let hasError = false;

	// Проверка - если форма не заполена - подсвечивает поля красным цветом.
	[burger, name, phone].forEach( item => {
if (!item.value){
	item.parentElement.style.background = "red";
	hasError = true;
} else {
	item.parentElement.style.background = "";
}
	});
	// Проверка - если поля заполнены - выводит на экран окно  -  Спасибо за заказ!
	if(!hasError){
		 [burger, name, phone].forEach( item => {
			  item.value = "";
		 });
		 alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
	}
}

//  Переключение валют.

//  Находим все блоки товаров (что бы заменить и пересчитать в них значение валюты) и записываем их в переменную.
let prices = document.getElementsByClassName("products-item-price");


//  Находим элемент по  -id-  и при нажатии на него меняем валюту.
document.getElementById("change-currency").onclick = function (e) {
//     Переменная в которую размещаем то что сейчас там хранится. Текущее значение  -е-
let currentCurrency = e.target.innerText;

// Создаём переменную (которой мы присвоим значение текущей валюты)б что бы в последствии её изменить.
let newCurrency = "$";

// Создаём переменную коэфицентб который позволит пересчитывать курсы валют.
	let coefficient = 1;

//     Проверка - какая сейчас валюта.
	if(currentCurrency === "$"){
		 newCurrency = "₽";
		 // Меняем значение переменной вставляя текущий курс валюты.
		 coefficient = 78;
	}else if (currentCurrency === "₽"){
		 newCurrency = "BYN";
		 // Меняем значение переменной вставляя текущий курс валюты. Пересчёт относительно -$-
		 coefficient = 3;
	}else if (currentCurrency === "BYN"){
		 newCurrency = "€";
		 // Меняем значение переменной вставляя текущий курс валюты. Пересчёт относительно -$-
		 coefficient = 0.9;
	}else if (currentCurrency === "€"){
		 newCurrency = "¥";
		 // Меняем значение переменной вставляя текущий курс валюты. Пересчёт относительно -$-
		 coefficient = 6.9;
	}

//     Заменяем значение валюты в блоке.
	e.target.innerText = newCurrency;

//     Заменяем значение валюты в каждом блоке товара.
for(let i = 0; i < prices.length; i++){
	// Формотирование -toFixed(1);- что бы после деления ограничить знаки после запятой.
	prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + "" + newCurrency;
}
}
