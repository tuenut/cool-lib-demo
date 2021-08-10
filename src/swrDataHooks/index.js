import useSWR from "swr";


export const useRandomBooks = () => {
  const {data, error, isValidating} = useSWR("/api/v0/books/random/",);

  return {
    data,
    isLoading: !data & !error
  };
};

export const useAuthorDetails = (id) => {
  const {data, error, isValidating} = useSWR(`/api/v0/authors/${id}`,);

  return {
    data: data,
    isLoading: !data & !error
  };
}