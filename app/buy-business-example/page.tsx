'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguageStore } from "@/lib/language-store";
import { FiltersSidebar } from "./components/FiltersSidebar";
import MobileFilters from "./components/MobileFilters";
import ListingsTabs  from "./components/ListingsTabs";
import { FeaturedListings } from "@/components/featured-listings";

export default function BuyBusinessPage() {
	const { t, locale } = useLanguageStore();
	const [showFilters, setShowFilters] = useState(false);
	const [activeFilters, setActiveFilters] = useState<string[]>([]);

	const isRtl = locale === "ar";

	const clearFilters = () => {
		setActiveFilters([]);
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
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col md:flex-row gap-8">
						{/* Filters - Desktop */}
						<div className="hidden md:block w-full md:w-64 lg:w-72 shrink-0">
							<FiltersSidebar 
								priceRange={[0, 100]} // TODO: Replace with actual state
								setPriceRange={() => {}} // TODO: Replace with actual setter
								revenueRange={[0, 100]} // TODO: Replace with actual state
								setRevenueRange={() => {}} // TODO: Replace with actual setter
								activeFilters={activeFilters}
								toggleFilter={() => {}} // TODO: Replace with actual function
								industries={[]} // TODO: Replace with actual data
								clearFilters={clearFilters}
								locations={[]} // TODO: Replace with actual data
							/>
						</div>

						{/* Mobile Filters Button */}
						<div className="md:hidden mb-4">
							<MobileFilters 
								priceRange={[0, 100]} // TODO: Replace with actual state
								setPriceRange={() => {}} // TODO: Replace with actual setter
								revenueRange={[0, 100]} // TODO: Replace with actual state
								setRevenueRange={() => {}} // TODO: Replace with actual setter
								activeFilters={activeFilters}
								toggleFilter={() => {}} // TODO: Replace with actual function
								clearFilters={clearFilters}
							/>
						</div>

						{/* Listings */}
						<div className="flex-1">
							<ListingsTabs />
							<FeaturedListings />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}