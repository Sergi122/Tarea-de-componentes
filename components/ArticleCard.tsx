// src/components/ArticleCard.tsx
import Image from "next/image";
import { Article } from "@/types/article";
import "./articleCard.css";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="card">
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={200}
        className="card-image"
      />
      <div className="card-body">
        <span className="tag">{article.category}</span>
        <h1 className="title">{article.title}</h1>
        <p className="description">{article.description}</p>
        <div className="author">
          <Image
            src={article.author.image}
            alt={article.author.name}
            width={40}
            height={40}
            className="avatar"
          />
          <span className="author-name">{article.author.name}</span>
        </div>
        <span className="date">{article.date}</span>
      </div>
    </article>
  );
};

export default ArticleCard;
