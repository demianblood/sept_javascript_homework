// - Дано натуральное число n. Выведите все числа от 1 до n.
// let naturalNumber = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// naturalNumber(4)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let numbers = (A, B) => {
//     if (A < B) {
//         for (let i = A; i <= B; i++) {
//             console.log(i)
//         }
//     } else if (A > B) {
//         for (let i = A;i>=B;i--){
//             console.log(i)
//         }
//     }
// }
// numbers(7, 1)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = (arg, i) => {
//     let someValue = '';
//     for (let j = 0; j < arg.length; j++) {
//         someValue = arg[j];
//         if (i === j) {
//             arg[j] = arg[j+1];
//             arg[j+1]=someValue;
//         }
//
//     }
//     console.log(arg)
// }
// foo([9, 8, 0, 4], 1)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let nullFunction = (array, number) => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             array.splice(i, 1);
//             sum++
//         }
//     }
//     if (sum > 0) {
//         for (let j = 0; j < sum; j++)
//             array.push(number)
//     }
//
//     console.log(array)
// }
// nullFunction([1, 0, 6, 0, 3, 0, 35, 0, 35, 0, 35, 0, 65], 0)
