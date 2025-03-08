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
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Age group options
  const ageGroups = [
    {
      id: "child",
      label: t("quizChild"),
      icon: <Baby className="h-5 w-5" />,
    },
    {
      id: "teen",
      label: t("quizTeen"),
      icon: <School className="h-5 w-5" />,
    },
    {
      id: "adult",
      label: t("quizAdult"),
      icon: <User className="h-5 w-5" />,
    },
    {
      id: "multiple",
      label: t("quizMultiple"),
      icon: <Users className="h-5 w-5" />,
    },
  ];

  // Challenge options
  const challenges = [
    {
      id: "articulation",
      label: t("quizArticulation"),
      icon: <Speech className="h-5 w-5" />,
    },
    {
      id: "fluency",
      label: t("quizFluency"),
      icon: <VolumeX className="h-5 w-5" />,
    },
    {
      id: "language",
      label: t("quizLanguage"),
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: "multilingual",
      label: t("quizMultilingual"),
      icon: <Languages className="h-5 w-5" />,
    },
    {
      id: "evaluation",
      label: t("quizEvaluation"),
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  // Get recommendation based on user selections
  const getRecommendation = (): Recommendation => {
    // Default recommendation - now we'll just customize the title and description
    // but keep the CTA consistent for all paths
    let title = t("quizPersonalizedPlan");
    let description = t("quizPersonalizedDescription");
    let icon = <Sparkles className="h-6 w-6 text-primary" />;

    // Child age group recommendations
    if (ageGroup === "child") {
      if (challenge === "articulation") {
        title = t("quizChildArticulation");
        description = t("quizChildArticulationDescription");
        icon = <Speech className="h-6 w-6 text-primary" />;
      }
      if (challenge === "language") {
        title = t("quizChildLanguage");
        description = t("quizChildLanguageDescription");
        icon = <Brain className="h-6 w-6 text-primary" />;
      }
    }

    // Teen recommendations
    if (ageGroup === "teen") {
      if (challenge === "fluency") {
        title = t("quizTeenFluency");
        description = t("quizTeenFluencyDescription");
        icon = <VolumeX className="h-6 w-6 text-primary" />;
      }
    }

    // Adult recommendations
    if (ageGroup === "adult") {
      if (challenge === "multilingual") {
        title = t("quizBilingual");
        description = t("quizBilingualDescription");
        icon = <Languages className="h-6 w-6 text-primary" />;
      }
    }

    return {
      title,
      description,
      icon,
      cta: t("quizRecommendationCTA"),
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
              {t("quizTitle")}
            </h3>
            <p className="text-foreground/70 mb-6">{t("quizDescription")}</p>
            <Button
              onClick={handleStart}
              className="bg-primary hover:bg-primary/90 transition-all duration-300"
              size="lg"
            >
              {t("quizStartButton")}
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
              {t("quizAgeSelectionTitle")}
            </h3>
            <p className="text-foreground/70 mb-6 text-center text-sm">
              {t("quizAgeSelectionDescription")}
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
                {t("quizBackButton")}
              </button>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              </div>
            </div>

            <h3 className="text-xl font-display mb-2 text-primary text-center">
              {t("quizChallengeSelectionTitle")}
            </h3>
            <p className="text-foreground/70 mb-6 text-center text-sm">
              {t("quizChallengeSelectionDescription")}
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
                {t("quizBackButton")}
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

              <div>
                <button
                  onClick={handleReset}
                  className="text-sm text-center text-foreground/60 hover:text-foreground transition-colors py-2"
                >
                  {t("quizResetButton")}
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center text-xs text-foreground/50">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {t("quizFirstConsultation")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
