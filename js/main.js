/**
 * @param {HTMLElement} parent - Родительский элемент, в который добавляется созданный элемент.
 * @param {string} type - Тип создаваемого элемента (например, 'div', 'span' и т.д.).
 * @param {string[]} classes - Массив классов для добавления к созданному элементу.
 * @param {string} innerHTML - Текстовое содержимое созданного элемента или null.
 * @param {string} id - Массив для добавления нескольких id к созданному элементу.
 * @returns {HTMLElement} - Созданный элемент.
 */
// Функция ниже упращает написание функции для создания элемента
function CreateElement(parent, type, classes = [], innerHTML = null, id = '') {
    const element = document.createElement(type);
    element.classList.add(...classes);
    element.innerHTML = innerHTML;
    element.id = id;
    parent.appendChild(element);
    return element;
}
// строка это функция, которая открывает корзину на сайте
function backetBtn() {
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
            const imgPathChng =
                document.title == 'WebShop'
                    ? order.imgPath
                    : `../${order.imgPath}`;
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
            const orderImg = CreateElement(orderImgWrap, 'img', ['order__img']);
            orderImg.setAttribute('src', imgPathChng);
            orderImg.setAttribute('alt', order.category);
            // это функция, которая открывает информацию про товар в корзине товаров. Нужно нажать на картинку товара
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
                goodImg.setAttribute('src', imgPathChng);
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
                // это кнопка, которая закрывает корзину товаров
                document
                    .querySelector('.good-inf-close')
                    .addEventListener('click', function (e) {
                        goodInfCtn.style.left = '-25%';
                        setTimeout(() => {
                            goodInf.style.display = 'none';
                        }, 800);
                    });
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
                'Видалити'
            );
            // это кнопка удаления товара из корзины
            orderBtn.addEventListener('click', function (e) {
                localStorage.removeItem(orderItem.getAttribute('localId'));
                orderItem.remove();
            });
        }
    }
    // это кнопка, которая закрвает информацию о товаре, которая открываеться в корзине товаров. Чтоб открыть её нужно нажать на картинку товара
    document
        .querySelector('.goods-close')
        .addEventListener('click', function (e) {
            ordersBg.style.right = '-25%';
            setTimeout(() => {
                orders.style.display = 'none';
            }, 800);
        });
}
// строка 189 это объект(тип данных), в которм хранится вся информация про товар
// так же, здесь можно вписать любой другой товар и он добавиться в сетку товаров, создавая новую ячейку на сайте
const productChar = {
    BMS: {
        1: {
            category: 'BMS',
            name: 'Smart BMS JBD 3-4S 100A Li-ion/Lifepo4',
            price: '2 080 ₴',
            img: 'img/BMS1.webp',
            id: 'BMS1',
            desc: `Смарт БМС JBD 3-4S 100А із вбудованим у плату Bluetooth модулем, за допомогою програми на смартфон можна регулювати основні характеристики плати. Додаток називається Xiaoxiang. Плата симетрична, для заряду та розряду використовується той самий порт. Може використовуватися як для літій іонних так і для залізофосфатних акб..`,
        },
        2: {
            category: 'BMS',
            name: 'JBD дисплей для підключення до плати захисту',
            price: '570 ₴',
            img: 'img/BMS2.webp',
            id: 'BMS2',
            desc: `JBD LCD дисплей для підключення до плат захисту JBD через порт UART.`,
        },
        3: {
            category: 'BMS',
            name: 'Bluetooth-модуль для JBD Smart BMS (UART)',
            price: '349 ₴',
            img: 'img/BMS3.webp',
            id: 'BMS3',
            desc: `Bluetooth-модуль для моніторингу та налаштування БМС JBD Smart. Для підключення до плати необхідно використовувати роз'єм UART. Підключити модуль можна до IOS та Android пристроїв.`,
        },
        4: {
            category: 'BMS',
            name: 'Smart BMS JBD 10S-17S 50A Li-ion/Lifepo4',
            price: '1 830 ₴',
            img: 'img/BMS4.webp',
            id: 'BMS4',
            desc: `Смарт БМС JBD 10 - 17S 50А із вбудованим у плату Bluetooth модулем, за допомогою програми на смартфон можна регулювати основні характеристики плати. Додаток називається Xiaoxiang. Плата симетрична, для заряду та розряду використовується той самий порт. Може використовуватися як для літій іонних так і для залізофосфатних акб..`,
        },
        5: {
            category: 'BMS',
            name: 'Smart BMS JBD 10S-17S 80A Li-ion/Lifepo4',
            price: '2 299 ₴',
            img: 'img/BMS5.webp',
            id: 'BMS5',
            desc: `Смарт БМС JBD 10 - 17S 80А із вбудованим у плату Bluetooth модулем, за допомогою програми на смартфон можна регулювати основні характеристики плати. Додаток називається Xiaoxiang. Плата симетрична, для заряду та розряду використовується той самий порт. Може використовуватися як для літій іонних так і для залізофосфатних акб..`,
        },
        6: {
            category: 'BMS',
            name: 'Смарт БМС Jikong 8-20S 40A Li-ion/Lifepo4/LTO',
            price: '2 821 ₴',
            img: 'img/BMS6.webp',
            id: 'BMS6',
            desc: `Смарт БМС Jikong 8-20S 40A із вбудованим у плату Bluetooth модулем, за допомогою програми на смартфон можна регулювати основні характеристики плати. Додаток називається Xiaoxiang. Плата симетрична, для заряду та розряду використовується той самий порт. Може використовуватися як для літій іонних так і для залізофосфатних акб..`,
        },
        7: {
            category: 'BMS',
            name: 'Смарт БМС Jikong 4-8S 200A Li-ion/Lifepo4/LTO',
            price: '4 000 ₴',
            img: 'img/BMS7.webp',
            id: 'BMS7',
            desc: `Jikong Smart BMS 4-8S 200A - Плата захисту акумулятора для різних типів (Li-Ion, LiFePO4 та LTO), з активним балансиром 1А, вбудованим Bluetooth модулем та двома датчиками температури. Висока точність визначення напруги одного осередку - 5mV Інформативний додаток на мобільних пристроях з операційною системою Android та IOS`,
        },
    },
    conWires: {
        1: {
            category: 'conWires',
            name: "Роз'єм живлення XT30U Amass, оригінал",
            price: '31 ₴',
            img: 'img/conWires1.webp',
            id: 'conWires1',
            desc: `Роз'єм повністю оригінальний, виробник Amass. Ціна за комплект тато+мама. Також можемо виготовити готовий кабель під необхідні характеристики, під певний струм, розпаяти потрібні роз'єми та наконечники.`,
        },
        2: {
            category: 'conWires',
            name: "Роз'єм живлення Anderson SD45A Червоний",
            price: '35 ₴',
            img: 'img/conWires2.webp',
            id: 'conWires2',
            desc: `Роз'єм типу Anderson, одиночний, має на корпусі з'єднання типу "ластівчин хвіст" за допомогою якого можна зібрати блок на потрібну кількість контактів. В наявності червоний та чорний колір. Ціна за комплект тато+мама. Також можемо виготовити готовий кабель під необхідні характеристики, під певний струм, розпаяти потрібні роз'єми та наконечники.`,
        },
        3: {
            category: 'conWires',
            name: 'Разъем питания XT60W Amass влагозащищенный, оригинал',
            price: '45 ₴',
            img: 'img/conWires3.webp',
            id: 'conWires3',
            desc: `Роз'єм живлення XT60W, обладнаний м'якою прокладкою ущільнювача для захисту від попадання вологи на контактну групу. Роз'єм повністю оригінальний, виробник Amass. Ціна за комплект тато+мама.`,
        },
        4: {
            category: 'conWires',
            name: "Роз'єм живлення MT60 Amass, оригінал",
            price: '60 ₴',
            img: 'img/conWires4.webp',
            id: 'conWires4',
            desc: `Роз'єм повністю оригінальний, виробник Amass. Ціна за комплект тато+мама+ковпачки.`,
        },
        5: {
            category: 'conWires',
            name: "Роз'єм живлення Anderson 175А, (Пара, сірий)",
            price: '550 ₴',
            img: 'img/conWires5.webp',
            id: 'conWires5',
            desc: `Потужний силовий роз'єм, контакти в роз'ємі пружні та притискаються один до одного з гарним зусиллям. Рознімання Anderson виготовляються з негорючого пластику. Ціна за комплект тато+мама.`,
        },
        6: {
            category: 'conWires',
            name: "Роз'єм живлення XT90 Amass, оригінал",
            price: '70 ₴',
            img: 'img/conWires6.webp',
            id: 'conWires6',
            desc: `Роз'єм повністю оригінальний, виробник Amass. Ціна за комплект тато+мама+ковпачки.`,
        },
        7: {
            category: 'conWires',
            name: "Роз'єм живлення Anderson 350А (Пара, сірий)",
            price: '850 ₴',
            img: 'img/conWires7.webp',
            id: 'conWires7',
            desc: `Потужний силовий роз'єм, контакти в роз'ємі пружні та притискаються один до одного з гарним зусиллям. Рознімання Anderson виготовляються з негорючого пластику. Ціна за комплект тато+мама.`,
        },
        8: {
            category: 'conWires',
            name: "Роз'єм живлення EC3",
            price: '26 ₴',
            img: 'img/conWires8.webp',
            id: 'conWires8',
            desc: `Ціна за комплект тато+мама. Також можемо виготовити готовий кабель під необхідні характеристики, під певний струм, розпаяти потрібні роз'єми та наконечники.`,
        },
        9: {
            category: 'conWires',
            name: "Роз'єм живлення EC5",
            price: '55 ₴',
            img: 'img/conWires9.webp',
            id: 'conWires9',
            desc: `Ціна за комплект тато+мама. Також можемо виготовити готовий кабель під необхідні характеристики, під певний струм, розпаяти потрібні роз'єми та наконечники.`,
        },
    },
    Powerbanks: {
        1: {
            category: 'Powerbanks',
            name: 'USB зарядка QC 3.0 12В-24В під монтаж у корпус',
            price: '346 ₴',
            img: 'img/Powerbanks1.webp',
            id: 'Powerbanks1',
            desc: `Оснащена функцією швидкого заряду на два порти потужністю 36Вт. Зарядне вбудовується в панель приладів або в стінку корпусу, має приглушене підсвічування синього кольору. Для монтажу зарядного пристрою на панелі необхідно вирізати отвір діаметром 28 мм. та підключити живлення "+" та "-" 12 або 24 вольта, в комплект входять дроти для підключення із запобіжником.`,
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
// setInterval(() => {
//     loclStorlnth.innerHTML = localStorage.length;
// }, 100);
if (document.title === 'WebShop') {
    const categoryCtnList = document.querySelector('.category-ctn__list');
    const categoryCtnItems = [];
    const categoryCtnImgWraps = [];
    for (const category of Object.keys(productChar)) {
        for (const product of Object.keys(productChar[category])) {
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
            const itemSec = CreateElement(categoryCtnItem, 'div', [
                'item__sec',
            ]);
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
                'купити',
                `${productId}`
            );
            buyBtn.setAttribute('src', `${productId}`);
            // 433 строка клик на кнопку КУПИТЬ а Главном меню
            buyBtn.addEventListener('click', () =>
                order(
                    productName,
                    productPrice,
                    productImg,
                    productId,
                    productDesc
                )
            );
        }
    }
    const catItem = document.querySelectorAll('.category__link');
    // это фильтрация товаров, их категорий
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
    const productInfo = document.querySelector('.product__info');
    const productCtn = document.querySelector('.product__ctn');
    // Это функция, которая собирает информацию и передаёт её в другую функцию, которая уже отображает контент за счёт готовой информации. Срабатывает она при клике на картинку товара в Главном меню
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
    // это нажатие на картинку товара в Главном меню, отоброжение про товар
    categoryCtnImgWraps.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // это функция, которая запускается
            productShow(item);
        });
    });
    // функция, которая выводит на экран информацию про товар. Работает на Главной странице при нажатии на картинку товара
    function productFill(ctnItem, img, title, price, id, desc, e) {
        const productImgWrap = CreateElement(ctnItem, 'div', [
            'product__img--wrap',
        ]);
        const productImg = CreateElement(productImgWrap, 'img', [
            'product__img',
        ]);
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
            'купити',
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
            'Короткий опис'
        );
        const shortDescP = CreateElement(productShortDesc, 'p', [], desc);
        // Эта функция закрывает информацию про товар, которую вывели с главной страници, при нажатии на любое место за пределами окна
        productInfo.addEventListener('click', function (e) {
            if (!productCtn.contains(e.target)) {
                do {
                    productCtn.childNodes.forEach((element) => {
                        element.remove();
                    });
                } while (productCtn.childNodes.length != 0);
                productInfo.classList.remove('show');
            }
        });
    }
    // Функция, которая визуально даёт возможность купить товар. Выводит окно с элементами покупки товара
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
        // функция для уменьшения кол-во товаров
        function lessClickHandler() {
            curr.innerHTML = parseInt(curr.innerHTML) - 1;
            updateTotalPrice();
            if (parseInt(curr.innerHTML) === 1) {
                less.disabled = true;
            }
        }
        // функция для увеличения кол-во товаров
        function moreClickHandler() {
            curr.innerHTML = parseInt(curr.innerHTML) + 1;
            updateTotalPrice();
            less.disabled = false;
        }
        // это кнопка уменьшения кол-во товаров
        less.addEventListener('click', lessClickHandler);
        // это кнопка увеличения кол-во товаров
        more.addEventListener('click', moreClickHandler);
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
        // эта функция обновляет цену в зависимости от кол-во товаров выбраных при оформлении заказа
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
                orderDiscountInn
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₴';
        } else {
            orderDiscount.innerHTML = '-';
        }
        if (orderDeliveryInn !== 0) {
            orderDelivery.innerHTML =
                orderDeliveryInn
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₴';
        } else {
            orderDelivery.innerHTML = '-';
        }
        orderTotal.innerHTML =
            orderTotalInn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
            ' ₴';
        // кнопка для отправки заказа в корзину заказов
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
                            document
                                .querySelector('.payment')
                                .querySelector('h3').textContent
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
                        'Дякуємо вам за покупку. Ми раді і завжди чекаємо на вас! \u{1F609}'
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
                    // эта функция генерирует уникальный ID для заказа
                    function generateUniqueId() {
                        let counter = localStorage.length + 1;
                        return counter;
                    }
                    const localId = generateUniqueId();
                    localStorage.setItem(localId, JSON.stringify(orderObj));
                    location.reload();
                }
            });
        // эта кнопка закрывает окно для оформления заказа
        document
            .querySelector('.order-close')
            .addEventListener('click', function (e) {
                less.removeEventListener('click', lessClickHandler);
                more.removeEventListener('click', moreClickHandler);
                orderBgItem.style.right = '-25%';
                curr.innerHTML = 1;
                setTimeout(() => {
                    orderItem.style.display = 'none';
                }, 800);
            });
    }
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    // снова генерация уникального ID
    function generateUniqueId() {
        counter++;
        localStorage.setItem('counter', counter.toString());
        return counter;
    }
}
// кнопка для открытия корзины
document
    .querySelector('.basket')
    .querySelector('button')
    .addEventListener('click', function () {
        backetBtn();
    });
// кнопка, которая открывает логин
document
    .querySelector('.sign-up')
    .querySelector('a')
    .addEventListener('click', function () {
        document.querySelector('.login').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.login-bg').style.right = '0';
        }, 100);
    });
// кнопка, которая закрывает логин
document.querySelector('.login-close').addEventListener('click', function () {
    document.querySelector('.login-bg').style.right = '-25%';
    setTimeout(() => {
        document.querySelector('.login').style.display = 'none';
    }, 800);
});
// это кнопка для перехода с логине в регистрацию
document
    .getElementById('loginToSignup')
    .addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.login-bg').style.right = '-25%';
        setTimeout(() => {
            document.querySelector('.login').style.display = 'none';
            document.querySelector('.signup').style.display = 'flex';
        }, 800);
        setTimeout(() => {
            document.querySelector('.signup-bg').style.right = '0';
        }, 900);
    });
// это кнопка, которая закрывает регистрацию
document.querySelector('.signup-close').addEventListener('click', function () {
    document.querySelector('.signup-bg').style.right = '-25%';
    setTimeout(() => {
        document.querySelector('.signup').style.display = 'none';
    }, 800);
});

// localStorage.clear();
