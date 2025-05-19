"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Building, ChevronRight, Globe, Search, Users, BarChart3, LineChart } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguageStore } from "@/lib/language-store"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { FeaturedListings } from "@/components/featured-listings"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { cn } from "@/lib/utils"

export default function Home() {
  const { t, locale } = useLanguageStore()

  // Apply RTL styling when component mounts
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  return (
    

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-balance font-display">{t("Home.hero.title")}</h1>
                  <p className="text-xl text-muted-foreground max-w-[600px] text-pretty">
                    {t("Home.hero.description")}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link href="/sell-business">
                    <Button size="lg" className="w-full">
                      {t("Home.hero.sellButton")}
                    </Button>
                  </Link>
                  <Link href="/buy-business">
                    <Button size="lg" variant="outline" className="w-full">
                      {t("Home.hero.findButton")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Tabs defaultValue="buy" className="w-full max-w-md">
                  <TabsList className="grid w-full grid-cols-2 mb-2">
                    <TabsTrigger value="buy">{t("Home.tabs.buy")}</TabsTrigger>
                    <TabsTrigger value="sell">{t("Home.tabs.sell")}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="buy" className="p-6 border rounded-lg mt-2 bg-card shadow-card">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("Home.search.industry")}</label>
                          <select className="w-full p-2 border rounded-md bg-background">
                            <option>{t("Home.search.allIndustries")}</option>
                            <option>{t("Home.search.industries.technology")}</option>
                            <option>{t("Home.search.industries.retail")}</option>
                            <option>{t("Home.search.industries.manufacturing")}</option>
                            <option>{t("Home.search.industries.services")}</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("Home.search.location")}</label>
                          <select className="w-full p-2 border rounded-md bg-background">
                            <option>{t("Home.search.worldwide")}</option>
                            <option>{t("Home.search.locations.northAmerica")}</option>
                            <option>{t("Home.search.locations.europe")}</option>
                            <option>{t("Home.search.locations.asia")}</option>
                            <option>{t("Home.search.locations.africa")}</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("Home.search.priceRange")}</label>
                          <select className="w-full p-2 border rounded-md bg-background">
                            <option>{t("Home.search.anyPrice")}</option>
                            <option>{t("Home.search.priceRanges.under100k")}</option>
                            <option>{t("Home.search.priceRanges.100kTo500k")}</option>
                            <option>{t("Home.search.priceRanges.500kTo1m")}</option>
                            <option>{t("Home.search.priceRanges.1mTo5m")}</option>
                            <option>{t("Home.search.priceRanges.5mPlus")}</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("Home.search.businessType")}</label>
                          <select className="w-full p-2 border rounded-md bg-background">
                            <option>{t("Home.search.allTypes")}</option>
                            <option>{t("Home.search.businessTypes.assetSale")}</option>
                            <option>{t("Home.search.businessTypes.stockSale")}</option>
                            <option>{t("Home.search.businessTypes.franchise")}</option>
                          </select>
                        </div>
                      </div>
                      <Button className="w-full">
                        <Search className="mr-2 h-4 w-4" /> {t("Home.search.searchButton")}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="sell" className="p-6 border rounded-lg mt-2 bg-card shadow-card">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{t("Home.sell.description")}</p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mr-3">
                            <Users className="h-5 w-5 text-finance-600 dark:text-finance-400" />
                          </div>
                          <span>{t("Home.sell.benefits.buyers")}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mr-3">
                            <BarChart3 className="h-5 w-5 text-finance-600 dark:text-finance-400" />
                          </div>
                          <span>{t("Home.sell.benefits.valuation")}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mr-3">
                            <Globe className="h-5 w-5 text-finance-600 dark:text-finance-400" />
                          </div>
                          <span>{t("Home.sell.benefits.exposure")}</span>
                        </div>
                      </div>
                      <Link href="/sell-business">
                        <Button className="w-full">
                          {t("Home.sell.listButton")} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-full bg-finance-50 dark:bg-finance-900/30 px-3 py-1 text-sm font-medium text-finance-600 dark:text-finance-400">
                  {t("Home.featured.badge")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  {t("Home.featured.title")}
                </h2>
                <p className="text-muted-foreground md:text-xl text-pretty">{t("Home.featured.description")}</p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/buy-business">
                <Button variant="outline" size="lg" className="group">
                  {t("Home.featured.viewAllButton")}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  {t("Home.howItWorks.title")}
                </h2>
                <p className="text-muted-foreground md:text-xl text-pretty">{t("Home.howItWorks.description")}</p>
              </div>
            </div>
            <HowItWorks />
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-finance-50 dark:bg-finance-900/30 px-3 py-1 text-sm font-medium text-finance-600 dark:text-finance-400">
                    {t("Home.whyChooseUs.badge")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-balance">
                    {t("Home.whyChooseUs.title")}
                  </h2>
                  <p className="text-muted-foreground md:text-xl text-pretty">{t("Home.whyChooseUs.description")}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-border/60 hover:shadow-card-hover transition-all duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center">
                        <Users className="h-6 w-6 text-finance-600 dark:text-finance-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tabular-nums">10,000+</h3>
                        <p className="text-sm text-muted-foreground">{t("Home.whyChooseUs.stats.buyers")}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border/60 hover:shadow-card-hover transition-all duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center">
                        <Building className="h-6 w-6 text-finance-600 dark:text-finance-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tabular-nums">5,000+</h3>
                        <p className="text-sm text-muted-foreground">{t("Home.whyChooseUs.stats.businesses")}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border/60 hover:shadow-card-hover transition-all duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-finance-600 dark:text-finance-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tabular-nums">50+</h3>
                        <p className="text-sm text-muted-foreground">{t("Home.whyChooseUs.stats.countries")}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border/60 hover:shadow-card-hover transition-all duration-200">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center">
                        <LineChart className="h-6 w-6 text-finance-600 dark:text-finance-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tabular-nums">$2B+</h3>
                        <p className="text-sm text-muted-foreground">{t("Home.whyChooseUs.stats.transactions")}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div
                  className={cn(
                    "relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg",
                    "before:absolute before:inset-0 before:bg-finance-600/10 before:z-10",
                  )}
                >
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt={t("Home.whyChooseUs.imageAlt")}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                  {t("Home.testimonials.title")}
                </h2>
                <p className="text-muted-foreground md:text-xl text-pretty">{t("Home.testimonials.description")}</p>
              </div>
            </div>
            <Testimonials />
          </div>
        </section>
      </main>
  )
}
