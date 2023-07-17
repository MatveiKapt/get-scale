const scaleElementWrapper = document.querySelector('.interface__scale-text-wrapper');
const scaleElement = document.querySelector('.interface__scale-text');

const changeScaleElementValue = (value) => {
  scaleElementWrapper.classList.add('shake');

  setTimeout(() => {
    scaleElementWrapper.classList.remove('shake');
  }, 200);

  setTimeout(() => {
    scaleElement.textContent = value
  }, 200);

};

export { changeScaleElementValue };
