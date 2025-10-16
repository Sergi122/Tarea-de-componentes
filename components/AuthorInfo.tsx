import "@/components/articleCard.css";

interface AuthorInfoProps {
  name: string;
  image: string;
}

const AuthorInfo = ({ name, image }: AuthorInfoProps) => (
  <div className="author-info"
    <img src={image} alt={name} className="author-img" />
    <span className="author-name">{name}</span
  </div>
);

export default AuthorInfo;