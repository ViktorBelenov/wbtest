const cardTemplate = document.querySelector('#card').content.querySelector('.card');

const getCard = (element) => {
  const cardElement = cardTemplate.cloneNode('true');
  console.log(cardElement);
  cardElement.querySelector('.card__img').src = `img/cards/${element.id}.jpg`;
  cardElement.querySelector('.card__title').textContent = element.title;
  cardElement.querySelector('.card__stock').textContent = element.stock;
  cardElement.querySelector('.card__manufacturer').textContent = element.manufacturer;
  cardElement.querySelector('.card__amount-input').value = element.amount;
  cardElement.querySelector('.card__actual-price').textContent = element.amount * element.actualPrice;
  cardElement.querySelector('.card__past-price').textContent = element.amount * element.oldPrice;
  return cardElement;
};


export {getCard};
