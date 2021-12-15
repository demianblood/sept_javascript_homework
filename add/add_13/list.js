let listDiv = document.createElement('div');
let goods = JSON.parse(localStorage.getItem('goods'));
let deletElement = (id, massif) => {
    for (let i = 0; i < massif.length; i++) {
        if (massif[i].id === id) {
            massif.splice(i, 1)
        }
    }
}
for (let good of goods) {
    let pTag = document.createElement('p');
    let imgTag = document.createElement('img');
    let btn = document.createElement('button');
    pTag.innerText = `${good.name}, в кількості ${good.quantity}шт., ціна товару ${good.price}грн.`;
    imgTag.src = `${good.url}`;
    btn.innerText = 'delete'
    btn.addEventListener('click', () => {
        deletElement(good.id, goods);
        localStorage.setItem('goods',JSON.stringify(goods))
    })

    document.body.append(pTag, imgTag, btn)
}


document.body.appendChild(listDiv);