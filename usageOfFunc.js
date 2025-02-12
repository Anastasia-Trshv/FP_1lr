import { countSum, squareNumbers, evenNumbers} from "./func.js";

//Найдите сумму квадратов всех чётных чисел в заданном массиве.
console.log("Сумма квадратов всех чётных чисел в заданном массиве: " + countSum(squareNumbers(evenNumbers([1,2,3,4,5,6,7,8,9]))));

//Найдите среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов.
let arr = [1,2,3,4,5,6,7,8,9,10]
let arrFiltred =arr.filter(num => num>5)
console.log("Cреднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов: " + countSum(arrFiltred)/arrFiltred.length);