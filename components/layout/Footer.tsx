import Link from "next/link";
import { PLATFORMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm font-bold">
                A
              </div>
              <span className="font-semibold text-lg">
                <span className="gradient-text">Aeth</span>
                <span className="text-white/80">topia</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              From Proto to Soul, Companions for Life.
              <br />
              <span className="text-white/30">从原型到灵魂，终生长情相伴。</span>
            </p>
            <div className="mt-6 flex gap-3">
              {PLATFORMS.map((p) => (
                <span
                  key={p.en}
                  className="text-xs px-2 py-1 rounded-md"
                  style={{
                    background: `${p.color}20`,
                    color: p.colorLight,
                    border: `1px solid ${p.color}30`,
                  }}
                >
                  {p.cn}
                </span>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4">平台产品</h4>
            <ul className="space-y-3">
              {PLATFORMS.map((p) => (
                <li key={p.en}>
                  <Link
                    href={p.href}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: p.color }}>{p.icon}</span>
                    {p.en} · {p.cn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4">更多信息</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "关于我们" },
                { href: "/beings", label: "AI生命体" },
                { href: "/contact", label: "联系我们" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © 2025 Aethtopia. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            数字生命，从这里开始。
          </p>
        </div>
      </div>
    </footer>
  );
}
