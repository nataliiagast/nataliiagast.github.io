// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

const arr = [1, -4, 7, 12];
function positiveSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}
positiveSum(arr);

// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).
const arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countSheeps(array) {
  let result = +"";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == true) {
      result += array[i];
    }
  }
  console.log(result);
}
countSheeps(arrayOfSheep);

// Напишите функцию для разбиения строки и преобразования ее в массив слов.
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
const str = "I love arrays they are my favorite";
function stringToArray(string) {
  let newString = string.split(" ");
  console.log(newString);
}
stringToArray(str);

// В строке цифр необходимо заменить любую цифру ниже 5 на '0', а любую цифру 5 и выше на '1'. Верните полученную строку.
// Примечание: входные данные никогда не будут пустой строкой
const array = "1, 3, 6, 4, 8, 9, 60, 4, 5";
function fakeBin(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= x) {
      array[i] = +1;
    } else {
      array[i] = +0;
    }
  }
  return array;
}
console.log(fakeBin(array, 5));

// Можете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну "иголку".
// После того, как ваша функция найдет иголку, она должна вернуть сообщение (в виде строки), которое гласит:
// "найдена иголка в позиции " плюс индекс, по которому найдена иголка, таким образом:
const strNeedle = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
const string = "needle";
function findNeedle(array, string) {
  array.forEach((str, index) => {
    if (str === string) {
      console.log(`Найдена: ${str}, в позиции ${index}`);
    }
  });
}
findNeedle(strNeedle, string);

// Очень просто: дано целое число или число с плавающей точкой,
//  найдите его противоположность.
function magicOfNum(num) {
  let x = num * -1;
  return x;
}
console.log(magicOfNum(8.5));

// Вам будет дан массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
// Массив может содержать числа или строки. X может быть любым из них.
// Верните true, если массив содержит значение, false - если нет.
const newArr = [2, 4, null, 67, 89, "tree", "cap", 87, -9, undefined];
let x = "tree";
function findValue(array, x) {
  let result = array.some((item) => {
    if (item === x) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
}
findValue(newArr, x);

// Напишите программу, которая находит сумму всех чисел от 1 до num.
// Число всегда будет целым положительным числом больше 0.
function sumation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumation(8));

// Ваши одноклассники попросили вас скопировать для них некоторые документы.
// Вы знаете, что одноклассников "n", а в документе "m" страниц.
// Ваша задача - вычислить, сколько чистых страниц вам нужно.
//  Если n < 0 или m < 0, верните 0.
function paperWork(n, m) {
  let result = n * m;
  if (n < 0 || m < 0) {
    return console.log("Вы ввели некорректное число: " + 0);
  } else {
    return console.log("Вам понадобится: " + result + " чистых страниц.");
  }
}
paperWork(5, -5);

// Дан массив целых чисел.
// Возвращает массив,
// 	где первый элемент - счетчик положительных чисел,
// 	а второй элемент - сумма отрицательных чисел.
// 		0 не является ни положительным, ни отрицательным.
// Если входные данные являются пустым массивом или равны null,
// 	возвращается пустой массив.
// [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// Для ввода[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
// 	вы должны вернуть[10, -65].
const currentArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(array) {
  const newArray = [];
  const arr2 = array.reduce((acc, num) => (acc += num < 0 ? num : acc), 0);
  const arr1 = array.filter((num) => num >= 0);
  const newArr1 = arr1.length;
  newArray.push(newArr1, arr2);
  console.log(newArray);
}
countPositivesSumNegatives(currentArr);

// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание: Пустые массивы должны возвращать 0.
const a = [1, 2, 3, 4];
function findAverage(array) {
	const b = array.reduce((acc, num) => acc + num / array.length, 0);
	return b;
}
console.log(findAverage(a));

// Создайте функцию, которая принимает целое число в качестве аргумента
//  и возвращает "Even" для четных чисел
//   или "Odd" для нечетных.
function evenOrOdd(number) {
	if (number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
  }
}
console.log(evenOrOdd(43));


// В вашем классе был тест, и вы его прошли. Поздравляю!
// Но вы амбициозный человек.
// Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.

// Вы получаете массив с результатами тестов ваших сверстников.
// Теперь вычислите среднее значение и сравните свой результат!

// Верните True, если вы лучше, иначе False!
const classPoints = [29, 55, 74, 60, 11, 90, 67, 28];
const yourPoints = 21;

function betterThanAverage(array, number) {
	const isNumber = array.reduce((acc, num) => acc + num / array.length, 0);
	console.log(isNumber.toFixed(1));
	if (isNumber < number) {
		return ("Поздрваляю вы один из лучших: " + true);
	} else {
		return ("Вам нужно больше заниматься: " + false);
	}
}
console.log(betterThanAverage(classPoints, yourPoints));

// Преобразование числа в массив цифр в обратном порядке
// Задав случайное неотрицательное число, необходимо вернуть цифры этого числа в массив в обратном порядке.

function isNum(num) {
	let allNum = [];
	for (let i = num; i >= 0; i--){
		allNum.push(i);	
	}
	console.log(allNum);
}
isNum(8);

// Напишите функцию RemoveExclamationMarks,
// 	которая удаляет все восклицательные знаки из заданной строки.
const abcd = "Каждый, охотник, желает! знать! где сидит фазан!.";
const s = "!";
const g = ",";
function removeExclamationMarks(s, g) {
	const newStr = abcd.split('');
	const star = newStr.filter(elem => {
		if (elem !== s && elem !== g) {
			return true;
		} else {
			return false;
		}
	});
	console.log(star.join(""));	
}
removeExclamationMarks(s, g);

// Завершите метод,
// 	который принимает булево значение
// 	и возвращает строку "Yes" для true
// 	или строку "No" для false.

function boolToWord( bool ){

 }