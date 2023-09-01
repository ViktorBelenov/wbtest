import {CARD} from './mock.js';


const startsCounting = (event) => {
  const target = event.target;
  const indicator = target.closest('.counter').querySelector('.counter__input');
  const add = target.closest('.counter').querySelector('.counter__button--plus');
  const minus = target.closest('.counter').querySelector('.counter__button--minus');


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

  if (value >= CARD.maxAmount) {
    add.classList.add('counter__button--disabled');
    value = CARD.maxAmount;
  } else {
    add.classList.remove('counter__button--disabled');
  }

  CARD.amount = value;
  indicator.value = value;
};

const getCounter = (card) => {

  const counter = card.querySelector('[data-counter]');
  counter.addEventListener('click', startsCounting);
};

const removeCounter = (card) => {
  const counter = card.querySelector('[data-counter]');
  counter.removeEventListener('click', startsCounting);
};

export {getCounter, removeCounter};
