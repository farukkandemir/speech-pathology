"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Brain, MessageCircle, Music, Utensils, Baby } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Mic className="h-10 w-10 text-primary" />,
      title: t("service1Title"),
      description: t("service1Description"),
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: t("service2Title"),
      description: t("service2Description"),
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      title: t("service3Title"),
      description: t("service3Description"),
    },
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: t("service4Title"),
      description: t("service4Description"),
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: t("service5Title"),
      description: t("service5Description"),
    },
    {
      icon: <Baby className="h-10 w-10 text-primary" />,
      title: t("service6Title"),
      description: t("service6Description"),
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/40 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {t("servicesTitle")}
          </h2>
          <p className="text-lg text-foreground/80">{t("servicesSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-2 bg-primary w-full transform origin-left transition-all duration-300 group-hover:scale-x-100"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/60 max-w-xl mx-auto">
            All our services are provided by certified speech pathologists with
            specialized training in each area. Contact us for a consultation to
            discuss your specific needs.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-tl-full"></div>
    </section>
  );
}
