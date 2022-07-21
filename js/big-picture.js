const body = document.querySelector('body')
const bigPicture = document.querySelector('.big-picture'); //шаблон
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const bigPictureCommentList = bigPictureSocial.querySelector('.social__comments')
const bigPictureComment = bigPictureCommentList.querySelector('.social__comment')


bigPicture.querySelector('.social__comment-count').classList.add('hidden')
bigPicture.querySelector('.social__comments-loader').classList.add('hidden')

const openModal = () => {
  bigPictureCommentList.textContent = '';
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
}

const closeModal = () => {
  bigPictureClose.addEventListener('click', function () {
    bigPicture.classList.add('hidden')
    body.classList.remove('modal-open');
  })
  document.addEventListener('keydown', function (evt) {
    evt.preventDefault()
    if (evt.keyCode === 27) {
      bigPicture.classList.add('hidden')
      body.classList.remove('modal-open');
    }
  });
}

const renderComment = (comment) => {
  let newComment = bigPictureComment.cloneNode(true);

  newComment.querySelector('.social__picture').src = comment.avatar
  newComment.querySelector('.social__text').alt = comment.name
  newComment.querySelector('.social__text').textContent = comment.message

  return newComment
}

const renderComments = (newComments) => {
  let bigPictureCommentListFragment = document.createDocumentFragment()

  newComments.forEach(newComment => {
    bigPictureCommentListFragment.appendChild(renderComment(newComment))
  })
  bigPictureCommentList.appendChild(bigPictureCommentListFragment)
}

const show = (picture) => {
  openModal()

  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderComments(picture.comments)

  closeModal()
};

export { show, openModal }


