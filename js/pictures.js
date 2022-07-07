const userComments = function (comments) {
  const userPhotos = document.querySelector('.pictures');
  const photosFragment = document.querySelector('#picture').content;
  const userPhotosFragment = document.createDocumentFragment();
  const userPhotosTemplate = photosFragment.querySelector('.picture');

  comments.forEach((num) => {
    const pictureElement = userPhotosTemplate.cloneNode(true);
    const imgElement = pictureElement.querySelector('.picture__img');
    imgElement.src = num.url;
    const likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = num.likes;
    const commentElement = pictureElement.querySelector('.picture__comments');
    commentElement.textContent = num.comments.length;
    userPhotosFragment.append(pictureElement);
  });

  userPhotos.append(userPhotosFragment);
};

export {userComments};
