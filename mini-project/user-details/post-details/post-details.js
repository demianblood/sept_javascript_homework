// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
let id = JSON.parse(localStorage.getItem('post-id'));
let divWrap = document.createElement('div');
document.body.appendChild(divWrap);
divWrap.classList.add('wrap');
let getPost =
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            let divPost = document.createElement('div');
            divPost.classList.add('block');
            for (const postKey in post) {
                let p = document.createElement('p');
                p.classList.add('border')
                p.innerText = `${postKey}: ${post[postKey]}`;
                divPost.appendChild(p)
            }
            getCommentsByPost()
            divWrap.appendChild(divPost)
        });
let getCommentsByPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => {
            let divComments = document.createElement('div');
            divComments.classList.add('wrap');
            for (const comment of comments) {
                let divComment = document.createElement('div');
                divComment.classList.add('comment-block')
                for (const commentKey in comment) {
                    let p = document.createElement('p');
                    p.innerText = `${commentKey}: ${comment[commentKey]}`;
                    divComment.appendChild(p);
                }
                divComments.appendChild(divComment);
            }
            divWrap.appendChild(divComments)
        })
}