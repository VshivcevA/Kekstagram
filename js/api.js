import {newPreview} from "./photo-render.js";


const bodyPage = document.querySelector('body')

const successModal = document.querySelector('#success').content.querySelector('.success')
const successButton = successModal.querySelector('.success__button')

const errorModal = document.querySelector('#error').content.querySelector('.error')
const errorButton = errorModal.querySelector('.error__button')

const successModalOpen = () => {
  bodyPage.appendChild(successModal)
  successButton.addEventListener('click', () => {
    bodyPage.removeChild(successModal)
  })
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault()
      bodyPage.removeChild(successModal)
    }
  })
}

const errorModalOpen = () => {
  bodyPage.appendChild(errorModal)
  errorButton.addEventListener('click', () => {
    bodyPage.removeChild(errorModal)
  })
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault()
      bodyPage.removeChild(errorModal)
    }
  })
}

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      newPreview(photos)
      onSuccess(photos)
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body,
    }
  )
  .then((response) => {
    if (response.ok) {
      onSuccess();
      successModalOpen()
    } else {
      onFail();
      errorModalOpen()
    }
  })
  .catch(() => {
    onFail();
    errorModalOpen()
  })
};

export {getData, sendData};
