"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Calendar,
  MapPin,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
// Import custom styles
import styles from "./testimonials-section.module.css";

export function TestimonialsSection() {
  const { t, language } = useLanguage();
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

    const section = document.getElementById("testimonials");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Real testimonials data with both English and Turkish versions
  const testimonials =
    language === "en"
      ? [
          {
            name: "Parent of a child client",
            date: "December 6, 2024",
            location: "Rota Rehabilitation Center",
            service: "Speech Therapy",
            content:
              "My son couldn't pronounce the 'r' and 's' sounds, so we received therapy from Ms. Müberra. Now he has no problems. She's an expert in her field, but what's more important to me is that my son enjoyed the therapy sessions. He participated in the therapy process willingly and with motivation, as if he was coming to play games, without feeling inadequate. She's very knowledgeable and understands pedagogy.",
          },
          {
            name: "Parent of a girl client",
            date: "July 9, 2024",
            location: "Rota Rehabilitation Center",
            service: "Speech Therapy",
            content:
              "We received speech therapy for my daughter and were very satisfied. Our teacher was very attentive, knowledgeable, tolerant, and friendly. We started seeing results after just 2 sessions. Our treatment ended after 9 sessions, and my daughter can now pronounce the 'R' sounds. We recommend her to our relatives who need help.",
          },
          {
            name: "Adult client with stuttering",
            date: "May 9, 2024",
            location: "Rota Rehabilitation Center",
            service: "Speech Therapy",
            content:
              "I met Ms. Müberra 3 months ago through Doctor Calendar. I had stuttering issues. We completed 10 online sessions. Her approach and knowledge are excellent. Throughout the sessions, she patiently explained what stuttering is, how to cope with it, techniques for more fluent speech, and what place stuttering will have in my life. I definitely recommend her.",
          },
          {
            name: "Parent of a 5-year-old girl",
            date: "March 28, 2024",
            location: "Rota Rehabilitation Center",
            service: "Speech Therapy",
            content:
              "We met Ms. Müberra about 6 months ago. I had no hope and thought what could happen in a 1-hour lesson per week, but we achieved great results during this time. My daughter was missing 10 letters (c, ç, g, ğ, s, ş, j, l, r, z) and we've completed 9 of them now, with only the 'r' letter remaining. I'm very happy. My daughter is 5 years old and will go to 1st grade next year. I can now send her with peace of mind. Thank you for your efforts.",
          },
          {
            name: "Parent",
            date: "March 19, 2024",
            location: "Rota Rehabilitation Center",
            service: "Speech Therapy",
            content:
              "I'm so glad our paths crossed. With her punctuality, discipline, knowledge, and experience, she made even difficult letters easy to understand. My daughter can now speak clearly and intelligibly.",
          },
          {
            name: "Parent of a boy starting elementary school",
            date: "January 10, 2024",
            location: "Rota Rehabilitation Center",
            service: "Speech Therapy",
            content:
              'Merhaba, Oğlum ilkokula yeni başladı "R" sesini çıkaramıyordu. Buradaki olumlu yorumlar doğrultusunda Müberra hanım ile görüşüp sesanslara başladık. 2 seansta oğlum "R" sesini çıkardı. Bilgi ve yaklaşımı çok iyi.',
          },
        ]
      : [
          {
            name: "Çocuk danışanın ebeveyni",
            date: "6 Aralık 2024",
            location: "Rota Rehabilitasyon Merkezi",
            service: "Dil ve Konuşma Terapisi",
            content:
              "Oğlum r ve s sesini çıkaramıyordu, Müberra Hanımdan terapi aldık. Şimdi hiçbir sorun yaşamıyor, işinde uzman bir isim ama benim için daha önemlisi oğlumun terapilerden keyif alması, kendini yetersiz hissetmeden adeta oyun oynamaya gelir gibi istekli ve motive bir şekilde terapi sürecine dahil olması. Hem oldukça bilgili hem de pedagojiden anlıyor.",
          },
          {
            name: "Kız çocuğu danışanın ebeveyni",
            date: "9 Temmuz 2024",
            location: "Rota Rehabilitasyon Merkezi",
            service: "Dil ve Konuşma Terapisi",
            content:
              "Kızım için dil ve konuşma terapisi aldık çok memnun kaldık çok ilgili bilgili hoşgörülü güler yüzlü hocamız 2 seansta sonuç almaya başladık 9 seansta tedavimiz bitti ve kızım artık R seslerini söyleyebiliyor ihtiyaç duyan yakınlarımızada tavsiye ediyoruz",
          },
          {
            name: "Kekemelik sorunu olan yetişkin danışan",
            date: "9 Mayıs 2024",
            location: "Rota Rehabilitasyon Merkezi",
            service: "Dil ve Konuşma Terapisi",
            content:
              "Müberra hocamla 3 ay önce Doktor takvimi vasıtasıyla tanıştık kekemeliğim vardı 10 seans online gerçekleştirdik yaklaşımı bilgisi çok iyi. Seans süresi boyunca bana kekemeliğin ne olduğunu buna karşı nasıl başa çıkmam gerektiğini teknikleri daha akıcı nasıl olabilir mi kekemeliğim hyaatimda nasil bir yerde olacağını açıklayarak sabırlı bir şekilde anlatarak seansları gerçekleştirdik kesinlikle tavsiye ediyorum.",
          },
          {
            name: "5 yaşındaki kız çocuğunun ebeveyni",
            date: "28 Mart 2024",
            location: "Rota Rehabilitasyon Merkezi",
            service: "Dil Terapisi",
            content:
              "Müberra hocamızla tanismamiz 6 ay gibi Bi süre içerisinde oldu umutlarım yoktu hafta da 1 saatlik derste ne olabilirki diyordum ama bu süre içerisinde çok güzel sonuçlar elde ettik 10 tane harfimiz eksikti ( c,ç,g,ğ,s,ş, j,l,r,z )ve 9 tanesini şuan tamamladık sadece r harfi kaldi çok mutluyum iyiki siz hocam kızım 5 yaşında ve seneye 1. Sınıfa gidecek gönül rahatlığıyla gönderebilirim artık emeğinize sağlık çok başarılısın uyumunuz ve çabalarınız 10 numara kızım şimdiden üzülüyor ayrilacagimiz için başarılarınızın devamını dilerim.",
          },
          {
            name: "Danışan ebeveyni",
            date: "19 Mart 2024",
            location: "Rota Rehabilitasyon Merkezi",
            service: "Dil ve Konuşma Terapisi",
            content:
              "İyiki kesişmiş yollarımız. Zamanında derse gelmesi, disiplini, bilgi ve birikimi ile zor olan harfleri bile kolaycaanlatışıyla kızım artık net anlaşılır konuşabiliyor.",
          },
          {
            name: "İlkokula yeni başlayan erkek çocuğun ebeveyni",
            date: "10 Ocak 2024",
            location: "Rota Rehabilitasyon Merkezi",
            service: "Dil ve Konuşma Terapisi",
            content:
              'Merhaba, Oğlum ilkokula yeni başladı "R" sesini çıkaramıyordu. Buradaki olumlu yorumlar doğrultusunda Müberra hanım ile görüşüp sesanslara başladık. 2 seansta oğlum "R" sesini çıkardı. Bilgi ve yaklaşımı çok iyi.',
          },
        ];

  // Success metrics
  const successMetrics = [
    {
      value: "500+",
      label: language === "en" ? "Satisfied Clients" : "Memnun Danışan",
    },
    {
      value: "95%",
      label: language === "en" ? "Success Rate" : "Başarı Oranı",
    },
    {
      value: "10+",
      label: language === "en" ? "Years Experience" : "Yıllık Deneyim",
    },
  ];

  // Categories for testimonial filtering (not implemented yet, but prepared for future)
  const categories = [
    language === "en" ? "All Testimonials" : "Tüm Referanslar",
    language === "en" ? "Children" : "Çocuklar",
    language === "en" ? "Adults" : "Yetişkinler",
    language === "en" ? "Speech Therapy" : "Konuşma Terapisi",
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 -z-10"></div>
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
            {language === "en" ? "Client Stories" : "Danışan Hikayeleri"}
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-lg text-foreground/80">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        {/* Success metrics */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl font-display text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-foreground/70">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Category tabs (visual only for now) */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "150ms" }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                index === 0
                  ? "bg-primary text-white"
                  : "bg-background/60 backdrop-blur-sm border border-border/50 text-foreground/70 hover:bg-background hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured testimonial - modernized with Swiper */}
        <div
          className={cn(
            "mb-12 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCards, Autoplay]}
            effect="cards"
            grabCursor={true}
            navigation={{
              prevEl: ".testimonial-prev-button",
              nextEl: ".testimonial-next-button",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            cardsEffect={{
              slideShadows: false,
              rotate: false,
              perSlideOffset: 8,
              perSlideRotate: 0,
            }}
            loop={true}
            className={styles["testimonial-swiper"]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-background shadow-lg transition-all duration-300 overflow-hidden group hover:shadow-xl border-border">
                  <div className="p-10 md:p-12 relative bg-background/95 backdrop-blur-xl">
                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-75"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl opacity-75"></div>

                    {/* Decorative top bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50"></div>

                    {/* Quote mark decoration */}
                    <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
                      <Quote className="h-8 w-8 text-primary/20" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                      <div className="lg:col-span-8">
                        {/* Rating with label */}
                        <div className="flex items-center gap-2 mb-6 ml-16">
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="h-5 w-5 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-foreground/60 font-medium">
                            5.0 Excellent
                          </span>
                        </div>

                        {/* Testimonial content */}
                        <p className="text-foreground/80 text-lg mb-8 relative z-10 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>

                        {/* Client info */}
                        <div className="flex items-center mt-6">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-primary font-medium text-lg shadow-sm border border-white/10">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-base">
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-1">
                              <p className="text-sm text-foreground/60">
                                {testimonial.service}
                              </p>
                              <span className="inline-block h-1 w-1 rounded-full bg-foreground/30"></span>
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                <span className="text-xs text-foreground/60">
                                  {language === "en"
                                    ? "Verified Client"
                                    : "Doğrulanmış Danışan"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info box */}
                      <div className="lg:col-span-4 bg-muted/30 rounded-xl p-6 flex flex-col gap-4 h-fit border border-border/20 backdrop-blur-sm">
                        <h4 className="text-sm font-medium text-foreground/80 mb-2">
                          {language === "en"
                            ? "Session Details"
                            : "Seans Detayları"}
                        </h4>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-foreground/50">
                              {language === "en" ? "Date" : "Tarih"}
                            </p>
                            <p className="text-sm text-foreground/80">
                              {testimonial.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-foreground/50">
                              {language === "en" ? "Location" : "Konum"}
                            </p>
                            <p className="text-sm text-foreground/80">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}

            {/* Custom navigation buttons - fixed to avoid duplicates */}
            <div className="absolute top-1/2 -left-6 md:-left-8 -translate-y-1/2 z-20 testimonial-prev-button">
              <button className="w-12 h-12 rounded-full bg-background shadow-md border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 transition-all hover:shadow-lg group">
                <span className="relative flex items-center justify-center w-full h-full">
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-primary transition-opacity"></span>
                  <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
            <div className="absolute top-1/2 -right-6 md:-right-8 -translate-y-1/2 z-20 testimonial-next-button">
              <button className="w-12 h-12 rounded-full bg-background shadow-md border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 transition-all hover:shadow-lg group">
                <span className="relative flex items-center justify-center w-full h-full">
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-primary transition-opacity"></span>
                  <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </Swiper>
        </div>

        {/* Grid of other testimonials */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          {testimonials
            .filter((_, i) => i !== 0)
            .slice(0, 3)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background shadow-lg transition-all duration-300 h-full group overflow-hidden border-border"
              >
                <div className="p-8 relative h-full flex flex-col bg-background/95 backdrop-blur-xl">
                  {/* Decorative top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/5 rounded-full blur-xl"></div>

                  {/* Quote mark decoration - improved */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <Quote className="h-5 w-5 text-primary/40" />
                  </div>

                  {/* Rating with label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-foreground/60 font-medium">
                      Excellent
                    </span>
                  </div>

                  {/* Testimonial content with improved typography */}
                  <p className="text-foreground/80 mb-6 relative z-10 line-clamp-4 text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Enhanced footer with better visual separation */}
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/30">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-primary font-medium text-sm shadow-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-sm">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Calendar className="h-3 w-3 text-primary/60" />
                          <p className="text-xs text-foreground/60">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-foreground/60">
                        {language === "en" ? "Verified" : "Doğrulanmış"}
                      </span>
                    </div>
                  </div>

                  {/* Read more button - subtle but accessible */}
                  <div className="absolute bottom-2 right-2">
                    <button
                      className="text-xs text-primary/70 hover:text-primary transition-colors flex items-center gap-0.5 opacity-0 group-hover:opacity-100"
                      aria-label={
                        language === "en"
                          ? "Read full testimonial"
                          : "Tam referansı oku"
                      }
                    >
                      {language === "en" ? "Read more" : "Devamını oku"}
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Call to action */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-display mb-4">
              {language === "en"
                ? "Share Your Experience"
                : "Deneyiminizi Paylaşın"}
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              {language === "en"
                ? "These are real testimonials from clients who received speech therapy services. Would you like to share your own experience?"
                : "Bunlar, konuşma terapisi hizmeti alan gerçek danışanların yorumlarıdır. Kendi deneyiminizi paylaşmak ister misiniz?"}
            </p>
            <Button className="group">
              <MessageCircle className="mr-2 h-5 w-5" />
              {language === "en" ? "Submit a Testimonial" : "Referans Gönderin"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
