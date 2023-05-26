
// TODO----------------- 1 -------------------------
// const form = document.querySelector("#product-form");
// const nameInput = document.querySelector('#name');
// const priceInput = document.querySelector("#price");

// const list = document.querySelector('#product-list');

// let products = [];

// function addProduct(name, price) {
// 	products.push({ name, price });
// }

// function updateProducts() {
// 	list.innerHTML = "";
// 	products.forEach(product => {
// 		const item = document.createElement("li");
// 		item.innerText = `${product.name} - ${product.price}$`;
// 		list.appendChild(item);
// 	});
// }

// form.onsubmit = (e) => {
// 	e.preventDefault();
// 	const nameProduct = nameInput.value;
// 	const priceProduct = priceInput.value;
// 	addProduct(nameProduct, priceProduct);
// 	updateProducts();
// 	setArray("products", products);
// 	nameInput.value = "";
// 	priceInput.value = "";
	
// }

// function setArray(key, array) {
// 	const newProducts = JSON.stringify(array);
// 	localStorage.setItem(key, newProducts);
// }
// function getArray() {
// 	const objectLocalStorage = localStorage.getItem("products");
// 	if (objectLocalStorage) {
// 		const objectItem = JSON.parse(objectLocalStorage);
// 		products = objectItem;
// 		updateProducts();
// 	}
// }
// getArray('products');





// TODO ----------------------- 2 -----------------
// TODO Создайте HTML-страницу с двумя полями ввода: "Название книги" и "Автор".
// Разместите под этими полями две кнопки: "Добавить в библиотеку" и "Показать библиотеку".
// Когда пользователь заполняет поля и нажимает кнопку "Добавить в библиотеку", вы должны создать объект JavaScript, содержащий информацию из полей ввода (название книги и автор), и добавить этот объект в массив, который хранится в localStorage.
// Когда пользователь нажимает кнопку "Показать библиотеку", вы должны извлечь массив из localStorage и вывести каждую книгу (название и автор) на страницу.
const form = document.querySelector("#book-form");
const namsInput = document.querySelector('#nams');
const writerInput = document.querySelector("#writer");
const ofList = document.querySelector('#book-list');
const btn = document.querySelector('.show');

let books = [];

function addBooks(name, writer) {
	books.push({ name, writer });
}
function updateBooks() {
	ofList.innerHTML = "";
	books.forEach(book => {
		const item = document.createElement("li");
		item.innerText = `${book.name} - ${book.writer}`;
		ofList.appendChild(item);
	});
}
form.onsubmit = (e) => {
	e.preventDefault();
	const nameBook = namsInput.value;
	const writerBook = writerInput.value;
	addBooks(nameBook, writerBook);
	setArray("books", books);
	namsInput.value = "";
	writerInput.value = "";
}
function setArray(key, array) {
	const newBooks = JSON.stringify(array);
	localStorage.setItem(key, newBooks);
}
btn.onclick = () => {
	const objectLocalStorage = localStorage.getItem("books");
	if (objectLocalStorage) {
		const objectItem = JSON.parse(objectLocalStorage);
		books = objectItem;
		updateBooks();
	}
}
