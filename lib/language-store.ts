import { create } from "zustand"
import { persist } from "zustand/middleware"
import enMessages from "@/messages/en.json"
import frMessages from "@/messages/fr.json"
import arMessages from "@/messages/ar.json"

export type Locale = "en" | "fr" | "ar"

type LanguageState = {
  locale: Locale
  messages: Record<string, any>
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      locale: "en",
      messages: enMessages,
      setLocale: (locale: Locale) => {
        let messages
        switch (locale) {
          case "en":
            messages = enMessages
            break
          case "fr":
            messages = frMessages
            break
          case "ar":
            messages = arMessages
            break
          default:
            messages = enMessages
        }
        set({ locale, messages })

        // Update HTML lang and dir attributes
        document.documentElement.lang = locale
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
      },
      t: (key: string) => {
        const { messages } = get()
        const keys = key.split(".")
        let value = messages

        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k]
          } else {
            return key // Return the key if translation not found
          }
        }

        return typeof value === "string" ? value : key
      },
    }),
    {
      name: "language-storage",
    },
  ),
)
