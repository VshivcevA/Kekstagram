// import {closeModal} from "./uploadEditor.js";
import {sendData} from './api.js';


const HASHTAG = {
  MIN: 2,
  MAX: 20
}

const COMMENT = {
  MAX: 140
}

const textInputs = document.querySelector('.text')
let hashtag = textInputs.querySelector('.text__hashtags')
const comment = textInputs.querySelector('.text__description')



// const validity = () => {
  hashtag.input = '';
  comment.value = '';
  hashtag.style.border = "none"
  comment.style.border = "none"

  hashtag.value = hashtag.value.toLowerCase().trim()

  // hashtag.addEventListener('focus', () => {
  //   closeModal.stopPropagation()
  // })

  hashtag.addEventListener('input', () => {
    let hashtags = hashtag.value.split(/\s+/)
    for (let tag of hashtags) {
      if (tag[0] !== "#") {
        hashtag.setCustomValidity('Хэш-тег должен начинаться с \'#\'')
        hashtag.style.border = 'solid red 3px'
        } else if (tag === "#") {
        hashtag.setCustomValidity('Хэш-тег не может состоять только из одной \'#\'')
        hashtag.style.border = 'solid red 3px'
        // } else if (tag[0]!==tag.match(/[#@$,-]/)) {//додумать
        // hashtag.setCustomValidity('Хэш-тег не может содержать \'#, @, $, `,` ,-\'')
        // hashtag.style.border = 'solid red 3px'
      } else
        if (tag.length < HASHTAG.MIN) {
        hashtag.setCustomValidity('Хэш-тег должен состоять минимум из 2-х символов')
        hashtag.style.border = 'solid red 3px'
      } else if (tag.length > HASHTAG.MAX) {
        hashtag.setCustomValidity('Хэш-тег не должен превышать 20 символов')
        hashtag.style.border = 'solid red 3px'
      } else {
        hashtag.setCustomValidity('');
        hashtag.style.border = "none"
      }
    }
    hashtag.reportValidity();
  })

  comment.addEventListener('input', () => {
    if (comment.value.length > COMMENT.MAX) {
      comment.setCustomValidity('Комментарий не должен превышать 140 символов')
      comment.style.border = 'solid red 3px'
    } else {
      comment.setCustomValidity('');
      comment.style.border = "none"
    }
  })
// }

// export {validity}


const imgUploadForm = document.querySelector('.img-upload__form')

const setUserFormSubmit = (onSuccess, onFail) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  })
}


export {setUserFormSubmit};


