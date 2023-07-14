import { getRandomScale } from './data.js';
import { changeScaleElementValue } from './view.js';

const button = document.querySelector('.interface__button');

const onButtonClick = () => {
  changeScaleElementValue(getRandomScale());
};

button.addEventListener('click', onButtonClick);

