import {
  ADD_BOOK_TO_FAVORITES_ACTION,
  ADD_FRIEND_ACTION,
  LOGIN_USER_ACTION,
  LOGOUT_USER_ACTION,
  REMOVE_BOOK_FROM_FAVORITES_ACTION,
  REMOVE_FRIEND_ACTION,
  VERIFY_USER_ACTION
} from "./actionTypes";
import {
  reduceAddFavoriteBookAction,
  reduceAddFriendAction,
  reduceLoginUserAction,
  reduceLogoutUserAction,
  reduceRemoveFavoriteBookAction,
  reduceRemoveFriendAction,
  reduceVerifyUserAction
} from "./partialReducers";


export const defaultState = {
  authenticated: false,
  userData: null,
  error: null
};

export const userReducer = (state = defaultState, action) => {
  switch ( action.type ) {
    case LOGIN_USER_ACTION:
      return reduceLoginUserAction(state, action);

    case LOGOUT_USER_ACTION:
      return reduceLogoutUserAction(state, action);

    case VERIFY_USER_ACTION:
      return reduceVerifyUserAction(state, action);

    case ADD_BOOK_TO_FAVORITES_ACTION:
      return reduceAddFavoriteBookAction(state, action);

    case REMOVE_BOOK_FROM_FAVORITES_ACTION:
      return reduceRemoveFavoriteBookAction(state, action);

    case ADD_FRIEND_ACTION:
      return reduceAddFriendAction(state, action);

    case REMOVE_FRIEND_ACTION:
      return reduceRemoveFriendAction(state, action);

    default:
      return state;
  }
};