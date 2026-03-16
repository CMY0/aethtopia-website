"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 流光渐变色块背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="aurora-blob w-[700px] h-[700px] opacity-30 animate-float-slow"
          style={{ background: "#FF5D00", top: "10%", left: "15%" }}
        />
        <div
          className="aurora-blob w-[500px] h-[500px] opacity-20 animate-float-mid"
          style={{ background: "#FFC702", top: "30%", right: "10%" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] opacity-15 animate-float-fast"
          style={{ background: "#2DD1DA", bottom: "10%", left: "40%" }}
        />
      </div>

      {/* 细网格 */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* 内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* 标签 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-10"
          style={{ color: "#FF7A2E" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#FF5D00", boxShadow: "0 0 6px #FF5D00" }}
          />
          数字生命宇宙 · AI Being Universe
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span style={{ color: "#F9F3F0" }}>创造有</span>
          <span className="gradient-text">灵魂</span>
          <br />
          <span style={{ color: "#F9F3F0" }}>的 AI 生命</span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{ color: "#B8A99A" }}
        >
          从原型的创造，到誓约的缔结，从理想国的社群，到永恒的陪伴。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/platforms"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #FF5D00, #FFC702)",
              color: "#190E06",
              boxShadow: "0 4px 24px rgba(255,93,0,0.35)",
            }}
          >
            探索四大平台
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/beings"
            className="flex items-center gap-2 px-8 py-4 rounded-full glass font-medium glow-border transition-all duration-300"
            style={{ color: "rgba(249,243,240,0.7)" }}
          >
            了解 AI 生命体
          </Link>
        </motion.div>

        {/* 四大平台标签 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {[
            { en: "Proto", cn: "拓拓", color: "#FF5D00" },
            { en: "Vowen", cn: "窝窝", color: "#FFC702" },
            { en: "Topia", cn: "泡泡", color: "#2DD1DA" },
            { en: "Lapal", cn: "伴伴", color: "#2E8FE3" },
          ].map((p, i) => (
            <motion.div
              key={p.en}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }}
              />
              <span className="text-sm font-medium font-display" style={{ color: p.color }}>
                {p.en}
              </span>
              <span className="text-sm" style={{ color: "#7A6358" }}>·</span>
              <span className="text-sm" style={{ color: "#B8A99A" }}>{p.cn}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 滚动提示线 */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#FF5D00]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
