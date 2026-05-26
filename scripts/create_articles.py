"""Batch create article markdown files from extracted text - v2."""
import os
import glob

BASE = os.path.dirname(os.path.dirname(__file__))
ARTICLES = os.path.join(BASE, "content", "articles")
EXTRACTED = os.path.join(BASE, "content", "_extracted")

# Ensure category directories
for cat in ["growth", "business-thinking", "deep-thoughts"]:
    os.makedirs(os.path.join(ARTICLES, cat), exist_ok=True)

def read_extracted(partial_name):
    """Read extracted text file by partial name match."""
    for f in os.listdir(EXTRACTED):
        if partial_name in f:
            path = os.path.join(EXTRACTED, f)
            with open(path, 'r', encoding='utf-8') as fh:
                return fh.read()
    print(f"  ⚠ File not found: *{partial_name}*")
    return "[Content not found]"

def write_article(category, slug, title, date, desc, featured, tags, content):
    """Write a markdown article file."""
    path = os.path.join(ARTICLES, category, f"{slug}.md")
    
    # Escape description for YAML
    desc_escaped = desc.replace('"', '\\"')
    title_escaped = title.replace('"', '\\"')
    
    tags_str = str(tags).replace("'", '"')
    
    fm = f'---\ntitle: "{title_escaped}"\ndate: "{date}"\ncategory: "{category}"\ndescription: "{desc_escaped}"\nfeatured: {str(featured).lower()}\ntags: {tags_str}\n---\n\n'
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(fm + content)
    print(f"  [{len(content)} chars] {category}/{slug}.md")

print("\n=== Creating GROWTH articles ===\n")

write_article("growth", "how-to-have-a-miserable-life",
    "如何过上痛苦的一生",
    "2026-04-15",
    "以查理·芒格的反向思维为起点，观察八条稳定通向痛苦的路——嫉妒、反复无常、拒绝前人经验、习得性无助、蔑视常识、铁锤人倾向、凭感觉行事、交出注意力。一份反面地图。",
    True, ["思维模型", "查理·芒格", "反向思维"],
    read_extracted("如何过上痛苦的一生"))

write_article("growth", "how-to-waste-time",
    "如何浪费时间",
    "2026-05-01",
    "「反过来想，永远反过来想。」从芒格的反向思维出发，梳理五条系统性浪费时间的路径，以及它们背后的心理学机制。",
    False, ["时间管理", "反向思维", "纳瓦尔"],
    read_extracted("小作_如何浪费时间"))

write_article("growth", "what-is-university",
    "大学是什么",
    "2026-03-20",
    "「大学不是一个地方，而是一段时间。」课程表切碎了我的时间，系统在培养标准件。而我决定在这段缓冲期里，自己培养自己。",
    True, ["大学", "自我教育", "纳瓦尔", "系统思考"],
    read_extracted("大学教育的思考"))

write_article("growth", "deep-learning",
    "别用忙碌骗自己，深度学习才是答案",
    "2026-04-20",
    "知识会过时，但可迁移的学习能力不会。深度学习三步法：获取一手知识、深度缝接旧知识、输出成果去教授。",
    True, ["学习方法", "认知升级", "查理·芒格"],
    read_extracted("深度学习"))

write_article("growth", "attention-asset-allocation",
    "当我把时间当做资产配置",
    "2026-04-25",
    "艾森豪威尔矩阵×资产配置理论：把注意力像资产一样分配，理解「重要但不紧急」的第二象限为什么令人痛苦，又为什么值得坚守。",
    False, ["时间管理", "资产配置", "长期主义"],
    read_extracted("注意力"))

write_article("growth", "does-self-discipline-violate-nature",
    "自律违反自然吗",
    "2026-05-10",
    "从熵增定律到道法自然，区分两种自律：焦虑驱动的伪自律让内心熵增，觉察驱动的真自律恰恰是生命最自然的舒展方式。",
    False, ["自律", "道家", "熵增", "觉察"],
    read_extracted("自律违反自然"))

write_article("growth", "building-feedback",
    "构建反馈：存在主义式审计",
    "2026-04-28",
    "像审计师一样审视生活。从实践、生活、写作三个维度剥离虚无，找到最小确定性——不依赖外部评价，建立内在的度量衡。",
    False, ["反馈系统", "自我审视", "存在主义"],
    read_extracted("构建反馈"))

write_article("growth", "reading-review",
    "读书复盘：越读书越痛苦，越读书越能解决痛苦",
    "2026-05-02",
    "五个月的阅读之旅。从《把时间当作朋友》到《人类误判心理学》，每一次打破都是重建。感谢前十八年的无知——它让我的大脑保持开放。",
    False, ["阅读", "认知升级", "芒格", "纳瓦尔"],
    read_extracted("读书复盘"))

print("\n=== Creating BUSINESS-THINKING articles ===\n")

write_article("business-thinking", "digital-builder-incubation",
    "AI时代数字建造者：一个人的公司",
    "2026-05-05",
    "AI将建站、设计、运营的成本降到接近为零。一个非技术背景的在校生，能否用AI工具从零到一构建完整商业系统？二手书平台是我的第一块基石。",
    True, ["AI", "创业", "数字化", "系统思维"],
    read_extracted("abc"))

