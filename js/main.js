/**
 * @param {HTMLElement} parent - Родительский элемент, в который добавляется созданный элемент.
 * @param {string} type - Тип создаваемого элемента (например, 'div', 'span' и т.д.).
 * @param {string[]} classes - Массив классов для добавления к созданному элементу.
 * @param {string} innerHTML - Текстовое содержимое созданного элемента или null.
 * @param {string} id - Массив для добавления нескольких id к созданному элементу.
 * @returns {HTMLElement} - Созданный элемент.
 */
function CreateElement(parent, type, classes = [], innerHTML = null, id = '') {
    const element = document.createElement(type);
    element.classList.add(...classes);
    element.innerHTML = innerHTML;
    element.id = id;
    parent.appendChild(element);
    return element;
}
const productChar = {
    BMS: {
        1: {
            category: 'BMS',
            name: 'Smart BMS JBD 3-4S 100A Li-ion/Lifepo4',
            price: '2 080 ₴',
            img: 'img/BMS1.webp',
            id: 'BMS1',
            desc: `Смарт БМС JBD 3-4S 100А с встроенным в плату Bluetooth модулем, с помощью приложения на смартфон можно регулировать основные характеристики платы. Приложение называется Xiaoxiang. Плата симметричная, для заряда и разряда используется тот же порт. Может использоваться как для литий ионных так и для железофосфатных акб.`,
        },
        2: {
            category: 'BMS',
            name: 'JBD дисплей для подключения к плате защиты',
            price: '570 ₴',
            img: 'img/BMS2.webp',
            id: 'BMS2',
            desc: `JBD LCD дисплей для подключения к платам защиты JBD через порт UART.`,
        },
    },
    conWires: {
        1: {
            category: 'conWires',
            name: 'Разъем питания XT30U Amass, оригинал',
            price: '31 ₴',
            img: 'img/conWires1.webp',
            id: 'conWires1',
            desc: `Разьем полностью оригинальный, производитель Amass. Цена за комплект папа+мама. Также можем изготовить готовый кабель под требуемые характеристики, под определенный ток, распаять нужные разьемы и наконечники.`,
        },
        2: {
            category: 'conWires',
            name: 'Разъем питания Anderson SD45A Красный',
            price: '35 ₴',
            img: 'img/conWires2.webp',
            id: 'conWires2',
            desc: `Разьем типа Anderson, одиночный, имеет на корпусе соединение типа "ласточкин хвост" при помощи которого можно собрать блок на нужное количество контактов. В наличии красный и черный цвет. Цена за комплект папа+мама. Также можем изготовить готовый кабель под требуемые характеристики, под определенный ток, распаять нужные разьемы и наконечники.`,
        },
    },
    Powerbanks: {
        1: {
            category: 'Powerbanks',
            name: 'USB зарядка QC 3.0 12В-24В под монтаж в корпус',
            price: '346 ₴',
            img: 'img/Powerbanks1.webp',
            id: 'Powerbanks1',
            desc: `Оснащена функцией быстрого заряда на два порта мощностью 36Вт. Зарядное встраивается в приборную панель или в стенку корпуса, имеет приглушенную подсветку синего цвета. Для монтажа зарядного устройства в панели необходимо вырезать отверстие диаметром 28 мм. и подключить питание "+" и "-" 12 или 24 вольта, в комплект входят провода для подключения с предохранителем.`,
        },
        2: {
            category: 'Powerbanks',
            name: 'PowerBank YooBao H5 50000mA 22.5w',
            price: '2 970 ₴',
            img: 'img/Powerbanks2.webp',
            id: 'Powerbanks2',
            desc: `Yoobao 22.5w 50 000mAh`,
        },
    },
};
const logoCanvas = document.getElementById('logoCanvas');
const context = logoCanvas.getContext('2d');
context.moveTo(0, 55);
context.lineTo(65, 15);
context.lineTo(65, 25);
context.lineTo(130, 0);
context.lineTo(55, 40);
context.lineTo(55, 30);
context.closePath();
context.stroke();
const basket = document.querySelector('.basket').querySelector('button');
const loclStorlnth = CreateElement(basket, 'span', ['basket__num']);
setInterval(() => {
    loclStorlnth.innerHTML = localStorage.length;
}, 100);
const categoryCtnList = document.querySelector('.category-ctn__list');
const categoryCtnItems = [];
const categoryCtnImgWraps = [];
for (const category of Object.keys(productChar)) {
    for (const product of Object.keys(productChar[category])) {
        console.log(productChar[category][product]);
        const products = productChar[category][product];
        const productCategory = products.category;
        const productName = products.name;
        const productPrice = products.price;
        const productImg = products.img;
        const productDesc = products.desc;
        const productId = products.id;
        const categoryCtnItem = CreateElement(
            categoryCtnList,
            'li',
            ['category-ctn__item', `${productCategory}`],
            '',
            productId
        );
        categoryCtnItems.push(categoryCtnItem);
        const itemSec = CreateElement(categoryCtnItem, 'div', ['item__sec']);
        const wishlistBtn = CreateElement(
            itemSec,
            'button',
            ['wishlist-btn'],
            `<svg class="main-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_3" x="0px" y="0px" viewBox="0 0 25 25"  xml:space="preserve">
        <g>
            <g>
                <path class="st0" d="M22.8,4.8c-1.2-1.3-2.8-2-4.6-2c-2.5,0-4.1,1.4-5,2.6c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2-0.3-0.4-0.6-0.6-0.9    c-0.9-1.2-2.5-2.6-5-2.6c-1.8,0-3.4,0.7-4.6,2C1.2,6,0.6,7.6,0.6,9.4c0,1.9,0.8,3.7,2.5,5.5c1.5,1.7,3.7,3.4,6.1,5.4    c0.9,0.7,1.9,1.5,2.9,2.4l0,0c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l0,0c1-0.8,2-1.6,2.9-2.4c2.5-2,4.6-3.8,6.1-5.4    c1.7-1.9,2.5-3.7,2.5-5.5C24.5,7.6,23.9,6,22.8,4.8z M15,19.3c-0.8,0.6-1.6,1.3-2.5,2c-0.9-0.7-1.7-1.4-2.5-2    C5.2,15.4,2,12.8,2,9.4c0-1.4,0.5-2.7,1.4-3.7c0.9-1,2.2-1.5,3.6-1.5c1.9,0,3.2,1.1,3.9,2.1c0.6,0.8,1,1.7,1.1,2    c0.1,0.3,0.4,0.5,0.7,0.5s0.6-0.2,0.7-0.5c0.1-0.3,0.4-1.2,1.1-2c0.7-0.9,1.9-2.1,3.9-2.1c1.4,0,2.7,0.5,3.6,1.5    c0.9,1,1.4,2.3,1.4,3.7C23.1,12.8,19.9,15.4,15,19.3z"/>
            </g>
        </g>
        </svg>`
        );
        const compareBtn = CreateElement(
            itemSec,
            'button',
            ['compare-btn'],
            `<svg class="main-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_2" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
            <g>
                <g>
                    <path d="M13.1,5.8h5.2l-4.5,11.3c0,0.1-0.1,0.2-0.1,0.2c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6c0-0.1,0-0.2-0.1-0.2l0,0L20.3,5.9    h2.1c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7h-9.3V2.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v1.9H2.5    c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h2.2L0.1,17.1c0,0.1-0.1,0.2-0.1,0.2c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6    c0-0.1,0-0.2-0.1-0.2L6.7,5.8h5.1L13.1,5.8z M5.7,21.6c-2.1,0-3.8-1.5-4.2-3.6h8.3C9.5,20.1,7.7,21.6,5.7,21.6z M9.6,16.7H1.8    L5.7,7L9.6,16.7z M19.3,7l3.9,9.7h-7.8L19.3,7z M19.3,21.6L19.3,21.6c-2.1,0-3.8-1.5-4.2-3.6h8.3C23.2,20.1,21.4,21.6,19.3,21.6z"/>
                </g>
            </g>
            </svg>`
        );
        const categoryCtnImgWrap = CreateElement(categoryCtnItem, 'a', [
            'category-ctn__img--wrap',
        ]);
        categoryCtnImgWrap.setAttribute('href', `${productId}`);
        categoryCtnImgWraps.push(categoryCtnImgWrap);
        const categoryCtnImg = CreateElement(categoryCtnImgWrap, 'img', [
            'category-ctn__img',
        ]);
        categoryCtnImg.setAttribute('src', `${productImg}`);
        categoryCtnImg.setAttribute('alt', `${productCategory}`);
        const categoryCtnName = CreateElement(
            categoryCtnImgWrap,
            'span',
            ['category-ctn__name'],
            `${productName}`
        );
        const categoryCtnPrice = CreateElement(
            categoryCtnItem,
            'span',
            ['category-ctn__price'],
            `${productPrice}`
        );
        const categoryCtnBuy = CreateElement(categoryCtnItem, 'div', [
            'category-ctn__buy',
        ]);
        const buyBtn = CreateElement(
            categoryCtnBuy,
            'button',
            [],
            'купить',
            `${productId}`
        );
        buyBtn.setAttribute('src', `${productId}`);
        buyBtn.addEventListener('click', () =>
            order(productName, productPrice, productImg, productId, productDesc)
        );
    }
}
console.log(categoryCtnItems);
// tab товаров и их категорий
const catItem = document.querySelectorAll('.category__link');
console.log(catItem);
catItem.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        catItem.forEach((item) => {
            item.classList.remove('active');
        });
        categoryCtnItems.forEach((item) => {
            item.classList.add('hide');
        });
        item.classList.add('active');
        let href = item.getAttribute('href').replace('.', '');
        categoryCtnItems.forEach((item) => {
            item.classList.forEach((className) => {
                if (className == href) {
                    item.classList.remove('hide');
                }
            });
        });
    });
});
//
const productInfo = document.querySelector('.product__info');
const productCtn = document.querySelector('.product__ctn');
function productShow(item) {
    productInfo.classList.add('show');
    for (const category of Object.keys(productChar)) {
        for (const product of Object.keys(productChar[category])) {
            const products = productChar[category][product];
            const productCategory = products.category;
            const productName = products.name;
            const productPrice = products.price;
            const productImg = products.img;
            const productId = products.id;
            const productDescItem = products.desc;
            if (item.parentElement.id == productId) {
                productFill(
                    productCtn,
                    productImg,
                    productName,
                    productPrice,
                    productId,
                    productDescItem
                );
            } else if (item.parentElement.parentElement.id == productId) {
                productFill(
                    productCtn,
                    productImg,
                    productName,
                    productPrice,
                    productId,
                    productDescItem
                );
            }
        }
    }
}
categoryCtnImgWraps.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        productShow(item);
    });
});
function productFill(ctnItem, img, title, price, id, desc, e) {
    const productImgWrap = CreateElement(ctnItem, 'div', [
        'product__img--wrap',
    ]);
    const productImg = CreateElement(productImgWrap, 'img', ['product__img']);
    productImg.setAttribute('src', `${img}`);
    const productDesc = CreateElement(ctnItem, 'div', ['product__desc']);
    const productTitle = CreateElement(
        productDesc,
        'h2',
        ['product__title'],
        title
    );
    const productPrice = CreateElement(
        productDesc,
        'span',
        ['product__price'],
        price
    );
    const productBuyBtnWrap = CreateElement(productDesc, 'div', [
        'product__buy-btn--wrap',
    ]);
    const productBuyBtn = CreateElement(
        productBuyBtnWrap,
        'button',
        ['product__buy-btn'],
        'купить',
        `${id}`
    );
    productBuyBtn.addEventListener('click', () =>
        order(title, price, img, id, desc)
    );
    const productShortDesc = CreateElement(productDesc, 'div', [
        'product__short-desc',
    ]);
    const shortDescH3 = CreateElement(
        productShortDesc,
        'h3',
        [],
        'Краткое описание'
    );
    const shortDescP = CreateElement(productShortDesc, 'p', [], desc);
    productInfo.addEventListener('click', function (e) {
        if (productInfo.contains(e.target)) {
            do {
                productCtn.childNodes.forEach((element) => {
                    element.remove();
                });
            } while (productCtn.childNodes.length != 0);
            productInfo.classList.remove('show');
        }
    });
}
function order(name, price, img, id, desc) {
    const orderItem = document.querySelector('.order');
    orderItem.style.display = 'block';
    const orderBgItem = document.querySelector('.order-bg');
    setTimeout(() => {
        orderBgItem.style.right = '0';
    }, 100);
    const less = document.querySelector('.less');
    const curr = document.querySelector('.curr');
    const more = document.querySelector('.more');
    less.disabled = true;
    less.addEventListener('click', function () {
        curr.innerHTML = parseInt(curr.innerHTML) - 1;
        updateTotalPrice();
        if (parseInt(curr.innerHTML) === 1) {
            less.disabled = true;
        }
    });
    more.addEventListener('click', function () {
        curr.innerHTML = parseInt(curr.innerHTML) + 1;
        updateTotalPrice();
        less.disabled = false;
    });
    // В этой функции я также сделал возможность для "Скидки" и "Стоимость доставки"
    let orderDeliveryInn = 0;
    let orderDiscountInn = 0;
    const orderPrice = document
        .querySelector('.order__price')
        .querySelector('.num');
    const orderDiscount = document
        .querySelector('.order__discount')
        .querySelector('.num');
    const orderDelivery = document
        .querySelector('.order__delivery')
        .querySelector('.num');
    const orderTotal = document
        .querySelector('.order__total')
        .querySelector('.num');
    orderPrice.innerHTML = price;
    let orderTotalInn = 0;
    price = parseInt(price.replace('₴', '').replace(' ', ''));
    orderTotalInn = price;
    orderTotalInn += orderDeliveryInn;
    orderTotalInn -= orderDiscountInn;
    function updateTotalPrice() {
        let current = parseInt(curr.innerHTML);
        orderTotalInn = price * current;
        orderTotalInn += orderDeliveryInn;
        orderTotalInn -= orderDiscountInn;
        orderTotal.innerHTML =
            orderTotalInn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
            ' ₴';
    }
    if (orderDiscountInn !== 0) {
        orderDiscount.innerHTML =
            orderDiscountInn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
            ' ₴';
    } else {
        orderDiscount.innerHTML = '-';
    }
    if (orderDeliveryInn !== 0) {
        orderDelivery.innerHTML =
            orderDeliveryInn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
            ' ₴';
    } else {
        orderDelivery.innerHTML = '-';
    }
    orderTotal.innerHTML =
        orderTotalInn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₴';
    document
        .querySelector('.order__submit')
        .querySelector('button')
        .addEventListener('click', function (e) {
            const arr = [];
            const inputsUser = [
                document.getElementById('title'),
                document.getElementById('adress'),
            ];
            const inputsPay = document.getElementsByName('payment_method');
            let payChecked;
            let allUnchecked = true;
            for (let i = 0; i < inputsPay.length; i++) {
                if (inputsPay[i].checked) {
                    allUnchecked = false;
                    payChecked =
                        inputsPay[i].parentElement.querySelector(
                            'label'
                        ).textContent;
                    break;
                }
            }
            if (allUnchecked) {
                arr.push(
                    `"${
                        document.querySelector('.payment').querySelector('h3')
                            .textContent
                    }"`
                );
            }
            inputsUser.forEach((element) => {
                if (element.value == '') {
                    arr.push(
                        window.getComputedStyle(
                            element.parentElement,
                            '::before'
                        ).content
                    );
                }
            });
            if (arr.length !== 0) {
                alert(
                    `Пункт: ${arr.join(
                        ', '
                    )} пустует \u{1F631}. Заполните, пожалуйста.`
                );
            } else {
                const date = new Date();
                alert(
                    'Благодарим вас за покупку. Мы рады и всегда ждём вас! \u{1F609}'
                );
                const orderObj = {
                    userName: inputsUser[0].value,
                    userAdress: inputsUser[1].value,
                    payment: payChecked,
                    orderName: name,
                    quantity: parseInt(curr.innerHTML),
                    price: orderTotalInn,
                    desc: desc,
                    imgPath: img,
                    id: id,
                    objId: generateUniqueId().toString(),
                    date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}.${
                        date.getMonth() + 1
                    }.${date.getFullYear()}`,
                };
                function generateUniqueId() {
                    let counter = localStorage.length + 1;
                    return counter;
                }
                const localId = generateUniqueId();
                localStorage.setItem(localId, JSON.stringify(orderObj));
                location.reload();
            }
        });
    document
        .querySelector('.order-close')
        .addEventListener('click', function (e) {
            orderBgItem.style.right = '-25%';
            setTimeout(() => {
                orderItem.style.display = 'none';
            }, 800);
        });
}
document
    .querySelector('.basket')
    .querySelector('button')
    .addEventListener('click', function (e) {
        const orders = document.querySelector('.orders');
        const ordersBg = document.querySelector('.orders-bg');
        const ordersList = document.querySelector('.orders__list');
        do {
            ordersList.childNodes.forEach((element) => {
                element.remove();
            });
        } while (ordersList.childNodes.length != 0);
        orders.style.display = 'block';
        setTimeout(() => {
            ordersBg.style.right = '0';
        }, 100);
        for (const key in localStorage) {
            if (Object.hasOwnProperty.call(localStorage, key)) {
                const obj = localStorage[key];
                const order = JSON.parse(obj);
                // console.log(JSON.parse(obj));
                const orderItem = CreateElement(
                    ordersList,
                    'div',
                    ['order__item'],
                    '',
                    order.id
                );
                orderItem.setAttribute('localId', order.objId);
                const orderImgWrap = CreateElement(orderItem, 'div', [
                    'order__img--wrap',
                ]);
                const orderImg = CreateElement(orderImgWrap, 'img', [
                    'order__img',
                ]);
                orderImg.setAttribute('src', order.imgPath);
                orderImg.setAttribute('alt', order.category);
                orderImg.addEventListener('click', function () {
                    const goodInf = document.querySelector('.good-inf');
                    const goodInfCtn = document.querySelector('.good-inf__ctn');
                    const goodInfCtnList = document.querySelector(
                        '.good-inf__ctn--list'
                    );
                    do {
                        goodInfCtnList.childNodes.forEach((element) => {
                            element.remove();
                        });
                    } while (goodInfCtnList.childNodes.length != 0);
                    goodInf.style.display = 'block';
                    setTimeout(() => {
                        goodInfCtn.style.left = '0';
                    }, 100);
                    const goodImgWrap = CreateElement(goodInfCtnList, 'div', [
                        'good__img--wrap',
                    ]);
                    const goodImg = CreateElement(goodImgWrap, 'img', [
                        'good__img',
                    ]);
                    goodImg.setAttribute('src', order.imgPath);
                    goodImg.setAttribute('alt', order.category);
                    const goodNameWrap = CreateElement(goodInfCtnList, 'div', [
                        'good__name--wrap',
                    ]);
                    const goodName = CreateElement(
                        goodNameWrap,
                        'span',
                        ['good__name'],
                        order.orderName
                    );
                    const goodPayWrap = CreateElement(goodInfCtnList, 'div', [
                        'good__pay--wrap',
                    ]);
                    const goodPay = CreateElement(
                        goodPayWrap,
                        'span',
                        ['good__pay'],
                        `${order.payment}:`
                    );
                    const goodPriceWrap = CreateElement(goodInfCtnList, 'div', [
                        'good__price--wrap',
                    ]);
                    const goodPrice = CreateElement(
                        goodPriceWrap,
                        'span',
                        ['good__price'],
                        `${order.price} \u{20B4}`
                    );
                    const goodCountWrap = CreateElement(goodInfCtnList, 'div', [
                        'good__count--wrap',
                    ]);
                    const goodCount = CreateElement(
                        goodCountWrap,
                        'span',
                        ['good__count'],
                        `${order.quantity}`
                    );
                    const goodDescWrap = CreateElement(goodInfCtnList, 'div', [
                        'good__desc--wrap',
                    ]);
                    const goodDesc = CreateElement(
                        goodDescWrap,
                        'span',
                        ['good__desc'],
                        `${order.desc}`
                    );
                    document
                        .querySelector('.good-inf-close')
                        .addEventListener('click', function (e) {
                            goodInfCtn.style.left = '-25%';
                            setTimeout(() => {
                                goodInf.style.display = 'none';
                            }, 800);
                        });
                    console.log(
                        document.querySelector('.good-inf__ctn').childNodes
                    );
                });
                const orderSection = CreateElement(orderItem, 'div', [
                    'order__section',
                ]);
                const orderNameWrap = CreateElement(orderSection, 'div', [
                    'order__name--wrap',
                ]);
                const orderName = CreateElement(
                    orderNameWrap,
                    'h3',
                    ['order__name'],
                    order.orderName
                );
                const orderPriceWrap = CreateElement(orderSection, 'div', [
                    'order__price--wrap',
                ]);
                const orderPrice = CreateElement(
                    orderPriceWrap,
                    'span',
                    ['order__price'],
                    `${order.price} \u{20B4}`
                );
                const orderDateWrap = CreateElement(orderSection, 'div', [
                    'order__date--wrap',
                ]);
                const orderDate = CreateElement(
                    orderDateWrap,
                    'span',
                    ['order__date'],
                    order.date
                );
                const orderBtnWrap = CreateElement(orderSection, 'div', [
                    'order__btn--wrap',
                ]);
                const orderBtn = CreateElement(
                    orderBtnWrap,
                    'button',
                    ['order__btn'],
                    'Удалить'
                );
                orderBtn.addEventListener('click', function (e) {
                    localStorage.removeItem(orderItem.getAttribute('localId'));
                    orderItem.remove();
                });
            }
        }
        document
            .querySelector('.goods-close')
            .addEventListener('click', function (e) {
                ordersBg.style.right = '-25%';
                setTimeout(() => {
                    orders.style.display = 'none';
                }, 800);
            });
    });
console.log(localStorage);
let counter = parseInt(localStorage.getItem('counter')) || 0;
function generateUniqueId() {
    counter++;
    localStorage.setItem('counter', counter.toString());
    return counter;
}
console.log(counter);
// localStorage.clear();
