import { photoDescriptions } from './data.js';
import { show } from "./big-picture.js";

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures')

let renderPhoto = (picture) => {
  let photoPreview = pictureTemplate.cloneNode(true);
  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent = picture.comments.length;

  photoPreview.addEventListener('click' ,function () {
    show(picture)
  })
  return photoPreview
}

let newPreview = () => {
  let pictureListFragment = document.createDocumentFragment();

  photoDescriptions.forEach((photo) => {
    pictureListFragment.appendChild(renderPhoto(photo));
  });
  pictureList.appendChild(pictureListFragment)
}

export { newPreview }
