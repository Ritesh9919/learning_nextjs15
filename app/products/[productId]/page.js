const Products = async ({ params }) => {
  const { productId } = await params;
  return <h1>Product: {productId}</h1>;
};

export default Products;
