"""Create business content markdown files."""
import os

BASE = os.path.dirname(os.path.dirname(__file__))
BIZ_DIR = os.path.join(BASE, "content", "business")
EXTRACTED = os.path.join(BASE, "content", "_extracted")
os.makedirs(BIZ_DIR, exist_ok=True)

def read_extracted(partial_name):
    for f in os.listdir(EXTRACTED):
        if partial_name in f:
            path = os.path.join(EXTRACTED, f)
            with open(path, 'r', encoding='utf-8') as fh:
                return fh.read()
    return "[Content not found]"

def write_biz(slug, title, biz_type, desc, date, content):
    path = os.path.join(BIZ_DIR, f"{slug}.md")
    desc_escaped = desc.replace('"', '\\"')
    title_escaped = title.replace('"', '\\"')
    fm = f'---\ntitle: "{title_escaped}"\ntype: "{biz_type}"\ndescription: "{desc_escaped}"\ndate: "{date}"\n---\n\n'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(fm + content)
    print(f"  [{len(content)} chars] business/{slug}.md")

print("\n=== Creating Business content ===\n")

write_biz("second-hand-book-plan",
    "华农二手书 × 数字建造者商业计划书",
    "plan",
    "用AI工具从零到一构建校园二手书交易平台，证明一个人的力量可以完成过去需要一个团队才能做的事。第一块基石，也是方法论验证的起点。",
    "2026-05-15",
    read_extracted("华农二手书"))

write_biz("full-sop",
    "全流程SOP：校园现金流+知识产权+全国加盟",
    "sop",
    "三位一体运营体系：本校赚现金流，对外输出SOP/知识产权，全国合作赚长期技术服务费抽成。一人可运营，零库存，轻资产。",
    "2026-05-16",
    read_extracted("sop"))

write_biz("psychology-operation",
    "心理学运营体系：构建校园命运共同体",
    "analysis",
    "基于西奥迪尼影响力8大原则，将防私下交易转化为用户主动维护平台，将收费转化为共建校园生态，将交易升华为华农身份认同。",
    "2026-05-08",
    read_extracted("商业化心理学效益分析"))

write_biz("individual-business-registration",
    "大学生个体工商户注册实战指南",
    "note",
    "从0到1的个体户注册全攻略：孵化器地址挂名、纯线下经营通道、税务零申报。在校大学生合法注册微信小程序的标准化路径。",
    "2026-05-10",
    read_extracted("个体工商户的申请"))

write_biz("miniapp-requirements",
    "二手书小程序完整需求文档",
    "note",
    "微信小程序原生语法+云开发，零服务器成本。核心功能：ISBN扫码发布、担保交易、自动分账、管理员后台。可直接用于开发。",
    "2026-05-03",
    read_extracted("小程序提示词"))

print("\n=== Business content created! ===\n")
