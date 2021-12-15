// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.getElementById('form');
let inputName = document.forms.form.name;
let inputQuantity = document.forms.form.quantity;
let inputPrice = document.forms.form.price;
let inputUrl = document.forms.form.url;
// let id = Math.floor(Math.random()*10000)
// let buttonSend = document.forms.form.button;
let sendGoods = () => {
    let id = Math.floor(Math.random() * 10000);
    let name = inputName.value;
    let quantity = inputQuantity.value;
    let price = inputPrice.value;
    let urlImage = inputUrl.value;
    let good = {id, name, quantity, price, urlImage};
    let goods = JSON.parse(localStorage.getItem('goods'))
    if (!goods) {
        goods = [];
        goods.push(good);
        localStorage.setItem('goods', JSON.stringify(goods));
    } else {
        goods.push(good);
        localStorage.setItem('goods', JSON.stringify(goods));
    }
}
let deleteInput = ()=>{
    let name = inputName.value = '';
    let quantity = inputQuantity.value = '';
    let price = inputPrice.value = '';
    let urlImage = inputUrl.value = '';
    console.log(name, quantity, price, urlImage)
}
form.button.onclick = (e) => {
    e.preventDefault();
    sendGoods();
    deleteInput();
}