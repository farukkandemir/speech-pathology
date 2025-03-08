"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
  Brain,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Predefined particle positions to avoid hydration errors
const particlePositions = [
  {
    top: "10%",
    left: "20%",
    width: "4px",
    height: "4px",
    delay: "0s",
    duration: "15s",
  },
  {
    top: "25%",
    left: "85%",
    width: "6px",
    height: "6px",
    delay: "1s",
    duration: "18s",
  },
  {
    top: "60%",
    left: "10%",
    width: "5px",
    height: "5px",
    delay: "2s",
    duration: "12s",
  },
  {
    top: "35%",
    left: "50%",
    width: "3px",
    height: "3px",
    delay: "0.5s",
    duration: "20s",
  },
  {
    top: "85%",
    left: "70%",
    width: "4px",
    height: "4px",
    delay: "1.5s",
    duration: "16s",
  },
  {
    top: "20%",
    left: "30%",
    width: "5px",
    height: "5px",
    delay: "2.5s",
    duration: "14s",
  },
  {
    top: "70%",
    left: "40%",
    width: "3px",
    height: "3px",
    delay: "3s",
    duration: "17s",
  },
  {
    top: "45%",
    left: "90%",
    width: "6px",
    height: "6px",
    delay: "1s",
    duration: "13s",
  },
  {
    top: "90%",
    left: "25%",
    width: "4px",
    height: "4px",
    delay: "2s",
    duration: "19s",
  },
  {
    top: "15%",
    left: "60%",
    width: "5px",
    height: "5px",
    delay: "0.5s",
    duration: "15s",
  },
  {
    top: "50%",
    left: "15%",
    width: "3px",
    height: "3px",
    delay: "1.5s",
    duration: "14s",
  },
  {
    top: "75%",
    left: "55%",
    width: "4px",
    height: "4px",
    delay: "2.5s",
    duration: "16s",
  },
  {
    top: "30%",
    left: "75%",
    width: "5px",
    height: "5px",
    delay: "0s",
    duration: "18s",
  },
  {
    top: "65%",
    left: "35%",
    width: "3px",
    height: "3px",
    delay: "1s",
    duration: "12s",
  },
  {
    top: "40%",
    left: "65%",
    width: "4px",
    height: "4px",
    delay: "2s",
    duration: "17s",
  },
];

export function HeroSection() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  // Animated features
  const features = [
    {
      icon: <Brain className="h-4 w-4 text-primary" />,
      text:
        language === "en"
          ? "Evidence-Based Methods"
          : "Kanıta Dayalı Yöntemler",
    },
    {
      icon: <HeartHandshake className="h-4 w-4 text-primary" />,
      text:
        language === "en"
          ? "Personalized Approach"
          : "Kişiselleştirilmiş Yaklaşım",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-primary" />,
      text: language === "en" ? "Bilingual Support" : "İki Dilli Destek",
    },
  ];

  return (
    <section className="relative pt-16 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10"></div>
      <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-primary/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-secondary/5 rounded-tr-[80px] -z-10"></div>

      {/* Animated particles - only render on client side to avoid hydration errors */}
      {isClient && (
        <div className="absolute inset-0 -z-5 opacity-30">
          {particlePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/30 animate-float"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.width,
                height: pos.height,
                animationDuration: pos.duration,
                animationDelay: pos.delay,
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Creative asymmetrical layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Main headline - spans across top */}
          <div
            className={cn(
              "col-span-12 mb-8 transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 backdrop-blur-sm border border-primary/20">
              <span className="animate-pulse mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
              {t("heroTagline")}
            </div>
          </div>

          {/* Left column - main content */}
          <div
            className={cn(
              "col-span-12 md:col-span-6 lg:col-span-5 transition-all duration-1000 relative z-10",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-4">
              <span className="relative inline-block">
                {t("heroTitle").split(" ").slice(0, 2).join(" ")}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded-full"></span>
              </span>
              <span className="block mt-1 text-primary">
                {t("heroTitle").split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="text-base text-foreground/70 max-w-md leading-relaxed mb-6">
              {t("heroDescription")}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/50 shadow-sm transition-all duration-700 text-xs hover:bg-background hover:border-primary/30",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="p-1 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "flex gap-3 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <Button size="sm" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-1.5 text-sm">
                  <Calendar className="h-4 w-4" />
                  {t("heroButton")}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="group text-sm border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              >
                <MessageCircle className="mr-1.5 h-4 w-4" />
                {t("contact")}
              </Button>
            </div>
          </div>

          {/* Center column - subtitle and stats */}
          <div
            className={cn(
              "col-span-12 md:col-span-6 lg:col-span-3 md:mt-16 transition-all duration-1000 relative z-10",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="bg-background/40 backdrop-blur-md p-5 rounded-2xl border border-border/50 shadow-lg relative mb-6">
              <h2 className="text-lg md:text-xl text-foreground/90 font-medium leading-tight mb-3">
                {t("heroSubtitle")}
              </h2>

              <div className="absolute -top-3 -right-3 bg-primary/10 rounded-full p-2">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background/40 backdrop-blur-md p-4 rounded-xl border border-border/50 text-center">
                <span className="text-xl font-display text-primary block">
                  10+
                </span>
                <p className="text-xs text-muted-foreground">
                  {t("aboutExperience")}
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-md p-4 rounded-xl border border-border/50 text-center">
                <span className="text-xl font-display text-primary block">
                  500+
                </span>
                <p className="text-xs text-muted-foreground">
                  {t("aboutClients")}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - profile card */}
          <div
            className={cn(
              "col-span-12 lg:col-span-4 transition-all duration-1000 relative z-10 mt-8 lg:mt-0 lg:-ml-6",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

              <div className="relative bg-background/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-border/30">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50"></div>

                <div className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                      <span className="text-primary text-xl font-display relative z-10">
                        MK
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-medium">
                        Müberra Kandemir
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {language === "en"
                          ? "Speech Pathologist"
                          : "Konuşma Patoloğu"}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                        <span className="text-xs text-foreground/60">
                          {language === "en" ? "Available" : "Müsait"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center">
                        <MessageCircle className="h-3.5 w-3.5 text-secondary" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">
                          {language === "en"
                            ? "Speech Therapy"
                            : "Konuşma Terapisi"}
                        </div>
                        <div className="text-foreground/60 text-[10px]">
                          {language === "en"
                            ? "Personalized sessions"
                            : "Kişiselleştirilmiş seanslar"}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-4/5 bg-secondary rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium">
                          {language === "en"
                            ? "Certified Expert"
                            : "Sertifikalı Uzman"}
                        </div>
                        <div className="text-foreground/60 text-[10px]">
                          {language === "en"
                            ? "10+ years experience"
                            : "10+ yıl deneyim"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-6 w-6 rounded-full bg-primary/10 ring-1 ring-background flex items-center justify-center text-[10px] font-medium text-primary"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="h-6 w-6 rounded-full bg-primary/10 ring-1 ring-background flex items-center justify-center text-[10px] font-medium text-primary">
                        +
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 text-xs px-2 py-0"
                    >
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      {language === "en" ? "Profile" : "Profil"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent elements */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 mt-8">
            <div
              className={cn(
                "inline-flex items-center gap-2 text-xs text-foreground/60 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "450ms" }}
            >
              <span className="block h-px w-12 bg-border"></span>
              {language === "en"
                ? "Scroll to explore"
                : "Keşfetmek için kaydırın"}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-primary animate-ping"></div>
      <div
        className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-accent animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 h-2 w-2 rounded-full bg-secondary animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Decorative wave svg */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-background"
        >
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
