import Link from "next/link";
const Posts = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-3">
      <Link href="/posts/1">
        <li>Post 1</li>
      </Link>
      <Link href="/posts/2">
        <li>Post 2</li>
      </Link>
      <Link href="/posts/3" replace>
        <li>Post 3</li>
      </Link>
    </ul>
  );
};

export default Posts;
