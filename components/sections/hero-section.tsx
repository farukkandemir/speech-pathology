"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
              {t("heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-md">
              {t("heroSubtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="px-8 py-6 text-lg shadow-lg">
              {t("heroButton")}
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              {t("contact")}
            </Button>
          </div>

          <div className="pt-6 flex items-center gap-6">
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
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* This is where you would add your actual hero image */}
            <div className="aspect-[4/3] bg-gradient-to-r from-primary/20 to-accent/20 relative">
              {/* Placeholder for hero image - replace with your own image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-primary text-lg">Speech Therapist Image</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-8 -top-8 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
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
