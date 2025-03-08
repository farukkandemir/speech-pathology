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
  Star,
  Zap,
  Lightbulb,
  Users,
  Award,
  Languages,
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
      text: t("featureEvidenceBased"),
    },
    {
      icon: <HeartHandshake className="h-4 w-4 text-primary" />,
      text: t("featurePersonalized"),
    },
    {
      icon: <Languages className="h-4 w-4 text-primary" />,
      text: t("featureBilingual"),
    },
  ];

  // Expertise areas
  const expertiseAreas = [
    {
      icon: <Lightbulb className="h-4 w-4" />,
      title: t("expertiseChild"),
      color: "from-blue-500/20 to-blue-600/20 text-blue-600",
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: t("expertiseFluency"),
      color: "from-amber-500/20 to-amber-600/20 text-amber-600",
    },
    {
      icon: <Star className="h-4 w-4" />,
      title: t("expertiseLanguage"),
      color: "from-purple-500/20 to-purple-600/20 text-purple-600",
    },
  ];

  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10"></div>

      {/* Animated background circles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-5 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating elements */}
      {isClient && (
        <>
          <div
            className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border border-primary/10 animate-float"
            style={{ animationDuration: "15s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-md border border-secondary/10 animate-float"
            style={{ animationDuration: "18s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-md border border-accent/10 animate-float"
            style={{ animationDuration: "12s", animationDelay: "1s" }}
          ></div>
        </>
      )}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Main content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Animated badge */}
            <div
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20 transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary"></span>
              {t("heroTagline")}
            </div>

            {/* Main headline */}
            <h1
              className={cn(
                "text-4xl md:text-5xl xl:text-6xl font-display leading-tight mb-6 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="text-foreground">
                {t("heroTitle").split(" ").slice(0, 2).join(" ")}
              </span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">
                  {t("heroTitle").split(" ").slice(2).join(" ")}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full -z-10"></span>
              </span>
            </h1>

            {/* Description */}
            <p
              className={cn(
                "text-lg text-foreground/70 max-w-xl leading-relaxed mb-8 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              {t("heroDescription")}
            </p>

            {/* Expertise areas */}
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative group p-3 rounded-lg bg-gradient-to-br border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-md",
                    area.color
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                      {area.icon}
                    </div>
                    <p className="font-medium text-sm">{area.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className={cn(
                "flex flex-wrap gap-4 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 text-base">
                  <Calendar className="h-5 w-5" />
                  {t("heroButton")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("contact")}
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className={cn(
                "mt-12 flex items-center gap-6 transition-all duration-1000",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-background to-muted ring-2 ring-background overflow-hidden"
                    >
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-xs font-medium">
                          {String.fromCharCode(64 + i)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-foreground/70">
                  <span className="font-medium">500+</span>{" "}
                  {t("heroSatisfiedClients")}
                </div>
              </div>

              <div className="h-10 w-px bg-border"></div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="text-sm text-foreground/70">
                  <span className="font-medium">5.0</span> {t("heroRating")}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual elements */}
          <div className="relative z-10 order-1 lg:order-2">
            <div
              className={cn(
                "relative transition-all duration-1000 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
            >
              {/* Main image container - Redesigned for minimalism */}
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
                {/* Minimalistic animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient-slow">
                  {/* Subtle animated particles */}
                  {isClient &&
                    particlePositions.map((particle, index) => (
                      <div
                        key={index}
                        className="absolute rounded-full bg-primary/30 animate-float-particle"
                        style={{
                          top: particle.top,
                          left: particle.left,
                          width: particle.width,
                          height: particle.height,
                          animationDelay: particle.delay,
                          animationDuration: particle.duration,
                        }}
                      ></div>
                    ))}
                </div>

                {/* Central profile element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Profile circle with animated border */}
                    <div className="relative h-48 w-48 rounded-full bg-background/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center overflow-hidden group">
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 animate-spin-slow"></div>

                      {/* Profile content */}
                      <div className="relative z-10 text-center p-4">
                        <span className="text-primary text-4xl font-display">
                          MK
                        </span>
                        <h3 className="text-xl font-medium mt-2">
                          {t("heroProfileName")}
                        </h3>
                        <p className="text-sm text-foreground/80 mt-1">
                          {t("heroProfileTitle")}
                        </p>
                      </div>
                    </div>

                    {/* Floating badges - Minimalistic approach */}
                    <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg flex items-center justify-center animate-float-slow">
                      <Award className="h-6 w-6 text-primary" />
                    </div>

                    <div
                      className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border border-secondary/20 shadow-lg flex items-center justify-center animate-float-slow"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <Brain className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                </div>

                {/* Dynamic feature indicators */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="h-2 w-2 rounded-full bg-primary/50 transition-all duration-300 hover:scale-150 hover:bg-primary"
                      style={{
                        animationDelay: `${index * 0.5}s`,
                        transform: `scale(${isVisible ? 1 : 0})`,
                        opacity: isVisible ? 1 : 0,
                        transition: `transform 0.5s ${
                          index * 0.2
                        }s, opacity 0.5s ${index * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Minimalistic feature indicators */}
              <div className="mt-8 flex justify-center gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-2 py-1 px-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 transition-all duration-500",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    {feature.icon}
                    <span className="text-xs font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
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
