// Создайте поле ввода(input) и застилизуйте.
// Добавьте к полю ввода слушатель события 'keyup'.
// Когда пользователь набирает текст, отобразите вводимое значение в элементе paragraph или span под полем ввода.

const input = document.querySelector('.info');
const paragraph = document.querySelector('.text');

input.addEventListener('keyup', (e) => {
	paragraph.innerText = input.value;
});

























