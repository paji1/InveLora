"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Search, ShieldCheck, Users } from "lucide-react"
import { useLanguageStore } from "@/lib/language-store"

export function HowItWorks() {
  const { t } = useLanguageStore()

  const steps = [
    {
      title: t("HowItWorks.steps.find.title"),
      description: t("HowItWorks.steps.find.description"),
      icon: Search,
      color: "bg-finance-50 dark:bg-finance-900/30",
      iconColor: "text-finance-600 dark:text-finance-400",
    },
    {
      title: t("HowItWorks.steps.connect.title"),
      description: t("HowItWorks.steps.connect.description"),
      icon: Users,
      color: "bg-success-50 dark:bg-success-900/30",
      iconColor: "text-success-600 dark:text-success-400",
    },
    {
      title: t("HowItWorks.steps.secure.title"),
      description: t("HowItWorks.steps.secure.description"),
      icon: ShieldCheck,
      color: "bg-finance-50 dark:bg-finance-900/30",
      iconColor: "text-finance-600 dark:text-finance-400",
    },
    {
      title: t("HowItWorks.steps.list.title"),
      description: t("HowItWorks.steps.list.description"),
      icon: Building,
      color: "bg-success-50 dark:bg-success-900/30",
      iconColor: "text-success-600 dark:text-success-400",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {steps.map((step, index) => (
        <Card key={index} className="border-border/60 hover:shadow-card-hover transition-all duration-200">
          <CardHeader className="pb-2">
            <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mb-4`}>
              <step.icon className={`h-7 w-7 ${step.iconColor}`} />
            </div>
            <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-pretty">{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
