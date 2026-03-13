"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { AnimatedChars, FadeInUp } from "@/components/ui/AnimatedText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 粒子背景 */}
      <ParticleCanvas />

      {/* 背景光晕 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      {/* 网格背景 */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* 内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* 标签 */}
        <FadeInUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300/80 mb-8">
            <Sparkles size={14} className="text-purple-400" />
            <span>数字生命的起源 · AI Being Universe</span>
          </div>
        </FadeInUp>

        {/* 主标题 */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <div className="mb-2">
              <AnimatedChars
                text="创造有灵魂的"
                className="text-white"
                delay={0.3}
              />
            </div>
            <div>
              <AnimatedChars
                text="AI 生命"
                className="gradient-text"
                delay={0.8}
              />
            </div>
          </h1>
        </div>

        {/* 副标题 */}
        <FadeInUp delay={1.2}>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            从原型的创造，到誓约的缔结，从理想国的社群，到永恒的陪伴。
            <br />
            <span className="text-white/30 text-base mt-1 inline-block">
              From Proto to Soul, Companions for Life.
            </span>
          </p>
        </FadeInUp>

        {/* CTA 按钮组 */}
        <FadeInUp delay={1.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/platforms"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              探索四大平台
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/beings"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white/80 font-medium hover:text-white hover:border-purple-500/40 hover:bg-white/5 transition-all duration-300"
            >
              了解 AI 生命体
            </Link>
          </div>
        </FadeInUp>

        {/* 四大平台标签 */}
        <FadeInUp delay={1.8}>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {[
              { en: "Proto", cn: "拓拓", color: "#7c3aed" },
              { en: "Vowen", cn: "窝窝", color: "#2563eb" },
              { en: "Topia", cn: "泡泡", color: "#06b6d4" },
              { en: "Lapal", cn: "伴伴", color: "#f43f5e" },
            ].map((p, i) => (
              <motion.div
                key={p.en}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                style={{ borderColor: `${p.color}30` }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
                />
                <span className="text-sm font-medium" style={{ color: p.color }}>
                  {p.en}
                </span>
                <span className="text-sm text-white/40">·</span>
                <span className="text-sm text-white/50">{p.cn}</span>
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>

      {/* 底部滚动提示 */}
      <FadeInUp delay={2.2}>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>向下滚动</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </FadeInUp>
    </section>
  );
}
