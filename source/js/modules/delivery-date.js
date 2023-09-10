import {DELIVERY} from './mock';

const deliveryDateTempalte = document.querySelector('#delivery-card').content.querySelector('.delivery-card');
const deliveryDateImgTempalte = document.querySelector('#delivery-card__img').content.querySelector('.delivery-card__img-container');

const deliveryDateContainer = document.querySelector('.delivery-type__date-container');

const getDeliveryCard = (element) => {
  const newDate = deliveryDateTempalte.cloneNode(true);
  const newDateImgContainer = newDate.querySelector('.delivery-card__product-container');
  newDate.querySelector('.delivery-card__date').textContent = element.date;
  element.cards.forEach((card) => {
    const newImg = deliveryDateImgTempalte.cloneNode(true);
    newImg.querySelector('.delivery-card__img').src = `img/cards/${card.idcard}-product.jpg`;
    newImg.querySelector('.delivery-card__amount').textContent = card.amount;
    newDateImgContainer.append(newImg);
  });
  return newDate;
};

const renderDelivery = () => {
  const fragment = document.createDocumentFragment();
  DELIVERY.forEach((element) => {
    const newDate = getDeliveryCard(element);
    fragment.append(newDate);
  });
  deliveryDateContainer.append(fragment);
};
renderDelivery();
