// -створити форму з інпутами для імені та віку.
//     При відправці форми записати об'єкт у localstorage
// let putInfo = () => {
//     let form = document.forms.form1;
//     let username = form.username.value;
//     let userage = form.age.value;
//     // localStorage.setItem('name', `${username}`);
//     // localStorage.setItem('age', `${age}`);
//     localStorage.setItem('userData',JSON.stringify({name:username,age:userage}))
// }
// let clearInfo = () => localStorage.clear();

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховище.
let form2 = document.forms.form2;
let putInfoAuto = () => {
    let model = form2.model.value;
    let type = form2.type.value;
    let volume = form2.volume.value;
    let car = {model,type,volume};
    let cars = JSON.parse(localStorage.getItem('cars'))
    if (!cars) {
        cars = [];
        cars.push(car);
        localStorage.setItem('cars',JSON.stringify(cars))
    }else {
        cars.push(car);
        localStorage.setItem('cars',JSON.stringify(cars))
    }
}