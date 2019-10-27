// 1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
// 2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить
// запись функций?
// 3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит?
// Как это исправить?

const products = [
    {id: 1, title: 'Notebook', price: 20000, color: 'Grey', picture: "<img src='./img/notebook.png' class='picdescr'>" },
    {id: 2, title: 'Mouse', price: 1500, color: 'Black', picture: "<img src='./img/mouse.png' class='picdescr'>"},
    {id: 3, title: 'Keyboard', price: 5000, color: 'White', picture: "<img src='./img/keyboard.png' class='picdescr'>"},
    {id: 4, title: 'Gamepad', price: 4500, color: 'Multicolor', picture: "<img src='./img/gamepad.png' class='picdescr'>"},
    {id: 5, title: 'Motherboard', price: 6500, color: 'Red', picture: "<img src='./img/motherboard.png' class='picdescr'>"},
    {id: 6, title: 'Monotor', price: 4900, color: 'black', picture: "<img src='./img/monitor.png' class='picdescr'>"},
];

const renderProduct = (picture, title, price, color) => {
    return `<div class="product-item">
            <div class="images">${picture}</div>
            <h3 class="items">Tech type: ${title}</h3>
            <p class="descr">Cost - ${price}</p>
            <p class="descr">Colour - ${color}</p>
           
          </div>`;
};


const renderProducts = (goodsList) => {
    const productsList = goodsList.map((good) => {
        return renderProduct(good.picture, good.title, good.price, good.color);
    }).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderProducts(products);
