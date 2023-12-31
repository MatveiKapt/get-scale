const SCALES = [
  {
    name: 'C',
  },
  {
    name: 'a',
  },
  {
    name: 'F',
  },
  {
    name: 'd',
  },
  {
    name: 'G',
  },
  {
    name: 'e',
  },
  {
    name: 'B',
  },
  {
    name: 'g',
  },
  {
    name: 'D',
  },
  {
    name: 'h',
  },
  {
    name: 'Es',
  },
  {
    name: 'c',
  },
  {
    name: 'A',
  },
  {
    name: 'fis',
  },
  {
    name: 'As',
  },
  {
    name: 'f',
  },
  {
    name: 'E',
  },
  {
    name: 'cis',
  },
  {
    name: 'Des',
  },
  {
    name: 'b',
  },
  {
    name: 'H',
  },
  {
    name: 'gis',
  },
  {
    name: 'Ges',
  },
  {
    name: 'es',
  },
  {
    name: 'Fis',
  },
  {
    name: 'dis',
  },
  {
    name: 'Ces',
  },
  {
    name: 'as',
  },
  {
    name: 'Cis',
  },
  {
    name: 'ais',
  },
];

const getRandomInteger = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

const getRandomScale = () => {
  return SCALES[getRandomInteger(0, SCALES.length - 1)].name;
};

export { getRandomScale };
