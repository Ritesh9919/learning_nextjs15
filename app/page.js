import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-3 underline">
      <h1>Welcome home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in english</Link>
      <Link href="/articles/breaking-news-124?lang=fr">Read in French</Link>
    </div>
  );
}
