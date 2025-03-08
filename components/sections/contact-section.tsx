"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Building, CheckCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        phone: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: language === "en" ? "Clinic" : "Klinik",
      details: "Rota Rehabilitation Center",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t("addressLabel"),
      details: language === "en" ? "Ankara, Turkey" : "Ankara, Türkiye",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t("phoneContact"),
      details: "+90 (555) 123 4567",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t("emailContact"),
      details: "muberra@kandemir.com.tr",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-lg text-foreground/80">{t("contactSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-display mb-8 pb-4 border-b border-border/50">
                  {t("contactInfo")}
                </h3>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex gap-5 group"
                    >
                      <div className="shrink-0 mt-1 p-3 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-primary/20">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-foreground/70">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <h4 className="font-medium text-lg mb-4">{t("findUs")}</h4>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md border border-border/50">
                    {/* Map placeholder - would be replaced with actual Google Maps integration */}
                    <div className="h-full w-full relative bg-primary/5 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-background/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                          <p className="text-primary font-medium flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Rota Rehabilitation Center, Ankara
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7"
          >
            <Card className="bg-background/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display mb-3">
                      {language === "en"
                        ? "Thank you for your message!"
                        : "Mesajınız için teşekkürler!"}
                    </h3>
                    <p className="text-foreground/70 max-w-md mx-auto">
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
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-display mb-4">
                        {language === "en" ? "Send a Message" : "Mesaj Gönder"}
                      </h3>
                      <p className="text-foreground/70 mb-6">
                        {language === "en"
                          ? "Fill out the form below and Müberra will get back to you soon."
                          : "Aşağıdaki formu doldurun, Müberra en kısa sürede size geri dönecektir."}
                      </p>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 transition-colors group-focus-within:text-primary"
                      >
                        {t("nameLabel")} <span className="text-red-500">*</span>
                      </label>
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
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 transition-colors group-focus-within:text-primary"
                        >
                          {t("emailLabel")}{" "}
                          <span className="text-red-500">*</span>
                        </label>
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
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="group">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 transition-colors group-focus-within:text-primary"
                        >
                          {t("phoneLabel")}
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+90 (5XX) XXX XXXX"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 transition-colors group-focus-within:text-primary"
                      >
                        {t("messageLabel")}{" "}
                        <span className="text-red-500">*</span>
                      </label>
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
                        className="resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full mt-4 py-6 text-base group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5"
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
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          {t("submitButton")}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
