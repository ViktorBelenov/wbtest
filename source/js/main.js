import {CARD} from './modules/mock.js';
import {getCard} from './modules/card.js';
const CARD_PLACE = document.querySelector('.product__card-container');

CARD_PLACE.append(getCard(CARD));
