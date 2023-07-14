import { getRandomScale } from './data.js';
import { changeScaleElementValue } from './view.js';
console.log(getRandomScale());

const button = document.querySelector('.interface__button');

const onButtonClick = () => {
  changeScaleElementValue(getRandomScale());
};

button.addEventListener('click', onButtonClick);
