"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold font-display transition-transform group-hover:scale-110"
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
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200 font-display"
                style={
                  pathname === link.href
                    ? { color: "#F9F3F0", background: "rgba(249,243,240,0.08)" }
                    : { color: "#B8A99A" }
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-medium font-display transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #FF5D00, #FFC702)",
              color: "#190E06",
              boxShadow: "0 2px 16px rgba(255,93,0,0.3)",
            }}
          >
            开始体验
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "#B8A99A" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t"
            style={{ borderColor: "rgba(249,243,240,0.06)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-display transition-all"
                  style={
                    pathname === link.href
                      ? { color: "#F9F3F0", background: "rgba(249,243,240,0.08)" }
                      : { color: "#B8A99A" }
                  }
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-3 rounded-full text-sm font-medium font-display text-center"
                style={{
                  background: "linear-gradient(135deg, #FF5D00, #FFC702)",
                  color: "#190E06",
                }}
              >
                开始体验
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
