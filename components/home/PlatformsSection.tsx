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
    <section className="section-padding relative overflow-hidden bg-[#0d0d1a]">
      {/* 背景光晕 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.en}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ background: `${active.color}12` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题 */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-cyan-400 text-sm tracking-widest uppercase mb-3">四大平台</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            完整的数字生命宇宙
          </h2>
        </ScrollFadeIn>

        {/* 选项卡 */}
        <ScrollFadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PLATFORMS.map((p, i) => (
              <button
                key={p.en}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndex === i
                    ? "text-white"
                    : "text-white/40 glass hover:text-white/70"
                }`}
                style={
                  activeIndex === i
                    ? {
                        background: `linear-gradient(135deg, ${p.color}, ${p.colorLight})`,
                        boxShadow: `0 0 20px ${p.color}40`,
                      }
                    : {}
                }
              >
                <span>{p.icon}</span>
                <span>{p.en}</span>
                <span className="opacity-60">·</span>
                <span>{p.cn}</span>
              </button>
            ))}
          </div>
        </ScrollFadeIn>

        {/* 主内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.en}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* 左侧信息 */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6"
                style={{
                  background: `${active.color}20`,
                  color: active.colorLight,
                  border: `1px solid ${active.color}30`,
                }}
              >
                {active.icon} {active.role}
              </div>
              <h3 className="text-5xl md:text-6xl font-black mb-2" style={{ color: active.colorLight }}>
                {active.en}
              </h3>
              <p className="text-3xl font-bold text-white mb-6">{active.cn}</p>
              <p className="text-white/50 text-lg leading-relaxed mb-4">
                {active.desc}
              </p>
              <p className="text-white/30 text-sm italic mb-8">
                "{active.tagline} {active.taglineCn}"
              </p>
              <Link
                href={active.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${active.color}, ${active.colorLight})`,
                  boxShadow: `0 4px 20px ${active.color}40`,
                }}
              >
                了解 {active.en}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 右侧卡片装饰 */}
            <div className="relative h-80 flex items-center justify-center">
              {/* 外圈 */}
              <motion.div
                className="absolute w-64 h-64 rounded-full"
                style={{
                  border: `1px solid ${active.color}20`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* 中圈 */}
              <motion.div
                className="absolute w-48 h-48 rounded-full"
                style={{
                  border: `1px solid ${active.color}30`,
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* 中心 */}
              <motion.div
                className="relative w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${active.color}30, ${active.color}05)`,
                  border: `1px solid ${active.color}40`,
                  boxShadow: `0 0 60px ${active.color}30`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-1" style={{ color: active.colorLight }}>
                    {active.icon}
                  </div>
                  <div className="text-xs text-white/50 font-mono uppercase tracking-widest">
                    {active.concept}
                  </div>
                </div>
              </motion.div>

              {/* 轨道点 */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: active.colorLight,
                    boxShadow: `0 0 8px ${active.color}`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 96}px - 6px)`,
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 96}px - 6px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 底部四格预览 */}
        <ScrollFadeIn delay={0.2} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PLATFORMS.map((p, i) => (
              <motion.button
                key={p.en}
                onClick={() => setActiveIndex(i)}
                className={`glass glass-hover glow-border rounded-xl p-4 text-left transition-all duration-300 ${
                  activeIndex === i ? "border-opacity-50" : ""
                }`}
                style={activeIndex === i ? { borderColor: `${p.color}50` } : {}}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-lg mb-1" style={{ color: p.colorLight }}>
                  {p.icon}
                </div>
                <div className="font-semibold text-white text-sm">{p.en}</div>
                <div className="text-white/40 text-xs">{p.cn}</div>
                <div
                  className="mt-2 text-xs"
                  style={{ color: p.color }}
                >
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
