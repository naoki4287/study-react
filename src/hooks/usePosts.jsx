import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePosts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  // バージョンアップによりuseSWRの第二引数にfetcherが必須になった
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};