"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Individualized Approach",
      description:
        "Each therapy plan is uniquely tailored to address your specific needs and goals.",
    },
    {
      icon: <Heart className="h-10 w-10 text-accent" />,
      title: "Caring Environment",
      description:
        "We create a warm, supportive space where you can feel comfortable and motivated.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-secondary" />,
      title: "Playful Techniques",
      description:
        "Our methods incorporate fun, engaging activities that make therapy enjoyable and effective.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              {/* This is where you would add your actual therapist image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 relative">
                {/* Placeholder for therapist image - replace with your own image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-primary text-lg">
                    Speech Pathologist Image
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -left-6 -bottom-6 w-40 h-40 bg-secondary/20 rounded-full"></div>
            <div className="absolute -z-10 right-12 top-1/2 w-20 h-20 bg-primary/20 rounded-full"></div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
                {t("aboutTitle")}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {t("aboutDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-border/50 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-display mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-display mb-4">
                {t("aboutApproach")}
              </h3>
              <p className="text-foreground/80">{t("aboutApproachText")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
