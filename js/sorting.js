import {newPreview} from "./photo-render.js";
import {debounce, shuffleArray} from "./util.js";

const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

const filter = document.querySelector('.img-filters');
let photos = [];

function removeActiveClass() {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
}

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
}

const filters = {
  'filter-default': () => {
    newPreview(photos.slice(0, DEFAULT_PREVIEW_LOAD))
  },
  'filter-random': () => {
    newPreview(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW_LOAD));
  },
  'filter-discussed': () => {
    newPreview(photos.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    }))
  },
}

const onSuccess = (data) => {
  filter.classList.remove('img-filters--inactive');
  photos = data.slice()
  newPreview(photos.slice(0, DEFAULT_PREVIEW_LOAD))
}

const onFilterClick = debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active')
    filters[evt.target.id]()
  }
})

filter.addEventListener('click', onFilterClick)

export {onSuccess}
