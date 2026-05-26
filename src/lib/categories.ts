import { CategoryInfo } from '@/types';

export const categories: CategoryInfo[] = [
  {
    key: 'growth',
    label: '个人成长',
    description: '关于自律、习惯、人生选择的深度思考',
  },
  {
    key: 'business-thinking',
    label: '商业思维',
    description: '创业、投资、资产配置的实践与洞察',
  },
  {
    key: 'deep-thoughts',
    label: '深度思辨',
    description: '对教育、社会、心理的批判性观察',
  },
];

export function getCategoryLabel(key: string): string {
  const cat = categories.find((c) => c.key === key);
  return cat?.label ?? key;
}
