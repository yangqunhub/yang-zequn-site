import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { getCategoryLabel } from "@/lib/categories";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug.split("/"),
  }));
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");
  const result = getArticleBySlug(slug);

  if (!result) {
    notFound();
  }

  const { meta, content } = result;
  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === meta.slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;

  return (
    <article className="pt-24 pb-32 px-6">
      <div className="max-w-article mx-auto animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Back link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={15} />
          返回文章列表
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="inline-flex items-center mb-6">
            <span className="text-[11px] px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue-light border border-accent-blue/20 font-medium">
              {getCategoryLabel(meta.category)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.15] mb-6">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-text-muted">
            {meta.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {meta.date}
              </span>
            )}
            {meta.tags && meta.tags.length > 0 && (
              <span className="flex items-center gap-1.5">
                <Tag size={13} />
                {meta.tags.join(" · ")}
              </span>
            )}
          </div>
          {meta.description && (
            <p className="mt-6 text-lg text-text-secondary leading-relaxed border-l-2 border-accent-blue/40 pl-5 italic">
              {meta.description}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-12" />

        {/* Article content */}
        <div className="article-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] my-14" />

        {/* Previous / Next navigation */}
        <nav className="grid grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/articles/${prevArticle.slug}`}
              className="glass-card p-5 group text-left"
            >
              <span className="text-[11px] text-text-muted mb-2 block">
                &larr; 上一篇
              </span>
              <span className="text-sm text-text-secondary group-hover:text-accent-blue-light transition-colors duration-300 line-clamp-1">
                {prevArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="glass-card p-5 group text-right"
            >
              <span className="text-[11px] text-text-muted mb-2 block">
                下一篇 &rarr;
              </span>
              <span className="text-sm text-text-secondary group-hover:text-accent-blue-light transition-colors duration-300 line-clamp-1">
                {nextArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </article>
  );
}
