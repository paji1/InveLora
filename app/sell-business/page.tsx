"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguageStore } from "@/lib/language-store"
import { CheckCircle, Info } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export default function SellBusinessPage() {
  const { t, locale } = useLanguageStore()
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isRtl = locale === "ar"

  // Create a dynamic schema based on the current language
  const formSchema = z.object({
    businessName: z.string().min(2, {
      message: t("SellBusiness.validation.businessNameRequired"),
    }),
    businessType: z.string({
      required_error: t("SellBusiness.validation.businessTypeRequired"),
    }),
    industry: z.string({
      required_error: t("SellBusiness.validation.industryRequired"),
    }),
    location: z.string({
      required_error: t("SellBusiness.validation.locationRequired"),
    }),
    description: z.string().min(50, {
      message: t("SellBusiness.validation.descriptionLength"),
    }),
    askingPrice: z.string().min(1, {
      message: t("SellBusiness.validation.askingPriceRequired"),
    }),
    annualRevenue: z.string().min(1, {
      message: t("SellBusiness.validation.revenueRequired"),
    }),
    annualProfit: z.string().min(1, {
      message: t("SellBusiness.validation.profitRequired"),
    }),
    established: z.string().min(1, {
      message: t("SellBusiness.validation.establishedRequired"),
    }),
    employees: z.string().min(1, {
      message: t("SellBusiness.validation.employeesRequired"),
    }),
    reasonForSelling: z.string().min(10, {
      message: t("SellBusiness.validation.reasonLength"),
    }),
    // Morocco-specific fields
    iceNumber: z.string().min(1, {
      message: t("SellBusiness.validation.iceRequired"),
    }),
    rcNumber: z.string().min(1, {
      message: t("SellBusiness.validation.rcRequired"),
    }),
    taxIdentificationNumber: z.string().min(1, {
      message: t("SellBusiness.validation.taxIdRequired"),
    }),
    hasFinancialStatements: z.boolean(),
    hasTaxCompliance: z.boolean(),
    ownershipStructure: z.string({
      required_error: t("SellBusiness.validation.ownershipRequired"),
    }),
    termsAgreed: z.boolean().refine((val) => val === true, {
      message: t("SellBusiness.validation.termsRequired"),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      description: "",
      askingPrice: "",
      annualRevenue: "",
      annualProfit: "",
      established: "",
      employees: "",
      reasonForSelling: "",
      iceNumber: "",
      rcNumber: "",
      taxIdentificationNumber: "",
      hasFinancialStatements: false,
      hasTaxCompliance: false,
      termsAgreed: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    console.log(values)

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const nextStep = () => {
    if (step === 1) {
      const basicInfoFields = ["businessName", "businessType", "industry", "location", "description"]
      const isValid = basicInfoFields.every((field) => {
        const result = form.trigger(field as any)
        return result
      })

      if (isValid) {
        setStep(2)
      }
    } else if (step === 2) {
      const financialFields = [
        "askingPrice",
        "annualRevenue",
        "annualProfit",
        "established",
        "employees",
        "reasonForSelling",
      ]
      const isValid = financialFields.every((field) => {
        const result = form.trigger(field as any)
        return result
      })

      if (isValid) {
        setStep(3)
      }
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  if (submitted) {
    return (
        <main className="flex-1">
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("SellBusiness.success.title")}
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">{t("SellBusiness.success.message")}</p>
                <div
                  className={cn("flex flex-col gap-2 min-[400px]:flex-row", isRtl && "min-[400px]:flex-row-reverse")}
                >
                  <Button onClick={() => (window.location.href = "/")}>{t("SellBusiness.success.returnHome")}</Button>
                  <Button variant="outline" onClick={() => (window.location.href = "/dashboard")}>
                    {t("SellBusiness.success.dashboard")}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
    )
  }

  return (

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("SellBusiness.hero.title")}
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                {t("SellBusiness.hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className={cn("grid gap-8 md:grid-cols-3", isRtl && "md:grid-flow-row-reverse")}>
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("SellBusiness.form.title")}</CardTitle>
                    <CardDescription>{t("SellBusiness.form.description")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-8">
                      <div className={cn("flex items-center justify-between mb-2", isRtl && "flex-row-reverse")}>
                        <div className={cn("flex items-center space-x-2", isRtl && "flex-row-reverse space-x-reverse")}>
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            1
                          </div>
                          <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>
                            {t("SellBusiness.steps.basic")}
                          </span>
                        </div>
                        <Separator className="hidden sm:block w-12" />
                        <div className={cn("flex items-center space-x-2", isRtl && "flex-row-reverse space-x-reverse")}>
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            2
                          </div>
                          <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>
                            {t("SellBusiness.steps.financial")}
                          </span>
                        </div>
                        <Separator className="hidden sm:block w-12" />
                        <div className={cn("flex items-center space-x-2", isRtl && "flex-row-reverse space-x-reverse")}>
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            3
                          </div>
                          <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>
                            {t("SellBusiness.steps.legal")}
                          </span>
                        </div>
                      </div>
                      <Separator className="mt-2 mb-6" />
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" dir={isRtl ? "rtl" : "ltr"}>
                        {step === 1 && (
                          <div className="space-y-6">
                            <FormField
                              control={form.control}
                              name="businessName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t("SellBusiness.form.businessName")}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t("SellBusiness.form.businessNamePlaceholder")} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid gap-6 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="businessType"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.businessType")}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder={t("SellBusiness.form.selectBusinessType")} />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="sarl">{t("SellBusiness.businessTypes.sarl")}</SelectItem>
                                        <SelectItem value="sa">{t("SellBusiness.businessTypes.sa")}</SelectItem>
                                        <SelectItem value="snc">{t("SellBusiness.businessTypes.snc")}</SelectItem>
                                        <SelectItem value="scs">{t("SellBusiness.businessTypes.scs")}</SelectItem>
                                        <SelectItem value="franchise">
                                          {t("SellBusiness.businessTypes.franchise")}
                                        </SelectItem>
                                        <SelectItem value="sole">{t("SellBusiness.businessTypes.sole")}</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="industry"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.industry")}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder={t("SellBusiness.form.selectIndustry")} />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="technology">
                                          {t("BuyBusiness.industries.technology")}
                                        </SelectItem>
                                        <SelectItem value="retail">{t("BuyBusiness.industries.retail")}</SelectItem>
                                        <SelectItem value="food">{t("BuyBusiness.industries.food")}</SelectItem>
                                        <SelectItem value="manufacturing">
                                          {t("BuyBusiness.industries.manufacturing")}
                                        </SelectItem>
                                        <SelectItem value="services">{t("BuyBusiness.industries.services")}</SelectItem>
                                        <SelectItem value="healthcare">
                                          {t("BuyBusiness.industries.healthcare")}
                                        </SelectItem>
                                        <SelectItem value="construction">
                                          {t("BuyBusiness.industries.construction")}
                                        </SelectItem>
                                        <SelectItem value="tourism">{t("BuyBusiness.industries.tourism")}</SelectItem>
                                        <SelectItem value="agriculture">
                                          {t("BuyBusiness.industries.agriculture")}
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="location"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t("SellBusiness.form.location")}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={t("SellBusiness.form.selectLocation")} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="casablanca">
                                        {t("BuyBusiness.locations.casablanca")}
                                      </SelectItem>
                                      <SelectItem value="rabat">{t("BuyBusiness.locations.rabat")}</SelectItem>
                                      <SelectItem value="marrakech">{t("BuyBusiness.locations.marrakech")}</SelectItem>
                                      <SelectItem value="tangier">{t("BuyBusiness.locations.tangier")}</SelectItem>
                                      <SelectItem value="agadir">{t("BuyBusiness.locations.agadir")}</SelectItem>
                                      <SelectItem value="fes">{t("BuyBusiness.locations.fes")}</SelectItem>
                                      <SelectItem value="meknes">{t("BuyBusiness.locations.meknes")}</SelectItem>
                                      <SelectItem value="oujda">{t("BuyBusiness.locations.oujda")}</SelectItem>
                                      <SelectItem value="other">{t("BuyBusiness.locations.other")}</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t("SellBusiness.form.description")}</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder={t("SellBusiness.form.descriptionPlaceholder")}
                                      className="min-h-32"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormDescription>{t("SellBusiness.form.descriptionHelp")}</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}

                        {step === 2 && (
                          <div className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="askingPrice"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.askingPrice")}</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder={t("SellBusiness.form.pricePlaceholder")}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="annualRevenue"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.annualRevenue")}</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder={t("SellBusiness.form.revenuePlaceholder")}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="annualProfit"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.annualProfit")}</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder={t("SellBusiness.form.profitPlaceholder")}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="established"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.established")}</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder={t("SellBusiness.form.establishedPlaceholder")}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="employees"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.employees")}</FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        placeholder={t("SellBusiness.form.employeesPlaceholder")}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="reasonForSelling"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t("SellBusiness.form.reasonForSelling")}</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder={t("SellBusiness.form.reasonPlaceholder")}
                                      className="min-h-24"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}

                        {step === 3 && (
                          <div className="space-y-6">
                            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
                              <div className={cn("flex items-start", isRtl && "flex-row-reverse text-right")}>
                                <Info className={cn("h-5 w-5 text-amber-600 mt-0.5", isRtl ? "ml-2" : "mr-2")} />
                                <div>
                                  <h3 className="font-medium text-amber-800">{t("SellBusiness.legal.title")}</h3>
                                  <p className="text-sm text-amber-700 mt-1">{t("SellBusiness.legal.description")}</p>
                                </div>
                              </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="iceNumber"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.iceNumber")}</FormLabel>
                                    <FormControl>
                                      <Input placeholder={t("SellBusiness.form.icePlaceholder")} {...field} />
                                    </FormControl>
                                    <FormDescription>{t("SellBusiness.form.iceDescription")}</FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="rcNumber"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t("SellBusiness.form.rcNumber")}</FormLabel>
                                    <FormControl>
                                      <Input placeholder={t("SellBusiness.form.rcPlaceholder")} {...field} />
                                    </FormControl>
                                    <FormDescription>{t("SellBusiness.form.rcDescription")}</FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="taxIdentificationNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t("SellBusiness.form.taxId")}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={t("SellBusiness.form.taxIdPlaceholder")} {...field} />
                                  </FormControl>
                                  <FormDescription>{t("SellBusiness.form.taxIdDescription")}</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="ownershipStructure"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t("SellBusiness.form.ownershipStructure")}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={t("SellBusiness.form.selectOwnership")} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="sole_owner">
                                        {t("SellBusiness.ownership.soleOwner")}
                                      </SelectItem>
                                      <SelectItem value="partnership">
                                        {t("SellBusiness.ownership.partnership")}
                                      </SelectItem>
                                      <SelectItem value="multiple_shareholders">
                                        {t("SellBusiness.ownership.multipleShareholders")}
                                      </SelectItem>
                                      <SelectItem value="family_owned">
                                        {t("SellBusiness.ownership.familyOwned")}
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="space-y-4">
                              <h3 className="font-medium">{t("SellBusiness.form.requiredDocuments")}</h3>
                              <p className="text-sm text-muted-foreground">
                                {t("SellBusiness.form.documentsDescription")}
                              </p>

                              <div className="space-y-3">
                                <FormField
                                  control={form.control}
                                  name="hasFinancialStatements"
                                  render={({ field }) => (
                                    <FormItem
                                      className={cn(
                                        "flex flex-row items-start space-x-3 space-y-0",
                                        isRtl && "flex-row-reverse space-x-reverse text-right",
                                      )}
                                    >
                                      <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                      </FormControl>
                                      <div className="space-y-1 leading-none">
                                        <FormLabel>{t("SellBusiness.form.hasFinancialStatements")}</FormLabel>
                                        <FormDescription>
                                          {t("SellBusiness.form.financialStatementsDescription")}
                                        </FormDescription>
                                      </div>
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="hasTaxCompliance"
                                  render={({ field }) => (
                                    <FormItem
                                      className={cn(
                                        "flex flex-row items-start space-x-3 space-y-0",
                                        isRtl && "flex-row-reverse space-x-reverse text-right",
                                      )}
                                    >
                                      <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                      </FormControl>
                                      <div className="space-y-1 leading-none">
                                        <FormLabel>{t("SellBusiness.form.hasTaxCompliance")}</FormLabel>
                                        <FormDescription>
                                          {t("SellBusiness.form.taxComplianceDescription")}
                                        </FormDescription>
                                      </div>
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>

                            <FormField
                              control={form.control}
                              name="termsAgreed"
                              render={({ field }) => (
                                <FormItem
                                  className={cn(
                                    "flex flex-row items-start space-x-3 space-y-0",
                                    isRtl && "flex-row-reverse space-x-reverse text-right",
                                  )}
                                >
                                  <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel>{t("SellBusiness.form.termsAgreed")}</FormLabel>
                                    <FormDescription>{t("SellBusiness.form.termsDescription")}</FormDescription>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                        )}

                        <div className={cn("flex justify-between pt-4", isRtl && "flex-row-reverse")}>
                          {step > 1 ? (
                            <Button type="button" variant="outline" onClick={prevStep}>
                              {t("SellBusiness.form.previous")}
                            </Button>
                          ) : (
                            <div></div>
                          )}

                          {step < 3 ? (
                            <Button type="button" onClick={nextStep}>
                              {t("SellBusiness.form.next")}
                            </Button>
                          ) : (
                            <Button type="submit" disabled={submitting}>
                              {submitting ? t("SellBusiness.form.submitting") : t("SellBusiness.form.submit")}
                            </Button>
                          )}
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="sticky top-24 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("SellBusiness.guide.title")}</CardTitle>
                      <CardDescription>{t("SellBusiness.guide.description")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full" dir={isRtl ? "rtl" : "ltr"}>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{t("SellBusiness.guide.requiredDocs")}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm">
                              <li>• {t("SellBusiness.guide.docs.registration")}</li>
                              <li>• {t("SellBusiness.guide.docs.taxId")}</li>
                              <li>• {t("SellBusiness.guide.docs.ice")}</li>
                              <li>• {t("SellBusiness.guide.docs.financial")}</li>
                              <li>• {t("SellBusiness.guide.docs.taxCompliance")}</li>
                              <li>• {t("SellBusiness.guide.docs.property")}</li>
                              <li>• {t("SellBusiness.guide.docs.employee")}</li>
                              <li>• {t("SellBusiness.guide.docs.inventory")}</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>{t("SellBusiness.guide.legalProcess")}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm mb-2">{t("SellBusiness.guide.legalProcessIntro")}</p>
                            <ol className="space-y-2 text-sm list-decimal pl-4">
                              <li>{t("SellBusiness.guide.legal.valuation")}</li>
                              <li>{t("SellBusiness.guide.legal.preparation")}</li>
                              <li>{t("SellBusiness.guide.legal.negotiation")}</li>
                              <li>{t("SellBusiness.guide.legal.dueDiligence")}</li>
                              <li>{t("SellBusiness.guide.legal.transfer")}</li>
                              <li>{t("SellBusiness.guide.legal.registration")}</li>
                              <li>{t("SellBusiness.guide.legal.taxClearance")}</li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>{t("SellBusiness.guide.taxImplications")}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm mb-2">{t("SellBusiness.guide.taxIntro")}</p>
                            <ul className="space-y-2 text-sm">
                              <li>• {t("SellBusiness.guide.tax.capitalGains")}</li>
                              <li>• {t("SellBusiness.guide.tax.vat")}</li>
                              <li>• {t("SellBusiness.guide.tax.registration")}</li>
                              <li>• {t("SellBusiness.guide.tax.stamp")}</li>
                              <li>• {t("SellBusiness.guide.tax.corporate")}</li>
                            </ul>
                            <p className="text-sm mt-2">{t("SellBusiness.guide.taxAdvice")}</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>{t("SellBusiness.guide.valuationTitle")}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm mb-2">{t("SellBusiness.guide.valuationIntro")}</p>
                            <ul className="space-y-2 text-sm">
                              <li>• {t("SellBusiness.guide.valuation.asset")}</li>
                              <li>• {t("SellBusiness.guide.valuation.income")}</li>
                              <li>• {t("SellBusiness.guide.valuation.market")}</li>
                              <li>• {t("SellBusiness.guide.valuation.dcf")}</li>
                              <li>• {t("SellBusiness.guide.valuation.industry")}</li>
                            </ul>
                            <p className="text-sm mt-2">{t("SellBusiness.guide.valuationHelp")}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{t("SellBusiness.whyUs.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className={cn(
                            "flex items-start space-x-3",
                            isRtl && "flex-row-reverse space-x-reverse text-right",
                          )}
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{t("SellBusiness.whyUs.network.title")}</h4>
                            <p className="text-sm text-muted-foreground">
                              {t("SellBusiness.whyUs.network.description")}
                            </p>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "flex items-start space-x-3",
                            isRtl && "flex-row-reverse space-x-reverse text-right",
                          )}
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{t("SellBusiness.whyUs.confidential.title")}</h4>
                            <p className="text-sm text-muted-foreground">
                              {t("SellBusiness.whyUs.confidential.description")}
                            </p>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "flex items-start space-x-3",
                            isRtl && "flex-row-reverse space-x-reverse text-right",
                          )}
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{t("SellBusiness.whyUs.guidance.title")}</h4>
                            <p className="text-sm text-muted-foreground">
                              {t("SellBusiness.whyUs.guidance.description")}
                            </p>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "flex items-start space-x-3",
                            isRtl && "flex-row-reverse space-x-reverse text-right",
                          )}
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{t("SellBusiness.whyUs.specialists.title")}</h4>
                            <p className="text-sm text-muted-foreground">
                              {t("SellBusiness.whyUs.specialists.description")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

  )
}
