import useSWR from "swr";

export const useComments = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};