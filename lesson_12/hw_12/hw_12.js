// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// function getObjectElements() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//                 let div = document.createElement('div');
//                 div.classList.add('wrap');
//                 for (let post of posts) {
//                     let divPost = document.createElement('div');
//                     divPost.style.border = '1px solid blue';
//                     divPost.classList.add('div')
//                     for (let postKey in post) {
//                         if (postKey === "userId" || postKey === "id") {
//                             let h2 = document.createElement('h2');
//                             h2.innerText = `${postKey} --- ${post[postKey]}`;
//                             divPost.appendChild(h2)
//                         } else if (postKey === "title") {
//                             let h3 = document.createElement('h3');
//                             h3.innerText = `${postKey} --- ${post[postKey]}`;
//                             divPost.appendChild(h3)
//                         } else if (postKey === "body") {
//                             let p = document.createElement('p');
//                             p.innerText = `${postKey} --- ${post[postKey]}`;
//                             divPost.appendChild(p)
//                         }
//                     }
//                     div.appendChild(divPost)
//                     document.body.appendChild(div);
//                 }
//             }
//         )
// }


// 2.Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// function getObjectElements() {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(comments => {
//             let div = document.createElement('div');
//             div.classList.add('wrap');
//             for (let comment of comments) {
//                 let divComments = document.createElement('div');
//                 for (let commentKey in comment) {
//                     if (commentKey === "postId" || commentKey === "id") {
//                         let h2 = document.createElement('h2');
//                         h2.innerText = `${commentKey} --- ${comment[commentKey]}`;
//                         divComments.appendChild(h2)
//                     } else if (commentKey === "email") {
//                         let h3 = document.createElement('h3');
//                         h3.innerText = `${commentKey} --- ${comment[commentKey]}`;
//                         divComments.appendChild(h3)
//                     } else if (commentKey === "body") {
//                         let p = document.createElement('p');
//                         p.innerText = `${commentKey} --- ${comment[commentKey]}`;
//                         divComments.appendChild(p)
//                     }
//                     div.appendChild(divComments);
//                 }
//                 document.body.appendChild(div);
//             }
//         });
// }