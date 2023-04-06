
// 1 уровень сложности: Повторить следующие темы:
// 1)  https://learn.javascript.ru/while-for 
// 2)  https://learn.javascript.ru/array 
// 3)  https://learn.javascript.ru/comparison 
// 4)  https://learn.javascript.ru/logical-operators 
// 5)  https://learn.javascript.ru/ifelse 
// 6)  https://learn.javascript.ru/object 
// 7)  https://learn.javascript.ru/object-copy 
// 8)  https://learn.javascript.ru/function-basics 


// А так же прочитать:
// 1)  https://doka.guide/js/dom/#:~:text=DOM%20(Document%20Object%20Model)%20%E2%80%94,%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%D1%85%20%D1%81%D1%82%D0%B8%D0%BB%D0%B5%D0%B9%20%D0%B8%20%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B3%D0%BE 
// 2)  https://learn.javascript.ru/dom-nodes 
// 3)  https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById 
// 4)  https://developer.mozilla.org/ru/docs/Web/API/Document/getElementsByClassName >/link>
// 5)   https://developer.mozilla.org/ru/docs/Web/API/Document/getElementsByTagName 
// 6)  https://developer.mozilla.org/ru/docs/Web/API/Document/querySelector 
// 7)  https://developer.mozilla.org/ru/docs/Web/API/Document/querySelectorAll 

/*Создайте в HTML 3 картинки без атрибутов. Используя следующий массив, задайте источник и альтернативный текст для каждой картинки.*/

const image = [
	{
		alt: "lion",
		src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
	},
	{
		alt: "elephant",
		src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
	},
	{
		alt: "dog",
		src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
	},
];
const newImage = document.querySelectorAll("img");
for(let i = 0; i <  newImage.length; i++){
	const {alt, src} = image[i];
	newImage[i].setAttribute("src",  src);
	newImage[i].setAttribute("alt",  alt);
}
console.log(newImage);

/* Создайте список с 3 пустыми пунктами в HTML.Используя следующий массив измените текст пунктов. */

const list = ['Item 1', 'Item 2', 'Item 3'];
const newList = document.getElementsByTagName("li");
for(let i=0; i < newList.length; i++){
	newList[i].innerText = list[i];
}
console.log(newList);