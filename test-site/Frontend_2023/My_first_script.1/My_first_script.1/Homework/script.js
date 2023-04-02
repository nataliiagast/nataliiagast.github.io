
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