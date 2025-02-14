const Post = async ({ params }) => {
  const { postId } = await params;
  return <h1>Post {postId} details</h1>;
};

export default Post;
