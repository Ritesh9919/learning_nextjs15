const Page = async ({ params }) => {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Product: {productId} and review: {reviewId}
    </h1>
  );
};

export default Page;
