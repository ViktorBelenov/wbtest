import {total} from './objects';
import {CARDS} from './mock';

const updateTotalPrice = (card, isAddition) => {
  const totalField = total.querySelector('.total__amount');
  const discountField = total.querySelector('.total__discount');
  const id = card.dataset.id - 1;

  if (isAddition) {
    totalField.textContent = +totalField.textContent + CARDS[id].actualPrice * CARDS[id].amount;
    discountField.textContent = +discountField.textContent + CARDS[id].oldPrice * CARDS[id].amount;
  } else {
    totalField.textContent = +totalField.textContent - CARDS[id].actualPrice * CARDS[id].amount;
    discountField.textContent = +discountField.textContent - CARDS[id].oldPrice * CARDS[id].amount;
  }
  console.log(CARDS[id].actualPrice * CARDS[id].amount);
  console.log('card');


};

const setSelectedCardListiner = (card) => {
  const checkbox = card.querySelector('.checkbox__input');
  checkbox.addEventListener('change', (event)=>{
    const product = event.target.closest('.card');
    if (event.target.checked) {
      updateTotalPrice(product, true);
    } else {
      updateTotalPrice(product, false);
    }
  });
};

export {setSelectedCardListiner, updateTotalPrice};
