import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { BEING_TYPES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI 生命体 · Aethtopia",
  description: "探索 Aethtopia 的三类 AI 生命体：2D、3D 与机器人形态，每一个都拥有独特的灵魂。",
};

export default function BeingsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-rose-500/8 blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-purple-600/8 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <p className="text-rose-400 text-sm tracking-widest uppercase mb-4">AI Being</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI 生命体
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              不只是角色，而是真正有灵魂的数字生命。<br />
              三种形态，无限可能，每一个都独一无二。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 概念说明 */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollFadeIn>
              <div className="glass glow-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  <span className="gradient-text">原型</span> · Prototype
                </h3>
                <p className="text-white/50 leading-relaxed">
                  在拓拓平台上创造的 AI 生命初始形态。原型拥有基础的个性设定、外观特征与行为模式，
                  是一切数字生命旅程的起点。
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.1}>
              <div className="glass glow-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  <span className="gradient-text-rose">个体</span> · Entity
                </h3>
                <p className="text-white/50 leading-relaxed">
                  在伴伴平台上通过「结绊」激活的 AI 生命个体。个体从原型进化而来，
                  在与真实用户的互动中不断成长，形成独特的记忆与情感。
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* 三类形态 */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">三种存在形态</h2>
            <p className="text-white/40 mt-3">选择最适合你的 AI 生命体形态</p>
          </ScrollFadeIn>

          <div className="space-y-16">
            {BEING_TYPES.map((being, i) => (
              <ScrollFadeIn key={being.type} delay={i * 0.1}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* 信息 */}
                  <div>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${being.gradient} mb-6`}
                      style={{ boxShadow: `0 8px 32px ${being.glowColor}` }}
                    >
                      <span className="text-white font-black text-2xl">{being.type[0]}</span>
                    </div>
                    <h2 className={`text-5xl font-black bg-gradient-to-r ${being.gradient} bg-clip-text text-transparent mb-2`}>
                      {being.type}
                    </h2>
                    <p className="text-2xl font-bold text-white mb-6">{being.titleCn}</p>
                    <p className="text-white/50 text-lg leading-relaxed mb-8">
                      {being.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {being.features.map((f) => (
                        <div
                          key={f}
                          className="glass rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-white/60"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${being.gradient} flex-shrink-0`}
                          />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r ${being.gradient} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                      style={{ boxShadow: `0 4px 20px ${being.glowColor}` }}
                    >
                      申请体验
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* 装饰 */}
                  <div
                    className="glass rounded-3xl h-64 md:h-80 flex items-center justify-center relative overflow-hidden"
                    style={{ borderColor: `${being.glowColor}` }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: `radial-gradient(ellipse at center, ${being.glowColor} 0%, transparent 70%)` }}
                    />
                    <div className="relative z-10 text-center">
                      <div
                        className={`text-8xl font-black bg-gradient-to-r ${being.gradient} bg-clip-text text-transparent opacity-20 mb-4`}
                      >
                        {being.type}
                      </div>
                      <p className={`text-sm bg-gradient-to-r ${being.gradient} bg-clip-text text-transparent font-medium`}>
                        {being.titleCn}形态
                      </p>
                    </div>
                  </div>
                </div>

                {i < BEING_TYPES.length - 1 && (
                  <div className="mt-16 h-px bg-white/5" />
                )}
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
