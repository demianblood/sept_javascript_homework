// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let f1 = document.forms.f1;
// let f2 = document.forms.f2;
// f1.onsubmit = e => {
//     e.preventDefault()
// }
// f2.onsubmit = e => {
//     e.preventDefault()
// }
// let getInfoForm1 = function () {
//     let input1F1 = f1.username.value;
//     let input2F1 = f1.user_age.value;
//     let input1F2 = f2.name_son.value;
//     let input2F2 = f2.age_son.value;
//     console.log( [input1F1,input2F1,input1F2,input2F2])
//     return [input1F1,input2F1,input1F2,input2F2]
// }

// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// // третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// let inputList = document.getElementsByTagName('input');
// let buttonTableCreate = () => {
//     let lines = inputList.lines;
//     let cells = inputList.cells;
//     let contents = inputList.contents;
//     let table = document.createElement('table');
//     table.classList.add('table')
//     for (let i = 0; i < lines.value; i++) {
//         let line = document.createElement('tr');
//         line.classList.add('table')
//         for (let i = 0; i < cells.value; i++) {
//             let cell = document.createElement('th')
//             cell.innerText = contents.value
//             cell.classList.add('table')
//             line.appendChild(cell);
//         }
//         table.appendChild(line);
//     }
//     document.body.appendChild(table);
// }

// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let mat = ['бля', 'хуй', 'пізда', 'дроч', 'єбать', 'гондон'];
// let inputValue = document.getElementById('input');
// let btn = () => {
//     for (let i = 0; i<mat.length;i++){
//         if (mat[i]===inputValue.value){
//             alert('но но но')
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let mat = ['бля', 'хуй', 'пізда', 'дроч', 'єбать', 'гондон'];
// let inputValue = document.getElementById('input');
//
// let btn = () => {
//     let massifInput = inputValue.value.split(' ')
//     console.log(massifInput)
//     for (let i = 0; i < mat.length; i++) {
//         for (let j = 0; j < massifInput.length; j++) {
//             if (mat[i] === massifInput[j]) {
//                 alert(`но но но ${massifInput[j]} погане слово`)
//             }
//         }
//
//     }
// }
