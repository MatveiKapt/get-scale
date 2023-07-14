const scaleElement = document.querySelector('.interface__scale-text');

const changeScaleElementValue = (value) => {
  scaleElement.textContent = value;
};

export { changeScaleElementValue };
