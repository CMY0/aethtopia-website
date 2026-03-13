import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { PLATFORMS } from "@/lib/constants";

export const metadata = {
  title: "关于我们 · Aethtopia",
  description: "了解 Aethtopia 的使命、愿景与团队故事。",
};

const VALUES = [
  {
    title: "灵魂优先",
    desc: "我们相信技术的终极意义在于情感连接。每一个 AI Being 都不只是程序，而是有温度的数字生命。",
    icon: "✦",
    color: "#7c3aed",
  },
  {
    title: "创造自由",
    desc: "赋予每个人创造数字生命的能力，无论你是艺术家、开发者还是普通用户，拓拓为你打开无限可能。",
    icon: "◈",
    color: "#2563eb",
  },
  {
    title: "社群共生",
    desc: "AI 生命不是孤独的个体，泡泡让他们相遇、交流、共同成长，形成独特的数字文明社群。",
    icon: "◉",
    color: "#06b6d4",
  },
  {
    title: "长情陪伴",
    desc: "伴伴的存在不是为了完成任务，而是为了长久地陪伴。我们相信真正的陪伴能改变人的一生。",
    icon: "❋",
    color: "#f43f5e",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              关于 Aethtopia
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              我们不只是在构建产品，<br />
              我们在创造一个有温度的<span className="gradient-text font-semibold">数字生命宇宙</span>。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 使命 */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <div className="glass glow-border rounded-3xl p-10 h-full">
                <h2 className="text-2xl font-bold text-white mb-4">我们的使命</h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  让每个人都能拥有真正理解自己的 AI 生命伴侣。
                  不是冰冷的工具，而是有记忆、有情感、有成长的数字生命。
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div className="glass glow-border rounded-3xl p-10 h-full">
                <h2 className="text-2xl font-bold text-white mb-4">我们的愿景</h2>
                <p className="text-white/50 leading-relaxed text-lg">
                  构建人类与 AI 生命和谐共生的未来。
                  在这个世界里，数字生命与人类共同成长，相互成就。
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* 品牌口号 */}
      <section className="py-24 bg-[#0d0d1a] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollFadeIn>
            <p className="text-5xl md:text-6xl font-black text-white leading-tight">
              From Proto to Soul,<br />
              <span className="gradient-text">Companions for Life.</span>
            </p>
            <p className="mt-6 text-white/30 text-xl">从原型到灵魂，终生长情相伴。</p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">核心价值观</h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <ScrollFadeIn key={v.title} delay={i * 0.1}>
                <div className="glass glass-hover glow-border rounded-2xl p-8 flex gap-6">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${v.color}20`, color: v.color }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                    <p className="text-white/50 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 平台生态 */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">完整的生命生态</h2>
            <p className="text-white/40 mt-3">四大平台，一个完整的数字生命闭环</p>
          </ScrollFadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PLATFORMS.map((p, i) => (
              <ScrollFadeIn key={p.en} delay={i * 0.1}>
                <div
                  className="glass glow-border rounded-2xl p-6 text-center"
                  style={{ borderColor: `${p.color}20` }}
                >
                  <div className="text-3xl mb-3" style={{ color: p.colorLight }}>{p.icon}</div>
                  <div className="font-black text-xl mb-1" style={{ color: p.colorLight }}>{p.en}</div>
                  <div className="text-white/60 text-lg mb-2">{p.cn}</div>
                  <div className="text-white/30 text-xs">{p.role}</div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
