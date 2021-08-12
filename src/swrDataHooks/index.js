import useSWR from "swr";

import { api } from "./urls";


export const useRandomBooks = () => {
  const {data, error, isValidating} = useSWR(api.getRandomBooks());

  return {
    data,
    isLoading: !data & !error
  };
};

export const useBookDetails = (id) => {
  const {data, error, isValidating} = useSWR(id && api.getBookDetails(id));

  return {
    data: data,
    isLoading: !data & !error
  };
};

export const useBooksList = (searchParameters) => {
  const {data, error, isValidating} =
    useSWR(api.getBooksList(searchParameters));

  return {
    data: data,
    isLoading: !data & !error
  };
};


export const useAuthorsList = (searchParameters) => {
  const {data, error, isValidating} =
    useSWR(api.getAuthorsList(searchParameters));

  return {
    data: data,
    isLoading: !data & !error
  };
};


export const useAuthorDetails = (id) => {
  const {data, error, isValidating} = useSWR(id && api.getAuthorDetails(id));

  return {
    data: data,
    isLoading: !data & !error
  };
}