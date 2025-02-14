const Post = async ({ params }) => {
  const { postId } = await params;
  return <h1>Post {postId}</h1>;
};

export default Post;
