"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Building,
  Clock,
  CheckCircle2,
  Send,
  CalendarDays,
  ArrowRight,
  MessageCircle,
  User,
  Sparkles,
} from "lucide-react";
import { FormEvent, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Building className="h-5 w-5" />,
      title: language === "en" ? "Office" : "Ofis",
      details: "Rota Rehabilitation Center",
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: t("emailContact"),
      details: "muberra@kandemir.com.tr",
      color:
        "text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400",
      action: {
        label: language === "en" ? "Send Email" : "E-posta Gönder",
        href: "mailto:muberra@kandemir.com.tr",
      },
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: language === "en" ? "Office Hours" : "Çalışma Saatleri",
      details: language === "en" ? "Mon-Fri: 9AM-6PM" : "Pzt-Cum: 9:00-18:00",
      color:
        "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400",
    },
  ];

  // Why contact reasons
  const contactReasons = [
    {
      icon: <CalendarDays className="h-5 w-5" />,
      title: language === "en" ? "Schedule a Session" : "Seans Planlayın",
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: language === "en" ? "Ask a Question" : "Soru Sorun",
      color:
        "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: language === "en" ? "Request Information" : "Bilgi İsteyin",
      color:
        "text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-5"></div>
      <div className="absolute bottom-24 right-[5%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-5"></div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section header - centered like other sections */}
        <div
          className={cn(
            "text-center mx-auto mb-12 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Get in Touch" : "İletişime Geçin"}
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {language === "en"
              ? "I'm here to help with your speech therapy needs"
              : "Konuşma terapisi ihtiyaçlarınız için buradayım"}
          </p>

          {/* Horizontal line with gradient */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8"></div>
        </div>

        {/* Contact info cards - horizontal layout */}
        <div
          className={cn(
            "flex flex-wrap gap-4 mb-8 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[240px] p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/70 mt-0.5">
                    {item.details}
                  </p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      className="inline-flex items-center text-xs mt-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      {item.action.label}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main contact card */}
        <div
          className={cn(
            "bg-background/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg transition-all duration-700 transform overflow-hidden",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Top section - Connect banner with horizontal layout */}
          <div className="bg-gradient-to-r from-primary/20 via-background to-secondary/20 p-8 relative overflow-hidden border-b border-border/30">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              {/* Left side - Text content */}
              <div className="md:flex-1">
                <h3 className="text-2xl font-display mb-3 text-foreground">
                  {language === "en" ? "Let's Connect" : "Hadi Bağlanalım"}
                </h3>

                <p className="text-foreground/70 mb-0">
                  {language === "en"
                    ? "I'm here to help with your speech therapy needs. Feel free to reach out through any of the channels below."
                    : "Konuşma terapisi ihtiyaçlarınız için buradayım. Aşağıdaki kanallardan herhangi biri aracılığıyla benimle iletişime geçebilirsiniz."}
                </p>
              </div>

              {/* Right side - Contact reasons */}
              <div className="shrink-0 md:w-auto md:min-w-[220px]">
                <p className="text-sm font-medium text-foreground/80 mb-3">
                  {language === "en"
                    ? "I can help you with:"
                    : "Size şunlarda yardımcı olabilirim:"}
                </p>
                <div className="flex flex-col gap-2">
                  {contactReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full border border-border/50 bg-background/60 backdrop-blur-sm text-sm"
                    >
                      <span
                        className={`p-1 rounded-full mr-1.5 ${reason.color
                          .split(" ")
                          .slice(0, 2)
                          .join(" ")}`}
                      >
                        {reason.icon}
                      </span>
                      {reason.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form section with horizontal elements */}
          <div className="p-8">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center max-w-md mx-auto">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display mb-3">
                  {language === "en"
                    ? "Thank you for your message!"
                    : "Mesajınız için teşekkürler!"}
                </h3>
                <p className="text-foreground/70">
                  {language === "en"
                    ? "Müberra will get back to you as soon as possible."
                    : "Müberra en kısa sürede size geri dönecektir."}
                </p>
                <Button
                  className="mt-8"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  {language === "en"
                    ? "Send another message"
                    : "Başka bir mesaj gönder"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Form header with horizontal layout */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-display mb-2">
                      {language === "en" ? "Send a Message" : "Mesaj Gönder"}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    {language === "en"
                      ? "Fill out the form below and Müberra will get back to you soon."
                      : "Aşağıdaki formu doldurun, Müberra en kısa sürede size geri dönecektir."}
                  </p>
                </div>

                {/* Name and email in horizontal layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground/80"
                    >
                      {t("nameLabel")} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50">
                        <User className="h-4 w-4" />
                      </div>
                      <Input
                        id="name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder={
                          language === "en" ? "John Doe" : "Ahmet Yılmaz"
                        }
                        required
                        className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground/80"
                    >
                      {t("emailLabel")} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50">
                        <Mail className="h-4 w-4" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                        placeholder="you@example.com"
                        required
                        className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8 space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/80"
                  >
                    {t("messageLabel")} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none text-foreground/50">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <Textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          message: e.target.value,
                        })
                      }
                      placeholder={
                        language === "en"
                          ? "How can Müberra help you?"
                          : "Müberra size nasıl yardımcı olabilir?"
                      }
                      rows={5}
                      required
                      className="pl-10 resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Horizontal layout for form footer */}
                <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
                  <p className="text-xs text-foreground/60 max-w-sm">
                    {language === "en"
                      ? "By submitting this form, you agree to be contacted by Müberra Kandemir regarding your request."
                      : "Bu formu göndererek, isteğinizle ilgili olarak Müberra Kandemir tarafından sizinle iletişime geçilmesini kabul etmiş olursunuz."}
                  </p>
                  <Button
                    type="submit"
                    className="py-6 text-base group"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin mr-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {language === "en" ? "Processing..." : "İşleniyor..."}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        {t("submitButton")}
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Horizontal CTA bar */}
        <div
          className={cn(
            "mt-8 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <CalendarDays className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">
                {language === "en"
                  ? "Prefer to schedule directly?"
                  : "Doğrudan randevu almak mı istiyorsunuz?"}
              </p>
            </div>
            <Button className="group whitespace-nowrap">
              {language === "en"
                ? "Schedule a Consultation"
                : "Danışma Randevusu Alın"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
