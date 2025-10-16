export interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  image: string;
}