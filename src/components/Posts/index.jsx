import Link from "next/link";
import { useRouter } from "next/router";
import { usePosts } from "src/hooks/useFetchArray";

export const Posts = () => {
  const router = useRouter();
  const { data, error, isLoading, isEmpty } = usePosts(router.query.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Posts;
