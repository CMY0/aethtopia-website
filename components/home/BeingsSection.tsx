"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { BEING_TYPES } from "@/lib/constants";

export default function BeingsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora-blob w-80 h-80 opacity-10" style={{ background: "#FF5D00", bottom: 0, left: 0 }} />
        <div className="aurora-blob w-60 h-60 opacity-8" style={{ background: "#FFC702", top: 0, right: 0 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题 */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase mb-3 font-display" style={{ color: "#FF5D00" }}>AI 生命体</p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#F9F3F0" }}
          >
            三种形态，一个灵魂
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#B8A99A" }}>
            无论以何种形式存在，每一个 AI Being 都拥有独一无二的灵魂与个性。
          </p>
        </ScrollFadeIn>

        {/* 三列卡片 */}
        <div className="grid md:grid-cols-3 gap-6">
          {BEING_TYPES.map((being, i) => (
            <ScrollFadeIn key={being.type} delay={i * 0.15}>
              <motion.div
                className="glass glow-border rounded-2xl p-8 h-full flex flex-col"
                whileHover={{ y: -8, scale: 1.01, boxShadow: `0 20px 60px ${being.glowColor}` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* 类型标识 */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${being.colorFrom}, ${being.colorTo})`,
                      boxShadow: `0 8px 24px ${being.glowColor}`,
                    }}
                  >
                    <span className="font-black text-lg font-display" style={{ color: "#190E06" }}>{being.type[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display" style={{ color: "#F9F3F0" }}>{being.type}</h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: being.colorFrom }}>
                    {being.titleCn}
                  </p>
                </div>

                {/* 描述 */}
                <p className="leading-relaxed mb-6 flex-1" style={{ color: "#B8A99A" }}>
                  {being.desc}
                </p>

                {/* 特性列表 */}
                <ul className="space-y-2 mb-6">
                  {being.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#7A6358" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: being.colorFrom }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* 分隔线 */}
                <div
                  className="h-px mb-6"
                  style={{ background: `linear-gradient(90deg, ${being.colorFrom}40, transparent)` }}
                />

                {/* 链接 */}
                <Link
                  href="/beings"
                  className="flex items-center gap-1 text-sm transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5D00] rounded"
                  style={{ color: "#7A6358" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = being.colorFrom)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6358")}
                >
                  了解{being.titleCn}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* 底部 CTA */}
        <ScrollFadeIn delay={0.4} className="text-center mt-12">
          <Link
            href="/beings"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass glow-border font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5D00]"
            style={{ color: "#B8A99A" }}
          >
            查看所有 AI 生命体
            <ArrowRight size={16} />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
