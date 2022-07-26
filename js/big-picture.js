const body = document.querySelector('body')
const bigPicture = document.querySelector('.big-picture'); //шаблон
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const bigPictureCommentList = bigPictureSocial.querySelector('.social__comments')
const bigPictureComment = bigPictureCommentList.querySelector('.social__comment')
const socialCommentCount = bigPictureSocial.querySelector('.social__comment-count')
const commentLoader = bigPictureSocial.querySelector('.comments-loader')

let commentsCount
let commentsLenght = 5

const openModal = () => {
  bigPictureCommentList.textContent = '';
  commentsLenght = 5
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  closeModal()
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
  commentsLenght = []
}

const renderComment = (comment) => {
  let newComment = bigPictureComment.cloneNode(true);

  newComment.querySelector('.social__picture').src = comment.avatar
  newComment.querySelector('.social__text').alt = comment.name
  newComment.querySelector('.social__text').textContent = comment.message

  return newComment
}


const commentsLoad = (newComments) => {
  commentLoader.classList.remove('hidden')
  socialCommentCount.classList.remove('hidden')
  commentAdd(newComments,commentsLenght)
  commentLoader.addEventListener('click', () => {
    commentsLenght += 5;
    commentAdd(newComments,commentsLenght)
  })
  // socialCommentCount.textContent = `${commentsLenght} из ${newComments.length} комментариев`;
}

const commentAdd = (newComments,commentsLenght) => {
  bigPictureCommentList.textContent = '';
  let bigPictureCommentListFragment = document.createDocumentFragment()
  newComments.slice(0, commentsLenght).forEach(newComment => {
    bigPictureCommentListFragment.appendChild(renderComment(newComment))
  })
  bigPictureCommentList.appendChild(bigPictureCommentListFragment)
  if (newComments.slice(0, commentsLenght).length === Number(commentsCount)) {
    commentLoader.classList.add('hidden')
  }
}

const renderComments = (newComments) => {
  commentsLenght = 5
  if (newComments.length < 5) {
    commentLoader.classList.add('hidden')
    socialCommentCount.classList.add('hidden')
    commentAdd(newComments,commentsLenght)
  } else
    if (newComments.length > 5) {
      commentsLoad(newComments)
  }
}

const show = (picture) => {
  openModal()

  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  commentsCount = picture.comments.length
  renderComments(picture.comments)
};

export { show, openModal }

