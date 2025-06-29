import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

const Post = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
