// // // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// // // let user = {
// // //     id: 1,
// // //     name: 'Leanne Graham',
// // //     username: 'Bret',
// // //     email: 'Sincere@april.biz',
// // //     address: {
// // //         street: 'Kulas Light',
// // //         suite: 'Apt. 556',
// // //         city: 'Gwenborough',
// // //         zipcode: '92998-3874',
// // //         geo: {
// // //             lat: '-37.3159',
// // //             lng: '81.1496'
// // //         }
// // //     },
// // //     phone: '1-770-736-8031 x56442',
// // //     website: 'hildegard.org',
// // //     company: {
// // //         name: 'Romaguera-Crona',
// // //         catchPhrase: 'Multi-layered client-server neural-net',
// // //         bs: 'harness real-time e-markets'
// // //     }
// // // }
// // class User {
// //     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
// //         this.id = id;
// //         this.name = name;
// //         this.username = username;
// //         this.email = email;
// //         this.address = {street: street,suite:suite,city:city,zipcode:zipcode,geo:{lat,lng}};
// //         this.phone = phone;
// //         this.website = website;
// //         this.company ={name:companyName,catchPhrase:catchPhrase,bs:bs}
// //     }
// //
// // }
// //
// //
// // let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light','Apt. 556','Gwenborough','92998-3874', '-37.3159','81.1496','1-770-736-8031 x56442', 'hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// //
// // console.log(user)
//
// // -  Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// // -назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результуючого об'єкту
// // {   titleOfTag: 'area',
// //     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/}]
// // }
//
// class Tag {
//     constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr1, actionOfAttr1) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [
//             {
//                 titleOfAttr: titleOfAttr,
//                 actionOfAttr: actionOfAttr
//             },
//             {
//                 titleOfAttr1: titleOfAttr1,
//                 actionOfAttr1: actionOfAttr1
//             }];
//     }
// }
//
// let a = new Tag(
//     'a',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'accesskey',
//     'Активация ссылки с помощью комбинации клавиш.'
//     , 'coords', 'Устанавливает координаты активной области.'
// );
//
// let div = new Tag(
//     'div',
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента',
//     'align',
//     'Задает выравнивание содержимого тега <div>',
//     'title',
//     'Добавляет всплывающую подсказку к содержимому.');
// let h1 = new Tag(
//     'h1',
//     'тег <h1> представляет собой наиболее важный заголовок первого уровня',
//     'align',
//     'Определяет выравнивание заголовка.'
// );
// let span = new Tag(
//     'span',
//     '<span> предназначен для определения строчных элементов документа',
//     'accesskey',
//     'Переход к области с помощью комбинации клавиш',
//     'class',
//     'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// );
// let input = new Tag(
//     'input',
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     'accesskey',
//     'Переход к области с помощью комбинации клавиш',
//     'align',
//     'Определяет выравнивание заголовка.'
// );
// let form = new Tag(
//     'form',
//     'Связывает поле с формой по её идентификатору'
// );
// let option = new Tag(
//     'option',
//     '<option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
//     'disabled',
//     'Заблокировать для доступа элемент списка.',
//     'label',
//     'Указание метки пункта списка.'
// );
// let select = new Tag(
//     'select',
//     '<select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     'disabled',
//     'Заблокировать для доступа элемент списка.',
//     'accesskey',
//     'Переход к области с помощью комбинации клавиш'
// );
// console.log(a,div,h1,span,input,form,option,select)