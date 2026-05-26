import Link from "next/link";
import { getAllBusinessItems } from "@/lib/articles";
import SectionTitle from "@/components/SectionTitle";
import { ArrowLeft, FileText, Briefcase, FileCheck, ClipboardList, BookOpen } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  plan: <FileText size={16} />,
  analysis: <BookOpen size={16} />,
  resume: <Briefcase size={16} />,
  sop: <ClipboardList size={16} />,
  note: <FileCheck size={16} />,
};

const typeLabels: Record<string, string> = {
  plan: "商业计划",
  analysis: "分析报告",
  resume: "个人简历",
  sop: "SOP",
  note: "笔记",
};

const typeColors: Record<string, string> = {
  plan: "bg-accent-blue/10 text-accent-blue-light border-accent-blue/20",
  analysis: "bg-accent-purple/10 text-purple-300 border-accent-purple/20",
  resume: "bg-accent-green/10 text-accent-green border-accent-green/20",
  sop: "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
  note: "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
};

export default function BusinessPage() {
  const items = getAllBusinessItems();

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          scene="BUSINESS"
          title="商业探索"
          subtitle="商业计划、创业实践与经营思考的记录。"
        />

        {items.length === 0 ? (
          <div className="text-center py-20 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <p className="text-text-muted text-lg">商业内容正在整理中，敬请期待。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {items.map((item, i) => (
              <div
                key={item.slug}
                className="glass-card p-6 animate-scale-in opacity-0"
                style={{
                  animationDelay: `${i * 80 + 200}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-accent-blue-light">
                    {typeIcons[item.type] || typeIcons.note}
                  </span>
                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${
                      typeColors[item.type] || typeColors.note
                    }`}
                  >
                    {typeLabels[item.type] || item.type}
                  </span>
                  {item.date && (
                    <span className="text-[11px] text-text-muted ml-auto">
                      {item.date}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-text-primary tracking-[-0.01em] mb-2.5">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-text-secondary transition-colors duration-300"
          >
            &larr; 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
