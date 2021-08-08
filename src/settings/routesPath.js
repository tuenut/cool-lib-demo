export const ID_KEY = "id";
export const ID_REPLACER = `:${ID_KEY}`;

export const HOME_PATH = "/";

export const BOOKS_PATH = "/books";
export const BOOK_DETAILS_PATTERN_PATH = `${BOOKS_PATH}/${ID_REPLACER}`;
export const BOOK_CONTENT_PATH = `/read/${ID_REPLACER}`;

export const AUTHORS_PATH = "/authors";
export const AUTHOR_DETAILS_PATTERN_PATH = `${AUTHORS_PATH}/${ID_REPLACER}`;

export const LOGIN_PATH = "/login";
export const SIGN_UP = "/signup";

export const PROFILE_PATH = "/profile";
export const PROFILE_EDIT_PATH = `${PROFILE_PATH}/edit`;

export const USERS_PATH = "/users";
export const USER_DETAILS_PATTERN_PATH = `${USERS_PATH}/${ID_REPLACER}`;

export const FAVORITES_PATH = "/favorites";
export const MESSAGES_PATH = "/messages";
export const FRIENDS_PATH = "/friends";