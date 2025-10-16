
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <section className="cards-container">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
