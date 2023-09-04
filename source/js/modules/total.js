import {CARDS} from './mock';

const prettierPrice = (total) => {
  const totalArray = total.toString().split('');
  for (let i = totalArray.length; i > 0; i--) {
    if (i % 3 === 0) {
      totalArray.splice(totalArray.length - i, 0, ' ');
    }
  }
  return totalArray.join('');
};

const updateTotalPrice = () => {

  const totalField = document.querySelector('.total__amount');

  const discountField = document.querySelector('.total__discount');
  const cards = document.querySelectorAll('.card');

  let total = 0;
  let oldPrice = 0;

  cards.forEach((element) => {
    let id = element.dataset.id;
    if (element.querySelector('.checkbox__input').checked) {
      total = total + CARDS[id - 1].amount * CARDS[id - 1].actualPrice;
      oldPrice = oldPrice + CARDS[id - 1].amount * CARDS[id - 1].oldPrice;
    }
  });
  prettierPrice(total);
  prettierPrice(oldPrice);
  totalField.textContent = prettierPrice(Math.ceil(total));
  discountField.textContent = prettierPrice(Math.ceil(oldPrice));
};

const setSelectedCardListiner = (card) => {
  const checkbox = card.querySelector('.checkbox__input');
  checkbox.addEventListener('change', ()=>{
    updateTotalPrice();
  });
};

export {setSelectedCardListiner, updateTotalPrice};
