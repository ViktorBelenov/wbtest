const searchCard = (element, cards) => {
  const id = element.closest('.card').dataset.id;
  return cards.find((card) => card.id === +id);
};

export {searchCard};
