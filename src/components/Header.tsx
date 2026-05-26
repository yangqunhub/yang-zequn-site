'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/articles', label: '文章' },
  { href: '/business', label: '商业' },
  { href: '/about', label: '关于' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop blur container */}
      <div
        className={`mx-auto transition-all duration-500 ease-apple ${
          scrolled
            ? 'mt-4 max-w-[640px] rounded-full bg-black/60 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/50'
            : 'max-w-full'
        }`}
      >
        <div className="mx-auto px-6 h-14 flex items-center justify-between max-w-5xl">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            杨泽群
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 rounded-full text-text-secondary hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-apple ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-2 px-2 py-3 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/[0.06]">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
