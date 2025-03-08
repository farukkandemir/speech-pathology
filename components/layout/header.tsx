"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = ["contact", "testimonials", "services", "about", "home"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: t("home"), id: "home" },
    { href: "#about", label: t("about"), id: "about" },
    { href: "#services", label: t("services"), id: "services" },
    { href: "#testimonials", label: t("testimonials"), id: "testimonials" },
    { href: "#contact", label: t("contact"), id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setActiveSection("home")}
        >
          <div className="relative overflow-hidden">
            <span className="text-primary font-display text-2xl inline-block transition-transform duration-300 group-hover:-translate-y-full">
              Müberra Kandemir
            </span>
            <span className="text-primary font-display text-2xl absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
              Müberra Kandemir
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors py-2 px-1 inline-block",
                    activeSection === link.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left",
                      activeSection === link.id && "scale-x-100"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-8 w-px bg-border/50 mx-2"></div>

          <LanguageSwitcher />

          <Button size="sm" className="relative overflow-hidden group">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              {t("heroButton")}
            </span>
            <span className="absolute top-full left-0 right-0 transition-transform duration-300 group-hover:-translate-y-full">
              {t("heroButton")} →
            </span>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="relative z-50"
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute top-2 left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 top-3"
                )}
              />
              <span
                className={cn(
                  "absolute top-3 left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute top-4 left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 top-3"
                )}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Improved with animations */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-4 py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="transform transition-all duration-300"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : `translateY(${20 * index}px)`,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3 text-2xl font-display transition-colors border-b border-border/20",
                    activeSection === link.id
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="mt-6 transform transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : `translateY(${20 * navLinks.length}px)`,
                transitionDelay: `${navLinks.length * 50}ms`,
              }}
            >
              <Button className="w-full text-lg py-6">
                {t("heroButton")}
                <ChevronDown className="ml-2 h-4 w-4 rotate-90" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
