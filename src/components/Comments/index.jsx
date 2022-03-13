import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  } 

  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className="block hover:text-blue-500">{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};