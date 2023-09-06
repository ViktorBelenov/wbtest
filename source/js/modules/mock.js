const CARDS = [{
  id: 1,
  title: 'Футболка UZcotton мужская',
  properties: ['Цвет: белый', 'Размер: 56'],
  stock: 'Коледино WB',
  manufacturer:
    {
      name: 'OOO Вайлдберриз',
      id: 1067746062449,
      address: '142181,Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1',
      url: ' ',
    },
  amount: 1,
  actualPrice: 522,
  oldPrice: 1051,
  amountLeft: 2,
},
{
  id: 2,
  title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
  properties: ['Цвет: прозрачный'],
  stock: 'Коледино WB',
  manufacturer:
    {
      name: 'OOO «МЕГАПРОФСТИЛЬ»',
      id: 5167746237148,
      address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
      url: ' ',
    },
  amount: 200,
  actualPrice: 10500.235,
  oldPrice: 11500.235,
  amountLeft: 1000,
},
{
  id: 3,
  title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
  properties: [],
  stock: 'Коледино WB',
  manufacturer:
  {
    name: 'OOO Вайлдберриз',
    id: 1067746062449,
    address: '142181,Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1',
    url: ' ',
  },
  amount: 2,
  actualPrice: 247,
  oldPrice: 475,
  amountLeft: 2,
}];

// id
// title
// [properties]
// stock
// manufacturer:{name,id,address}
// amount
// price-per-unit
// old-price-per-unit

const PROFILE = {
  isPickup: true,
  addressPickup: [
    {
      address: 'Бишкек, улица Ахматбека Суюмбаева, 12/1',
      addressid: '1',
    },
    {
      address: 'Бишкек, улица Пушкина, дом Колотушкина',
      addressid: '2',
    },
    {
      address: 'Бишкек, микрорайон Мажалкыс, улица Ахунбаева Кисы, 23/11',
      addressid: '3',
    }
  ],
  address: [
    {
      address: 'Бишкек, улица Табышалиева, 57',
      addressid: '1',
    },
    {
      address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
      addressid: '2',
    },
    {
      address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
      addressid: '3',
    }
  ],
  cards: [],
};

const CARD = {
  id: 1,
  title: 'Футболка UZcotton мужская',
  properties: ['Цвет: белый', 'Размер: 56'],
  stock: 'Коледино WB',
  manufacturer: 'OOO Вайлдберриз',
  amount: 1,
  actualPrice: 522,
  oldPrice: 1051,
  amountLeft: 2,
};

export {CARD, PROFILE, CARDS};
