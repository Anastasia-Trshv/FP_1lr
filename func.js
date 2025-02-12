// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
export function evenNumbers(numbers) {
  var even = [];
  numbers.forEach(element => { 
    if(element % 2 ==0){
        even.push(element);
    };
  });
  return even;
};

//Функция, которая принимает массив чисел и возвращает новый массив, содержащий квадраты этих чисел.
export function squareNumbers(numbers)
{
    var squares = [];
    numbers.forEach(element => { 
        squares.push(element*element);
     });
  return squares;
}

//Функция, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с определенным свойством.
export function filterByProperty(arr, property) {
    return arr.filter(obj => obj.hasOwnProperty(property));
}
 

//Функция, которая принимает массив чисел и возвращает их сумму.
export function countSum(numbers){
    var sum = 0;
    numbers.forEach(elem =>{
        sum+=elem;
    });
    return sum;
}

//принимает функцию и массив в качестве аргументов и применяет функцию к каждому элементу массива, возвращая новый массив с результатами.
export function useFuncOnArray(func, arr){
    var newArr = [];
    arr.forEach(elem =>{
        newArr.push(func(elem));
    });
    return(newArr);
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log("Четные числа: " + evenNumbers(arr));
console.log("Квадраты элементов массива: " + squareNumbers(arr));
console.log("Сумма чисел: " + countSum(arr));
console.log("Использована функция на массиве: " + useFuncOnArray( elem => elem + 1, arr));
console.log("Число отфильтрованных объектов: " + filterByProperty([{value: "1", name: "1"}, {name:"2"}, {value: "3"}], "value").length);