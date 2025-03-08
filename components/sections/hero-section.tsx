"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Brain,
  HeartHandshake,
  Star,
  Zap,
  Lightbulb,
  Languages,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveQuiz } from "@/components/quiz/InteractiveQuiz";

export function HeroSection() {
  const { t } = useLanguage();
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
              {/* Interactive Quiz Container */}
              <div className="relative rounded-2xl overflow-hidden bg-background/60 backdrop-blur-md p-6 max-w-md mx-auto shadow-xl border border-primary/10">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background/70"></div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/20 rounded-br-2xl"></div>

                {/* Quiz component */}
                <div className="relative z-10">
                  <InteractiveQuiz />
                </div>
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
