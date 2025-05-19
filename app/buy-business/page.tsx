"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedListings } from "@/components/featured-listings";
import { useLanguageStore } from "@/lib/language-store";
import { Search, Filter, Building, MapPin, ChevronDown, X } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function BuyBusinessPage() {
	const { t, locale } = useLanguageStore();
	const [showFilters, setShowFilters] = useState(false);
	const [priceRange, setPriceRange] = useState([0, 5000000]);
	const [revenueRange, setRevenueRange] = useState([0, 10000000]);
	const [activeFilters, setActiveFilters] = useState<string[]>([]);

	const isRtl = locale === "ar";

	const industries = [
		{ id: "technology", label: t("BuyBusiness.industries.technology") },
		{ id: "retail", label: t("BuyBusiness.industries.retail") },
		{ id: "food", label: t("BuyBusiness.industries.food") },
		{
			id: "manufacturing",
			label: t("BuyBusiness.industries.manufacturing"),
		},
		{ id: "services", label: t("BuyBusiness.industries.services") },
		{ id: "healthcare", label: t("BuyBusiness.industries.healthcare") },
		{ id: "construction", label: t("BuyBusiness.industries.construction") },
		{ id: "tourism", label: t("BuyBusiness.industries.tourism") },
		{ id: "agriculture", label: t("BuyBusiness.industries.agriculture") },
	];

	const locations = [
		{ id: "casablanca", label: t("BuyBusiness.locations.casablanca") },
		{ id: "rabat", label: t("BuyBusiness.locations.rabat") },
		{ id: "marrakech", label: t("BuyBusiness.locations.marrakech") },
		{ id: "tangier", label: t("BuyBusiness.locations.tangier") },
		{ id: "agadir", label: t("BuyBusiness.locations.agadir") },
		{ id: "fes", label: t("BuyBusiness.locations.fes") },
		{ id: "meknes", label: t("BuyBusiness.locations.meknes") },
		{ id: "oujda", label: t("BuyBusiness.locations.oujda") },
		{ id: "other", label: t("BuyBusiness.locations.other") },
	];

	const toggleFilter = (filter: string) => {
		if (activeFilters.includes(filter)) {
			setActiveFilters(activeFilters.filter((f) => f !== filter));
		} else {
			setActiveFilters([...activeFilters, filter]);
		}
	};

	const clearFilters = () => {
		setActiveFilters([]);
		setPriceRange([0, 5000000]);
		setRevenueRange([0, 10000000]);
	};

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat(
			locale === "fr" ? "fr-FR" : locale === "ar" ? "ar-MA" : "en-US",
			{
				style: "currency",
				currency: "MAD",
				maximumFractionDigits: 0,
			}
		).format(value);
	};

	return (
		<main className="flex-1">
			{/* Hero Section */}
			<section className="w-full py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							{t("BuyBusiness.hero.title")}
						</h1>
						<p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
							{t("BuyBusiness.hero.description")}
						</p>

						<div className="w-full max-w-2xl mt-6">
							<div className="relative">
								<Search
									className={cn(
										"absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
										isRtl ? "right-3" : "left-3"
									)}
								/>
								<Input
									placeholder={t(
										"BuyBusiness.search.placeholder"
									)}
									className={cn(
										"h-12",
										isRtl ? "pr-10 pl-20" : "pl-10 pr-20"
									)}
									dir={isRtl ? "rtl" : "ltr"}
								/>
								<Button
									className={cn(
										"absolute top-1/2 -translate-y-1/2 h-10",
										isRtl ? "left-1" : "right-1"
									)}
								>
									{t("BuyBusiness.search.button")}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div
						className={cn(
							"flex flex-col md:flex-row gap-8",
							isRtl && "md:flex-row-reverse"
						)}
					>
						{/* Filters - Desktop */}
						<div className="hidden md:block w-full md:w-64 lg:w-72 shrink-0">
							<div className="sticky top-24">
								<div className="flex items-center justify-between mb-4">
									<h2 className="text-xl font-semibold">
										{t("BuyBusiness.filters.title")}
									</h2>
									{activeFilters.length > 0 && (
										<Button
											variant="ghost"
											size="sm"
											onClick={clearFilters}
											className="h-8 text-sm"
										>
											{t("BuyBusiness.filters.clearAll")}
										</Button>
									)}
								</div>

								<div className="space-y-6">
									{/* Price Range */}
									<div className="space-y-2">
										<h3 className="font-medium">
											{t(
												"BuyBusiness.filters.priceRange"
											)}
										</h3>
										<div className="space-y-4">
											<Slider
												value={priceRange}
												min={0}
												max={5000000}
												step={100000}
												onValueChange={setPriceRange}
												dir={isRtl ? "rtl" : "ltr"}
											/>
											<div className="flex items-center justify-between text-sm">
												<span>
													{formatCurrency(
														priceRange[0]
													)}
												</span>
												<span>
													{formatCurrency(
														priceRange[1]
													)}
												</span>
											</div>
										</div>
									</div>

									<Separator />

									{/* Revenue Range */}
									<div className="space-y-2">
										<h3 className="font-medium">
											{t(
												"BuyBusiness.filters.annualRevenue"
											)}
										</h3>
										<div className="space-y-4">
											<Slider
												value={revenueRange}
												min={0}
												max={10000000}
												step={100000}
												onValueChange={setRevenueRange}
												dir={isRtl ? "rtl" : "ltr"}
											/>
											<div className="flex items-center justify-between text-sm">
												<span>
													{formatCurrency(
														revenueRange[0]
													)}
												</span>
												<span>
													{formatCurrency(
														revenueRange[1]
													)}
												</span>
											</div>
										</div>
									</div>

									<Separator />

									{/* Industry */}
									<div className="space-y-3">
										<h3 className="font-medium">
											{t("BuyBusiness.filters.industry")}
										</h3>
										<div className="space-y-2">
											{industries.map((industry) => (
												<div
													key={industry.id}
													className={cn(
														"flex items-center space-x-2",
														isRtl &&
															"flex-row-reverse space-x-reverse"
													)}
												>
													<Checkbox
														id={`industry-${industry.id}`}
														checked={activeFilters.includes(
															industry.id
														)}
														onCheckedChange={() =>
															toggleFilter(
																industry.id
															)
														}
													/>
													<label
														htmlFor={`industry-${industry.id}`}
														className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													>
														{industry.label}
													</label>
												</div>
											))}
										</div>
									</div>

									<Separator />

									{/* Location */}
									<div className="space-y-3">
										<h3 className="font-medium">
											{t("BuyBusiness.filters.location")}
										</h3>
										<div className="space-y-2">
											{locations.map((location) => (
												<div
													key={location.id}
													className={cn(
														"flex items-center space-x-2",
														isRtl &&
															"flex-row-reverse space-x-reverse"
													)}
												>
													<Checkbox
														id={`location-${location.id}`}
														checked={activeFilters.includes(
															location.id
														)}
														onCheckedChange={() =>
															toggleFilter(
																location.id
															)
														}
													/>
													<label
														htmlFor={`location-${location.id}`}
														className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													>
														{location.label}
													</label>
												</div>
											))}
										</div>
									</div>

									<Separator />

									{/* Business Type */}
									<div className="space-y-3">
										<h3 className="font-medium">
											{t(
												"BuyBusiness.filters.businessType"
											)}
										</h3>
										<Select>
											<SelectTrigger>
												<SelectValue
													placeholder={t(
														"BuyBusiness.filters.allBusinessTypes"
													)}
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all">
													{t(
														"BuyBusiness.filters.allBusinessTypes"
													)}
												</SelectItem>
												<SelectItem value="sarl">
													{t(
														"BuyBusiness.businessTypes.sarl"
													)}
												</SelectItem>
												<SelectItem value="sa">
													{t(
														"BuyBusiness.businessTypes.sa"
													)}
												</SelectItem>
												<SelectItem value="snc">
													{t(
														"BuyBusiness.businessTypes.snc"
													)}
												</SelectItem>
												<SelectItem value="scs">
													{t(
														"BuyBusiness.businessTypes.scs"
													)}
												</SelectItem>
												<SelectItem value="franchise">
													{t(
														"BuyBusiness.businessTypes.franchise"
													)}
												</SelectItem>
												<SelectItem value="sole">
													{t(
														"BuyBusiness.businessTypes.sole"
													)}
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<Separator />

									{/* Years in Business */}
									<div className="space-y-3">
										<h3 className="font-medium">
											{t(
												"BuyBusiness.filters.yearsInBusiness"
											)}
										</h3>
										<Select>
											<SelectTrigger>
												<SelectValue
													placeholder={t(
														"BuyBusiness.filters.any"
													)}
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="any">
													{t(
														"BuyBusiness.filters.any"
													)}
												</SelectItem>
												<SelectItem value="0-2">
													{t("BuyBusiness.years.0-2")}
												</SelectItem>
												<SelectItem value="3-5">
													{t("BuyBusiness.years.3-5")}
												</SelectItem>
												<SelectItem value="6-10">
													{t(
														"BuyBusiness.years.6-10"
													)}
												</SelectItem>
												<SelectItem value="11-20">
													{t(
														"BuyBusiness.years.11-20"
													)}
												</SelectItem>
												<SelectItem value="21+">
													{t("BuyBusiness.years.21+")}
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>
						</div>

						{/* Mobile Filters Button */}
						<div className="md:hidden mb-4">
							<Button
								variant="outline"
								className="w-full flex items-center justify-between"
								onClick={() => setShowFilters(!showFilters)}
							>
								<div className="flex items-center">
									<Filter
										className={cn(
											"h-4 w-4",
											isRtl ? "ml-2" : "mr-2"
										)}
									/>
									<span>
										{t("BuyBusiness.filters.title")}
									</span>
								</div>
								<ChevronDown
									className={`h-4 w-4 transition-transform ${
										showFilters ? "rotate-180" : ""
									}`}
								/>
							</Button>

							{/* Active Filters */}
							{activeFilters.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-3">
									{activeFilters.map((filter) => {
										const industry = industries.find(
											(i) => i.id === filter
										);
										const location = locations.find(
											(l) => l.id === filter
										);
										const label =
											industry?.label ||
											location?.label ||
											filter;

										return (
											<Badge
												key={filter}
												variant="secondary"
												className="flex items-center gap-1"
											>
												{label}
												<X
													className="h-3 w-3 cursor-pointer"
													onClick={() =>
														toggleFilter(filter)
													}
												/>
											</Badge>
										);
									})}

									<Button
										variant="ghost"
										size="sm"
										onClick={clearFilters}
										className="h-7 text-xs"
									>
										{t("BuyBusiness.filters.clearAll")}
									</Button>
								</div>
							)}

							{/* Mobile Filters Panel */}
							{showFilters && (
								<Card className="mt-3">
									<CardContent className="p-4 space-y-6">
										{/* Price Range */}
										<div className="space-y-2">
											<h3 className="font-medium">
												{t(
													"BuyBusiness.filters.priceRange"
												)}
											</h3>
											<div className="space-y-4">
												<Slider
													value={priceRange}
													min={0}
													max={5000000}
													step={100000}
													onValueChange={
														setPriceRange
													}
													dir={isRtl ? "rtl" : "ltr"}
												/>
												<div className="flex items-center justify-between text-sm">
													<span>
														{formatCurrency(
															priceRange[0]
														)}
													</span>
													<span>
														{formatCurrency(
															priceRange[1]
														)}
													</span>
												</div>
											</div>
										</div>

										<Separator />

										{/* Industry */}
										<div className="space-y-3">
											<h3 className="font-medium">
												{t(
													"BuyBusiness.filters.industry"
												)}
											</h3>
											<div className="grid grid-cols-2 gap-2">
												{industries.map((industry) => (
													<div
														key={industry.id}
														className={cn(
															"flex items-center space-x-2",
															isRtl &&
																"flex-row-reverse space-x-reverse"
														)}
													>
														<Checkbox
															id={`mobile-industry-${industry.id}`}
															checked={activeFilters.includes(
																industry.id
															)}
															onCheckedChange={() =>
																toggleFilter(
																	industry.id
																)
															}
														/>
														<label
															htmlFor={`mobile-industry-${industry.id}`}
															className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
														>
															{industry.label}
														</label>
													</div>
												))}
											</div>
										</div>

										<Separator />

										{/* Location */}
										<div className="space-y-3">
											<h3 className="font-medium">
												{t(
													"BuyBusiness.filters.location"
												)}
											</h3>
											<div className="grid grid-cols-2 gap-2">
												{locations.map((location) => (
													<div
														key={location.id}
														className={cn(
															"flex items-center space-x-2",
															isRtl &&
																"flex-row-reverse space-x-reverse"
														)}
													>
														<Checkbox
															id={`mobile-location-${location.id}`}
															checked={activeFilters.includes(
																location.id
															)}
															onCheckedChange={() =>
																toggleFilter(
																	location.id
																)
															}
														/>
														<label
															htmlFor={`mobile-location-${location.id}`}
															className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
														>
															{location.label}
														</label>
													</div>
												))}
											</div>
										</div>

										<div
											className={cn(
												"flex justify-between pt-2",
												isRtl && "flex-row-reverse"
											)}
										>
											<Button
												variant="outline"
												size="sm"
												onClick={() =>
													setShowFilters(false)
												}
											>
												{t("BuyBusiness.filters.close")}
											</Button>
											<Button
												size="sm"
												onClick={() =>
													setShowFilters(false)
												}
											>
												{t("BuyBusiness.filters.apply")}
											</Button>
										</div>
									</CardContent>
								</Card>
							)}
						</div>

						{/* Listings */}
						<div className="flex-1">
							<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
								<div className="flex items-center gap-2 w-full md:w-auto">
									<div className="hidden md:block">
										<div className="flex-col  mb-9 ">
											<h2 className="text-2xl font-bold">
												{t(
													"BuyBusiness.listings.title"
												)}
											</h2>
											{/* <p className="text-muted-foreground">
														{t(
															"BuyBusiness.listings.showing",
															{
																count: 120,
															}
														)}
													</p> */}
										</div>
										<Tabs
											defaultValue="grid"
											className="w-full"
										>
											<div className="w-full items-center  inline-flex justify-between">
												<div className=" w-fit">
													<Select defaultValue="featured">
														<SelectTrigger className="w-full md:w-[180px]">
															<SelectValue
																placeholder={t(
																	"BuyBusiness.sort.placeholder"
																)}
															/>
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="featured">
																{t(
																	"BuyBusiness.sort.featured"
																)}
															</SelectItem>
															<SelectItem value="newest">
																{t(
																	"BuyBusiness.sort.newest"
																)}
															</SelectItem>
															<SelectItem value="price-low">
																{t(
																	"BuyBusiness.sort.priceLow"
																)}
															</SelectItem>
															<SelectItem value="price-high">
																{t(
																	"BuyBusiness.sort.priceHigh"
																)}
															</SelectItem>
															<SelectItem value="revenue">
																{t(
																	"BuyBusiness.sort.revenue"
																)}
															</SelectItem>
															<SelectItem value="profit">
																{t(
																	"BuyBusiness.sort.profit"
																)}
															</SelectItem>
														</SelectContent>
													</Select>
												</div>
												<TabsList className="grid  grid-cols-2  w-fit ">
													<TabsTrigger
														value="grid"
														className="px-2"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															className="lucide lucide-grid-2x2"
														>
															<rect
																width="18"
																height="18"
																x="3"
																y="3"
																rx="2"
															/>
															<path d="M3 12h18" />
															<path d="M12 3v18" />
														</svg>
													</TabsTrigger>
													<TabsTrigger
														value="list"
														className="px-2"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															className="lucide lucide-list"
														>
															<line
																x1="8"
																x2="21"
																y1="6"
																y2="6"
															/>
															<line
																x1="8"
																x2="21"
																y1="12"
																y2="12"
															/>
															<line
																x1="8"
																x2="21"
																y1="18"
																y2="18"
															/>
															<line
																x1="3"
																x2="3.01"
																y1="6"
																y2="6"
															/>
															<line
																x1="3"
																x2="3.01"
																y1="12"
																y2="12"
															/>
															<line
																x1="3"
																x2="3.01"
																y1="18"
																y2="18"
															/>
														</svg>
													</TabsTrigger>
												</TabsList>
											</div>
											<TabsContent
												value="grid"
												className="mt-6"
											>
												<FeaturedListings />
											</TabsContent>
											<TabsContent
												value="list"
												className="mt-6"
											>
												<div className="space-y-4">
													{[1, 2, 3, 4].map(
														(item) => (
															<Card
																key={item}
																className="overflow-hidden border-border/60 hover:shadow-card-hover transition-all"
															>
																<div
																	className={cn(
																		"flex flex-col md:flex-row",
																		isRtl &&
																			"md:flex-row-reverse"
																	)}
																>
																	<div className="w-full md:w-1/4 h-48 md:h-auto">
																		<img
																			src="/placeholder.svg?height=200&width=300"
																			alt={t(
																				"BuyBusiness.listings.businessImageAlt"
																			)}
																			className="w-full h-full object-cover"
																		/>
																	</div>
																	<div className="flex-1 p-4 md:p-6 flex flex-col">
																		<div
																			className={cn(
																				"flex justify-between items-start gap-4",
																				isRtl &&
																					"flex-row-reverse"
																			)}
																		>
																			<div>
																				<h3 className="text-lg font-semibold">
																					{t(
																						"BuyBusiness.listings.sampleBusiness.title"
																					)}
																				</h3>
																				<div
																					className={cn(
																						"flex items-center text-sm text-muted-foreground mt-1 flex-wrap gap-y-1",
																						isRtl &&
																							"flex-row-reverse"
																					)}
																				>
																					<div
																						className={cn(
																							"flex items-center",
																							isRtl &&
																								"flex-row-reverse"
																						)}
																					>
																						<Building
																							className={cn(
																								"h-4 w-4 flex-shrink-0",
																								isRtl
																									? "ml-1"
																									: "mr-1"
																							)}
																						/>
																						<span>
																							{t(
																								"BuyBusiness.listings.sampleBusiness.industry"
																							)}
																						</span>
																					</div>
																					<span className="mx-2 text-muted-foreground/50">
																						•
																					</span>
																					<div
																						className={cn(
																							"flex items-center",
																							isRtl &&
																								"flex-row-reverse"
																						)}
																					>
																						<MapPin
																							className={cn(
																								"h-4 w-4 flex-shrink-0",
																								isRtl
																									? "ml-1"
																									: "mr-1"
																							)}
																						/>
																						<span>
																							{t(
																								"BuyBusiness.listings.sampleBusiness.location"
																							)}
																						</span>
																					</div>
																				</div>
																			</div>
																			<div className="text-lg font-bold text-finance-600 whitespace-nowrap">
																				{formatCurrency(
																					2500000
																				)}
																			</div>
																		</div>

																		<p className="text-sm text-muted-foreground mt-3">
																			{t(
																				"BuyBusiness.listings.sampleBusiness.description"
																			)}
																		</p>

																		<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
																			<div className="flex flex-col">
																				<span className="text-xs text-muted-foreground font-medium">
																					{t(
																						"BuyBusiness.listings.annualRevenue"
																					)}
																				</span>
																				<span className="font-semibold tabular-nums">
																					{formatCurrency(
																						3800000
																					)}
																				</span>
																			</div>
																			<div className="flex flex-col">
																				<span className="text-xs text-muted-foreground font-medium">
																					{t(
																						"BuyBusiness.listings.annualProfit"
																					)}
																				</span>
																				<span className="font-semibold tabular-nums">
																					{formatCurrency(
																						950000
																					)}
																				</span>
																			</div>
																			<div className="flex flex-col">
																				<span className="text-xs text-muted-foreground font-medium">
																					{t(
																						"BuyBusiness.listings.established"
																					)}
																				</span>
																				<span className="font-semibold">
																					2015
																				</span>
																			</div>
																			<div className="flex flex-col">
																				<span className="text-xs text-muted-foreground font-medium">
																					{t(
																						"BuyBusiness.listings.employees"
																					)}
																				</span>
																				<span className="font-semibold">
																					12
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</Card>
														)
													)}
												</div>
											</TabsContent>
										</Tabs>
									</div>
								</div>
							</div>

							{/* Mobile view - always show grid view */}
							<div className="md:hidden">
								<FeaturedListings />
							</div>

							<div className="mt-8 flex justify-center">
								<div className="flex items-center space-x-2">
									<Button
										variant="outline"
										size="icon"
										disabled
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-chevron-left"
										>
											<path d="m15 18-6-6 6-6" />
										</svg>
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="bg-primary text-primary-foreground hover:bg-primary/90"
									>
										1
									</Button>
									<Button variant="outline" size="sm">
										2
									</Button>
									<Button variant="outline" size="sm">
										3
									</Button>
									<Button variant="outline" size="sm">
										4
									</Button>
									<Button variant="outline" size="sm">
										5
									</Button>
									<Button variant="outline" size="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-chevron-right"
										>
											<path d="m9 18 6-6-6-6" />
										</svg>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
