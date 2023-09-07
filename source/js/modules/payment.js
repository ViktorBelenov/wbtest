import {PROFILE} from './mock.js';

const CARDS = PROFILE.cards;
const cardTemplate = document.querySelector('#payment').content.querySelector('.payment');
const cardPlace = document.querySelector('.modal__payment-card-place');
const cardPlaceInTotal = document.querySelector('.payment-total__card');


const getCardElement = (id, cards) => {
  return cards.find((element)=> {
    return element.idcard === id;
  });
};

const getCleanCard = (card) => {
  const cleanCard = card;
  cleanCard.querySelector('.radio-modal__control-mark').remove();
  return cleanCard;
};

const updateCardInTotal = () => {
  const activeCard = document.querySelector('.payment-radio__input:checked');
  cardPlaceInTotal.innerHTML = '';
  cardPlaceInTotal.append(getCleanCard(getCard((getCardElement(+activeCard.value, CARDS)))));
};

const getPaymentRadioListener = (cards) => {
  cards.querySelector('.payment-radio__input').addEventListener('change', ()=> {
    updateCardInTotal();
  });
};

const encryptCardNumber = (number) => {
  let numberArray = number.toString().split('');
  numberArray.splice(6, 6, Array(6).fill('*'));
  numberArray = numberArray.flat();
  for (let i = numberArray.length; i > 0; i--) {
    if (i % 4 === 0) {
      numberArray.splice(numberArray.length - i, 0, ' ');
    }
  }
  return numberArray.join('').trim();
};

const getCardIcon = (card, data) => {
  const cardImg = card.querySelector('.payment__card-logo');
  cardImg.setAttribute('xlink:href', `img/sprite.svg#card-icon-${data.type}`);
};

const getCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.payment__text').textContent = encryptCardNumber(card.number);
  getCardIcon(newCard, card);
  newCard.querySelector('.payment-radio__input').value = card.idcard;
  return newCard;
};

const renderPaymentCards = () => {
  const fragment = document.createDocumentFragment();
  CARDS.forEach((element) => {
    const newCreditCard = getCard(element);
    getPaymentRadioListener(newCreditCard);
    fragment.append(newCreditCard);
  });

  cardPlace.append(fragment);
};

renderPaymentCards();
