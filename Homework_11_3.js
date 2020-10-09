/* Задание 3.

Написать функцию, которая принимает число как аргумент
и возвращает функцию, которая также принимает число как
аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function funcIntermediate(numm1){
    return function (numm2){
        return numm1 + numm2
    }
}


let a = 5;
let b = 12;
const resFunc = funcIntermediate(a);
console.log(resFunc(b))