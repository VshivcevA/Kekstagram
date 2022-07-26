let getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

let stringLengthMax = 140;
let string = 'fsdfsdfdsf';
let stringLengthCheck = (string) => {
  return string.length < stringLengthMax;
}

const shuffleArray = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// таймаут запроса
const DEBOUNCE_INTERVAL = 500

const debounce = (cb) => {
  let lastTimeout = null;

  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
};



export {getRandomArrayElement, getRandomNumber, stringLengthCheck, shuffleArray, debounce};
