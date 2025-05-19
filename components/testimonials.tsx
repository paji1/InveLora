"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguageStore } from "@/lib/language-store"

export function Testimonials() {
  const { t } = useLanguageStore()

  const testimonials = [
    {
      quote: t("Testimonials.quotes.sarah"),
      author: "Sarah Johnson",
      role: t("Testimonials.roles.former"),
      company: "TechGadgets",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("Testimonials.quotes.michael"),
      author: "Michael Chen",
      role: t("Testimonials.roles.entrepreneur"),
      company: "HealthFit",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("Testimonials.quotes.david"),
      author: "David Rodriguez",
      role: t("Testimonials.roles.ceo"),
      company: "GrowthPartners",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3 mt-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="h-full border-border/60 hover:shadow-card-hover transition-all duration-200">
          <CardContent className="pt-6 relative">
            <div className="absolute top-6 right-6 text-finance-100 opacity-20">
              <Quote className="h-12 w-12" />
            </div>
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <blockquote className="text-lg italic text-pretty relative z-10">"{testimonial.quote}"</blockquote>
          </CardContent>
          <CardFooter className="border-t pt-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
