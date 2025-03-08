"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Brain,
  GraduationCap,
  Heart,
  Languages,
  Lightbulb,
  PenTool,
  Sparkles,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  FileText,
  BadgeCheck,
  Flame,
  Smile,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Core values
  const coreValues = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: t("aboutValueCompassion"),
      description: t("aboutValueCompassionDesc"),
      color: "from-rose-500/20 to-rose-600/20",
      textColor: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-100 dark:bg-rose-900/30",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: t("aboutValueInnovation"),
      description: t("aboutValueInnovationDesc"),
      color: "from-amber-500/20 to-amber-600/20",
      textColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: t("aboutValueCollaboration"),
      description: t("aboutValueCollaborationDesc"),
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
  ];

  // Tabs for different about sections
  const aboutTabs = [
    {
      id: "story",
      label: t("aboutTabStory"),
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "education",
      label: t("aboutTabEducation"),
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      id: "approach",
      label: t("aboutTabApproach"),
      icon: <Brain className="h-4 w-4" />,
    },
  ];

  // Education and certifications
  const education = [
    {
      degree: t("aboutMasters"),
      institution: t("aboutIstanbulUniversity"),
      year: "2015",
      icon: <GraduationCap className="h-5 w-5" />,
      specialization: t("aboutMastersSpecialization"),
    },
    {
      degree: t("aboutBachelors"),
      institution: t("aboutHacettepeUniversity"),
      year: "2013",
      icon: <BookOpen className="h-5 w-5" />,
      specialization: t("aboutBachelorsSpecialization"),
    },
    {
      degree: t("aboutCertificate"),
      institution: t("aboutTurkishAssociation"),
      year: "2016",
      icon: <FileText className="h-5 w-5" />,
      specialization: t("aboutCertificateSpecialization"),
    },
  ];

  // Key features of approach
  const approachFeatures = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: t("aboutIndividualizedApproach"),
      description: t("aboutIndividualizedDesc"),
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t("aboutCaringEnvironment"),
      description: t("aboutCaringDesc"),
      color: "from-rose-500/20 to-rose-600/20",
      textColor: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-100 dark:bg-rose-900/30",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: t("aboutPlayfulTechniques"),
      description: t("aboutPlayfulDesc"),
      color: "from-amber-500/20 to-amber-600/20",
      textColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
    },
  ];

  // Key achievements
  const achievements = [
    {
      icon: <Users className="h-5 w-5" />,
      value: "500+",
      label: t("aboutClientsHelped"),
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: "10+",
      label: t("aboutYearsExperience"),
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      value: "15+",
      label: t("aboutCertifications"),
      color: "from-emerald-500/20 to-emerald-600/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      icon: <Flame className="h-5 w-5" />,
      value: "95%",
      label: t("aboutSuccessRate"),
      color: "from-amber-500/20 to-amber-600/20",
      textColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
    },
  ];

  // Recent focus areas for education tab
  const focusAreas = [
    t("aboutPediatricDevelopment"),
    t("aboutTechTherapy"),
    t("aboutMultilingualTherapy"),
    t("aboutEvidenceInterventions"),
  ];

  // Evidence-based practice points
  const evidenceBasedPoints = [
    t("aboutResearchBacked"),
    t("aboutMeasurableProgress"),
    t("aboutContinuousAssessment"),
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-5"></div>
      <div className="absolute bottom-24 right-[5%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl -z-5"></div>

      <div className="container mx-auto px-4">
        {/* Section header - small intro above the columns */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("about")}
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-foreground/70">{t("aboutSubtitle")}</p>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Personal info and achievements */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              {/* Personal banner with info */}
              <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-2xl border border-border/50 shadow-lg p-6 md:p-8 mb-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"></div>

                <div className="relative">
                  <h1 className="text-3xl md:text-4xl font-display text-foreground mb-3">
                    <span className="text-primary">Müberra Kandemir</span>
                  </h1>
                  <h2 className="text-xl text-foreground/80 mb-4">
                    {t("aboutSpeechPathologist")}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {t("aboutDescription")}
                  </p>

                  {/* Qualification badges in a row */}
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-2.5 flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium">
                        {t("aboutCertifiedExpert")}
                      </span>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-2.5 flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-blue-500/10 text-blue-500">
                        <Languages className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium">
                        {t("aboutBilingualSupport")}
                      </span>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-2.5 flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-purple-500/10 text-purple-500">
                        <Smile className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium">
                        {t("aboutChildFriendly")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement stats */}
              <div className="mb-8">
                <h3 className="text-xl font-display mb-4 text-foreground/80">
                  {t("aboutAchievements")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-4 rounded-xl bg-gradient-to-br border border-white/10 transition-all duration-300 hover:shadow-md text-center group",
                        achievement.color
                      )}
                    >
                      <div
                        className={cn(
                          "mx-auto p-2 rounded-full w-fit mb-2 transition-transform duration-300 group-hover:scale-110",
                          achievement.iconBg,
                          achievement.textColor
                        )}
                      >
                        {achievement.icon}
                      </div>
                      <h3
                        className={cn(
                          "text-2xl font-display",
                          achievement.textColor
                        )}
                      >
                        {achievement.value}
                      </h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        {achievement.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core values */}
              <div>
                <h3 className="text-xl font-display mb-4 text-foreground/80">
                  {t("aboutCoreValues")}
                </h3>
                <div className="space-y-4">
                  {coreValues.map((value, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-4 rounded-xl bg-gradient-to-br border border-white/10 transition-all duration-300 hover:shadow-md",
                        value.color
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-xl shrink-0",
                            value.iconBg,
                            value.textColor
                          )}
                        >
                          {value.icon}
                        </div>
                        <div>
                          <h4
                            className={cn(
                              "text-base font-medium mb-1",
                              value.textColor
                            )}
                          >
                            {value.title}
                          </h4>
                          <p className="text-sm text-foreground/80">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Tabbed content */}
          <div className="lg:col-span-7">
            {/* Tabs for different about sections */}
            <div
              className={cn(
                "flex flex-wrap gap-2 mb-8 transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              {aboutTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === index
                      ? "bg-primary text-white"
                      : "bg-background/60 backdrop-blur-sm border border-border/50 text-foreground/70 hover:bg-background hover:text-foreground"
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div
              className={cn(
                "bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 transition-all duration-500 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              {/* My Story Tab */}
              {activeTab === 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display mb-4 text-primary">
                    {t("aboutJourney")}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {t("aboutJourneyPart1")}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {t("aboutJourneyPart2")}
                  </p>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display mb-4 text-primary">
                    {t("aboutAcademicBackground")}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {t("aboutAcademicDesc")}
                  </p>

                  {/* Enhanced education timeline */}
                  <div className="relative pl-10 space-y-6 before:absolute before:left-4 before:top-5 before:bottom-7 before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-secondary/30 before:to-primary/50 before:rounded-full">
                    {education.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "relative transition-all duration-500",
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        )}
                        style={{ transitionDelay: `${300 + index * 100}ms` }}
                      >
                        {/* Timeline node with pulsing effect */}
                        <div className="absolute -left-10 top-1 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center z-10">
                            <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                          </div>
                        </div>

                        {/* Education card */}
                        <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:shadow-md transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                            <h4 className="text-lg font-medium text-foreground flex items-center gap-2">
                              <span
                                className={cn(
                                  "p-1.5 rounded-lg",
                                  index === 0
                                    ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                                    : index === 1
                                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                    : "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                                )}
                              >
                                {item.icon}
                              </span>
                              {item.degree}
                            </h4>
                            <span className="text-sm px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                              {item.year}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-foreground/70">
                            <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                            <p className="text-sm">{item.institution}</p>
                          </div>

                          {/* Additional info based on degree type */}
                          <div className="mt-3 text-sm text-foreground/70 bg-muted/30 rounded-lg p-2">
                            <p>{item.specialization}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Continuous Learning section */}
                  <div className="mt-8 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-0.5">
                      <div className="bg-background p-6 rounded-b-lg">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-600 dark:text-amber-400 shrink-0">
                            <Zap className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-2">
                              {t("aboutContinuousLearning")}
                            </h4>
                            <p className="text-foreground/70 mb-4">
                              {t("aboutContinuousLearningDesc")}
                            </p>

                            {/* Recent professional development */}
                            <div className="space-y-2">
                              <h5 className="text-sm font-medium text-primary">
                                {t("aboutRecentFocusAreas")}
                              </h5>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {focusAreas.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-xs bg-muted/40 py-1.5 px-3 rounded-full"
                                  >
                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary/70" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Approach Tab */}
              {activeTab === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display mb-4 text-primary">
                    {t("aboutTherapeuticPhilosophy")}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {t("aboutApproachText")}
                  </p>

                  <div className="grid grid-cols-1 gap-5">
                    {approachFeatures.map((feature, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div
                          className={cn(
                            "p-2.5 rounded-xl shrink-0",
                            feature.iconBg,
                            feature.textColor
                          )}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3
                            className={cn(
                              "text-lg font-medium mb-1",
                              feature.textColor
                            )}
                          >
                            {feature.title}
                          </h3>
                          <p className="text-foreground/70">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10">
                    <h4 className="text-lg font-medium mb-3 text-primary">
                      {t("aboutEvidenceBased")}
                    </h4>
                    <ul className="space-y-3">
                      {evidenceBasedPoints.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Call to action */}
            <div
              className={cn(
                "mt-8 transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl border border-border/50 p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-lg font-display mb-1">
                    {t("aboutReadyToBegin")}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {t("aboutReadyCta")}
                  </p>
                </div>
                <Button className="group whitespace-nowrap">
                  {t("aboutScheduleConsultation")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
