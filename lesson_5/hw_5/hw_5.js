// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію, яка виробляє та повертає площу прямокутника висотою
// let square = (a, b) => {
//     return a * b
// }

// - створити функцію, яка виробляє та повертає площу кола
// let square = (r) => {
//     return 3.14 * Math.pow(r, 2)
// }

// - створити функцію, яка виробляє та повертає площу циліндра
// let square = (r, h) => {
//     return 2 * 3.14 * r * h
// }
// console.log(square(2,3))

// - створювати функцію як масив та виводити кожен його елемент
// let massif = (mass) => {
//     for (let i = 0; i < mass.length; i++) {
//         console.log(mass[i])
//     }
// }
// massif([3,5,6,12,425,'dima',true,[567,36]])

// - створити функцію, яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = (arg) => {
//     document.write(`<p>${arg}</p>`)
// }
// paragraph('dimon')

// - створити функцію яка створює ul з трьома елементами li. Текст лі задати через аргумент всім однаковий
// let text = (arg) => {document.write(`<ul><li>${arg}</li><li>${arg}</li><li>${arg}</li></ul>`)}
// text('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст лі задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let foo = (argText, argLi) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < argLi; i++) {
// document.write(`<li>${argText}</li>`)
//     }
//     document.write(`</ul>`)
// }
// foo('lorem', 5)

// - створити функцію, яка включає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let massif = ['lorem', 1, 8, true, 'lorem2', false, 54];
// let foo = (arg) => {
//     document.write('<ul>')
//     for (let i = 0; i < arg.length; i++) {
//         document.write(`<li>${arg[i]}</li>`)
//     }
//     document.write('</ul>')
// }
// foo(massif)

// - створити функцію, яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх у документ. Для кожного об'єкту окремий блок.
// let foo = (arg) => {
//     for (let i = 0; i < arg.length; i++) {
//         document.write(`<div> -${arg[i].id} _____ ${arg[i].name}____ ${arg[i].age}</div>`)
//     }
// }
// foo([{id: 1, name: 'Dima', age: 25},{id: 2, name: 'Oleksandr', age: 28},{id: 3, name: 'Vasya', age: 22}])
