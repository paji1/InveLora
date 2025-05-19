"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useLanguageStore } from "@/lib/language-store"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const { t, locale } = useLanguageStore()
  const isRtl = locale === "ar"

  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 border-t bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-finance-600 flex items-center justify-center">
                  <span className="font-bold text-white">BX</span>
                </div>
                <span className="font-display font-bold text-xl">{t("Footer.brand")}</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md">{t("Footer.tagline")}</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" aria-label="Facebook" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Twitter" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Instagram" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="LinkedIn" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-base font-semibold">{t("Footer.forBuyers.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/buy-business"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forBuyers.browse")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/buying-guide"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forBuyers.guide")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/due-diligence"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forBuyers.dueDiligence")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/financing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forBuyers.financing")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold">{t("Footer.forSellers.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/sell-business"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forSellers.list")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/valuation"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forSellers.valuation")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/selling-guide"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forSellers.guide")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/exit-planning"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.forSellers.exitPlanning")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold">{t("Footer.company.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t("Footer.company.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.company.contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("Footer.company.careers")}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t("Footer.company.blog")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold">{t("Footer.newsletter.title")}</h3>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder={t("Footer.newsletter.placeholder")} className="bg-background" />
              <Button type="submit">{t("Footer.newsletter.button")}</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:items-end lg:justify-end">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t("Footer.brand")}. {t("Footer.rights")}
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">
                {t("Footer.legal.terms")}
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                {t("Footer.legal.privacy")}
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                {t("Footer.legal.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
