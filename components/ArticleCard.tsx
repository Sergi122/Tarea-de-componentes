import "@/components/articleCard.css";
import AuthorInfo from "./AuthorInfo";
import { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card">
      <img src={article.image} alt={article.title} className="article-img" />
      <div className="article-content">
        <span className="tag">{article.category}</span>
        <p className="date">Published {article.date}</p>
        <h2 className="title">{article.title}</h2>
        <p className="description">{article.description}</p>
        <AuthorInfo name={article.author.name} image={article.author.image} />
      </div>
    </div>
  );
};

export default ArticleCard;