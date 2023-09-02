import {basket} from './objects.js';

const showCardButton = basket.querySelector('.product__show-button');
const productBasketContainer = basket.querySelector('.product__card-container');

const addShowbuttonListener = () => {
  showCardButton.addEventListener('click', () => {
    showCardButton.classList.toggle('product__show-button--close');
    productBasketContainer.classList.toggle('visually-hidden');
  });
};

export {addShowbuttonListener};
