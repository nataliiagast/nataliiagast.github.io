// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

const arr = [1, -4, 7, 12];
function positiveSum(arr) {
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }
  }console.log(sum);
}
positiveSum(arr);

// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).
const arrayOfSheep = [true, true, true, false,
	true, true, true, true,
	true, false, true, false,
	true, false, false, true,
	true, true, true, true,
	false, false, true, true];
	function countSheeps(array) {
		let result = +"";
		for (let i = 0; i < array.length; i++){
			if (array[i] == true) {
				result += array[i]
			}
		} console.log(result);
};
console.log(countSheeps(arrayOfSheep));

// Напишите функцию для разбиения строки и преобразования ее в массив слов.
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
const str = "I love arrays they are my favorite";
function stringToArray(string){
	let newString = string.split(' ');
	console.log(newString);
};
console.log(stringToArray(str));

// В строке цифр необходимо заменить любую цифру ниже 5 на '0', а любую цифру 5 и выше на '1'. Верните полученную строку.

// Примечание: входные данные никогда не будут пустой строкой
const array = "1, 3, 6, 4, 8, 9, 60, 4, 5";

function fakeBin(array, x) {
	for (let i = 0; i < array.length; i++){
		if (array[i] >= x) {
			array[i] = +1;
		} else {
			array[i] = +0;
		}
	} return array;

}
console.log(fakeBin(array, 5));