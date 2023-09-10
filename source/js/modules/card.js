import {CARDS} from './mock.js';
import {LOW_PRODUCT_AMOUNT} from './objects.js';


import {updatePrice} from './price-update.js';
import {addCounter, removeCounter} from './counter.js';
import {setSelectedCardListiner, updateTotalPrice, updateDeliveryButton} from './total.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.card');
const cardNotAvalibleTemplate = document.querySelector('#not-avalible-card').content.querySelector('.not-avalible-card');
const makerCardTemplate = document.querySelector('#maker').content.querySelector('.maker');

const getAvalibleCards = (cards) => {
  const avalible = cards.filter((element) => element.isAvalible);
  return avalible;
};

const getNotgetAvalibleCards = (cards) => {
  const avalible = cards.filter((element) => !element.isAvalible);
  return avalible;
};


const getMakerCard = (card, data) => {
  const makerCard = makerCardTemplate.cloneNode('true');
  const makerPlace = card.querySelector('.card__manufacturer-link');

  makerCard.querySelector('.maker__name').textContent = data.manufacturer.name;
  makerCard.querySelector('.maker__id').textContent = data.manufacturer.id;
  makerCard.querySelector('.maker__address').textContent = data.manufacturer.address;

  makerPlace.append(makerCard);
};

const setCardDataId = (card, data) => {
  card.dataset.id = data.id;
};

const getWarningAboutAmount = (card, amount) => {
  if (amount <= LOW_PRODUCT_AMOUNT) {
    card.querySelector('.card__amount-warning').textContent = `Осталось ${amount} шт.`;
  }
};

const getDeleteCard = (card) => {
  card.querySelector('.card__delete').addEventListener('click', (evt) => {
    removeCounter(card);
    evt.target.closest('.card').remove();
    updateTotalPrice();
    updateDeliveryButton();
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

const getCardNotAvalibleProperties = (card, properties) => {
  const propertisContainer = card.querySelector('.card__properties');
  properties.forEach((element) => {
    let newPropertis = document.createElement('span');
    newPropertis.classList.add('not-avalible-card__property');
    newPropertis.textContent = element;
    propertisContainer.append(newPropertis);
  });
};

const getCard = (element) => {
  const cardElement = cardTemplate.cloneNode('true');
  setCardDataId(cardElement, element);
  cardElement.querySelector('.card__img').src = `img/cards/${element.id}-product.jpg`;
  cardElement.querySelector('.card__title').textContent = element.title;
  cardElement.querySelector('.card__stock').textContent = element.stock;
  getCardProperties(cardElement, element.properties);
  cardElement.querySelector('.card__manufacturer').textContent = element.manufacturer.name;
  cardElement.querySelector('.counter__input').value = element.amount;
  getWarningAboutAmount(cardElement, element.amountLeft);
  updatePrice(cardElement, element);
  return cardElement;
};

const getDeleteNotAvalibleCard = (card) => {
  card.querySelector('.not-avalible-card__delete').addEventListener('click', (evt) => {
    evt.target.closest('.not-avalible-card').remove();
  }, true);
};

const getNotAvalibleCard = (element) => {
  const cardElement = cardNotAvalibleTemplate.cloneNode(true);
  setCardDataId(cardElement, element);
  cardElement.querySelector('.not-avalible-card__img').src = `img/cards/${element.id}-product.jpg`;
  cardElement.querySelector('.not-avalible-card__title').textContent = element.title;
  getCardNotAvalibleProperties(cardElement, element.properties);
  return cardElement;
};

const renderCards = (cards, place) => {
  const fragment = document.createDocumentFragment();
  const avalibleCards = getAvalibleCards(cards);
  avalibleCards.forEach((card)=>{
    const newCard = getCard(card);
    addCounter(newCard);
    getDeleteCard(newCard);
    getMakerCard(newCard, card);
    fragment.append(newCard);
    setSelectedCardListiner(newCard);
  });
  place.append(fragment);
};

const renderNotAvalibleCards = (cards, place) => {
  const fragment = document.createDocumentFragment();
  const notAvalibleCards = getNotgetAvalibleCards(cards);
  notAvalibleCards.forEach((card)=>{
    const newCard = getNotAvalibleCard(card);
    getDeleteNotAvalibleCard(newCard);
    fragment.append(newCard);
  });
  place.append(fragment);
};

renderNotAvalibleCards(CARDS, document.querySelector('.no-avalible__card-container'));
renderCards(CARDS, document.querySelector('.product__card-container'));

export {renderCards};
