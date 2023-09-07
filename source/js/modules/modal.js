import {isEscapeKey} from './objects';

const deliveryDestinationModalButton = document.querySelector('.delivery__address-setting-button');
const deliveryDestinationModal = document.querySelector('.modal__delivery');
const bankCardModalButton = document.querySelector('.payment-total__type-setting-button');
const bankCardModal = document.querySelector('.modal__payment');

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
