"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "./button";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="w-10 px-0 font-medium"
      >
        EN
      </Button>
      <div className="h-4 w-px bg-border" />
      <Button
        variant={language === "tr" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("tr")}
        className="w-10 px-0 font-medium"
      >
        TR
      </Button>
    </div>
  );
}
