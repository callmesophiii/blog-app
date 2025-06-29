import { Link } from "react-router-dom";
import { posts, type Post } from "../lib/posts";
import AnimatedPage from "../components/AnimatedPage";

const Blog = () => {
  return (
    <AnimatedPage>
      <div className="container">
        <h1>Welcome to the Blog 📚✨</h1>
        <p style={{ fontStyle: "italic", marginBottom: "1.5rem", color: "#aaa" }}>
          Grab a coffee ☕, sit back, and enjoy some thoughtful nonsense!
        </p>
        <ul className="blog-list funny-list">
          {posts.map((post: Post) => (
            <li key={post.id} className="blog-card">
              <Link to={`/blog/${post.slug}`}>
                <h2>
                  {post.title} <span role="img" aria-label="fun emoji">🔥🎉</span>
                </h2>
                <p>{truncate(post.content, 120)}... <em>Read more &rarr;</em></p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedPage>
  );
};

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim();
}

export default Blog;
