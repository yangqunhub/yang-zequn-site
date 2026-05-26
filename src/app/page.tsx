import Link from "next/link";
import { getFeaturedArticles, getAllBusinessItems } from "@/lib/articles";
import SectionTitle from "@/components/SectionTitle";
import ArticleCard from "@/components/ArticleCard";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const businessItems = getAllBusinessItems();

  return (
    <div>
      {/* ===== SCENE 01 · HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/10 blur-[120px] animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/8 blur-[100px] animate-pulse-soft delay-200" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-pink/5 blur-[80px] animate-float-slow" />
          <div
            className="absolute inset-0 bg-dot-pattern bg-dot opacity-40"
            style={{ maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)' }}
          />
        </div>

        {/* Hero content */}
        <div className="text-center max-w-4xl relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-soft" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-text-muted">
              思考 · 构建 · 探索
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.04em] leading-none mb-8">
            <span className="block text-text-primary animate-slide-up">
              杨泽群
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-xl mx-auto mb-6 animate-slide-up delay-200">
            AI 思考者 · 写作者 · 商业探索者
          </p>

          {/* Description */}
          <p className="text-base text-text-muted leading-relaxed max-w-lg mx-auto mb-12 animate-slide-up delay-300">
            用代码做杠杆，让一个人也能持有一家公司。
            <br />
            在食品科学与商业的交汇处，寻找属于这个时代的答案。
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3 animate-slide-up delay-400">
            <Link href="/about" className="btn-primary">
              联系我
            </Link>
            <Link href="/articles" className="btn-ghost">
              浏览文章
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown size={20} className="text-text-muted/40" />
        </div>
      </section>

      {/* ===== SCENE 02 · 核心理念 ===== */}
      <section className="py-40 px-6 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            scene="SCENE 02"
            title="核心理念"
            subtitle="我相信，深度思考是每一个普通人的杠杆。在 AI 与技术变革的时代，一个人可以通过持续学习与构建，拥有过去只有组织才能拥有的能力。"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              {
                label: "思考",
                desc: "对商业、社会、人性的深度思辨与批判性观察",
                gradient: "from-accent-blue/20 to-accent-blue/5",
                icon: "🧠",
              },
              {
                label: "构建",
                desc: "将想法变为现实，从 0 到 1 创造有影响力的产品",
                gradient: "from-accent-purple/20 to-accent-purple/5",
                icon: "🔧",
              },
              {
                label: "探索",
                desc: "持续学习，在未知领域寻找新的可能性与机会",
                gradient: "from-accent-pink/20 to-accent-pink/5",
                icon: "🚀",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="glass-card p-8 group animate-scale-in opacity-0"
                style={{
                  animationDelay: `${i * 120 + 200}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary tracking-[-0.01em]">
                  {item.label}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCENE 03 · 精选文章 ===== */}
      {featuredArticles.length > 0 && (
        <section className="py-40 px-6 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              scene="SCENE 03"
              title="精选文章"
              subtitle="一些关于成长、商业与思考的深度写作。"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {featuredArticles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/articles" className="btn-ghost">
                浏览全部文章
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== SCENE 04 · 商业探索 ===== */}
      {businessItems.length > 0 && (
        <section className="py-40 px-6 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              scene="SCENE 04"
              title="商业探索"
              subtitle="商业计划、创业思考与实践记录。"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {businessItems.slice(0, 4).map((item, i) => (
                <Link
                  key={item.slug}
                  href="/business"
                  className="glass-card p-6 group animate-scale-in opacity-0"
                  style={{
                    animationDelay: `${i * 80 + 200}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-mono text-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-accent-blue/10 text-accent-blue-light border border-accent-blue/20 font-medium">
                      {item.type === "plan"
                        ? "商业计划"
                        : item.type === "analysis"
                          ? "分析报告"
                          : item.type === "resume"
                            ? "个人简历"
                            : item.type === "sop"
                              ? "SOP"
                              : "笔记"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue-light transition-colors duration-300 mb-2.5 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>

            {businessItems.length > 4 && (
              <div className="mt-12 text-center">
                <Link href="/business" className="btn-ghost">
                  查看更多商业思考
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== SCENE 05 · 联系 ===== */}
      <section className="py-40 px-6 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            scene="SCENE 05"
            title="保持联系"
            subtitle="如有合作意向或想交流想法，欢迎随时联系。"
          />

          <div className="mt-10">
            <a
              href="mailto:1559383669@qq.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-text-secondary hover:text-accent-blue-light hover:border-accent-blue/30 transition-all duration-400 ease-apple group"
            >
              <Mail size={20} className="text-text-muted group-hover:text-accent-blue-light transition-colors" />
              <span className="text-base">1559383669@qq.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
