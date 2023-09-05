import {CARDS} from './mock';
import {MIN_FREE_ORDER_TOTAL_PRICE} from './objects';


const prettierPrice = (total) => {
  const totalArray = Math.ceil(total).toString().split('');
  for (let i = totalArray.length; i > 0; i--) {
    if (i % 3 === 0) {
      totalArray.splice(totalArray.length - i, 0, ' ');
    }
  }
  return totalArray.join('').trim();
};

const isDeliveryFree = (total) => {
  return total > MIN_FREE_ORDER_TOTAL_PRICE ? 'Бесплатно' : prettierPrice(total);
};

const prettierAmount = (amount) => {
  let add;
  switch (amount) {
    case 0:
      add = 'товаров';
      break;
    case 1:
      add = 'товар';
      break;
    default:
      add = 'товара';
  }
  return amount + ' ' + add;
};

const updateTotalPrice = () => {

  const totalAmountField = document.querySelector('.total__amount-product');
  const totalField = document.querySelector('.total__price');
  const discountField = document.querySelector('.total__without-discount');
  const cards = document.querySelectorAll('.card');
  const profitField = document.querySelector('.total__discount');
  const deliveryField = document.querySelector('.total__delivery-price');

  let total = 0;
  let oldPrice = 0;
  let amount = 0;

  cards.forEach((element) => {
    let id = element.dataset.id;
    if (element.querySelector('.checkbox__input').checked) {
      total = total + CARDS[id - 1].amount * CARDS[id - 1].actualPrice;
      oldPrice = oldPrice + CARDS[id - 1].amount * CARDS[id - 1].oldPrice;
      amount = amount + CARDS[id - 1].amount;
    }
  });

  profitField.textContent = '-' + prettierPrice(oldPrice - total);
  totalAmountField.textContent = prettierAmount(amount);
  totalField.textContent = prettierPrice(total);
  discountField.textContent = prettierPrice(oldPrice);
  deliveryField.textContent = isDeliveryFree(total);
};

const setSelectedCardListiner = (card) => {
  const checkbox = card.querySelector('.checkbox__input');
  checkbox.addEventListener('change', ()=>{
    updateTotalPrice();
  });
};

export {setSelectedCardListiner, updateTotalPrice};
