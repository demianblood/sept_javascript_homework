// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function argument(arg1,arg2) {
//     if (typeof (arg2) ==='undefined'){
//         console.log(arg1)
//     }else{
//         console.log(arg2+ arg1)
//     }
// }
// argument(15, 20)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:// [1,2,3,4]//     [2,3,4,5]// результат//     [3,5,7,9]
// function sum(arg1, arg2) {
//     let massif = [];
//     for (let i = 0; i < arg1.length; i++) {
//         massif[i] = arg1[i] + arg2[i]
//     }
//     console.log(massif)
// }
// sum([1,2,3,4],[2,3,4,5])

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function key(arg1) {
    let obj = [];
    for (let i = 0; i < arg1.length; i++) {
        obj = Object.keys(arg1[i]);
        console.log(obj)
    }
}
key([{name: 'Dima', age: 13}, {model: 'Camry'}])
//????????????????????????????????????як правильно об'єднати?

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
