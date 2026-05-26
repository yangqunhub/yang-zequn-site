import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { ArrowLeft, MapPin, GraduationCap, Brain, TrendingUp, Mail } from "lucide-react";

const skills = [
  { label: "深度思考", icon: <Brain size={14} /> },
  { label: "商业分析", icon: <TrendingUp size={14} /> },
  { label: "AI 应用", icon: <CodeIcon /> },
  { label: "内容创作", icon: <PenIcon /> },
];

function CodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle scene="ABOUT" title="关于我" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left - profile card */}
          <div className="md:col-span-1">
            <div className="glass-card p-8 sticky top-28 text-center animate-scale-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-pink/10 border border-white/[0.06] flex items-center justify-center">
                <span className="text-2xl font-bold text-gradient">杨</span>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-1">
                杨泽群
              </h3>
              <p className="text-xs text-text-muted mb-6">AI 思考者 · 写作者 · 商业探索者</p>

              <div className="space-y-3 text-xs text-text-secondary">
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={13} className="text-text-muted" />
                  <span>中国 · 武汉</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap size={13} className="text-text-muted" />
                  <span>华中农业大学 · 食品科学</span>
                </div>
              </div>

              <a
                href="mailto:1559383669@qq.com"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue-light border border-accent-blue/20 hover:bg-accent-blue/20 transition-all duration-300"
              >
                <Mail size={12} />
                联系我
              </a>
            </div>
          </div>

          {/* Right - bio */}
          <div className="md:col-span-2 space-y-6">
            {/* Bio card */}
            <div className="glass-card p-8 animate-scale-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
                简介
              </h3>
              <p className="text-text-secondary leading-relaxed text-[15px]">
                一个相信个人力量的探索者。在 AI 与技术变革的时代，我坚信一个人可以通过持续学习和深度思考，拥有过去只有组织才能拥有的能力。
              </p>
              <p className="text-text-secondary leading-relaxed text-[15px] mt-4">
                目前在华中农业大学攻读食品科学专业，同时对商业、心理学、投资等领域保持浓厚兴趣。长期写作，记录对商业、社会与人性的观察与思考。
              </p>
            </div>

            {/* Skills card */}
            <div className="glass-card p-8 animate-scale-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
                擅长领域
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-[13px] text-text-secondary hover:border-white/[0.1] hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <span className="text-accent-blue-light">{skill.icon}</span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests card */}
            <div className="glass-card p-8 animate-scale-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
                兴趣方向
              </h3>
              <ul className="space-y-3 text-[15px] text-text-secondary">
                {[
                  "AI 与个人能力杠杆化",
                  "商业模式与创业实践",
                  "行为心理学与认知科学",
                  "个人资产配置与投资",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-accent-blue-light mt-2 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 text-center animate-fade-in delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
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
