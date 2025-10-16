import "./articleCard.css";
import Image from "next/image";
import illustration from "@/public/images/illustration-article.svg";
import avatar from "@/public/images/image-avatar.webp";

const ArticleCard = () => {
  return (
    <article className="card">
      <Image
        src={illustration}
        alt="Illustration article"
        className="card-image"
      />
      <div className="card-body">
        <span className="tag">Learning</span>
        <h1 className="title">HTML & CSS foundations</h1>
        <p className="description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="author">
          <Image src={avatar} alt="Author avatar" className="avatar" />
          <span className="author-name">Greg Hooper</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;