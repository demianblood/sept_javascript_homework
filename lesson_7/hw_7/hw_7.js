// - Створити функцію конструктор для об'єктів Користувача з полями id, name,surname, email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'ivan1', 'turk1w1d1o', 'sdqdqs@gmail.com', '+233135243'),
    new User(6, 'ivan6', 'tursq2ecko', 'sdefcaqdqs@gmail.com', '+233135243'),
    new User(7, 'ivan7', 'turf3ko', 'sdqdawefqs@gmail.com', '+233135243'),
    new User(2, 'ivan2', 'tu1desrko', 'sdqdwvqqs@gmail.com', '+233135243'),
    new User(9, 'ivan9', 'turkfqee2o', 'sdqdaefqs@gmail.com', '+233135243'),
    new User(10, 'ivan10', 'twqqfurko', 'sdfewqdqs@gmail.com', '+233135243'),
    new User(3, 'ivan3', 'turqdqsko', 'sdqdfqwdqs@gmail.com', '+233135243'),
    new User(4, 'ivan4', 'tur1desko', 'sdqdqaers@gmail.com', '+233135243'),
    new User(5, 'ivan5', 'turko', 'sdqdasefqs@gmail.com', '+233135243'),
    new User(8, 'ivan8', 'tutghretrrko', 'sdefqdqs@gmail.com', '+233135243')

]
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterById = users.filter(user => user.id % 2 === 0)
console.log(filterById)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortById = users.sort((a, b) => a.id - b.id)
console.log(sortById)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, clientName, surname, email, phone, order) {
    this.id = id;
    this.clientName = clientName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'ivan1', 'turk1w1d1o', 'sdqdqs@gmail.com', '+233135243', ['butter', 'beer', 'whiskies']),
    new Client(6, 'ivan6', 'tursq2ecko', 'sdefcaqdqs@gmail.com', '+233135243', ['apple']),
    new Client(7, 'ivan7', 'turf3ko', 'sdqdawefqs@gmail.com', '+233135243', ['milk', 'beer', 'whiskies', 'apple', 'orange', 'chocolate']),
    new Client(2, 'ivan2', 'tu1desrko', 'sdqdwvqqs@gmail.com', '+233135243', ['chocolate']),
    new Client(9, 'ivan9', 'turkfqee2o', 'sdqdaefqs@gmail.com', '+233135243', ['orange', 'chocolate']),
    new Client(10, 'ivan10', 'twqqfurko', 'sdfewqdqs@gmail.com', '+233135243', ['banana', 'beer', 'apple', 'chocolate']),
    new Client(3, 'ivan3', 'turqdqsko', 'sdqdfqwdqs@gmail.com', '+233135243', ['butter']),
    new Client(4, 'ivan4', 'tur1desko', 'sdqdqaers@gmail.com', '+233135243', ['whiskies', 'beer']),
    new Client(5, 'ivan5', 'turko', 'sdqdasefqs@gmail.com', '+233135243', ['martini', 'beer', 'whiskies', 'orange', 'chocolate']),
    new Client(8, 'ivan8', 'tutghretrrko', 'sdefqdqs@gmail.com', '+233135243', ['beer', 'apple'])
]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortByOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortByOrder)