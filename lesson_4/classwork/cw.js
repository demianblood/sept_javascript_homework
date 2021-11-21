// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(a,b,c) {
//     if (a>b && c>b){
//         console.log(b)
//     } else if (b>a && c>a){
//         console.log(a)
//     } else if (b>c && a>c){
//         console.log(c)
//     }
// }
// numbers(3,6,9)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers(a,b,c) {
//     if (a<b && c<b){
//         console.log(b)
//     } else if (b<a && c<a){
//         console.log(a)
//     } else if (b<c && a<c){
//         console.log(c)
//     }
// }
// numbers(3,6,9)

// - створити функцію яка повертає найбільше число з масиву
// function numbers(massif) {
//     return Math.max(...massif)
// }
// console.log(numbers([3, 4, 5, 62, 5664, 23334, 443]))
// function maxNumbers(massif) {
//     for (let i = 0; i < massif.length; i++) {
//         let numb = massif[i]
//         let numbPlus = massif[i++]
//         let numbMinus = massif[i--]
//         console.log(numbMinus, numb, numbPlus)
//     }
//
// }
//
// maxNumbers([3, 4, 5, 62, 5664, 23334, 443])
// let massif = [3, 44354, 5, 62, 5664, 23334, 443];
//
// function maxNumbers(massif) {
//     let maxValue = 0
//     for (let i = 0; i < massif.length; i++) {
//         if (massif[i] > maxValue) {
//             maxValue = massif[i]
//         } else {
//             console.log(`${massif[i]} не найбільше`)
//         }
//     }
//     console.log(maxValue)
// }
// maxNumbers(massif)

// - створити функцію яка повертає найменьше число з масиву
// function numbers(massif) {
//     return Math.min(...massif)
// }
// numbers([3,4,5,62,5664,23334,443])
// let massif = [3, 44354, 5, 62, 5664, 23334, 443];
//
// function minNumbers(massif) {
//     let minValue = 0;
//     for (let i = 0; i < massif.length; i++) {
//         if (minValue === 0) {
//             minValue = massif[i]
//         } else if (massif[i] < minValue) {
//             minValue = massif[i]
//         } else {
//             console.log(`${massif[i]} не найменше`)
//         }
//     }
//     console.log(minValue)
// }
//
// minNumbers(massif)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(numbers) {
//     let sums = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sums +=numbers[i]
//     }
//     return sums
// }
// sum([3,4,5,62,5664,23334,443])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(massif) {
//     let sums = 0;
//     for (let i = 0; i < massif.length; i++) {
//         sums +=massif[i];
//     }
//    return sums/massif.length
// }
// average([3,4,5,62,5664,23334,443])

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numbers(number) {
//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < number.length - 1; i++) {
//         if (min === 0 || number[i] < min) {
//             min = number[i]
//         }
//         if (number[i] > max){
//             max = number[i]
//         }
//     }
//     console.log(max)
//     return min
// }
// numbers([31231, 4, 535432, 62, 5664, 23334, 443])

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random(a) {
//     let massif = [];
//     for (let i = 0; i < a; i++) {
//         massif[i] = Math.floor(Math.random() * 100)
//     }
//     console.log(massif)
//     return massif
// }
// random(36)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(a,limit) {
//     let massif = [];
//     for (let i = 0; i < a; i++) {
//         massif[i] = Math.floor(Math.random() * limit)
//     }
//     console.log(massif)
//     return massif
// }
// random(36,3)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(massif) {
// let massif2 = massif.reverse()
//     console.log(massif2)
//     return massif2
// }
// reverse([3, 4, 5, 62, 5664, 23334, 443])
// let numbers = [3, 4, 5, 62, 5664, 23334, 443];
//
// function reverse(massif) {
//     let massif2 = [];
//     for (let i = massif.length - 1; i >= 0; i--) {
//         for (let j = 0; j < massif.length; j++) {
//             massif2[j] = massif[i--]
//         }
//     }
//     console.log(massif2)
// }
// reverse(numbers)