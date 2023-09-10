import {isEscapeKey} from './objects';

const deliveryDestinationModalButton = document.querySelector('.delivery__address-setting-button');
const deliveryDestinationModal = document.querySelector('.modal__delivery');
const bankCardModalButton = document.querySelector('.payment-total__type-setting-button');
const bankCardModal = document.querySelector('.modal__payment');
const bankCardModalBuyButton = document.querySelector('.modal__payment-buy');
const deliveryDestinationModalBuyButton = document.querySelector('.modal__delivery-buy');
const deliveryDateButton = document.querySelector('.delivery-type__setting');
const bankCardBasketButton = document.querySelector('.payment-basket__setting');

const modals = document.querySelectorAll('[data-modal]');
modals.forEach((element) => {
  element.querySelector('.modal__close-button').addEventListener('click', closeModal);
});


function closeModal() {
  document.querySelector('.modal__open').classList.remove('modal__open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.querySelector('.modal__curtain-open').classList.remove('modal__curtain-open');
}

const openModal = (modal) => {
  modal.classList.add('modal__open');
  modal.closest('.modal').classList.add('modal__curtain-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(event) {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeModal();
  }
}

deliveryDestinationModalButton.addEventListener('click', () => {
  openModal(deliveryDestinationModal);
});

bankCardModalButton.addEventListener('click', () => {
  openModal(bankCardModal);
});

bankCardBasketButton.addEventListener('click', () => {
  openModal(bankCardModal);
});

bankCardModalBuyButton.addEventListener('click', () => {
  closeModal();
});

bankCardModalBuyButton.addEventListener('click', () => {
  closeModal();
});

deliveryDestinationModalBuyButton.addEventListener('click', () => {
  closeModal();
});

deliveryDateButton.addEventListener('click', () => {
  openModal(deliveryDestinationModal);
});
