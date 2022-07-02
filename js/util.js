function getRandomNum (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('Hello', 10);

function getRandomId (min, max) {
  const previousValues = [];
  return function() {
    let currentValue = getRandomNum(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNum(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {getRandomNum, checkStringLength, getRandomId};
