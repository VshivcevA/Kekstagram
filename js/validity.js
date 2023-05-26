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
        hashtag.setCustomValidity('The hash-tag should begin with \'#\'')
        hashtag.style.border = 'solid red 3px'
        } else if (tag === "#") {
        hashtag.setCustomValidity('Hash-tag cannot consist of only one \'#\'')
        hashtag.style.border = 'solid red 3px'
        // } else if (tag[0]!==tag.match(/[#@$,-]/)) {//додумать
        // hashtag.setCustomValidity('Хэш-тег не может содержать \'#, @, $, `,` ,-\'')
        // hashtag.style.border = 'solid red 3px'
      } else
        if (tag.length < HASHTAG.MIN) {
        hashtag.setCustomValidity('The hash-tag should consist of a minimum of 2 characters')
        hashtag.style.border = 'solid red 3px'
      } else if (tag.length > HASHTAG.MAX) {
        hashtag.setCustomValidity('Hash-tag should not exceed 20 characters')
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
      comment.setCustomValidity('The comment should not exceed 140 characters')
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


