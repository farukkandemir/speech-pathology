"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  Baby,
  School,
  User,
  Users,
  Brain,
  VolumeX,
  Speech,
  Languages,
  FileText,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Quiz steps:
// 1. Age group selection
// 2. Challenge selection
// 3. Results and recommendations

type AgeGroup = "child" | "teen" | "adult" | "multiple";
type Challenge =
  | "articulation"
  | "fluency"
  | "language"
  | "multilingual"
  | "evaluation";

type Recommendation = {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  ctaLink: string;
};

export function InteractiveQuiz() {
  const { language, t } = useLanguage();
  const [step, setStep] = useState(0);
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Age group options
  const ageGroups = [
    {
      id: "child",
      label: language === "en" ? "Child (0-12)" : "Çocuk (0-12)",
      icon: <Baby className="h-5 w-5" />,
    },
    {
      id: "teen",
      label: language === "en" ? "Teen (13-18)" : "Genç (13-18)",
      icon: <School className="h-5 w-5" />,
    },
    {
      id: "adult",
      label: language === "en" ? "Adult (18+)" : "Yetişkin (18+)",
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "multiple",
      label: language === "en" ? "Multiple Ages" : "Farklı Yaşlar",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  // Challenge options
  const challenges = [
    {
      id: "articulation",
      label:
        language === "en"
          ? "Articulation & Pronunciation"
          : "Artikülasyon ve Telaffuz",
      icon: <Speech className="h-5 w-5" />,
    },
    {
      id: "fluency",
      label:
        language === "en" ? "Fluency & Stuttering" : "Akıcılık ve Kekemelik",
      icon: <VolumeX className="h-5 w-5" />,
    },
    {
      id: "language",
      label: language === "en" ? "Language Development" : "Dil Gelişimi",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: "multilingual",
      label: language === "en" ? "Multilingual Support" : "Çok Dilli Destek",
      icon: <Languages className="h-5 w-5" />,
    },
    {
      id: "evaluation",
      label: language === "en" ? "General Evaluation" : "Genel Değerlendirme",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  // Get recommendation based on user selections
  const getRecommendation = (): Recommendation => {
    // Default recommendation - now we'll just customize the title and description
    // but keep the CTA consistent for all paths
    let title =
      language === "en"
        ? "Personalized Therapy Plan"
        : "Kişiselleştirilmiş Terapi Planı";
    let description =
      language === "en"
        ? "Based on your needs, a customized therapy plan would be most effective. Let's schedule a consultation to discuss your specific goals."
        : "İhtiyaçlarınıza göre, özelleştirilmiş bir terapi planı en etkili olacaktır. Belirli hedeflerinizi görüşmek için bir danışma randevusu planlayalım.";
    let icon = <Sparkles className="h-6 w-6 text-primary" />;

    // Child age group recommendations
    if (ageGroup === "child") {
      if (challenge === "articulation") {
        title =
          language === "en"
            ? "Child Articulation Therapy"
            : "Çocuk Artikülasyon Terapisi";
        description =
          language === "en"
            ? "Our child-focused articulation program helps develop clear speech patterns through playful exercises. Let's discuss how we can help your child."
            : "Çocuk odaklı artikülasyon programımız, eğlenceli alıştırmalar yoluyla net konuşma kalıpları geliştirmeye yardımcı olur. Çocuğunuza nasıl yardımcı olabileceğimizi konuşalım.";
        icon = <Speech className="h-6 w-6 text-primary" />;
      }
      if (challenge === "language") {
        title =
          language === "en"
            ? "Child Language Development"
            : "Çocuk Dil Gelişimi";
        description =
          language === "en"
            ? "Our structured language program enhances vocabulary and communication skills for children. Book a consultation to learn about our approach."
            : "Yapılandırılmış dil programımız, çocuklar için kelime dağarcığını ve iletişim becerilerini geliştirir. Yaklaşımımız hakkında bilgi edinmek için bir danışma randevusu alın.";
        icon = <Brain className="h-6 w-6 text-primary" />;
      }
    }

    // Teen recommendations
    if (ageGroup === "teen") {
      if (challenge === "fluency") {
        title =
          language === "en" ? "Teen Fluency Therapy" : "Genç Akıcılık Terapisi";
        description =
          language === "en"
            ? "Our specialized fluency program helps teens overcome stuttering and develop confidence. Schedule a consultation to discuss your teen's needs."
            : "Özel akıcılık programımız, gençlerin kekemeliği aşmasına ve özgüven geliştirmesine yardımcı olur. Gencin ihtiyaçlarını görüşmek için bir danışma randevusu planlayın.";
        icon = <VolumeX className="h-6 w-6 text-primary" />;
      }
    }

    // Adult recommendations
    if (ageGroup === "adult") {
      if (challenge === "multilingual") {
        title =
          language === "en"
            ? "Bilingual Speech Therapy"
            : "İki Dilli Konuşma Terapisi";
        description =
          language === "en"
            ? "Our bilingual approach supports adults developing communication skills in multiple languages. Let's discuss your specific language goals."
            : "İki dilli yaklaşımımız, yetişkinlerin birden fazla dilde iletişim becerilerini geliştirmelerini destekler. Belirli dil hedeflerinizi görüşelim.";
        icon = <Languages className="h-6 w-6 text-primary" />;
      }
    }

    return {
      title,
      description,
      icon,
      cta:
        language === "en"
          ? "Book a Free Consultation"
          : "Ücretsiz Danışma Randevusu Alın",
      ctaLink: "#contact",
    };
  };

  const handleNextStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleBackStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleStart = () => {
    setStep(1);
  };

  const handleAgeSelect = (age: AgeGroup) => {
    setAgeGroup(age);
    handleNextStep();
  };

  const handleChallengeSelect = (selected: Challenge) => {
    setChallenge(selected);
    handleNextStep();
  };

  const handleReset = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(0);
      setAgeGroup(null);
      setChallenge(null);
      setIsAnimating(false);
    }, 300);
  };

  const recommendation = getRecommendation();

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-display mb-4 text-primary">
              {language === "en"
                ? "Find the Right Therapy for You"
                : "Size Uygun Terapiyi Bulun"}
            </h3>
            <p className="text-foreground/70 mb-6">
              {language === "en"
                ? "Answer a few quick questions to get personalized recommendations."
                : "Kişiselleştirilmiş öneriler almak için birkaç hızlı soruyu yanıtlayın."}
            </p>
            <Button
              onClick={handleStart}
              className="bg-primary hover:bg-primary/90 transition-all duration-300"
              size="lg"
            >
              {language === "en" ? "Start Quiz" : "Quize Başla"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="age-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "transition-opacity duration-300",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <h3 className="text-xl font-display mb-2 text-primary text-center">
              {language === "en"
                ? "Who needs speech therapy?"
                : "Kimin konuşma terapisine ihtiyacı var?"}
            </h3>
            <p className="text-foreground/70 mb-6 text-center text-sm">
              {language === "en"
                ? "Select the age group that best describes your needs"
                : "İhtiyaçlarınızı en iyi tanımlayan yaş grubunu seçin"}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {ageGroups.map((age) => (
                <button
                  key={age.id}
                  onClick={() => handleAgeSelect(age.id as AgeGroup)}
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-primary/10 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    {age.icon}
                  </div>
                  <span className="text-sm font-medium">{age.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="challenge-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "transition-opacity duration-300",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleBackStep}
                className="text-sm text-primary hover:underline flex items-center"
              >
                <ArrowLeft className="mr-1 h-3 w-3" />
                {language === "en" ? "Back" : "Geri"}
              </button>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              </div>
            </div>

            <h3 className="text-xl font-display mb-2 text-primary text-center">
              {language === "en"
                ? "What challenges are you facing?"
                : "Hangi zorluklarla karşılaşıyorsunuz?"}
            </h3>
            <p className="text-foreground/70 mb-6 text-center text-sm">
              {language === "en"
                ? "Select the area where you'd like support"
                : "Destek almak istediğiniz alanı seçin"}
            </p>

            <div className="grid grid-cols-1 gap-3">
              {challenges.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleChallengeSelect(item.id as Challenge)}
                  className="flex items-center p-3 rounded-lg border border-primary/10 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-left">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "transition-opacity duration-300",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleBackStep}
                className="text-sm text-primary hover:underline flex items-center"
              >
                <ArrowLeft className="mr-1 h-3 w-3" />
                {language === "en" ? "Back" : "Geri"}
              </button>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </div>

            <div className="bg-background/70 backdrop-blur-md rounded-xl p-5 border border-primary/10 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {recommendation.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display mb-1 text-primary">
                    {recommendation.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {recommendation.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href={recommendation.ctaLink}>
                <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 group">
                  <Calendar className="mr-2 h-4 w-4" />
                  {recommendation.cta}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1" />
                </Button>
              </a>

              <button
                onClick={handleReset}
                className="text-sm text-center text-foreground/60 hover:text-foreground transition-colors py-2"
              >
                {language === "en" ? "Start Over" : "Yeniden Başla"}
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center text-xs text-foreground/50">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {language === "en"
                ? "Your first consultation is complimentary"
                : "İlk danışmanız ücretsizdir"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
