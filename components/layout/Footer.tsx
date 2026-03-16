"use client";

import Link from "next/link";
import { PLATFORMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(249,243,240,0.05)", background: "#110A04" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold font-display"
                style={{
                  background: "linear-gradient(135deg, #FF5D00, #FFC702)",
                  color: "#190E06",
                }}
              >
                A
              </div>
              <span className="font-display font-semibold text-lg tracking-tight">
                <span className="gradient-text">Aeth</span>
                <span style={{ color: "rgba(249,243,240,0.8)" }}>topia</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#7A6358" }}>
              From Proto to Soul, Companions for Life.
              <br />
              <span style={{ color: "#4A3A30" }}>从原型到灵魂，终生长情相伴。</span>
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
            <h4 className="text-sm font-semibold font-display mb-4" style={{ color: "rgba(249,243,240,0.6)" }}>平台产品</h4>
            <ul className="space-y-3">
              {PLATFORMS.map((p) => (
                <li key={p.en}>
                  <Link
                    href={p.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5D00] rounded"
                    style={{ color: "#7A6358" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#B8A99A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6358")}
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
            <h4 className="text-sm font-semibold font-display mb-4" style={{ color: "rgba(249,243,240,0.6)" }}>更多信息</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "关于我们" },
                { href: "/beings", label: "AI生命体" },
                { href: "/contact", label: "联系我们" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5D00] rounded"
                    style={{ color: "#7A6358" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#B8A99A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#7A6358")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(249,243,240,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#4A3A30" }}>
            © 2025 Aethtopia. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#4A3A30" }}>
            数字生命，从这里开始。
          </p>
        </div>
      </div>
    </footer>
  );
}
