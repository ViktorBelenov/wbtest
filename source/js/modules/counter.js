import {CARDS} from './mock.js';
import {updatePrice} from './price-update.js';


const startsCounting = (event) => {
  const target = event.target;
  const indicator = target.closest('.counter').querySelector('.counter__input');
  const add = target.closest('.counter').querySelector('.counter__button--plus');
  const minus = target.closest('.counter').querySelector('.counter__button--minus');

  const priceIndicatorContainer = target.closest('.card').querySelector('.card__price-container');


  let value = indicator.value;

  if (target.closest('.counter__button--plus')) {
    value++;
  }
  if (target.closest('.counter__button--minus')) {
    value--;
  }

  if (value <= 0) {
    value = 0;
    minus.classList.add('counter__button--disabled');
  } else {
    minus.classList.remove('counter__button--disabled');
  }

  if (value >= CARD.amountLeft) {
    value = CARD.amountLeft;
    add.classList.add('counter__button--disabled');
  } else {
    add.classList.remove('counter__button--disabled');
  }

  CARD.amount = value;
  indicator.value = value;
  priceIndicatorContainer.querySelector('.card__actual-price').textContent = `${value * CARD.actualPrice} сом`;
  priceIndicatorContainer.querySelector('.card__past-price').textContent = `${value * CARD.oldPrice} сом`;
  updatePrice();
};

const addCounter = (card) => {

  const counter = card.querySelector('[data-counter]');
  counter.addEventListener('click', startsCounting);
};

const removeCounter = (card) => {
  const counter = card.querySelector('[data-counter]');
  counter.removeEventListener('click', startsCounting);
};

export {addCounter, removeCounter};
