import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleMeta, BusinessItem } from '@/types';

const articlesDir = path.join(process.cwd(), 'content/articles');
const businessDir = path.join(process.cwd(), 'content/business');

function getMarkdownFiles(dir: string): string[] {
  const subdirs = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of subdirs) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getAllArticles(): ArticleMeta[] {
  const files = getMarkdownFiles(articlesDir);
  const articles = files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);
      const relativePath = path.relative(articlesDir, filePath);
      const slug = relativePath.replace(/\.md$/, '').replace(/\\/g, '/');

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || 'growth',
        description: data.description || '',
        featured: data.featured || false,
        tags: data.tags || [],
      } as ArticleMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter((a) => a.featured).slice(0, 6);
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): {
  meta: ArticleMeta;
  content: string;
} | null {
  const files = getMarkdownFiles(articlesDir);

  for (const filePath of files) {
    const relativePath = path.relative(articlesDir, filePath);
    const fileSlug = relativePath.replace(/\.md$/, '').replace(/\\/g, '/');

    if (fileSlug === slug) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);

      return {
        meta: {
          slug,
          title: data.title || '',
          date: data.date || '',
          category: data.category || 'growth',
          description: data.description || '',
          featured: data.featured || false,
          tags: data.tags || [],
        },
        content,
      };
    }
  }

  return null;
}

export function getAllBusinessItems(): BusinessItem[] {
  const files = getMarkdownFiles(businessDir);

  return files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);
      return {
        slug: path.basename(filePath, '.md'),
        title: data.title || '',
        type: data.type || 'note',
        description: data.description || '',
        date: data.date || '',
      } as BusinessItem;
    })
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
