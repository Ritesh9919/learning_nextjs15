export default async function Docs({ params }) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing doc for feature {slug[0]} concept {slug[1]}
      </h1>
    );
  } else if (slug?.length == 1) {
    return <h1>Viewing doc for feature</h1>;
  }
  return <h1>Doc page</h1>;
}
