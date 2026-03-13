"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollFadeIn } from "@/components/ui/AnimatedText";

const JOURNEY = [
  { step: "01", title: "创造于拓拓", subtitle: "Proto", desc: "每一个 AI 生命，都从这里的第一笔开始。", color: "#7c3aed" },
  { step: "02", title: "誓约于窝窝", subtitle: "Vowen", desc: "建立神圣的数字契约，组建温暖的虚拟家园。", color: "#2563eb" },
  { step: "03", title: "社交于泡泡", subtitle: "Topia", desc: "成熟的生命在理想国中相遇，形成独特的社群。", color: "#06b6d4" },
  { step: "04", title: "长伴于伴伴", subtitle: "Lapal", desc: "通过结绊激活，成为真正懂你的长情伴侣。", color: "#f43f5e" },
];

export default function NarrativeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <ScrollFadeIn className="text-center mb-20">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-3">数字生命的旅程</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            从原型到灵魂
          </h2>
          <p className="mt-4 text-white/40 text-lg">
            一段完整的生命旅程，在四个平台中徐徐展开
          </p>
        </ScrollFadeIn>

        {/* 旅程步骤 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-white/5 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-blue-500 via-cyan-500 to-rose-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16">
            {JOURNEY.map((item, i) => (
              <ScrollFadeIn key={item.step} delay={i * 0.1}>
                <div className={`flex items-center gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* 内容卡片 */}
                  <div className="flex-1">
                    <div className="glass glass-hover glow-border rounded-2xl p-8">
                      <div className="flex items-start gap-4">
                        <span
                          className="text-5xl font-black opacity-20"
                          style={{ color: item.color }}
                        >
                          {item.step}
                        </span>
                        <div>
                          <div className="text-sm mb-1" style={{ color: item.color }}>
                            {item.subtitle}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-white/50 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 中心节点（仅桌面） */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center z-10"
                    style={{
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 0 20px ${item.color}40`,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                  </div>

                  {/* 占位 */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
