// lib/posts.ts

export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "This is the content of my first post.",
  },
  {
    id: 2,
    slug: "learning-react",
    title: "Learning React",
    content: "React is a powerful front-end library.",
  },
  {
    id: 3,
    slug: "fun-with-typescript",
    title: "Fun with TypeScript",
    content: "TypeScript adds types and helps catch bugs early.",
  },
];
