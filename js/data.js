import { getRandomArrayElement, getRandomNumber } from './util.js';

// const photos = []
const ARRAY_LENGHT = 25;
const Likes = {
  MIN: 15,
  MAX: 200,
};
const Comments = {
  MIN: 1,
  MAX: 6,
};

const MESSAGES= [
  'Everything is fine!', 
   'In general, everything is not bad. But not all.', 
   'When you take a photo, it would be nice to remove the finger from the frame. In the end, this is just unprofessional. ', 
   'My grandmother accidentally sneezed with a camera in her hands and she got a photo better.',
   'I slipped on the banana peel and dropped the camera on the cat and I got a photo better.', 
   'The faces of people in the photo are skewed, as if they were beaten. How could you catch such an unsuccessful moment?! '
];
const NAMES = [
  'Alexander', 
   'Eugene', 
   'Anastasia', 
   'Maria', 
   'Fedor', 
   'Olga'
];
const DESCRIPTION_PHOTO= [
  'Without filters', 
   'New camera', 
   'Check out the photo!',
   'Good angle', 
   'Just', 
   'From the archive',
];

let commentId = 0;
const getCommentId = () => {
  commentId++
  return commentId
};

let createComment = () => {
  // const id = getRandomNumber(Comments.MIN, Comments.MAX)
  const id = getCommentId()
  return {
    id: id,
    avatar: 'img/avatar-'+ id +'.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

let photoId = 0;
const getPhotoId = () => {
  photoId++
  return photoId
};

let createPhotoDescription = () => {
  commentId = 0
  const id = getPhotoId()
  return {
    id: id,
    url: 'photos/' + id + '.jpg',
    description: getRandomArrayElement(DESCRIPTION_PHOTO),
    likes: getRandomNumber(Likes.MIN, Likes.MAX),
    comments: new Array(getRandomNumber(Comments.MIN, Comments.MAX)).fill(null).map(() => createComment())
  }
};

const photoDescriptions  = new Array(ARRAY_LENGHT).fill(null).map(() => createPhotoDescription());

// console.table(photoDescriptions);

export { photoDescriptions };
