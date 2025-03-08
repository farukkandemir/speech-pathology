"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  // Sample testimonials data with both English and Turkish versions
  const testimonials = [
    {
      name: language === "en" ? "Ayşe M." : "Ayşe M.",
      role:
        language === "en"
          ? "Parent of child client"
          : "Danışan çocuğun ebeveyni",
      image: "/placeholder-avatar.png",
      content:
        language === "en"
          ? "Ms. Kandemir was amazing with my 5-year-old son. She used playful techniques that kept him engaged, and he's made incredible progress with his articulation."
          : "Müberra Hanım 5 yaşındaki oğlumla harika bir uyum yakaladı. Onu meşgul tutan oyunlu teknikler kullandı ve artikülasyonunda inanılmaz bir ilerleme kaydetti.",
    },
    {
      name: language === "en" ? "Mehmet K." : "Mehmet K.",
      role: language === "en" ? "Adult client" : "Yetişkin danışan",
      image: "/placeholder-avatar.png",
      content:
        language === "en"
          ? "As someone who struggled with stuttering for years, I can't recommend Müberra enough. Her personalized therapy plan really addressed my specific challenges."
          : "Yıllarca kekemelikle mücadele eden biri olarak, Müberra Hanım'ı yeterince tavsiye edemem. Kişiselleştirilmiş terapi planı gerçekten özel zorluklarımı ele aldı.",
    },
    {
      name: language === "en" ? "Zeynep B." : "Zeynep B.",
      role:
        language === "en" ? "Parent of teen client" : "Genç danışanın ebeveyni",
      image: "/placeholder-avatar.png",
      content:
        language === "en"
          ? "My teenager had difficulty with social communication, and Müberra's therapy has been transformative. She's helped build confidence and develop skills that will help throughout life."
          : "Ergen çocuğumun sosyal iletişimde zorlukları vardı ve Müberra'nın terapisi dönüştürücü oldu. Özgüven kazanmasına ve yaşam boyunca yardımcı olacak beceriler geliştirmesine yardımcı oldu.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-lg text-foreground/80">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/60 border-border/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 relative">
                {/* Quote mark decoration */}
                <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">
                  "
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-accent stroke-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 top-40 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}
