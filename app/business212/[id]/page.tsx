"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { MoroccoBusinessGuide } from "@/components/morocco-business-guide"
import {
  Building,
  MapPin,
  Users,
  Calendar,
  CircleDollarSign,
  TrendingUp,
  FileText,
  MessageSquare,
  Heart,
  Share2,
  Info,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/use-auth"
import { useToast } from "@/components/ui/use-toast"

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isFavorite, setIsFavorite] = useState(false)
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "This business has been removed from your favorites." : "This business has been added to your favorites.",
    })
  }
  
  const handleContactSeller = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to contact the seller.",
        variant: "destructive",
      })
    } else {
      // Handle contact seller logic
    }
  }
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "Business listing link has been copied to clipboard.",
    })
  }
  
  // Mock business data
  const business = {
    id: params.id,
    title: "Profitable Restaurant in Marrakech",
    industry: "Food & Beverage",
    location: "Marrakech",
    price: "MAD 2,500,000",
    revenue: "MAD 3,800,000",
    profit: "MAD 950,000",
    established: "2015",
    employees: "12",
    description: "Well-established restaurant in prime tourist location with consistent revenue and loyal customer base. Fully equipped kitchen and recently renovated dining area with 80 seats. The business has shown consistent growth over the past 5 years and has a strong reputation among both tourists and locals. The sale includes all equipment, furniture, fixtures, and the transfer of the lease agreement.",
    growth: 12,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    seller: {
      name: "Ahmed Benali",
      type: "Business Owner",
      responseRate: "95%",
      responseTime: "Within 24 hours",
    },
    details: {
      businessType: "SARL (Société à Responsabilité Limitée)",
      reasonForSelling: "Retirement",
      realEstate: "Leased",
      leaseTerms: "10-year lease with 5 years remaining, MAD 25,000/month",
      inventory: "Included in asking price (valued at approximately MAD 350,000)",
      fixtures: "All kitchen equipment, furniture, and fixtures included",
      training: "2 weeks of training and transition support included",
      competition: "Moderate competition in the area, but established customer base",
      growthOpportunities: "Potential for expanded hours, catering services, and delivery options",
    },
    financials: {
      yearlyRevenue: [
        { year: "2020", amount: "MAD 2,900,000" },
        { year: "2021", amount: "MAD 3,200,000" },
        { year: "2022", amount: "MAD 3,500,000" },
        { year: "2023", amount: "MAD 3,800,000" },
      ],
      yearlyProfit: [
        { year: "2020", amount: "MAD 680,000" },
        { year: "2021", amount: "MAD 750,000" },
        { year: "2022", amount: "MAD 850,000" },
        { year: "2023", amount: "MAD 950,000" },
      ],
      expenses: {
        rent: "MAD 300,000/year",
        payroll: "MAD 1,200,000/year",
        utilities: "MAD 180,000/year",
        supplies: "MAD 950,000/year",
        marketing: "MAD 120,000/year",
        other: "MAD 100,000/year",
      },
    },
  }
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % business.images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + business.images.length) % business.images.length)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Main Content */}
            <div className="w-full md:w-2/3 space-y-6">
              {/* Breadcrumbs */}
              <nav className="flex text-sm text-muted-foreground mb-2">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/buy-business" className="hover:text-foreground">Buy a Business</Link>
                <span className="mx-2">/</span>
                <Link href="/buy-business?industry=food" className="hover:text-foreground">Food & Beverage</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{business.title}</span>
              </nav>
              
              {/* Business Title */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-finance-600 hover:bg-finance-700">Featured</Badge>
                  <Badge variant="outline">Verified</Badge>
                </div>
                <h1 className="text-3xl font-bold">{business.title}</h1>
                <div className="flex items-center text-muted-foreground mt-2 flex-wrap gap-y-1">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{business.industry}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground/50">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{business.location}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground/50">•</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>Est. {business.established}</span>
                  </div>
                </div>
              </div>
              
              {/* Image Gallery */}
              <div className="relative rounded-lg overflow-hidden h-[400px] group">
                <img 
                  src={business.images[currentImageIndex] || "/placeholder.svg"} 
                  alt={business.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between px-4">
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="rounded-full" 
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="rounded-full" 
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {business.images.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Key Metrics */}
              <Card className="border-border/60 shadow-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground font-medium">Asking Price</span>
                      <span className="text-2xl font-bold text-finance-600">{business.price}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground font-medium">Annual Revenue</span>
                      <span className="text-2xl font-bold tabular-nums">{business.revenue}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground font-medium">Annual Profit</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold tabular-nums">{business.profit}</span>
                        <div className="flex items-center ml-2 text-success-600">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-xs font-medium ml-0.5">{business.growth}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground font-medium">Employees</span>
                      <span className="text-2xl font-bold">{business.employees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Business Description</h2>
                    <p className="text-muted-foreground">{business.description}</p>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium mb-1">Confidentiality Notice</p>
                          <p>To protect the business, additional details will only be shared after signing a non-disclosure agreement. Contact the seller to request more information.</p>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mt-0.5">
                          <MapPin className="h-3.5 w-3.5 text-finance-600 dark:text-finance-400" />
                        </div>
                        <div>
                          <p className="font-medium">Prime Location</p>
                          <p className="text-sm text-muted-foreground">Located in a high-traffic tourist area</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mt-0.5">
                          <Users className="h-3.5 w-3.5 text-finance-600 dark:text-finance-400" />
                        </div>
                        <div>
                          <p className="font-medium">Established Customer Base</p>
                          <p className="text-sm text-muted-foreground">Loyal local and tourist clientele</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mt-0.5">
                          <TrendingUp className="h-3.5 w-3.5 text-finance-600 dark:text-finance-400" />
                        </div>
                        <div>
                          <p className="font-medium">Growth Potential</p>
                          <p className="text-sm text-muted-foreground">Opportunities for expansion and new services</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mt-0.5">
                          <Building className="h-3.5 w-3.5 text-finance-600 dark:text-finance-400" />
                        </div>
                        <div>
                          <p className="font-medium">Fully Equipped</p>
                          <p className="text-sm text-muted-foreground">All equipment and fixtures included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Business Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Business Type</p>
                        <p className="font-medium">{business.details.businessType}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Reason for Selling</p>
                        <p className="font-medium">{business.details.reasonForSelling}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Real Estate</p>
                        <p className="font-medium">{business.details.realEstate}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Lease Terms</p>
                        <p className="font-medium">{business.details.leaseTerms}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Inventory</p>
                        <p className="font-medium">{business.details.inventory}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Fixtures & Equipment</p>
                        <p className="font-medium">{business.details.fixtures}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Training & Support</p>
                        <p className="font-medium">{business.details.training}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Competition</p>
                        <p className="font-medium">{business.details.competition}</p>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold mt-6">Growth Opportunities</h2>
                    <p className="text-muted-foreground">{business.details.growthOpportunities}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="financials" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Financial Performance</h2>
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium mb-1">Financial Verification</p>
                          <p>Detailed financial statements and tax returns are available to qualified buyers after signing an NDA.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-border/60 shadow-card">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Annual Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {business.financials.yearlyRevenue.map((item) => (
                              <div key={item.year} className="flex justify-between items-center">
                                <span className="text-sm">{item.year}</span>
                                <span className="font-medium tabular-nums">{item.amount}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-border/60 shadow-card">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Annual Profit</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {business.financials.yearlyProfit.map((item) => (
                              <div key={item.year} className="flex justify-between items-center">
                                <span className="text-sm">{item.year}</span>
                                <span className="font-medium tabular-nums">{item.amount}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <h2 className="text-xl font-semibold mt-2">Annual Expenses (2023)</h2>
                    <Card className="border-border/60 shadow-card">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {Object.entries(business.financials.expenses).map(([key, value]) => (
                            <div key={key} className="space-y-1">
                              <p className="text-sm text-muted-foreground capitalize">{key}</p>
                              <p className="font-medium tabular-nums">{value}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Location Information</h2>
                    <p className="text-muted-foreground">
                      This business is located in a prime area of Marrakech, known for high tourist traffic and local popularity. The exact address will be disclosed to qualified buyers after signing an NDA.
                    </p>
                    
                    <div className="rounded-lg overflow-hidden h-[400px] bg-muted">
                      <img 
                        src="/placeholder.svg?height=400&width=800" 
                        alt="Map location" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Area Information</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• High foot traffic area with excellent visibility</li>
                          <li>• Close to major tourist attractions</li>
                          <li>• Surrounded by complementary businesses</li>
                          <li>• Easy access to public transportation</li>
                          <li>• Ample parking available nearby</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Property Details</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Total area: 250 m²</li>
                          <li>• Dining area: 180 m²</li>
                          <li>• Kitchen: 50 m²</li>
                          <li>• Storage: 20 m²</li>
                          <li>• Outdoor seating available</li>
                          <li>• Recently renovated (2022)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              Morocco Business Guide
              <MoroccoBusinessGuide />
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/3 space-y-6">
              {/* Price Card */}
              <Card className="border-border/60 shadow-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl text-finance-600">{business.price}</CardTitle>
                  <CardDescription>Asking price</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/placeholder.svg?height=40&width=40" 
                        alt={business.seller.name} 
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{business.seller.name}</p>
                        <p className="text-xs text-muted-foreground">{business.seller.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{business.seller.responseTime}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{business.seller.responseRate} response rate</p>
                    </div>
                  </div>
                  
                  <Button className="w-full" onClick={handleContactSeller}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Contact Seller
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={toggleFavorite}>
                      <Heart className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} /> 
                      {isFavorite ? 'Saved' : 'Save'}
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={handleShare}>
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Request Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Interested in this business? Contact the seller to:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Request detailed financial information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>Schedule a meeting or site visit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleDollarSign className="h-\
