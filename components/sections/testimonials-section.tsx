"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export function TestimonialsSection() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

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

        {/* Featured testimonial */}
        <div className="mb-16">
          <Card className="bg-card/60 border-border/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <CardContent className="p-8 md:p-10 relative">
              {/* Quote mark decoration */}
              <div className="absolute -top-4 -left-2 text-8xl text-primary/10 font-serif">
                "
              </div>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-accent stroke-accent"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 text-lg mb-6 relative z-10 leading-relaxed">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-foreground/60">
                        {testimonials[activeIndex].service}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 bg-muted/30 rounded-lg p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-foreground/70">
                      {testimonials[activeIndex].date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-foreground/70">
                      {testimonials[activeIndex].location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground/70">
                      {language === "en"
                        ? "Verified Client"
                        : "Doğrulanmış Danışan"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of other testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials
            .filter((_, i) => i !== activeIndex)
            .slice(0, 3)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/60 border-border/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardContent className="p-6 relative h-full flex flex-col">
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

                  <p className="text-foreground/80 mb-6 relative z-10 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-foreground/60">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 max-w-xl mx-auto">
            {language === "en"
              ? "These are real testimonials from clients who received speech therapy services from Müberra Kandemir at Rota Rehabilitation Center."
              : "Bunlar, Müberra Kandemir'den Rota Rehabilitasyon Merkezi'nde konuşma terapisi hizmeti alan gerçek danışanların yorumlarıdır."}
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 top-40 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}
