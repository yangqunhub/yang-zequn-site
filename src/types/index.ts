export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  category: 'growth' | 'business-thinking' | 'deep-thoughts';
  description: string;
  featured?: boolean;
  tags?: string[];
}

export interface BusinessItem {
  slug: string;
  title: string;
  type: 'plan' | 'analysis' | 'resume' | 'sop' | 'note';
  description: string;
  date?: string;
}

export interface CategoryInfo {
  key: string;
  label: string;
  description: string;
}
