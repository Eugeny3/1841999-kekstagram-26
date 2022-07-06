import {createPhotoDescription, PHOTO_DESCRIPTION_COUNT} from './data.js';
import {userComments} from './pictures.js';

const commentsList = createPhotoDescription();
userComments(commentsList);

createPhotoDescription(PHOTO_DESCRIPTION_COUNT);