write_article("business-thinking", "why-this-idea",
    "为什么不做倒卖、要做平台",
    "2026-05-06",
    "朋友说收书倒卖有搞头。我看到了重资产模式的瓶颈，选择了另一条路：校内二手书撮合平台——不囤货、零风险、收过路费。远距离电商成熟了，近距离的五公里还有巨大空白。",
    False, ["商业模式", "平台思维", "睡后收入"],
    read_extracted("为什么有这个想法"))

write_article("business-thinking", "grand-vision",
    "AI算力土壤上的伟大构想",
    "2026-05-12",
    "每一个有想法的人都应该拥有自己的数字存在。我的生态位是「愿景架构师+系统整合者」——帮助有想法的人把模糊愿望翻译成可运转的数字系统。",
    True, ["AI", "愿景", "数字生态", "生态位"],
    read_extracted("伟大构想"))

write_article("business-thinking", "investment-journey",
    "一个非专业大学生的投资心得",
    "2026-05-14",
    "定投沪深300+中证500，做LOF基金套利，理解周期与波动。投资逼着人长期思考——学会延迟满足、接受不确定性、在波动里保持冷静。",
    False, ["投资", "定投", "资产配置", "能力圈"],
    read_extracted("投资心得"))

write_article("business-thinking", "health-compound-business",
    "身心复利计划：做一个为自己兜底的人",
    "2026-03-15",
    "以食品营养学、运动康复学、正念学和复利思维为根基，构建一个从身到心的长期建设系统。八年规划，从把自己变成第一个成功案例开始。",
    True, ["健康", "复利", "长期主义", "职业规划"],
    read_extracted("人生复利计划"))

print("\n=== Creating DEEP-THOUGHTS articles ===\n")

write_article("deep-thoughts", "minimum-energy-optimal-model",
    "最小能量最优模型：世界底层逻辑是相通的",
    "2026-05-08",
    "从大脑神经元到宇宙暗物质网，从有机化学到生态系统，所有复杂系统都趋向同一个最优结构。「在给定的约束条件下，系统会自发收敛到最省力、最稳定的状态。」",
    True, ["思维模型", "复杂系统", "跨学科", "收敛演化"],
    read_extracted("一个模型的创立"))

write_article("deep-thoughts", "social-psychology-case",
    "三人小组里的沉默博弈：一场社会心理学解剖",
    "2026-04-18",
    "当三个人两人干活一人休息，为什么没人主动换岗？用责任分散效应、印象管理、多元无知效应逐层拆解这场无声博弈背后的心理陷阱。",
    False, ["社会心理学", "行为心理学", "责任分散", "多元无知"],
    read_extracted("社会心理学分析"))

write_article("deep-thoughts", "short-lived-species",
    "短生种：被系统缩短了人生规划能力的人们",
    "2026-04-05",
    "科技没有均匀地普惠所有人。算法、消费主义、教育的分层，系统性地压缩了一部分人做长远打算的能力。这不是宿命，但看见它需要吃饱了之后没有忘记还没吃好的人。",
    True, ["社会观察", "阶层", "算法", "教育公平"],
    read_extracted("短生种"))

write_article("deep-thoughts", "brain-gut-axis",
    "脑肠轴：你吃的东西在决定你的情绪",
    "2026-04-12",
    "约90%血清素在肠道合成。肠道不是消化管，而是一个与大脑双向通讯的第二神经系统。从食品科学视角解读脑肠轴的研究前沿与商业祛魅。",
    False, ["脑肠轴", "食品科学", "神经递质", "肠道菌群"],
    read_extracted("脑肠轴理论"))

write_article("deep-thoughts", "chulong-persuasion",
    "触龙说赵太后：两千年前的顶级说服术",
    "2026-04-08",
    "太后放狠话「谁提这事我吐他一脸」，触龙却让她心甘情愿交出儿子。先给情绪价值，再从小请求制造答应惯性，最后让对方自己说出结论——四个让步，换来全部。",
    False, ["说服术", "心理学", "历史", "影响力"],
    read_extracted("触龙说赵太后"))

write_article("deep-thoughts", "hidden-program",
    "我发现了让大多数人「体面穷忙」一辈子的隐藏程序",
    "2026-05-15",
    "当我用资产/负债的框架重新拆解人生——不止是钱，还有时间、关系、注意力。朋友说我疯了，但我找到了那条不易察觉的轨道。",
    False, ["系统思维", "穷忙", "财务独立", "人生设计"],
    read_extracted("体面穷忙"))

write_article("deep-thoughts", "weekly-observation",
    "每周观察：在平凡日常中寻找结构",
    "2026-05-18",
    "招聘会的5500起薪、工厂的两班倒、朋友圈的表演——这些看似无关的日常碎片，背后都藏着同一个结构。学会用系统思维重新看见日常。",
    False, ["观察", "系统思维", "社会结构"],
    read_extracted("每周观察"))

print("\n=== All articles created successfully! ===\n")
