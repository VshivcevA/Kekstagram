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
export {getRandomArrayElement, getRandomNumber, stringLengthCheck};
