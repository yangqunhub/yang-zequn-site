import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import SectionTitle from "@/components/SectionTitle";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          scene="ARTICLES"
          title="所有文章"
          subtitle="关于成长、商业与思辨的深度写作。"
        />

        {allArticles.length === 0 ? (
          <div className="text-center py-20 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <p className="text-text-muted text-lg">文章正在整理中，敬请期待。</p>
          </div>
        ) : (
          <div className="space-y-20 mt-8">
            {categories.map((cat, catIndex) => {
              const catArticles = allArticles.filter(
                (a) => a.category === cat.key
              );
              if (catArticles.length === 0) return null;

              return (
                <section key={cat.key}>
                  <div className="mb-8 animate-fade-up opacity-0" style={{ animationDelay: `${catIndex * 100}ms`, animationFillMode: 'forwards' }}>
                    <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-[-0.02em]">
                      {cat.label}
                    </h2>
                    <p className="text-sm text-text-muted">{cat.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {catArticles.map((article, i) => (
                      <ArticleCard
                        key={article.slug}
                        article={article}
                        index={i}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            &larr; 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
