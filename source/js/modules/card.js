import {CARDS} from './mock.js';
import {LOW_PRODUCT_AMOUNT} from './objects.js';

import {updatePrice} from './price-update.js';
import {addCounter, removeCounter} from './counter.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.card');

const getWarningAboutAmount = (card, amount) => {
  if (amount <= LOW_PRODUCT_AMOUNT) {
    card.querySelector('.card__amount-warning').textContent = `Осталось ${amount} шт.`;
  }
};

const getDeleteCard = (card) => {
  card.querySelector('.card__delete').addEventListener('click', (evt) => {
    removeCounter(card);
    evt.target.closest('.card').remove();
  }, true);
};

const getCardProperties = (card, properties) => {
  const propertisContainer = card.querySelector('.card__properties');
  properties.forEach((element) => {
    let newPropertis = document.createElement('span');
    newPropertis.classList.add('card__property');
    newPropertis.textContent = element;
    propertisContainer.append(newPropertis);
  });
};

const getCard = (element) => {
  const cardElement = cardTemplate.cloneNode('true');
  cardElement.querySelector('.card__img').src = `img/cards/${element.id}-product.jpg`;
  cardElement.querySelector('.card__title').textContent = element.title;
  cardElement.querySelector('.card__stock').textContent = element.stock;
  getCardProperties(cardElement, element.properties);
  cardElement.querySelector('.card__manufacturer').textContent = element.manufacturer;
  cardElement.querySelector('.counter__input').value = element.amount;
  getWarningAboutAmount(cardElement, element.amountLeft);
  updatePrice(cardElement, element);
  return cardElement;
};

const renderCards = (cards, place) => {
  cards.forEach((card)=>{
    const newCard = getCard(card);
    addCounter(newCard);
    getDeleteCard(newCard);
    place.append(newCard);
  });
};

renderCards(CARDS, document.querySelector('.product__card-container'));

export {renderCards};
