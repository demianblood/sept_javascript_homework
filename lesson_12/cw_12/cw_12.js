// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let divPosts = document.createElement('div');
let divComments = document.createElement('div');

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
                divPosts.classList.add('wrap');
                divPosts.appendChild(divComments);
                divComments.classList.add('comments');
                for (let post of posts) {
                    let divPost = document.createElement('div');
                    let divButton = document.createElement('div');
                    let buttonGetComments = document.createElement('button');
                    buttonGetComments.innerText = 'get comments';
                    buttonGetComments.addEventListener('click', () => getComments(`${post.id}`));
                    divButton.appendChild(buttonGetComments);
                    divPost.classList.add('border');
                    divPost.classList.add('div')
                    for (let postKey in post) {
                        if (postKey === "userId" || postKey === "id") {
                            let h2 = document.createElement('h2');
                            h2.innerText = `${postKey} --- ${post[postKey]}`;
                            divPost.appendChild(h2)
                        } else if (postKey === "title") {
                            let h3 = document.createElement('h3');
                            h3.innerText = `${postKey} --- ${post[postKey]}`;
                            divPost.appendChild(h3)
                        } else if (postKey === "body") {
                            let p = document.createElement('p');
                            p.innerText = `${postKey} --- ${post[postKey]}`;
                            divPost.appendChild(p)
                        }
                    }
                    divPost.appendChild(divButton)
                    divPosts.appendChild(divPost)
                    document.body.appendChild(divPosts);
                }
            }
        )
}

function getComments(id) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(comments => {
            for (let comment of comments) {
                let divComment = document.createElement('div');
                divComment.classList.add('border');
                for (let commentKey in comment) {
                    if (commentKey === "postId" || commentKey === "id") {
                        let h2 = document.createElement('h2');
                        h2.innerText = `${commentKey} --- ${comment[commentKey]}`;
                        divComment.appendChild(h2)
                    } else if (commentKey === "email") {
                        let h3 = document.createElement('h3');
                        h3.innerText = `${commentKey} --- ${comment[commentKey]}`;
                        divComment.appendChild(h3)
                    } else if (commentKey === "body") {
                        let p = document.createElement('p');
                        p.innerText = `${commentKey} --- ${comment[commentKey]}`;
                        divComment.appendChild(p)
                    }
                }
                divComments.appendChild(divComment)
            }
        })
}