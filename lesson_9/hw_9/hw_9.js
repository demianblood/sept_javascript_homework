// // - створити блок,
// let div = document.createElement('div');
// //   - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту\
// div.style.background = 'blue';
// div.style.color = 'red';
// div.style.fontSize = "15px";
// // - додати цей блок в body.
// document.body.appendChild(div)
// // - клонувати його повністю, та додати клон в body.
// let div2 = div.cloneNode(true);
// document.body.appendChild(div2);


// // - Є масив:
// let massif = ['Main', 'Products', 'About us', 'Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let ulMenu = document.getElementsByClassName('menu')[0];
// massif.forEach(item => {
//     let li = document.createElement('li');
//     li.innerText = item;
//     ulMenu.appendChild(li)
// })


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let body = document.getElementsByTagName('body')[0];
// coursesAndDurationArray.forEach(item =>{
//     const div = document.createElement('div');
//     div.innerText = `${item.title}____${item.monthDuration}`;
//     body.appendChild(div)
// })


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let body = document.getElementsByTagName('body')[0];
// coursesAndDurationArray.forEach(item => {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1')
//     div.appendChild(h1);
//     h1.classList.add('heading');
//     h1.innerText = `${item.title}`;
//     let p = document.createElement('p')
//     div.appendChild(p);
//     p.classList.add('description');
//     p.innerText = `${item.monthDuration}`
//     body.appendChild(div)
// })