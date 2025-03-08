"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
  Brain,
  HeartHandshake,
  Star,
  Volume2,
  VolumeX,
  ThumbsUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function JourneySection() {
  const { t, language } = useLanguage();
  const [activeScene, setActiveScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);
    // Trigger animations after component mounts
    setIsVisible(true);

    const handleScroll = () => {
      if (!containerRef.current) return;

      // Get container dimensions
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled into the section as a percentage
      let progress = 0;

      if (top <= 0) {
        // We've scrolled past the top of the section
        progress = Math.min(Math.abs(top) / (height - windowHeight), 1);
      }

      setScrollProgress(progress);

      // Determine which scene to show based on scroll progress
      if (progress < 0.33) {
        setActiveScene(0);
      } else if (progress < 0.66) {
        setActiveScene(1);
      } else {
        setActiveScene(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to initialize
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scene content data
  const scenes = [
    {
      title: language === "en" ? "The Challenge" : "Zorluk",
      subtitle:
        language === "en"
          ? "When words don't come easily"
          : "Kelimeler kolayca gelmediğinde",
      description:
        language === "en"
          ? "For many children, expressing themselves through speech can be a frustrating challenge that affects their confidence and social connections."
          : "Birçok çocuk için, konuşma yoluyla kendilerini ifade etmek, özgüvenlerini ve sosyal bağlantılarını etkileyen zorlu bir süreç olabilir.",
      icon: <VolumeX className="h-8 w-8 text-red-500" />,
      color: "from-red-200 to-red-100",
      accent: "border-red-300",
      emoji: "😔",
    },
    {
      title: language === "en" ? "The Journey" : "Yolculuk",
      subtitle:
        language === "en"
          ? "Guided speech therapy with care"
          : "Özenle rehberlik edilen konuşma terapisi",
      description:
        language === "en"
          ? "Through personalized therapy and evidence-based techniques, we create a supportive environment where communication skills can develop and grow."
          : "Kişiselleştirilmiş terapi ve kanıta dayalı tekniklerle, iletişim becerilerinin gelişebileceği ve büyüyebileceği destekleyici bir ortam yaratıyoruz.",
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      color: "from-purple-200 to-purple-100",
      accent: "border-purple-300",
      emoji: "🤔",
    },
    {
      title: language === "en" ? "The Transformation" : "Dönüşüm",
      subtitle:
        language === "en"
          ? "Finding their voice with confidence"
          : "Seslerini güvenle buluyorlar",
      description:
        language === "en"
          ? "Witnessing a child speak clearly and confidently is our greatest reward. This transformation opens doors to new possibilities and brighter futures."
          : "Bir çocuğun net ve kendinden emin bir şekilde konuştuğunu görmek en büyük ödülümüzdür. Bu dönüşüm, yeni olasılıklara ve daha parlak geleceklere kapı açar.",
      icon: <Volume2 className="h-8 w-8 text-green-500" />,
      color: "from-green-200 to-green-100",
      accent: "border-green-300",
      emoji: "😃",
    },
  ];

  // Animated features that appear in the final scene
  const features = [
    {
      icon: <Brain className="h-4 w-4 text-primary" />,
      text: t("featureEvidenceBased"),
    },
    {
      icon: <HeartHandshake className="h-4 w-4 text-primary" />,
      text: t("featurePersonalized"),
    },
    {
      icon: <Star className="h-4 w-4 text-primary" />,
      text: t("journeyProvenResults"),
    },
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative min-h-[300vh] pb-24"
    >
      {/* Section title at the top */}
      <div className="pt-16 pb-8 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display mb-3">
            {t("journeyTitle")}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("journeySubtitle")}
          </p>
        </div>
      </div>

      {/* Content with sticky timeline container */}
      <div className="relative">
        {/* Sticky Timeline Container - Only visible within this div */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10"></div>

          {/* Timeline indicator - Now properly contained */}
          <div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 z-10">
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-gray-200 to-transparent h-full"></div>
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-primary to-transparent h-[33%]"
              style={{ transform: `translateY(${scrollProgress * 200}%)` }}
            ></div>

            {/* Timeline nodes */}
            <div
              className={cn(
                "absolute top-[16.5%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-500",
                activeScene >= 0
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-primary rounded-full animate-ping opacity-0 transition-opacity duration-500",
                  activeScene === 0 && "opacity-70"
                )}
              ></div>
            </div>
            <div
              className={cn(
                "absolute top-[50%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-500",
                activeScene >= 1
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-primary rounded-full animate-ping opacity-0 transition-opacity duration-500",
                  activeScene === 1 && "opacity-70"
                )}
              ></div>
            </div>
            <div
              className={cn(
                "absolute top-[83.5%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-500",
                activeScene >= 2
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-primary rounded-full animate-ping opacity-0 transition-opacity duration-500",
                  activeScene === 2 && "opacity-70"
                )}
              ></div>
            </div>
          </div>
        </div>

        {/* Scrolling content container */}
        <div className="relative mt-[-100vh]">
          {" "}
          {/* Offset to account for the sticky container */}
          {/* Three scene sections */}
          {[0, 1, 2].map((sceneIndex) => (
            <div
              key={sceneIndex}
              className="h-screen sticky top-0 overflow-hidden flex items-center justify-center"
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left column - Scene illustration */}
                  <div
                    className={cn(
                      "relative z-10 order-2 lg:order-1 transition-all duration-1000 transform",
                      activeScene === sceneIndex
                        ? "opacity-100 translate-y-0"
                        : activeScene > sceneIndex
                        ? "opacity-0 -translate-y-24"
                        : "opacity-0 translate-y-24"
                    )}
                    style={{ transitionDelay: "200ms" }}
                  >
                    {/* Scene illustration container */}
                    <div
                      className={cn(
                        "relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl p-8 bg-gradient-to-br",
                        scenes[sceneIndex].color
                      )}
                    >
                      {/* Create a scene illustration - we'll use placeholders for now */}
                      <div
                        className={cn(
                          "absolute inset-0 border-4 rounded-3xl transition-opacity duration-500",
                          scenes[sceneIndex].accent,
                          activeScene === sceneIndex
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      ></div>

                      {/* Stylized scene content */}
                      <div className="relative h-full flex flex-col items-center justify-center text-center">
                        {/* Large emoji for visual interest */}
                        <div className="text-9xl mb-4">
                          {scenes[sceneIndex].emoji}
                        </div>

                        {/* Icon in circle */}
                        <div className="p-4 bg-white/80 rounded-full shadow-lg mb-6">
                          {scenes[sceneIndex].icon}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {scenes[sceneIndex].subtitle}
                        </h3>

                        {/* Speech bubbles for scene 2 */}
                        {sceneIndex === 1 && (
                          <div className="absolute top-8 right-8 bg-white p-3 rounded-xl rounded-tr-none shadow-md transform rotate-3 animate-float-slow">
                            <p className="text-sm">Say "Tree"</p>
                          </div>
                        )}

                        {/* Child's progress for scene 2 */}
                        {sceneIndex === 1 && (
                          <div
                            className="absolute bottom-8 left-8 bg-white p-3 rounded-xl rounded-bl-none shadow-md transform -rotate-3 animate-float-slow"
                            style={{ animationDelay: "1s" }}
                          >
                            <p className="text-sm">T...Tuh...Tree!</p>
                          </div>
                        )}

                        {/* Success celebration for scene 3 */}
                        {sceneIndex === 2 && (
                          <div className="absolute top-1/4 right-1/4 animate-float-particle">
                            <Sparkles className="text-yellow-500 h-8 w-8" />
                          </div>
                        )}

                        {sceneIndex === 2 && (
                          <div
                            className="absolute top-1/3 left-1/4 animate-float-particle"
                            style={{ animationDelay: "0.5s" }}
                          >
                            <Star className="text-yellow-500 h-6 w-6 fill-yellow-500" />
                          </div>
                        )}

                        {sceneIndex === 2 && (
                          <div
                            className="absolute bottom-1/3 right-1/3 animate-float-particle"
                            style={{ animationDelay: "1s" }}
                          >
                            <ThumbsUp className="text-green-500 h-7 w-7" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right column - Scene description */}
                  <div
                    className={cn(
                      "relative z-10 order-1 lg:order-2 transition-all duration-1000 transform",
                      activeScene === sceneIndex
                        ? "opacity-100 translate-y-0"
                        : activeScene > sceneIndex
                        ? "opacity-0 translate-y-24"
                        : "opacity-0 -translate-y-24"
                    )}
                    style={{ transitionDelay: "400ms" }}
                  >
                    {/* Scene number badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
                      <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-primary"></span>
                      {t("journeyStage")} {sceneIndex + 1}
                    </div>

                    {/* Scene title */}
                    <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
                      <span className="text-foreground">
                        {scenes[sceneIndex].title}
                      </span>
                    </h2>

                    {/* Scene description */}
                    <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                      {scenes[sceneIndex].description}
                    </p>

                    {/* CTA button (only on last scene) */}
                    {sceneIndex === 2 && (
                      <div className="flex flex-wrap gap-4 mb-10">
                        <Button
                          size="lg"
                          className="group relative overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2 text-base">
                            <Calendar className="h-5 w-5" />
                            {t("heroButton")}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="absolute inset-0 bg-primary group-hover:bg-primary/90 transition-colors duration-300"></span>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="group text-base border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          {t("contact")}
                        </Button>
                      </div>
                    )}

                    {/* Feature cards (only on final scene) */}
                    {sceneIndex === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className={cn(
                              "relative group p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:shadow-md",
                              "opacity-0 translate-y-8",
                              activeScene === 2 && "animate-fade-in-up"
                            )}
                            style={{ animationDelay: `${index * 200 + 600}ms` }}
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                              </div>
                              <p className="font-medium text-sm">
                                {feature.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Trust indicators (only in final scene) */}
                    {sceneIndex === 2 && (
                      <div
                        className={cn(
                          "flex items-center gap-6 opacity-0 translate-y-8",
                          activeScene === 2 && "animate-fade-in-up"
                        )}
                        style={{ animationDelay: "1000ms" }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div
                                key={i}
                                className="h-8 w-8 rounded-full bg-gradient-to-br from-background to-muted ring-2 ring-background overflow-hidden"
                              >
                                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                  <span className="text-primary text-xs font-medium">
                                    {String.fromCharCode(64 + i)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-foreground/70">
                            <span className="font-medium">500+</span>{" "}
                            {t("heroSatisfiedClients")}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="relative z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-background"
        >
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
