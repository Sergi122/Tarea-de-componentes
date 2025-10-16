// ...existing code...
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
// ...existing code...

export interface Author {
  name: string;
  image: string;
  role?: string;
  bio?: string;
  social?: Record<string, string>;
}

export enum ArticleCategory {
  Tech = "tech",
  News = "news",
  Design = "design",
  Lifestyle = "lifestyle",
  General = "general",
}

export interface ArticleExtended extends Article {
  content?: string;
  summary?: string;
  tags?: string[];
  readingTime?: number; // minutes estimate
  published?: boolean;
  metadata?: Record<string, unknown>;
  author: Author;
}

/**
 * Comprueba de forma básica si un objeto cumple con la forma mínima de Article.
 */
export function isArticle(obj: unknown): obj is Article {
  if (!obj || typeof obj !== "object") return false;
  const a = obj as any;
  return (
    typeof a.id === "number" &&
    typeof a.title === "string" &&
    typeof a.category === "string" &&
    typeof a.date === "string" &&
    typeof a.description === "string" &&
    typeof a.image === "string" &&
    a.author &&
    typeof a.author.name === "string" &&
    typeof a.author.image === "string"
  );
}

/**
 * Estima el tiempo de lectura en minutos según número de palabras (media 200 wpm).
 */
export function estimateReadingTime(content?: string): number {
  if (!content) return 1;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Crea un artículo completo rellenando valores por defecto cuando faltan.
 */
export function createArticle(data: Partial<ArticleExtended>): ArticleExtended {
  const nowIso = new Date().toISOString();
  const content = data.content ?? "";
  const summary =
    data.summary ??
    (content ? content.trim().slice(0, 160).replace(/\s+\S+$/, "") + "…" : data.description ?? "");
  const article: ArticleExtended = {
    id: data.id ?? Date.now(),
    title: data.title ?? "Untitled",
    category: data.category ?? ArticleCategory.General,
    date: data.date ?? nowIso,
    description: data.description ?? summary,
    author:
      (data.author as Author) ?? {
        name: "Unknown",
        image: "",
      },
    image: data.image ?? "",
    content,
    summary,
    tags: data.tags ?? [],
    readingTime: data.readingTime ?? estimateReadingTime(content),
    published: data.published ?? false,
    metadata: data.metadata ?? {},
  };
  return article;
}

/**
 * Formatea una fecha ISO a un formato legible corto (YYYY-MM-DD).
 */
export function formatDateShort(dateOrIso: string | Date): string {
  const d = typeof dateOrIso === "string" ? new Date(dateOrIso) : dateOrIso;
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().split("T")[0];
}

/**
 * Ejemplo de artículo para tests o como plantilla.
 */
export const SAMPLE_ARTICLE: ArticleExtended = createArticle({
  id: 1,
  title: "Ejemplo de artículo",
  category: ArticleCategory.Tech,
  date: new Date().toISOString(),
  description: "Breve descripción del artículo de ejemplo.",
  author: { name: "Autor Ejemplo", image: "/assets/avatar.png", role: "Editor" },
  image: "/assets/hero.png",
  content:
    "Este es el contenido de ejemplo. Se usa para mostrar cómo funciona la estructura y las utilidades relacionadas con los artículos.",
  published: true,
  tags: ["ejemplo", "test"],
});