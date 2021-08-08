import {
  AUTHOR_DETAILS_PATTERN_PATH,
  AUTHORS_PATH, BOOK_CONTENT_PATH,
  BOOK_DETAILS_PATTERN_PATH,
  BOOKS_PATH,
  FAVORITES_PATH,
  FRIENDS_PATH,
  HOME_PATH,
  LOGIN_PATH,
  MESSAGES_PATH, PROFILE_EDIT_PATH,
  PROFILE_PATH,
  SIGN_UP, USERS_PATH
} from "./routesPath";

import { Home } from "../components/Pages";
import { BookDetail, Books } from "../components/Books";
import { AuthorDetails, Authors } from "../components/Authors";
import { SignUp } from "../components/Pages/SignUp";
import { LogIn } from "../components/Pages/LogIn";
import { Favorites, Friends, Messages, Profile } from "../components/User";
import { Users } from "../components/Users";
import { EditProfile } from "../components/User/EditProfile";
import { BookContent } from "../components/Books/BookContent";


export const routes = [
  {
    path: HOME_PATH,
    exact: true,
    name: "Главная",
    title: null,
    component: Home
  },
  {
    path: BOOK_DETAILS_PATTERN_PATH,
    name: "Информация по книге",
    component: BookDetail
  },
  {
    path: BOOK_CONTENT_PATH,
    name: "Читать книгу",
    component: BookContent
  },
  {
    path: BOOKS_PATH,
    exact: true,
    name: "Список книг",
    title: "Книги",
    component: Books
  },
  {
    path: AUTHORS_PATH,
    exact: true,
    name: "Список авторов",
    title: "Авторы",
    component: Authors
  },
  {
    path: AUTHOR_DETAILS_PATTERN_PATH,
    name: "Автор",
    title: "Автор",
    component: AuthorDetails
  },
  {
    path: LOGIN_PATH,
    exact: true,
    name: "Вход на сайт",
    title: "Вход на сайт",
    component: LogIn
  },
  {
    path: SIGN_UP,
    exact: true,
    name: "Регистрация",
    title: "Регистрация",
    component: SignUp
  },
  {
    path: PROFILE_PATH,
    exact: true,
    name: "Профиль пользователя",
    title: "Мой профиль",
    component: Profile
  },
  {
    path: FRIENDS_PATH,
    exact: true,
    name: "Друзья",
    title: "Друзья",
    component: Friends
  },
  {
    path: PROFILE_EDIT_PATH,
    exact: true,
    name: "Редактировать профиль",
    title: "Редактировать профиль",
    component: EditProfile
  },
  {
    path: FAVORITES_PATH,
    exact: true,
    name: "Избранное",
    title: "Избранное",
    component: Favorites
  },
  {
    path: MESSAGES_PATH,
    exact: true,
    name: "Сообщения",
    title: "Сообщения",
    component: Messages
  },
  {
    path: USERS_PATH,
    exact: true,
    name: "Пользователи",
    title: "Пользователи",
    component: Users
  },
];

export default routes;