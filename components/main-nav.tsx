"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/use-auth"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguageStore } from "@/lib/language-store"

export function MainNav() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const { t } = useLanguageStore()

  return (
    <>
      <div className="flex items-center mr-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">{t("Navigation.brand")}</span>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/buy-business"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/buy-business" ? "text-primary" : "text-muted-foreground",
          )}
        >
          {t("Navigation.buyBusiness")}
        </Link>
        <Link
          href="/sell-business"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/sell-business" ? "text-primary" : "text-muted-foreground",
          )}
        >
          {t("Navigation.sellBusiness")}
        </Link>
        <Link
          href="/advisors"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/advisors" ? "text-primary" : "text-muted-foreground",
          )}
        >
          {t("Navigation.advisors")}
        </Link>
        <Link
          href="/resources"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/resources" ? "text-primary" : "text-muted-foreground",
          )}
        >
          {t("Navigation.resources")}
        </Link>
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <ModeToggle />
        <LanguageSwitcher />
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">{t("Navigation.dashboard")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">{t("Navigation.profile")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/my-listings">{t("Navigation.myListings")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/messages">{t("Navigation.messages")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>{t("Navigation.signOut")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/auth/signin">
              <Button variant="ghost">{t("Navigation.signIn")}</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>{t("Navigation.signUp")}</Button>
            </Link>
          </div>
        )}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t("Navigation.toggleMenu")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              <Link href="/buy-business" className="flex items-center py-2 text-lg font-semibold">
                {t("Navigation.buyBusiness")}
              </Link>
              <Link href="/sell-business" className="flex items-center py-2 text-lg font-semibold">
                {t("Navigation.sellBusiness")}
              </Link>
              <Link href="/advisors" className="flex items-center py-2 text-lg font-semibold">
                {t("Navigation.advisors")}
              </Link>
              <Link href="/resources" className="flex items-center py-2 text-lg font-semibold">
                {t("Navigation.resources")}
              </Link>
              {!user && (
                <>
                  <Link href="/auth/signin">
                    <Button variant="ghost" className="w-full justify-start">
                      {t("Navigation.signIn")}
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="w-full">{t("Navigation.signUp")}</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
