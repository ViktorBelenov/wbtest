import {CARDS} from './mock';

const productCardContainer = document.querySelector('.product__card-container');

const updateAmountCardCart = (place) => {
  if (CARDS) {
    const newCounter = document.createElement('span');
    newCounter.classList.add('cart-counter');
    newCounter.textContent = productCardContainer.childNodes.length;
    place.append(newCounter);
  }

};


export {updateAmountCardCart};
