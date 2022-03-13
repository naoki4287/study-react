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
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="block group">
                <h1 className="text-xl font-bold group-hover:text-blue-500">{post.title}</h1>
                <p className="text-lg text-gray-400 group-hover:text-blue-500">{post.body}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
