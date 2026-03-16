"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { PLATFORMS } from "@/lib/constants";

export default function PlatformsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PLATFORMS[activeIndex];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题 */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase mb-3 font-display" style={{ color: "#FF5D00" }}>
            四大平台
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "#F9F3F0" }}
          >
            完整的数字生命宇宙
          </h2>
        </ScrollFadeIn>

        {/* 选项卡 */}
        <ScrollFadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {PLATFORMS.map((p, i) => (
              <button
                key={p.en}
                onClick={() => setActiveIndex(i)}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium font-display transition-all duration-300"
                style={
                  activeIndex === i
                    ? {
                        background: `linear-gradient(135deg, ${p.color}, ${p.colorLight})`,
                        color: "#190E06",
                        boxShadow: `0 4px 20px ${p.color}50`,
                      }
                    : {
                        background: "rgba(249,243,240,0.05)",
                        color: "#B8A99A",
                        border: "1px solid rgba(249,243,240,0.10)",
                      }
                }
              >
                <span>{p.icon}</span>
                <span>{p.en}</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>{p.cn}</span>
              </button>
            ))}
          </div>
        </ScrollFadeIn>

        {/* 主内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.en}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* 左侧信息 */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6 font-display"
                style={{
                  background: `${active.color}18`,
                  color: active.colorLight,
                  border: `1px solid ${active.color}30`,
                }}
              >
                {active.icon} {active.role}
              </div>
              <h3
                className="font-display text-5xl md:text-6xl font-bold mb-2"
                style={{ color: active.colorLight }}
              >
                {active.en}
              </h3>
              <p
                className="font-display text-2xl font-semibold mb-6"
                style={{ color: "#F9F3F0" }}
              >
                {active.cn}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#B8A99A" }}>
                {active.desc}
              </p>
              <p className="text-sm italic mb-8" style={{ color: "#7A6358" }}>
                "{active.tagline} {active.taglineCn}"
              </p>
              <Link
                href={active.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-display transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${active.color}, ${active.colorLight})`,
                  color: "#190E06",
                  boxShadow: `0 4px 20px ${active.color}40`,
                }}
              >
                了解 {active.en}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 右侧可视化 */}
            <div className="relative h-72 flex items-center justify-center">
              {/* 外圈旋转 */}
              <motion.div
                className="absolute w-60 h-60 rounded-full"
                style={{ border: `1px solid ${active.color}18` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-44 h-44 rounded-full"
                style={{ border: `1px solid ${active.color}28` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* 中心 */}
              <motion.div
                className="relative w-28 h-28 rounded-full flex flex-col items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${active.color}25, transparent)`,
                  border: `1px solid ${active.color}40`,
                  boxShadow: `0 0 60px ${active.color}25`,
                }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl mb-1" style={{ color: active.colorLight }}>
                  {active.icon}
                </div>
                <div
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: "#7A6358" }}
                >
                  {active.concept}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 底部四格预览 */}
        <ScrollFadeIn delay={0.2} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PLATFORMS.map((p, i) => (
              <motion.button
                key={p.en}
                onClick={() => setActiveIndex(i)}
                className="glass glow-border rounded-3xl p-6 text-left transition-all duration-300"
                style={
                  activeIndex === i
                    ? { borderColor: `${p.color}40`, background: `${p.color}08` }
                    : {}
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xl mb-2 font-display" style={{ color: p.colorLight }}>
                  {p.icon}
                </div>
                <div className="font-display font-semibold text-sm" style={{ color: "#F9F3F0" }}>
                  {p.en}
                </div>
                <div className="text-sm mt-0.5" style={{ color: "#B8A99A" }}>{p.cn}</div>
                <div className="mt-2 text-xs font-display" style={{ color: p.color }}>
                  {p.role}
                </div>
              </motion.button>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
