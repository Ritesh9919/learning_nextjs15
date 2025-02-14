export default async function Articles({ params, searchParams }) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  console.log(searchParams);
  return (
    <div className="flex justify-center items-center text-purple-500">
      <h1>Article {articleId}</h1>
      <p>language {lang}</p>
    </div>
  );
}
