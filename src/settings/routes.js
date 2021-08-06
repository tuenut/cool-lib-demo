import {
  AUTHOR_DETAILS_PATTERN_PATH,
  AUTHORS_PATH,
  BOOK_DETAILS_PATTERN_PATH,
  BOOKS_PATH,
  HOME_PATH, LOGIN_PATH, PROFILE_PATH, SIGN_UP
} from "./routesPath";

import { Home, Profile } from "../components/Pages";
import { BookDetail, Books } from "../components/Books";
import { AuthorDetails, Authors } from "../components/Authors";
import { SignUp } from "../components/Pages/SignUp";
import { LogIn } from "../components/Pages/LogIn";


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

];

export default routes;