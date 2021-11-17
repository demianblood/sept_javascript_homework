// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let a = [];
// a)
// for (let i = 0; i < 50; i++) {
//     a[i] = i * 2
//     if (i === 0) {
//         a[i] = 2
//     }
// }
// console.log(a)
// b)
// for (let i = 0; i < 50; i++) {
//     a[i] = i * 2 - 1
//     if (i <= 0) {
//         a[i] = 1
//     }
// }
// c)
// for (let i =0; i<20;i++){
//     a[i]=Math.floor(Math.random()*10)
// }
// d)
// for (let i = 0; i < 20; i++) {
//     a[i] = Math.floor(Math.random() * (732 - 8) + 8)
// }
// console.log(a)
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i < 20; i+=3) {
//         console.log(a[i])
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < 20; i += 3) {
//     if (a[i] % 2 === 0) {
//         console.log(a[i])
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let b = [];
// for (let i = 2; i < 20; i += 3) {
//     if (a[i] % 2 === 0) {
//         b[i] = a[i]
//     }
//
// }
// console.log(b)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let c=[1,2,3,4,5,6,7,8,9,10];
// console.log(c)
// for (let i = 0; i<10; i++){
//      if (c[i+1]%2===0){
//          console.log(c[i])
//      }else{
//          console.log("не парний сусід")
//      }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let d = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// console.log(d)
// for (let i = 0; i < d.length; i++) {
//     sum+= d[i]
// }
// let chek= sum/d.length
// console.log(chek)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let e =[];
// let b =[];
// for (let i=0; i< 10;i++){
//     e[i]= Math.floor(Math.random()*10)
//     b[i]= e[i]*5
//     console.log(e)
//     console.log(b)
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let f = ['ok', true, 67, 'red', false, 98, 'blue'];
// let g = []
// for (let i = 0; i < f.length; i++) {
//     if (typeof f[i] === "number") {
//         g[i]=f[i]
//     }
// }
// console.log(g)

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// // Example:
// //     let usersWithCities = [
// //             {
// //                 id: 1, // <===
// //                 name: 'vasya',
// //                 age: 31,
// //                 status: false,
// //                 address: {
// //                     user_id: 1, // <===
// //                     country: 'Ukraine',
// //                     city: 'Ternopil'
// //                 }
// //             },
// // // TO BE CONTINUED .....
// //         ]
// let usersWithCities = usersWithId;
//
// console.log(usersWithCities)
// for (let i=0;i<usersWithId.length;i++){
//     for (const user of usersWithCities) {
//         for (let city of citiesWithId) {
//             if (user.id === city.user_id){
//                 user.address = city
//             }
//         }
//     }
//     console.log(usersWithCities)
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let c=[1,2,3,4,5,6,7,8,9,10];
// for (let number of c) {
//     if (number%2===0){
//         console.log(number)
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let c=[1,2,3,45,5,6,7,8,93,10];
// let k =[];
// for (let i = 0; i<c.length;i++){
//     k[i] =+ c[i]
// }
// console.log(k)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let abc = ['a', 'b', 'c'];
// let word =[]
// // for (let i = 0; i < abc.length; i++) {
// // word +=abc[i]
// // }
// // console.log(word)
// // let i =0;
// // while (i<abc.length){
// //     word += abc[i]
// //     i++
// // }
// // console.log(word)
// for (let string of abc) {
//    word += string
// }
// console.log(word)