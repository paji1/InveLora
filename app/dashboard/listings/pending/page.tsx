"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/footer"
import { AlertCircle, CheckCircle, Clock, Edit, Eye, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function PendingListingsPage() {
  return (

      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Pending Listings</h1>
                <p className="text-muted-foreground">
                  Track the status of your business listings that are under review.
                </p>
              </div>
              <Link href="/sell-business">
                <Button>
                  <FileText className="mr-2 h-4 w-4" /> Create New Listing
                </Button>
              </Link>
            </div>
            <Separator className="my-6" />

            <Card className="mb-6 border-border/60 shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Premium E-commerce Store</CardTitle>
                  <div className="flex items-center gap-1 rounded-full bg-warning-50 px-2 py-1 text-xs font-medium text-warning-700 dark:bg-warning-900/30 dark:text-warning-400">
                    <Clock className="h-3 w-3" />
                    <span>Under Review</span>
                  </div>
                </div>
                <CardDescription>Submitted on May 15, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Review Progress</span>
                      <span className="font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-50 text-success-600 dark:bg-success-900/30 dark:text-success-400">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Initial Verification</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-50 text-success-600 dark:bg-success-900/30 dark:text-success-400">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Content Review</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning-50 text-warning-600 dark:bg-warning-900/30 dark:text-warning-400">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Financial Verification</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Final Approval</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    <span>Estimated completion: 1-2 business days</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" /> Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-border/60 shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Local Restaurant Chain</CardTitle>
                  <div className="flex items-center gap-1 rounded-full bg-warning-50 px-2 py-1 text-xs font-medium text-warning-700 dark:bg-warning-900/30 dark:text-warning-400">
                    <Clock className="h-3 w-3" />
                    <span>Under Review</span>
                  </div>
                </div>
                <CardDescription>Submitted on May 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Review Progress</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-50 text-success-600 dark:bg-success-900/30 dark:text-success-400">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Initial Verification</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning-50 text-warning-600 dark:bg-warning-900/30 dark:text-warning-400">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Content Review</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Financial Verification</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Final Approval</p>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AlertCircle className="mr-1 h-4 w-4" />
                    <span>Additional information requested</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" /> Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

  )
}
