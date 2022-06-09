function getRandomInt(min, max) {
  min = Math.ceil(min >= 0);
  max = Math.floor(max);
  if (min >= max) {
    throw new Error('Минимальное число не может быть больше максимального!');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(3, 5);

function countStringLength(string, max) {
  if (max <= string.length) {
    return false;
  }
  return true;
}

countStringLength('Строка для проверки', 2);

