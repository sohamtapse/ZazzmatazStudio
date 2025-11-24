"use client";
import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/signature", label: "Signature Collection" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#FFF8F2] fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Camera className="h-8 w-8  transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110" />
            <span className=" text-2xl font-bold font-display">
              Zazzmataz Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="text-lg hover: transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1)] font-medium hover:text-xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-black text-white py-2 px-3 rounded-2xl cursor-pointer hover:bg-gray-900 hover: transition-[all_0.3s_cubic-bezier(0.4,0,0.2,1)] hover:text-lg">
              <Link href="/contact">Book Session</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t "
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover: transition-[all_0.5s_cubic-bezier(0.4,0,0.2,1)] font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-black text-white py-2 px-3 rounded-2xl cursor-pointer hover:bg-gray-900 ">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Session
                </Link>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
