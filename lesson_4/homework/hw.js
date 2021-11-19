// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareRectangle(a,b) {
//     return a*b
// }
// let sup = squareRectangle(6,6)
// console.log(sup)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareСircle(r){
//     const P = 3.14;
//     return P*Math.pow(r,2)
// }
// let sup = squareСircle(6)
// console.log(sup)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareCylinder(h,r) {
//     const P = 3.14;
//     return 2*P*r*h
// }
// let sup = squareCylinder(6,3)
// console.log(sup)

// - створити функцію яка приймає масив та виводить кожен його елемент
// function massif(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i])
//     }
// }
//
// let sup = ["carrot", "potato", "tomato"];
// massif(sup)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(text) {
//     document.write(`<p>${text}</p>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// list('asfsaasf')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(text, arg) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arg; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// }
// list('daqfad', 5)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(masif) {
//     document.write(`<ul>`)
//     for (let masifElement of masif) {
//         document.write(`<li>${masifElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let guru = ['hope',12,true]
// list(guru)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function object(users) {
//     for (const user of users) {
//         function userLists(id,name,age) {
//             document.write(`<div>${user.id}</div>`)
//             document.write(`<div>${user.name}</div>`)
//             document.write(`<div>${user.age}</div>`)
//         }
//         userLists()
//     }
//
// }
// let usersList= [{id:1,name:'Bob',age:34},{id:2,name:'Bib',age:38}]
// object(usersList)