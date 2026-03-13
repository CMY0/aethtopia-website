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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-600/8 blur-[100px]" />
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-rose-500/8 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 标题 */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-rose-400 text-sm tracking-widest uppercase mb-3">AI 生命体</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            三种形态，一个灵魂
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
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
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${being.gradient} mb-4`}
                    style={{ boxShadow: `0 8px 24px ${being.glowColor}` }}
                  >
                    <span className="text-white font-black text-lg">{being.type[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{being.type}</h3>
                  <p className={`text-sm bg-gradient-to-r ${being.gradient} bg-clip-text text-transparent font-medium`}>
                    {being.titleCn}
                  </p>
                </div>

                {/* 描述 */}
                <p className="text-white/50 leading-relaxed mb-6 flex-1">
                  {being.desc}
                </p>

                {/* 特性列表 */}
                <ul className="space-y-2 mb-6">
                  {being.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${being.gradient} flex-shrink-0`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* 分隔线 */}
                <div
                  className={`h-px bg-gradient-to-r ${being.gradient} opacity-20 mb-6`}
                />

                {/* 链接 */}
                <Link
                  href="/beings"
                  className="flex items-center gap-1 text-sm text-white/30 hover:text-white transition-colors group"
                >
                  了解{being.titleCn}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* 底部 CTA */}
        <ScrollFadeIn delay={0.4} className="text-center mt-12">
          <Link
            href="/beings"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white/70 hover:text-white hover:border-purple-500/40 transition-all duration-300 font-medium"
          >
            查看所有 AI 生命体
            <ArrowRight size={16} />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
