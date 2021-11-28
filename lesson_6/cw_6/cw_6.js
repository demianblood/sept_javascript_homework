// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let normalizeFoo = (string) => {
//     let newArray = ''
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "." && string[i++] === ".") {
//         newArray = string.split('..')
//         } else if (string[i] === "-" && string[i++] === "-") {
//             newArray = string.split('---')
//         }else if (string[i] === "_" && string[i++] === "_") {
//             newArray = string.split('__')
//         }
//     }
//     return newArray.join(' ')
//
// }
// console.log(normalizeFoo(n1))
// console.log(normalizeFoo(n2))
// console.log(normalizeFoo(n3))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let foo = (massif, arg) => {
//     for (let i = 0; i < arg; i++) {
//         massif[i] = Math.round(Math.random() * 100)
//     }
//     return massif
// }
// console.log(foo([], 10))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let massif = foo([], 10);
// console.log(massif)
// let sortMassif = (massif) => {
//     console.log(massif.sort())
// }
// sortMassif(massif)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let massif2 = foo([], 10);
// console.log(massif2)
// let filter = (massif) => {
//     let filterMasiff = massif.filter(item => item % 2 === 0)
//     return filterMasiff
// }
// console.log(filter(massif2))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [95, 81, 0, 84, 23, 4, 57, 77, 18, 77];
// let fooString = (item) => item.toString();
// let mapMassif = (arg, callback) => {
//     let newArg = arg.map((item) => callback(item))
//     return newArg
// }
// console.log(mapMassif(numbers, fooString))


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11, 21, 3];
// let sortNums = (mas, direction) => {
//     if (direction === 'ascending') {
//         mas.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         mas.sort((a, b) => b - a)
//     }
//     return mas
// }
// console.log(sortNums(nums, 'ascending'))
// console.log(sortNums(nums, 'descending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sortFunc = (massif)=>{
//     massif.sort((a,b)=>a.monthDuration - b.monthDuration)
//     return massif
// }
// console.log(sortFunc(coursesAndDurationArray))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterFunc = (massif) => {
//    let newMassif = massif.filter(mas => mas.monthDuration > 5)
//     return newMassif
// }
// console.log(filterFunc(coursesAndDurationArray))