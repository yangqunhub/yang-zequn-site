import Link from 'next/link';
import { ArticleMeta } from '@/types';
import { getCategoryLabel } from '@/lib/categories';
import { ArrowUpRight } from 'lucide-react';

const categoryGradients: Record<string, string> = {
  growth: 'from-emerald-400/20 to-emerald-500/5',
  'business-thinking': 'from-accent-blue/20 to-accent-purple/5',
  'deep-thoughts': 'from-accent-purple/20 to-accent-pink/5',
};

const categoryColors: Record<string, string> = {
  growth: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
  'business-thinking': 'bg-accent-blue/10 text-accent-blue-light border-accent-blue/20',
  'deep-thoughts': 'bg-accent-purple/10 text-purple-300 border-accent-purple/20',
};

export default function ArticleCard({
  article,
  index,
}: {
  article: ArticleMeta;
  index?: number;
}) {
  const catColor = categoryColors[article.category] || categoryColors['business-thinking'];

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block animate-scale-in opacity-0"
      style={{
        animationDelay: `${(index ?? 0) * 80 + 100}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <article
        className="glass-card p-6 h-full flex flex-col"
      >
        {/* Top row */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${catColor}`}
          >
            {getCategoryLabel(article.category)}
          </span>
          {article.date && (
            <span className="text-[11px] text-text-muted ml-auto">
              {article.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue-light transition-colors duration-300 mb-2.5 tracking-[-0.01em]">
          {article.title}
        </h3>

        {/* Description */}
        {article.description && (
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 flex-1">
            {article.description}
          </p>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/[0.04]">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
