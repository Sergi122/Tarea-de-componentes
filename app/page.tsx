import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/article";

const sampleArticle: Article = {
  id: 1,
  title: "HTML & CSS foundations",
  category: "Learning",
  date: "21 Dec 2023",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  image: "/images/illustration-article.svg",
  author: {
    name: "Greg Hooper",
    image: "/images/image-avatar.webp",
  },
};

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5d547",
      }}
    >
      <ArticleCard article={sampleArticle} />
    </main>
  );
}