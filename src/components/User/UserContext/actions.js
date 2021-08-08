import {
  ADD_BOOK_TO_FAVORITES_ACTION,
  ADD_FRIEND_ACTION, EDIT_PROFILE_DATA_ACTION,
  LOGIN_USER_ACTION,
  LOGOUT_USER_ACTION,
  REGISTER_NEW_USER_ACTION,
  REMOVE_BOOK_FROM_FAVORITES_ACTION,
  REMOVE_FRIEND_ACTION,
  VERIFY_USER_ACTION
} from "./actionTypes";


export const logInUser = (login, password) => ( {
  type: LOGIN_USER_ACTION,
  login,
  password
} );
export const logOutUser = () => ( {
  type: LOGOUT_USER_ACTION
} );
export const verifyUser = () => ( {
  type: VERIFY_USER_ACTION
} );
export const registerNewUser =
  (login, username, password, sex, phone, info) => ( {
    type: REGISTER_NEW_USER_ACTION,
    login, username, password, sex, phone, info
  } );
export const editProfile = (data) => ( {
  type: EDIT_PROFILE_DATA_ACTION,
  data
} );


export const addFavoriteBook = (bookId) => ( {
  type: ADD_BOOK_TO_FAVORITES_ACTION,
  bookId
} );
export const removeFavoriteBook = (bookId) => ( {
  type: REMOVE_BOOK_FROM_FAVORITES_ACTION,
  bookId
} );


export const addFriend = (userId) => ( {
  type: ADD_FRIEND_ACTION,
  userId
} );
export const removeFriend = (userId) => ( {
  type: REMOVE_FRIEND_ACTION,
  userId
} );