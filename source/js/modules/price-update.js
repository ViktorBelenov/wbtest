const updatePrice = (priceContainer, data) => {
  const actualPrice = priceContainer.querySelector('.card__actual-price');
  const oldPrice = priceContainer.querySelector('.card__past-price');

  actualPrice.textContent = `${Math.ceil(data.amount * data.actualPrice)} сом`;
  oldPrice.textContent = `${Math.ceil(data.amount * data.oldPrice)} сом`;

  if ((data.amount * data.actualPrice).toString().length > 5) {
    actualPrice.classList.add('card__actual-price--smaller-letter');
  } else {
    actualPrice.classList.remove('card__actual-price--smaller-letter');
  }
};

export {updatePrice};
