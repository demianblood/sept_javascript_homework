// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let string = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
// console.log(string.length, string2.length, string3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let string = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
// console.log(string.toUpperCase(),string2.toUpperCase(),string3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let string = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
// console.log(string.toLowerCase(),string2.toLowerCase(),string3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = '    dirty string     ';
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToArray = (string) => {
//    let newArray = string.split(' ');
//     console.log(newArray)
//    return newArray
// }
// let arr = stringToArray(str);
// document.writeln(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (string, number) => {
//     let newStr = string.slice(0, number)
//     return newStr
//
//     // альтернатива:let newString = ''
//     // for (let i = 0; i < number; i++) {
//     //     newString +=string[i]
//     // }
//     // return newString
// }
// document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (string) => {
//     let newString = string.toUpperCase().replaceAll(" ", "-");
//     return newString
// }
// document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'javascript is cool';
// let firstUpperCase = (string, index) => {
// let newString = string[index].toUpperCase() + string.slice(index+1)
//     return newString
// }
// console.log(firstUpperCase(str, 0))

// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'javascript is cool';
// let capitalize = (string) => {
//     let array = string.split(' ')
//     for (let i = 0; i < array.length; i++) {
//         let arrayString = array[i].toString()
//         let upperCase = arrayString[0].toUpperCase() + arrayString.slice(1)
//         array[i]= upperCase
//     }
//     console.log(array.join(' '))
// }
// capitalize(str)