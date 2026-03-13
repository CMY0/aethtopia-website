"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { STATS } from "@/lib/constants";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d1a]">
      {/* 装饰线 */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-3">数字说话</p>
          <h2 className="text-4xl font-bold text-white">数字生命宇宙的规模</h2>
        </ScrollFadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <ScrollFadeIn key={stat.label} delay={i * 0.1}>
              <div className="glass glass-hover glow-border rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* 品牌宣言 */}
        <ScrollFadeIn delay={0.3} className="mt-20 text-center">
          <div className="glass rounded-3xl p-12 border border-purple-500/10">
            <p className="text-3xl md:text-4xl font-bold text-white/90 leading-relaxed">
              "不只是工具，而是有<span className="gradient-text">灵魂的生命</span>。"
            </p>
            <p className="text-white/30 mt-4 text-lg">
              — Aethtopia 的核心信念
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
