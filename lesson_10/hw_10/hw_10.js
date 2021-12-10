// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn1 = document.getElementById('btn1');
// let btn3 = document.getElementById('btn3');
// let divText = document.getElementById('text')
// btn1.addEventListener('click', function () {
//     divText.classList.add_7('displayNone')
// });
// btn3.addEventListener('click', function () {
//     divText.classList.remove('displayNone')
// });

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn2 = document.createElement('button');
// btn2.innerText = 'delete me'
// btn2.addEventListener('click', function () {
//     btn2.classList.add_7('displayNone')
// });
// document.body.appendChild(btn2)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// let input = document.getElementById('input');
// let btn4 = document.getElementById('btn-input');
// btn4.onclick = function (e) {
//     if (+input.value < 18) {
//         alert(`ваш вік ${input.value}`)
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let menuBtn = document.getElementsByClassName('btn')[0];
// let menu = document.getElementById('menu');
// menuBtn.addEventListener('click',()=>{
//     menu.classList.toggle('displayNone')
// })

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {
//         "title": "id labore ex et quam laborum",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//         "title": "quo vero reiciendis velit similique earum",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         "title": "odio adipisci rerum aut animi",
//         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         "title": "alias odio sit",
//         "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },]
// let commentsDiv = document.createElement('div');
// comments.forEach(value => {
//     let userCommentDiv = document.createElement('div');
//     let userCommentDivTitle = document.createElement('div');
//     let userCommentDivBody = document.createElement('div');
//     let btn = document.createElement('button');
//     btn.innerText = 'close comments';
//     userCommentDivTitle.innerText = `${value.title}`;
//     userCommentDivBody.innerText = `${value.body}`;
//     userCommentDiv.append(userCommentDivTitle, userCommentDivBody,btn);
//     btn.addEventListener('click',()=>{
//         userCommentDivBody.classList.toggle('displayNone')
//     })
//     userCommentDiv.style.background = `red`
//     userCommentDiv.style.border = `1px solid blue`
//     commentsDiv.appendChild(userCommentDiv)
//     document.body.appendChild(commentsDiv)
// })


