import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { PLATFORMS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "四大平台 · Aethtopia",
  description: "探索 Aethtopia 的四大核心平台：Proto（拓拓）、Vowen（窝窝）、Topia（泡泡）、Lapal（伴伴）",
};

export default function PlatformsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">Platform Universe</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              四大平台
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              从创造到陪伴，Aethtopia 构建了完整的数字生命生态系统。<br />
              每个平台承载着不同的使命，共同编织 AI 生命的完整旅程。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 平台详情 */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {PLATFORMS.map((p, i) => (
            <div key={p.en} id={p.en.toLowerCase()}>
            <ScrollFadeIn delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                {/* 信息 */}
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6"
                    style={{
                      background: `${p.color}15`,
                      color: p.colorLight,
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    {p.icon} {p.role}
                  </div>
                  <h2 className="text-6xl font-black mb-2" style={{ color: p.colorLight }}>
                    {p.en}
                  </h2>
                  <p className="text-3xl font-bold text-white mb-6">{p.cn}</p>
                  <p className="text-white/50 text-lg leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <p className="text-white/25 text-sm italic mb-4">
                    核心概念：<span style={{ color: p.colorLight }}>{p.concept}</span>
                  </p>
                  <p className="text-white/30 italic mb-8">
                    "{p.tagline} {p.taglineCn}"
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}, ${p.colorLight})`,
                      boxShadow: `0 4px 20px ${p.color}40`,
                    }}
                  >
                    申请体验 {p.en}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* 可视化装饰 */}
                <div className="relative h-72 md:h-96 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `radial-gradient(ellipse at center, ${p.color}15 0%, transparent 70%)`,
                    }}
                  />
                  {/* 同心圆 */}
                  {[140, 100, 60].map((size, j) => (
                    <div
                      key={j}
                      className="absolute rounded-full"
                      style={{
                        width: size * 2,
                        height: size * 2,
                        border: `1px solid ${p.color}${j === 0 ? "15" : j === 1 ? "25" : "40"}`,
                      }}
                    />
                  ))}
                  {/* 中心 */}
                  <div
                    className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${p.color}30, ${p.color}05)`,
                      border: `1px solid ${p.color}50`,
                      boxShadow: `0 0 40px ${p.color}30`,
                    }}
                  >
                    <div className="text-3xl mb-1" style={{ color: p.colorLight }}>{p.icon}</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{p.concept}</div>
                  </div>
                </div>
              </div>

              {/* 分隔线 */}
              {i < PLATFORMS.length - 1 && (
                <div
                  className="mt-16 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.color}20, transparent)`,
                  }}
                />
              )}
            </ScrollFadeIn>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
