import { NEW_USER, USERS } from "../../../testData";
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

export const reduceVerifyUserAction = (state, action) => {
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
}

export const reduceRegisterNewUserAction = (state, action) => {
  const newUser = Object.assign(
    {...NEW_USER},
    ...Object.entries(action)
      .filter(([key, val]) => key !== "type")
      .map(([key, val]) => ({[key]: val}))
  );

  USERS.push(newUser);

  return ({
    ...state,
    userData: newUser,
    authenticated: true,
    error: null
  })
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
      friends: [
        ...state.userData.friends,
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
      friends: state.userData.friends
        .filter((bookId) => bookId !== action.userId)
    }
  } );
};