"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguageStore } from "@/lib/language-store"
import { useEffect } from "react"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguageStore()

  // Apply RTL styling when language changes
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t("LanguageSwitcher.switchLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setLocale("en")} className={locale === "en" ? "font-bold bg-accent" : ""}>
          <span className="w-6 inline-block">🇺🇸</span>
          <span className="ml-2">{t("LanguageSwitcher.english")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("fr")} className={locale === "fr" ? "font-bold bg-accent" : ""}>
          <span className="w-6 inline-block">🇫🇷</span>
          <span className="ml-2">{t("LanguageSwitcher.french")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("ar")} className={locale === "ar" ? "font-bold bg-accent" : ""}>
          <span className="w-6 inline-block">🇦🇪</span>
          <span className="ml-2">{t("LanguageSwitcher.arabic")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
