import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-text-muted">
          &copy; {year} 杨泽群. 思考 &middot; 构建 &middot; 探索.
        </p>
        <div className="flex items-center gap-8">
          {[
            { href: '/articles', label: '文章' },
            { href: '/business', label: '商业' },
            { href: '/about', label: '关于' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
