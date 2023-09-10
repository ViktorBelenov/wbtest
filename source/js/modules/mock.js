const CARDS = [{
  isAvalible: true,
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
  isAvalible: true,
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
  isAvalible: true,
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
},
{
  isAvalible: false,
  id: 4,
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
  isAvalible: false,
  id: 5,
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
  isAvalible: false,
  id: 6,
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
      rating: 4.99,
      workstart: 9,
      workend: 21,
    },
    {
      address: 'Бишкек, улица Пушкина, дом Колотушкина',
      addressid: '2',
      rating: 4.56,
      workstart: 10,
      workend: 21,
    },
    {
      address: 'Бишкек, микрорайон Мажалкыс, улица Ахунбаева Кисы, 23/11',
      addressid: '3',
      rating: 3,
      workstart: 8,
      workend: 18,
    }
  ],
  address: [
    {
      address: 'Бишкек, улица Табышалиева, 57',
      addressid: '1',
      rating: 2,
      workstart: 10,
      workend: 21,
    },
    {
      address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
      addressid: '2',
      rating: 3,
      workstart: 7,
      workend: 21,
    },
    {
      address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
      addressid: '3',
      rating: 2.5,
      workstart: 3,
      workend: 22,
    }
  ],
  cards: [
    {
      idcard: 1,
      number: 8931231232152394,
      type: 1,
    },
    {
      idcard: 2,
      number: 8341234332157454,
      type: 2,
    },
    {
      idcard: 3,
      number: 8346734332157894,
      type: 3,
    },
    {
      idcard: 4,
      number: 1234567812341234,
      type: 4,
    }
  ],
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
