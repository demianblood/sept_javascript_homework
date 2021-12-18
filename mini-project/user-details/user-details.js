// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про користувача об'єкта на кнопку/силку, яку було виконано кліком раніше.
// 5 Додайте кнопку "повідомлення поточного користувача", натиснувши на яку, появляються title всіх постів поточного юзера
// (для отримання постів використовуйте ендопункт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожен посту додайте кнопку/ссилку, натиснувши на це відбувається переход на сторінку post-details.html, яка містить детальну інформацію про поточний пост.
// user-details.html - блок з інформацією про користувача вгорі страницы. Кнопка нижче, на 90% ширини сторін, по центру.
// блоки з короткою інформацією про пост - в ряді по 5 об'єктів.

let id = JSON.parse(localStorage.getItem('id'));
let divPosts = document.createElement('div');
divPosts.classList.add('wrap');

let getUser = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let divUser = document.createElement('div');
        let divAll = document.getElementById('wrap');
        for (let userKey in user) {
            if (userKey === "id") {
                let pName = document.createElement('p');
                pName.classList.add('block');
                pName.innerText = `${user.id}--${user.name}`;
                divUser.appendChild(pName);
            } else if (userKey === 'email') {
                let pUserEmail = document.createElement('p');
                pUserEmail.classList.add('block');
                pUserEmail.innerText = `user email: ${user.email}`;
                divUser.appendChild(pUserEmail);
            } else if (userKey === 'username') {
                let pUserName = document.createElement('p');
                pUserName.classList.add('block');
                pUserName.innerText = `user name: ${user.username}`;
                divUser.appendChild(pUserName);
            } else if (userKey === 'address') {
                let ulAddress = document.createElement('ul');
                let address = user[userKey]
                for (const addressKey in address) {
                    if (addressKey !== "geo") {
                        let li = document.createElement('li');
                        li.innerText = `${addressKey} --- ${address[addressKey]}`;
                        ulAddress.appendChild(li);
                    } else if (addressKey === "geo") {
                        let li = document.createElement('li');
                        let geo = address[addressKey];
                        li.innerText = `${addressKey}:`
                        for (const geoElement in geo) {
                            let geoLi = document.createElement('li');
                            geoLi.innerText = `${geoElement}----${geo[geoElement]}`
                            li.appendChild(geoLi)
                            ulAddress.appendChild(li);
                        }
                    }
                }
                divUser.appendChild(ulAddress)
            }
        }
        let buttonPostTitle = document.createElement('button');
        buttonPostTitle.innerText = 'posts of user';
        buttonPostTitle.classList.add('button');
        buttonPostTitle.addEventListener('click', () => getPostByID(`${user.id}`));
        divUser.append(buttonPostTitle);
        divUser.classList.add('block');
        divUser.classList.add('wrap');
        divAll.append(divUser, divPosts);
    });
let getPostByID = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {

            for (const post of posts) {
                let divPost = document.createElement('div');
                let inputBtn = document.createElement('input');
                inputBtn.classList.add('button');
                inputBtn.value = 'posts details';
                inputBtn.type = "button";
                inputBtn.onclick = (e) => {
                    location.href = `post-details/post-details.html`;
                    localStorage.setItem('post-id', (post.id));
                }
                for (const postKey in post) {
                    if (postKey === 'title') {
                        divPost.innerText = `${postKey}: ${post[postKey]}`
                    }
                }
                divPost.appendChild(inputBtn);
                divPost.classList.add('post');
                divPost.classList.add('border');
                divPosts.appendChild(divPost);
            }
        })
}
