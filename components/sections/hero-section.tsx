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
} from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  // Animated features
  const features = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      text: "Personalized Therapy",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      text: "Bilingual Support",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      text: "Evidence-Based Methods",
    },
  ];

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 left-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12">
        <div
          className={`w-full md:w-1/2 space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span className="animate-pulse mr-2">●</span>
            Professional Speech Pathologist
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight">
              {t("heroTitle")}
              <span className="block text-primary">
                {t("heroSubtitle").split(" ").slice(0, 2).join(" ")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-md leading-relaxed">
              {t("heroSubtitle").split(" ").slice(2).join(" ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/50 shadow-sm transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {feature.icon}
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button
              size="lg"
              className="group px-6 py-6 text-lg shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {t("heroButton")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group px-6 py-6 text-lg border-primary/20 hover:border-primary/50 hover:bg-primary/5"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("contact")}
            </Button>
          </div>

          <div
            className={`pt-8 flex items-center gap-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="text-center">
              <span className="text-3xl font-display text-primary">10+</span>
              <p className="text-sm text-muted-foreground">
                {t("aboutExperience")}
              </p>
            </div>
            <div className="h-10 w-px bg-border"></div>
            <div className="text-center">
              <span className="text-3xl font-display text-primary">500+</span>
              <p className="text-sm text-muted-foreground">
                {t("aboutClients")}
              </p>
            </div>
            <div className="h-10 w-px bg-border hidden md:block"></div>
            <div className="hidden md:flex -space-x-2 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="inline-block h-8 w-8 rounded-full bg-primary/20 ring-2 ring-background flex items-center justify-center text-xs font-medium text-primary"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="inline-block h-8 w-8 rounded-full bg-primary/20 ring-2 ring-background flex items-center justify-center text-xs font-medium text-primary">
                +
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card">
            {/* This is where you would add your actual hero image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-accent/10 relative">
              {/* Placeholder for hero image - replace with your own image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                  <span className="text-primary text-4xl font-display">MK</span>
                </div>
                <p className="text-primary text-lg font-medium">
                  Müberra Kandemir
                </p>
                <p className="text-foreground/70 mt-2">Speech Pathologist</p>
              </div>
            </div>

            {/* Floating card elements */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 border border-border/50 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-secondary" />
                </div>
                <div className="text-sm font-medium">Speech Therapy</div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-3 border border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-primary/20 ring-2 ring-background"
                    ></div>
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted by families</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -right-12 -bottom-12 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          <div className="absolute -z-10 -left-8 -top-8 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>

          {/* Animated dots */}
          <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-primary animate-ping"></div>
          <div
            className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-accent animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 h-2 w-2 rounded-full bg-secondary animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Decorative wave svg */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          className="w-full h-auto fill-background"
        >
          <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
}
