import { notFound } from "next/navigation";

const ProductReview = async ({ params }) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      Product: {productId} and review: {reviewId}
    </h1>
  );
};

export default ProductReview;
