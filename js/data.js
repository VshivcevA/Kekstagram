import { getRandomArrayElement, getRandomNumber } from './util.js';

const ARRAY_LENGHT = 25;
const Likes = {
  MIN: 15,
  MAX: 200,
};
const Comments = {
  MIN: 1,
  MAX: 3,
};

const MESSAGES= [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Александр',
  'Евгений',
  'Анастасия',
  'Мария',
  'Федор',
  'Ольга'
];
const DESCRIPTION_PHOTO= [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

let photoId = 0;
const getPhotoId = () => {
  photoId++
  return photoId
};

let createPhotoDescription = () => {
  const id = getPhotoId()
  return {
    id: id,
    url: 'photos/' + id + '.jpg',
    description: getRandomArrayElement(DESCRIPTION_PHOTO),
    likes: getRandomNumber(Likes.MIN, Likes.MAX),
    comments: new Array(getRandomNumber(Comments.MIN, Comments.MAX)).fill(null).map(() => createComment())
  }
};

let commentId = 0;
const getCommentId = () => {
  commentId++
  return commentId
};

let createComment = () => {
  commentId = 0
  const id = getCommentId()
  return {
    id: id,
    avatar: 'img/avatar-'+ id +'.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

const photoDescriptions = new Array(ARRAY_LENGHT).fill(null).map(() => createPhotoDescription());

console.table(photoDescriptions);

export {photoDescriptions};
