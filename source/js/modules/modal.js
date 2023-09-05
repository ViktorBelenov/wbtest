import {isEscapeKey} from './objects';

const deliveryDestinationModalButton = document.querySelector('.delivery__address-setting-button');
const deliveryDestinationModal = document.querySelector('.modal__delivery');

const modals = document.querySelectorAll('[data-modal]');
modals.forEach((element) => {
  element.querySelector('.modal__close-button').addEventListener('click', closeModal);
});


function closeModal(event) {
  event.target.closest('[data-modal]').classList.remove('modal__open');
  document.removeEventListener('keydown', onDocumentKeydown);
  event.target.closest('.modal').classList.remove('modal__curtain-open');
}

const openModal = (modal) => {
  modal.classList.add('modal__open');
  modal.closest('.modal').classList.add('modal__curtain-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(event) {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeModal(event);
  }
}

deliveryDestinationModalButton.addEventListener('click', () => {
  openModal(deliveryDestinationModal);
});
