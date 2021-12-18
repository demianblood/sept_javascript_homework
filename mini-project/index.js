// В index.html
// 1 отримати масовий об’єкт користувача з кінцевою точкою https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх користувачів в index.html. Окремий блок для кожного користувача.
// 3 Додайте кожному блоку кнопки/ссилку , при натисканні на це відбувається перехід на сторінку user-details.html,
// яка має детальну інформацію про об’єкт, на який натиснули
// Стилизация проекта -
// index.html - всі блоки з користувачем - по 2 в ряд. кнопки/ссылки находяться під інформацією про користувача.


let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            let divAll = document.getElementById('wrap');
            let divUser = document.createElement('div');
            let linkBtn = document.createElement('input');
            divUser.innerText = `${user.id}--${user.name}`;

            linkBtn.classList.add('button-user');
            linkBtn.value = 'user details';
            linkBtn.type = "button";
            linkBtn.onclick = (e) => {
                location.href = `user-details/user-details.html`;
                localStorage.setItem('id', (user.id));
            }
            divUser.classList.add('block');
            divUser.appendChild(linkBtn);
            divAll.appendChild(divUser)
        }
    })