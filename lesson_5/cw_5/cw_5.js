// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію, яка використовує три числа та виводить найменше. (Без Math.min!)
// let min = (a, b, c) => {
//     if (a<b && a<c){
//         console.log(a)
//     } else if (b<a && b<c){
//         console.log(b)
//     }else if (c<a && c<b){
//         console.log(c)
//     }else {
//         console.log('wrong number')
//     }
// }
// min(3,4,5)

// - створення функції, яка включає три числа та виводить найбільше. (Без Math.max!)
// let numbers = (a, b, c) => {
//     if (a < b && c < b) {
//         console.log(b)
//     } else if (b < a && c < a) {
//         console.log(a)
//     } else if (b < c && a < c) {
//         console.log(c)
//     }
// }
// numbers(3, 6, 9)

// - створити функцію яка повертає найбільше число з масиву
// let maxNumber = (arg) => {
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if (max < arg[i]) {
//             max = arg[i];
//         }
//     }
//     return max
// }
// console.log(maxNumber([1,32,34,12,43,45]))

// - створити функцію яка повертає найменше число з масиву
// let minNumber = (arg) => {
//     let min = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if (min > arg[i]) {
//             min = arg[i]
//         }
//     }
//     return min
// }
// console.log(minNumber([1, 32, 34, 12, 43, 45]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumNumber = (arg) => {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i]
//     }
//     return sum
// }
// console.log(sumNumber([3, 4, 5, 62, 5664, 23334, 443]))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let average = (arg) => {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i]
//     }
//     return sum/arg.length
// }
// console.log(Math.round(average([3, 4, 5, 6, 5, 4, 8])))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numberMaxMin = (arg) => {
//     let max = arg[0];
//     let min = arg[0];
//     for (let i = 0; i < arg.length - 1; i++) {
//         if (arg[i] < min) {
//             min = arg[i]
//         }
//         if (arg[i] > max) {
//             max = arg[i]
//         }
//     }
//     console.log(max)
//
//     return min
// }
// numberMaxMin([31231, 4, -535432, 62, 5664, 23334, 443])

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let mathRandom = (arg) =>{
//     let arg2 = [];
//     for (let i = 0; i < arg; i++) {
//         arg2[i] = Math.floor(Math.random() * 100)
//     }
//     console.log(arg2)
//     return arg2
// }
// mathRandom(3)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomLimit = (arg, limit) => {
//     let arg2 = [];
//     for (let i = 0; i < arg; i++) {
//         arg2[i] = Math.floor(Math.random() * limit)
//     }
//     console.log(arg2)
//     return arg2
// }
// randomLimit(3,4)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse = (arg) => {
//     let arg2 = [];
//     for (let i = arg.length - 1; i >= 0; i--) {
//         for (let j = 0; j < arg.length; j++) {
//             arg2[j] = arg[i--]
//         }
//     }
//     console.log(arg2)
// }
// reverse([1,2,3])