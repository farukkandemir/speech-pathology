"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show/hide header based on scroll direction
      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < 10 ||
          isMobileMenuOpen
      );
      setPrevScrollPos(currentScrollPos);

      // Add background when scrolled
      setIsScrolled(currentScrollPos > 10);

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
  }, [prevScrollPos, isMobileMenuOpen]);

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
          ? "bg-background/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4",
        !visible && !isMobileMenuOpen && "transform -translate-y-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <Link
            href="/"
            className="flex items-center gap-2 group relative"
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
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base font-medium transition-colors py-2 px-1 inline-block relative",
                      activeSection === link.id
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                    onClick={() => setActiveSection(link.id)}
                  >
                    {/* Hover dot indicator */}
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary scale-0 transition-transform duration-200 origin-center group-hover:scale-100"></span>

                    {link.label}

                    {/* Active underline with gradient */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 transition-transform duration-300 origin-left",
                        activeSection === link.id && "scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Separator with animation */}
            <div className="h-8 w-px bg-gradient-to-b from-border/10 via-border/50 to-border/10"></div>

            {/* Language switcher */}
            <div className="relative">
              <LanguageSwitcher />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full"></span>
            </div>

            {/* CTA Button - Enhanced */}
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 transition-all duration-300 group flex items-center gap-2"
            >
              <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>{t("heroButton")}</span>
              <ChevronDown className="h-4 w-4 rotate-90 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1" />
            </Button>
          </nav>

          {/* Mobile Navigation Toggle - Enhanced */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative z-50 p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
            >
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute top-2 left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
                    isMobileMenuOpen && "rotate-45 top-3 bg-primary"
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
                    isMobileMenuOpen && "-rotate-45 top-3 bg-primary"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced with better animations */}
      <div
        className={cn(
          "fixed inset-0 bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden",
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
                className="transform transition-all duration-300 overflow-hidden"
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
                    "block py-3 text-xl font-medium transition-all duration-200 border-b border-border/10 relative group",
                    activeSection === link.id
                      ? "text-primary pl-4"
                      : "text-foreground/80 hover:text-primary hover:pl-4"
                  )}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {/* Active indicator */}
                  {activeSection === link.id && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></span>
                  )}
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
              <Button className="w-full text-base py-5 bg-primary hover:bg-primary/90 transition-all duration-300 group flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{t("heroButton")}</span>
                <ChevronDown className="h-4 w-4 rotate-90 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
