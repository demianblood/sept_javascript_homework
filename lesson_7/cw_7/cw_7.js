// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         document.write(`model - ${this.model}<br>producer -${this.producer}<br> year - ${this.year}<br> max speed -${this.maxSpeed}<br> engine capacity-${this.engineCapacity}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed * newSpeed
//         console.log(this.maxSpeed)
//         return this.maxSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year)
//         return this.year
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//         console.log(this.driver)}
// }
// let car1 = new Cars('Eclipse Hybrid', 'Mitsubishi', 2020, 220, 2.4)
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(2);
// car1.changeYear(2440);
// car1.addDriver('vasya')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class CarClass {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;}
//     drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);};
//     info() {
//         document.write(`model - ${this.model}<br>producer -${this.producer}<br> year - ${this.year}<br> max speed -${this.maxSpeed}<br> engine capacity-${this.engineCapacity}`);
//     };
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed * newSpeed
//         console.log(this.maxSpeed)
//         return this.maxSpeed
//     };
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(this.year)
//         return this.year
//     };
//     addDriver(driver) {
//         this.driver = driver
//         console.log(this.driver)};
// }
// let car1 = new CarClass('Eclipse Hybrid', 'Mitsubishi', 2020, 220, 2.4)
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(2);
// car1.changeYear(2440);
// car1.addDriver('vasya')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(cinderName, age, size) {
//         this.cinderName = cinderName;
//         this.age = age;
//         this.size = size;
//     }
// }
// let cinderellasList = [
//     cinderella1 = new Cinderella('cin1', 18, 39),
//     cinderella2 = new Cinderella('cin2', 17, 37),
//     cinderella3 = new Cinderella('cin3', 19, 40),
//     cinderella4 = new Cinderella('cin4', 16, 41),
//     cinderella5 = new Cinderella('cin5', 12, 35),
//     cinderella6 = new Cinderella('cin6', 15, 39),
//     cinderella7 = new Cinderella('cin7', 17, 38),
//     cinderella8 = new Cinderella('cin8', 18, 39),
//     cinderella9 = new Cinderella('cin9', 19, 40),
//     cinderella10 = new Cinderella('cin10', 17, 41)
// ]
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let prince = new Prince('borya', 19, 37)
// let searchCinderella = (cinderellasList, prince) => {
//     let trueCinderella = ''
//     for (let i = 0; i < cinderellasList.length; i++) {
//        if (cinderellasList[i].size === prince.shoe){
//            trueCinderella = cinderellasList[i]
//        }
//     }
//     return trueCinderella
// }
// console.log(searchCinderella(cinderellasList,prince))
// let trueCinderella = cinderellasList.filter(value => value.size === prince.shoe);
// console.log(trueCinderella)
