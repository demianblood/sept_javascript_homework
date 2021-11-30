// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contentById = document.getElementById("content");
console.log(contentById.innerText)
// -- отримує текст з блоку з id "rules"
let rulesById = document.getElementById("rules");
console.log(rulesById.innerText)
// -- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerText = 'lorem 4355 +4353452'
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesById.innerText = 'lorem + wadwdaw asdwawdwd'
// -- змініть кожному елементу колір фону на червоний
let bodyChildren = document.body.children;
for (let bodyChild of bodyChildren) {
    bodyChild.style.background = 'red'
}
// -- змініть кожному елементу колір тексту на синій
for (let bodyChild of bodyChildren) {
    bodyChild.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClass = rulesById.classList
console.log(rulesClass)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let redColor = document.getElementsByClassName('fc_rules');
for (const redColorElement of redColor) {
    redColorElement.style.color = 'red'
}
