const LOW_PRODUCT_AMOUNT = 5;
const MIN_FREE_ORDER_TOTAL_PRICE = 1;

const basket = document.querySelector('.basket');
const total = basket.querySelector('.total');

const isEscapeKey = (event) => event.key === 'Escape';

export {LOW_PRODUCT_AMOUNT, MIN_FREE_ORDER_TOTAL_PRICE, basket, total, isEscapeKey};
