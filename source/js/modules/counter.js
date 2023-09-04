import {CARDS} from './mock.js';
import {updatePrice} from './price-update.js';
import {searchCard} from './search-card.js';
import {updateTotalPrice} from './total.js';


const startsCounting = (event) => {
  const target = event.target;
  const indicator = target.closest('.counter').querySelector('.counter__input');
  const add = target.closest('.counter').querySelector('.counter__button--plus');
  const minus = target.closest('.counter').querySelector('.counter__button--minus');


  const priceIndicatorContainer = target.closest('.card').querySelector('.card__price-container');
  const currentCardData = searchCard(target, CARDS);


  let value = indicator.value;

  if (target.closest('.counter__button--plus')) {
    value++;
  }
  if (target.closest('.counter__button--minus')) {
    value--;

  }

  if (value < 0) {
    value = 0;
    minus.classList.add('counter__button--disabled');
  } else {
    minus.classList.remove('counter__button--disabled');
  }

  if (value > currentCardData.amountLeft) {
    value = currentCardData.amountLeft;
    add.classList.add('counter__button--disabled');
  } else {
    add.classList.remove('counter__button--disabled');
  }

  currentCardData.amount = value;
  indicator.value = value;
  updatePrice(priceIndicatorContainer, currentCardData);
  updateTotalPrice();
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
