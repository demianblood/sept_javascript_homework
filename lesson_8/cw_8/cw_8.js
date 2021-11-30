// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let colorText = document.getElementById('main_header');
colorText.classList.add('sept-2021')

// b) робить шириниу елементу ul 400px
let ulElement = document.getElementsByTagName('ul');
for (let ulElementElement of ulElement) {
    ulElementElement.style.width = '400px'
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let listClass = document.getElementsByClassName('linkList');
for (let linkElement of listClass) {
    linkElement.style.width = "50%"
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textEl = document.getElementsByClassName('listElement2');
for (let textElElement of textEl) {
    let text = textElElement.textContent
    console.log(text)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElem = document.getElementsByTagName('li');
for (let liElemElement of liElem) {
    liElemElement.style.background = 'gray'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aElem = document.getElementsByTagName('a');
for (let aElement of aElem) {
    aElement.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let aElement of aElem) {
    if (aElement.innerText === 'link3'){
        aElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aElement of aElem) {
    let textA = aElement.textContent;
    aElement.classList.add(`element_${textA}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHead = document.getElementsByClassName('sub-header');
// for (const subHeadElement of subHead) {
//     subHeadElement.style.background = prompt("введіть колір")
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (let subHeadElement of subHead) {
//     if (subHeadElement.textContent === 'content 2 segment'){
//         subHeadElement.style.color = prompt('введіть колір')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// let contentClass = document.getElementsByClassName('content_1');
// for (let contentClass1 of contentClass) {
//     contentClass1.textContent = prompt('введіть текс')
// }

// l) отримати елементи p та змінити їм padding на 20px
let pElem = document.getElementsByTagName('p');
for (const pElemElement of pElem) {
    pElemElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let someEl = document.getElementsByClassName('text2');
for (let someElElement of someEl) {
    someElElement.textContent = 'sep-2021'
}
