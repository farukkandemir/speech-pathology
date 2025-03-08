"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Brain,
  MessageCircle,
  Music,
  Utensils,
  Baby,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("services");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: t("service1Title"),
      description: t("service1Description"),
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      benefits: [
        language === "en"
          ? "Improved speech clarity"
          : "Gelişmiş konuşma netliği",
        language === "en" ? "Enhanced communication" : "Geliştirilmiş iletişim",
        language === "en" ? "Increased confidence" : "Artan özgüven",
      ],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: t("service2Title"),
      description: t("service2Description"),
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      benefits: [
        language === "en"
          ? "Expanded vocabulary"
          : "Genişletilmiş kelime dağarcığı",
        language === "en"
          ? "Better grammar skills"
          : "Daha iyi dilbilgisi becerileri",
        language === "en"
          ? "Improved social communication"
          : "Geliştirilmiş sosyal iletişim",
      ],
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t("service3Title"),
      description: t("service3Description"),
      color: "from-amber-500/20 to-amber-600/20",
      textColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      benefits: [
        language === "en" ? "Reduced stuttering" : "Azaltılmış kekemelik",
        language === "en" ? "Smoother speech flow" : "Daha akıcı konuşma",
        language === "en"
          ? "Stress reduction techniques"
          : "Stres azaltma teknikleri",
      ],
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: t("service4Title"),
      description: t("service4Description"),
      color: "from-rose-500/20 to-rose-600/20",
      textColor: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-100 dark:bg-rose-900/30",
      benefits: [
        language === "en"
          ? "Improved vocal quality"
          : "Geliştirilmiş ses kalitesi",
        language === "en" ? "Vocal health maintenance" : "Ses sağlığı bakımı",
        language === "en" ? "Breathing techniques" : "Nefes alma teknikleri",
      ],
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: t("service5Title"),
      description: t("service5Description"),
      color: "from-emerald-500/20 to-emerald-600/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
      benefits: [
        language === "en"
          ? "Safe swallowing strategies"
          : "Güvenli yutma stratejileri",
        language === "en"
          ? "Improved eating comfort"
          : "Geliştirilmiş yeme konforu",
        language === "en"
          ? "Customized treatment plans"
          : "Özelleştirilmiş tedavi planları",
      ],
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: t("service6Title"),
      description: t("service6Description"),
      color: "from-sky-500/20 to-sky-600/20",
      textColor: "text-sky-600 dark:text-sky-400",
      iconBg: "bg-sky-100 dark:bg-sky-900/30",
      benefits: [
        language === "en"
          ? "Early developmental support"
          : "Erken gelişim desteği",
        language === "en" ? "Parent coaching" : "Ebeveyn koçluğu",
        language === "en" ? "Play-based therapy" : "Oyun temelli terapi",
      ],
    },
  ];

  // Process steps
  const processSteps = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: language === "en" ? "Initial Assessment" : "İlk Değerlendirme",
      description:
        language === "en"
          ? "Comprehensive evaluation to understand your specific needs"
          : "Özel ihtiyaçlarınızı anlamak için kapsamlı değerlendirme",
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title:
        language === "en" ? "Personalized Plan" : "Kişiselleştirilmiş Plan",
      description:
        language === "en"
          ? "Custom therapy program designed for your goals"
          : "Hedefleriniz için tasarlanmış özel terapi programı",
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: language === "en" ? "Regular Sessions" : "Düzenli Seanslar",
      description:
        language === "en"
          ? "Consistent therapy with progress tracking"
          : "İlerleme takibi ile tutarlı terapi",
      color: "from-amber-500/20 to-amber-600/20",
      textColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: language === "en" ? "Ongoing Support" : "Sürekli Destek",
      description:
        language === "en"
          ? "Continuous guidance and adjustments as needed"
          : "Gerektiğinde sürekli rehberlik ve ayarlamalar",
      color: "from-emerald-500/20 to-emerald-600/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-5"></div>
      <div className="absolute bottom-24 right-[5%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-5"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("servicesTitle")}
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {language === "en"
              ? "Comprehensive Speech Therapy"
              : "Kapsamlı Konuşma Terapisi"}
          </h2>
          <p className="text-lg text-foreground/80">{t("servicesSubtitle")}</p>
        </div>

        {/* Services tabs and content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Service tabs - left side */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={cn(
                  "text-left p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-border/50 hover:bg-background/80 group",
                  activeService === index
                    ? "bg-background shadow-md border-border/50"
                    : "bg-transparent",
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "p-2.5 rounded-full shrink-0 transition-colors",
                      service.iconBg,
                      service.textColor
                    )}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "font-medium transition-colors",
                        activeService === index
                          ? service.textColor
                          : "text-foreground"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-1 mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Service details - right side */}
          <div
            className={cn(
              "lg:col-span-8 transition-all duration-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <div
              className={cn(
                "p-6 md:p-8 rounded-2xl bg-gradient-to-br border border-white/10 h-full",
                services[activeService].color
              )}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "p-3 rounded-xl",
                      services[activeService].iconBg,
                      services[activeService].textColor
                    )}
                  >
                    {services[activeService].icon}
                  </div>
                  <h3
                    className={cn(
                      "text-2xl font-display",
                      services[activeService].textColor
                    )}
                  >
                    {services[activeService].title}
                  </h3>
                </div>

                <p className="text-foreground/80 mb-8">
                  {services[activeService].description}
                </p>

                <div className="mb-8">
                  <h4 className="font-medium mb-4">
                    {language === "en" ? "Benefits" : "Faydalar"}
                  </h4>
                  <ul className="space-y-3">
                    {services[activeService].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2
                          className={cn(
                            "h-5 w-5 mt-0.5",
                            services[activeService].textColor
                          )}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button className="group">
                    {language === "en"
                      ? "Learn more about this service"
                      : "Bu hizmet hakkında daha fazla bilgi"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div
          className={cn(
            "mt-20 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {language === "en" ? "My Process" : "Sürecim"}
            </div>
            <h3 className="text-2xl md:text-3xl font-display mb-4">
              {language === "en" ? "How It Works" : "Nasıl Çalışır"}
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {language === "en"
                ? "My proven process ensures you receive the highest quality care and achieve the best possible outcomes."
                : "Kanıtlanmış sürecimiz, en yüksek kalitede bakım almanızı ve mümkün olan en iyi sonuçları elde etmenizi sağlar."}
            </p>
          </div>

          {/* Stripe-like horizontal process steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-border hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      "transition-all duration-500 flex flex-col items-center",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    {/* Step number with icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={cn(
                          "w-24 h-24 rounded-full flex items-center justify-center",
                          step.iconBg,
                          step.textColor
                        )}
                      >
                        {step.icon}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-medium border border-border">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4
                        className={cn(
                          "text-lg font-medium mb-2",
                          step.textColor
                        )}
                      >
                        {step.title}
                      </h4>
                      <p className="text-foreground/80 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            {language === "en"
              ? "All services are provided by certified speech pathologists with specialized training in each area. Contact us for a consultation to discuss your specific needs."
              : "Tüm hizmetler, her alanda özel eğitim almış sertifikalı konuşma patologları tarafından sağlanmaktadır. Özel ihtiyaçlarınızı görüşmek için bir danışma için bizimle iletişime geçin."}
          </p>
          <Button size="lg" className="group">
            {language === "en"
              ? "Schedule a Consultation"
              : "Danışma Randevusu Alın"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
