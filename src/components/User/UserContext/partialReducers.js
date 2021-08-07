import { USERS } from "../../../testData";
import { defaultState } from "./reducer";


// AUTH
export const reduceLoginUserAction = (state, action) => {
  const userData = USERS.find((user) => user.email === action.login);

  if ( userData ) {
    //TODO only for local demo
    localStorage.setItem("user", action.login);

    return ( {
      ...state,
      authenticated: true,
      userData,
      error: null
    } );
  }
  else {
    return ( {
      ...state,
      error: 404
    } );
  }
};

export const reduceLogoutUserAction = (state, action) => {
  localStorage.removeItem("user");

  return ( {
    ...defaultState,
  } );
};

export const reduceVerifyUserAction = (sate, action) => {
  const storedUser = localStorage.getItem("user");

  if ( storedUser ) {
    const userData = USERS.find((user) => user.email === storedUser);

    if ( userData ) {
      return ( {
        ...state,
        userData,
        authenticated: true,
        error: null
      } );
    }
  }

  return state;
};


// FAVORITE BOOKS
export const reduceAddFavoriteBookAction = (state, action) => {
  return ( {
    ...state,
    userData: {
      ...state.userData,
      favoriteBooks: [
        ...state.userData.favoriteBooks,
        action.bookId
      ],
    }
  } )
};

export const reduceRemoveFavoriteBookAction = (state, action) => {
  return ( {
    ...state,
    userData: {
      ...state.userData,
      favoriteBooks: state.userData.favoriteBooks
        .filter((bookId) => bookId !== action.bookId)
    }
  } );
};


// FRIENDS
export const reduceAddFriendAction = (state, action) => {
  return ( {
    ...state,
    userData: {
      ...state.userData,
      fiends: [
        ...state.userData.fiends,
        action.userId
      ],
    }
  } )
};

export const reduceRemoveFriendAction = (state, action) => {
  return ( {
    ...state,
    userData: {
      ...state.userData,
      fiends: state.userData.fiends
        .filter((bookId) => bookId !== action.userId)
    }
  } );
};