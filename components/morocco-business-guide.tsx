"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, FileText, Info } from "lucide-react"

export function MoroccoBusinessGuide() {
  return (
    <Card className="border-border/60 shadow-card">
      <CardHeader>
        <CardTitle>Business Guide: Morocco</CardTitle>
        <CardDescription>Essential information for buying and selling businesses in Morocco</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="legal">Legal Structure</TabsTrigger>
            <TabsTrigger value="tax">Tax Considerations</TabsTrigger>
            <TabsTrigger value="process">Transfer Process</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 pt-4">
            <div className="bg-muted p-4 rounded-md">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-finance-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Morocco Business Market</p>
                  <p className="text-muted-foreground">
                    Morocco has a diverse and growing economy with opportunities across various sectors. The country's
                    strategic location between Europe and Africa makes it an attractive market for business investments
                    and acquisitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Key Economic Indicators</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">GDP Growth Rate</span>
                    <span className="text-sm font-medium">3.5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Inflation Rate</span>
                    <span className="text-sm font-medium">1.8%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Unemployment Rate</span>
                    <span className="text-sm font-medium">11.5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Currency</span>
                    <span className="text-sm font-medium">Moroccan Dirham (MAD)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Top Business Sectors</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tourism & Hospitality</span>
                    <span className="text-sm font-medium">High Growth</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Manufacturing</span>
                    <span className="text-sm font-medium">Stable</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Agriculture</span>
                    <span className="text-sm font-medium">Moderate Growth</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Technology</span>
                    <span className="text-sm font-medium">High Growth</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable Energy</span>
                    <span className="text-sm font-medium">Emerging</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Business Environment</h3>
              <p className="text-sm text-muted-foreground">
                Morocco has implemented significant reforms to improve its business environment in recent years. The
                country ranks 53rd out of 190 economies in the World Bank's Ease of Doing Business index. Key advantages
                include strategic location, free trade agreements with the EU and US, and government incentives for
                foreign investment.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="legal" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Common Business Structures in Morocco</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h4 className="font-medium">SARL (Société à Responsabilité Limitée)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    The most common business structure in Morocco, similar to a Limited Liability Company (LLC).
                    Requires a minimum of 1 shareholder and minimum capital of 1 MAD.
                  </p>
                </div>

                <div className="p-4 border rounded-md">
                  <h4 className="font-medium">SA (Société Anonyme)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Equivalent to a corporation, requiring at least 5 shareholders and minimum capital of 300,000 MAD.
                    Suitable for larger businesses.
                  </p>
                </div>

                <div className="p-4 border rounded-md">
                  <h4 className="font-medium">SNC (Société en Nom Collectif)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    General partnership where partners have unlimited liability for business debts. No minimum capital
                    required.
                  </p>
                </div>

                <div className="p-4 border rounded-md">
                  <h4 className="font-medium">Auto-Entrepreneur</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Simplified status for individual entrepreneurs with annual turnover below certain thresholds.
                    Limited liability protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Key Legal Considerations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Business transfers in Morocco typically involve either share transfers or asset transfers</li>
                <li>• Share transfers preserve the legal entity but transfer ownership of shares</li>
                <li>
                  • Asset transfers involve selling specific business assets without transferring the legal entity
                </li>
                <li>• Employee rights are protected under Moroccan labor law during business transfers</li>
                <li>• Intellectual property rights must be properly registered and transferred</li>
                <li>• Real estate transfers require notarized deeds and registration with land registry</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="tax" className="space-y-4 pt-4">
            <div className="bg-muted p-4 rounded-md">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Tax Compliance is Critical</p>
                  <p className="text-muted-foreground">
                    Tax compliance is a critical aspect of business transfers in Morocco. Buyers should conduct thorough
                    due diligence on the tax status of any business they consider purchasing.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Key Taxes for Businesses in Morocco</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Corporate Income Tax (IS)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Progressive rates from 10% to 31% based on net profit. Small businesses may qualify for reduced
                      rates.
                    </p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Value Added Tax (TVA)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Standard rate of 20%, with reduced rates of 7%, 10%, and 14% for specific goods and services.
                    </p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Professional Tax (TP)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Local tax based on rental value of business premises and fixed assets. Rates vary by location and
                      activity.
                    </p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Social Security Contributions (CNSS)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Employer contributions of approximately 18.5% of gross salary, with employee contributions of
                      6.74%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Tax Implications of Business Transfers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Registration fees of 1% on the transfer value for share transfers</li>
                <li>• Capital gains tax for sellers (standard corporate tax rates apply)</li>
                <li>• VAT may apply to asset transfers (20% standard rate)</li>
                <li>• Stamp duties on legal documents (varies by document type)</li>
                <li>• Property transfer taxes for real estate (4-6% depending on property type)</li>
                <li>• Tax clearance certificates required before completing transfers</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Business Transfer Process in Morocco</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
                <ol className="space-y-6 relative">
                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      1
                    </div>
                    <h4 className="font-medium">Initial Agreement</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Parties sign a letter of intent or preliminary agreement, often with confidentiality provisions.
                    </p>
                  </li>

                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      2
                    </div>
                    <h4 className="font-medium">Due Diligence</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Buyer conducts thorough legal, financial, tax, and operational due diligence on the target
                      business.
                    </p>
                  </li>

                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      3
                    </div>
                    <h4 className="font-medium">Final Agreement</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Parties negotiate and sign a definitive purchase agreement specifying all terms and conditions.
                    </p>
                  </li>

                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      4
                    </div>
                    <h4 className="font-medium">Notarization</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For share transfers, the agreement must be notarized by a Moroccan notary.
                    </p>
                  </li>

                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      5
                    </div>
                    <h4 className="font-medium">Tax Registration</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The transfer must be registered with tax authorities within 30 days and applicable taxes paid.
                    </p>
                  </li>

                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      6
                    </div>
                    <h4 className="font-medium">Commercial Register Update</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For share transfers, the commercial register must be updated to reflect the new ownership.
                    </p>
                  </li>

                  <li className="pl-10 relative">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-finance-50 text-finance-600 dark:bg-finance-900/30 dark:text-finance-400 border border-muted-foreground/20">
                      7
                    </div>
                    <h4 className="font-medium">Legal Publication</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The transfer must be published in a legal gazette and a newspaper authorized to publish legal
                      notices.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <h3 className="text-lg font-medium">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Business Registration Documents</p>
                    <p className="text-sm text-muted-foreground">
                      RC extract, ICE certificate, articles of association
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Financial Statements</p>
                    <p className="text-sm text-muted-foreground">Balance sheets, income statements for past 3 years</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Tax Documents</p>
                    <p className="text-sm text-muted-foreground">Tax returns, tax clearance certificate</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Employee Documents</p>
                    <p className="text-sm text-muted-foreground">Employment contracts, CNSS declarations</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Asset Documentation</p>
                    <p className="text-sm text-muted-foreground">Property deeds, equipment titles, inventory lists</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Contracts & Agreements</p>
                    <p className="text-sm text-muted-foreground">Supplier contracts, customer agreements, leases</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="advisors">
            <AccordionTrigger>Professional Advisors for Business Transfers in Morocco</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  For a successful business transfer in Morocco, it's recommended to work with the following
                  professionals:
                </p>

                <div className="space-y-2">
                  <p className="font-medium">Legal Advisors:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Business attorneys specializing in M&A transactions</li>
                    <li>Notaries for document authentication and property transfers</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Financial Advisors:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Accountants familiar with Moroccan accounting standards (CGNC)</li>
                    <li>Business valuation experts</li>
                    <li>Tax specialists</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">Other Specialists:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Business brokers with local market knowledge</li>
                    <li>Industry-specific consultants</li>
                    <li>Due diligence specialists</li>
                  </ul>
                </div>

                <p>
                  Our platform can connect you with verified professionals experienced in Moroccan business transfers.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
