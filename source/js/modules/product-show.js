import {basket} from './objects.js';

const showCardButton = basket.querySelector('.product__show-button');
const productBasketContainer = basket.querySelector('.product__card-container');

const showNotAvalibleCardButton = basket.querySelector('.no-avalible__show-button');
const productNotAvalibleBasketContainer = basket.querySelector('.no-avalible__card-container');

const addShowButtonListener = () => {
  showCardButton.addEventListener('click', () => {
    showCardButton.classList.toggle('product__show-button--close');
    productBasketContainer.classList.toggle('visually-hidden');
  });
};

const addShowButtonNotAvalibleListener = () => {
  showNotAvalibleCardButton.addEventListener('click', () => {
    showNotAvalibleCardButton.classList.toggle('no-avalible__show-button--close');
    productNotAvalibleBasketContainer.classList.toggle('visually-hidden');
  });
};

export {addShowButtonListener, addShowButtonNotAvalibleListener};
