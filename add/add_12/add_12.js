//1.
// Отримайте відповідь з цього ресурсу відповідь,
// та вивести в документ як у прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожен елемент юзера створює кнопку, клацнувши на яку в блокі окрему,
// відображаються всі пості поточного юзера.
// Кожному елементу публікації створіть кнопку,
// натиснувши на яку в блокі блоку, з’являться всі коментарі поточного поста

let divUsers = document.createElement('div');
let divPosts = document.createElement('div');
let divComments = document.createElement('div');

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                let divUser = document.createElement('div');
                let buttonPosts = document.createElement('button');
                buttonPosts.innerText = 'Get Posts';
                buttonPosts.addEventListener('click', () => getPosts(`${user.id}`));
                divUsers.classList.add('users');
                for (let userKey in user) {
                    if (userKey === "id" || userKey === "name" || userKey === "username") {
                        let h2 = document.createElement('h2');
                        h2.innerText = `${userKey} --- ${user[userKey]}`;
                        divUser.appendChild(h2)
                    } else if (userKey === "email") {
                        let h3 = document.createElement('h3');
                        h3.innerText = `${userKey} --- ${user[userKey]}`;
                        divUser.appendChild(h3)
                    } else if (userKey === "body") {
                        let p = document.createElement('p');
                        p.innerText = `${userKey} --- ${user[userKey]}`;
                        divUser.appendChild(p)
                    } else if (userKey === 'address') {
                        let ul = document.createElement('ul');
                        for (const addressKey in users[userKey]) {
                            let address = user[userKey];
                            for (const addressKey in address) {
                                let li = document.createElement('li');
                                li.innerText = `${addressKey} --- ${address[addressKey]}`;
                                ul.appendChild(li)
                            }
                        }
                        divUser.appendChild(ul)
                    }
                }
                divUsers.appendChild(divUser);
                divUsers.appendChild(buttonPosts)
                divUsers.appendChild(divPosts)
                divUsers.appendChild(divComments)
                document.body.appendChild(divUsers)
            }

        })
}

function getPosts(id) {
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(posts => {
                divPosts.classList.add('wrap');
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
                divPosts.appendChild(divComments);
                divComments.classList.add('comments');
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


