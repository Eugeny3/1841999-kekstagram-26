import {getRandomNum, getRandomId} from './util.js';

const PHOTO_NAMES = ['Степан', 'Иван', 'Петр', 'Масим', 'Александр', 'Марина', 'Анна', 'Дарья', 'Ксения', 'Ольга'];
const PHOTO_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const PHOTO_DESCRIPTION = ['Отдай мне шоколад, и никто не пострадает.', 'Я не знаю, куда иду, но я уже туда еду.',
  'Улыбайтесь широко, смейтесь часто.', 'Я в настроении босса.', 'Сбалансированная диета — это печенье в каждой руке.',
  'Все хорошо, если оно сделано из шоколада'];
const PHOTO_DESCRIPTION_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 5;
const MIN_AVATARS = 1;
const MAX_AVATARS = 6;
const MAX_QUANTITY_COMMENTS = 999;

const generateRandomId = getRandomId(1, PHOTO_DESCRIPTION_COUNT + MAX_QUANTITY_COMMENTS);

const getPhotoComments = function () {
  const maxComments = getRandomNum(MIN_COMMENTS, MAX_COMMENTS);
  const photoCommentsArray = [];
  for (let i = 1; i <= maxComments; i++) {
    const photoComment = {
      id: generateRandomId(),
      name: PHOTO_NAMES[getRandomNum(0, PHOTO_NAMES.length - 1)],
      avatar: `img/avatar-${getRandomNum(MIN_AVATARS, MAX_AVATARS)}.svg`,
      message: PHOTO_MESSAGES[getRandomNum(0, PHOTO_MESSAGES.length - 1)],
    };
    photoCommentsArray.push(photoComment);
  }
  return photoCommentsArray;
};

const createPhotoDescription = function () {
  const photoDescriptionsArray = [];
  for (let i = 1; i <= PHOTO_DESCRIPTION_COUNT; i++) {
    const photoDescription = {
      id: i,
      url: `photos/${i}.jpg`,
      description: PHOTO_DESCRIPTION[getRandomNum(0, PHOTO_DESCRIPTION.length - 1)],
      likes: getRandomNum(MIN_LIKES, MAX_LIKES),
      comments: getPhotoComments(),
    };
    photoDescriptionsArray.push(photoDescription);
  }
  return photoDescriptionsArray;
};

export {createPhotoDescription, PHOTO_DESCRIPTION_COUNT};
