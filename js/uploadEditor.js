// import {validity} from './validity.js'

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
}

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay')
const body = document.querySelector('body')
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview img')
const imgUploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel')

const uploadEditor = () => {
  uploadFile.addEventListener('change', function () {
    openModal()

    imgScale()
    effects()
    // validity()
    // closeModal()
  })
}

const openModal = () => {
  imgUploadOverlay.classList.remove('hidden')
  body.classList.add('modal-open');
  imgUploadCancel.addEventListener('click', function () {
    closeModal()
  })
}

const closeModal = () => {
    imgUploadOverlay.classList.add('hidden')
    body.classList.remove('modal-open');
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault()
      imgUploadOverlay.classList.add('hidden')
      body.classList.remove('modal-open');
    }
  });
}

const imgScale = () => {

  const imgUploadScale = imgUploadOverlay.querySelector('.img-upload__scale')
  const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller')
  const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger')

  let scaleControlValue = imgUploadScale.querySelector('.scale__control--value')
  let scaleValue = parseInt(scaleControlValue.value, 10)
  imgUploadPreview.style.transform = 'scale(100%)'

  scaleControlSmaller.addEventListener('click', function () {
    scaleValue -= Scale.STEP
    scale()
  })
  scaleControlBigger.addEventListener('click', function () {
    scaleValue += Scale.STEP
    scale()
  })

  let scale = () => {
    if (scaleValue > Scale.MAX) {
      scaleValue = Scale.MAX
    } else
    if (scaleValue < Scale.MIN) {
      scaleValue = Scale.MIN
    }
    imgUploadPreview.style.transform = 'scale(' + scaleValue/100 + ')'
    scaleControlValue.value = scaleValue + '%'
  }
}

const imgUploadEffects = imgUploadOverlay.querySelector('.effects__list')

const effects = () => {
  imgUploadPreview.className = ''
  let filterChangeHandler = function (evt) {
    if (evt.target.matches('input[type="radio"]')) {
      imgUploadPreview.className = 'effects__preview--' + evt.target.value
    }
  }
  imgUploadEffects.addEventListener('change', filterChangeHandler);

  //slider
  const effectLevelSlider = imgUploadOverlay.querySelector('.effect-level')
  const sliderElement = effectLevelSlider.querySelector('.effect-level__slider')
  const valueElement = effectLevelSlider.querySelector('.effect-level__value');


  imgUploadPreview.style.filter = "none"
  effectLevelSlider.classList.add('hidden')

  noUiSlider.create(sliderElement, {
    range: {min: 0, max: 100,},
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  const styleFilter = () => {
    if (imgUploadPreview.className === 'effects__preview--chrome') {
      imgUploadPreview.style.filter = 'grayscale(' + valueElement.value + ')'
    } else if (imgUploadPreview.className === 'effects__preview--sepia') {
      imgUploadPreview.style.filter = 'sepia(' + valueElement.value + ')'
    } else if (imgUploadPreview.className === 'effects__preview--marvin') {
      imgUploadPreview.style.filter = 'invert(' + valueElement.value + '%)'
    } else if (imgUploadPreview.className === 'effects__preview--phobos') {
      imgUploadPreview.style.filter = 'blur(' + valueElement.value + 'px)'
    } else if (imgUploadPreview.className === 'effects__preview--heat') {
      imgUploadPreview.style.filter = 'brightness(' + valueElement.value + ')'
    }
  }

  sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = sliderElement.noUiSlider.get()
    styleFilter()
  })

  // const effects = {
  //   none: () => {return 'none';},
  //   chrome: () => {return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;},
  //   sepia: () => {return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;},
  //   marvin: () => {return `invert(${Math.floor(effectLevelValue.value)}%)`;},
  //   phobos: () => {return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;},
  //   heat: () => {return `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;},
  // };

  imgUploadEffects.addEventListener('change', () => {
    effectLevelSlider.classList.remove('hidden')
    if (imgUploadPreview.className === 'effects__preview--none') {
      effectLevelSlider.classList.add('hidden')
      imgUploadPreview.style.filter = "none"
    } else if (imgUploadPreview.className === 'effects__preview--chrome') {
      sliderElement.noUiSlider.updateOptions({
        range: {min: 0, max: 1,},
        step: 0.1,
        start: 1,
      });
    } else if (imgUploadPreview.className === 'effects__preview--sepia') {
      sliderElement.noUiSlider.updateOptions({
        range: {min: 0, max: 1,},
        step: 0.1,
        start: 1,
      });
    } else if (imgUploadPreview.className === 'effects__preview--marvin') {
      sliderElement.noUiSlider.updateOptions({
        range: {min: 0, max: 100,},
        step: 1,
        start: 100,
        //%
      });
    } else if (imgUploadPreview.className === 'effects__preview--phobos') {
      sliderElement.noUiSlider.updateOptions({
        range: {min: 0, max: 3,},
        step: 0.1,
        start: 3,
        //px
      });
    } else if (imgUploadPreview.className === 'effects__preview--heat') {
      sliderElement.noUiSlider.updateOptions({
        range: {min: 1, max: 3,},
        step: 0.1,
        start: 3,
      });
    }
  });
}
export { uploadEditor, openModal, closeModal}
