"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, User } from "lucide-react";
import { ScrollFadeIn } from "@/components/ui/AnimatedText";
import { PLATFORMS } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", platform: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollFadeIn>
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">联系我们</h1>
            <p className="text-white/50 text-xl">
              准备好开始你的数字生命之旅了吗？<br />留下你的信息，我们会第一时间与你联系。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 表单 */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <ScrollFadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">选择你感兴趣的平台</h2>
                  <div className="space-y-3">
                    {PLATFORMS.map((p) => (
                      <div
                        key={p.en}
                        className={`glass glow-border rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                          form.platform === p.en ? "border-opacity-50" : ""
                        }`}
                        style={form.platform === p.en ? { borderColor: `${p.color}50` } : {}}
                        onClick={() => setForm({ ...form, platform: p.en })}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: `${p.color}20`, color: p.colorLight }}
                        >
                          {p.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">
                            {p.en} · {p.cn}
                          </div>
                          <div className="text-white/40 text-xs">{p.role}</div>
                        </div>
                        {form.platform === p.en && (
                          <div
                            className="ml-auto w-2 h-2 rounded-full"
                            style={{ background: p.colorLight }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <p className="text-white/30 text-sm italic leading-relaxed">
                    "每一个与 AI 生命的连接，都是一段新故事的开始。"
                  </p>
                  <p className="text-white/20 text-xs mt-3">— Aethtopia</p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* 表单 */}
            <ScrollFadeIn delay={0.1}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* 姓名 */}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">你的名字</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="请输入你的名字"
                        className="w-full glass rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-purple-500/40 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* 邮箱 */}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">邮箱地址</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full glass rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-purple-500/40 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* 留言 */}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">留言</label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-4 top-4 text-white/30" />
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="告诉我们你的想法、需求或问题..."
                        className="w-full glass rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-white/20 outline-none focus:border-purple-500/40 transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <Send size={16} />
                    发送消息
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <div className="text-5xl mb-6">✦</div>
                  <h3 className="text-2xl font-bold text-white mb-3">消息已发送！</h3>
                  <p className="text-white/50">
                    感谢你的关注，我们会在 24 小时内与你联系。
                    <br />期待开启你的数字生命之旅。
                  </p>
                </motion.div>
              )}
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
