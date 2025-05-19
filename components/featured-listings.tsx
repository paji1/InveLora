"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Building, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";
import { useLanguageStore } from "@/lib/language-store";
import { cn } from "@/lib/utils";

export function FeaturedListings() {
	const { t } = useLanguageStore();

	const listings = [
		{
			id: 1,
			title: t("FeaturedListings.listings.ecommerce.title"),
			industry: t("FeaturedListings.listings.ecommerce.industry"),
			location: t("FeaturedListings.listings.ecommerce.location"),
			price: "$450,000",
			revenue: "$750,000",
			profit: "$180,000",
			description: t("FeaturedListings.listings.ecommerce.description"),
			featured: true,
			image: "/placeholder.svg?height=200&width=300",
			growth: 12,
		},
		{
			id: 2,
			title: t("FeaturedListings.listings.saas.title"),
			industry: t("FeaturedListings.listings.saas.industry"),
			location: t("FeaturedListings.listings.saas.location"),
			price: "$1,200,000",
			revenue: "$500,000",
			profit: "$300,000",
			description: t("FeaturedListings.listings.saas.description"),
			featured: true,
			image: "/placeholder.svg?height=200&width=300",
			growth: 24,
		},
		{
			id: 3,
			title: t("FeaturedListings.listings.manufacturing.title"),
			industry: t("FeaturedListings.listings.manufacturing.industry"),
			location: t("FeaturedListings.listings.manufacturing.location"),
			price: "$3,500,000",
			revenue: "$2,000,000",
			profit: "$800,000",
			description: t(
				"FeaturedListings.listings.manufacturing.description"
			),
			featured: false,
			image: "/placeholder.svg?height=200&width=300",
			growth: 8,
		},
		{
			id: 4,
			title: t("FeaturedListings.listings.agency.title"),
			industry: t("FeaturedListings.listings.agency.industry"),
			location: t("FeaturedListings.listings.agency.location"),
			price: "$850,000",
			revenue: "$1,200,000",
			profit: "$350,000",
			description: t("FeaturedListings.listings.agency.description"),
			featured: true,
			image: "/placeholder.svg?height=200&width=300",
			growth: 15,
		},
	];

	return (
		// <></>
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
			{listings.map((listing) => (
				<Card
					key={listing.id}
					className="overflow-hidden h-full transition-all hover:shadow-card-hover border-border/60 relative"
				>
					<div className="relative">
						<img
							src={listing.image || "/placeholder.svg"}
							alt={listing.title}
							className="object-cover w-full h-48"
						/>
						{listing.featured && (
							<Badge className="absolute top-3 right-3 bg-finance-600 hover:bg-finance-700">
								{t("FeaturedListings.featured")}
							</Badge>
						)}
					</div>
					<CardHeader className="p-4 pb-0">
						<div className="flex justify-between items-start gap-2">
							<h3 className="text-lg font-semibold group-hover:text-finance-600 transition-colors line-clamp-2">
								{listing.title}
							</h3>
							<div className="text-lg font-bold text-finance-600 whitespace-nowrap tabular-nums">
								{listing.price}
							</div>
						</div>
						<div className="flex items-center text-sm text-muted-foreground mt-1 flex-wrap gap-y-1">
							<div className="flex items-center">
								<Building className="h-4 w-4 mr-1 flex-shrink-0" />
								<span>{listing.industry}</span>
							</div>
							<span className="mx-2 text-muted-foreground/50">
								•
							</span>
							<div className="flex items-center">
								<MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
								<span>{listing.location}</span>
							</div>
						</div>
					</CardHeader>
					<CardContent className="p-4 pt-2">
						<p className="text-sm text-muted-foreground line-clamp-2 mt-2 text-pretty">
							{listing.description}
						</p>
					</CardContent>
					<CardFooter className="p-4 pt-0 grid grid-cols-2 gap-4 border-t">
						<div className="flex flex-col">
							<span className="text-xs text-muted-foreground font-medium">
								{t("FeaturedListings.annualRevenue")}
							</span>
							<span className="font-semibold tabular-nums">
								{listing.revenue}
							</span>
						</div>
						<div className="flex flex-col">
							<span className="text-xs text-muted-foreground font-medium">
								{t("FeaturedListings.annualProfit")}
							</span>
							<div className="flex items-center">
								<span className="font-semibold tabular-nums">
									{listing.profit}
								</span>
								<div className="flex items-center ml-1.5 text-success-600">
									<TrendingUp className="h-3 w-3" />
									<span className="text-xs font-medium ml-0.5">
										{listing.growth}%
									</span>
								</div>
							</div>
						</div>
					</CardFooter>
					<Link
						href={`/business/${listing.id}`}
						className={cn(
							"absolute inset-0 flex items-center justify-center bg-finance-600/0 opacity-0 transition-all duration-300",
							"hover:opacity-100 hover:bg-finance-600/10 focus:opacity-100 focus:bg-finance-600/10"
						)}
						tabIndex={0}
						aria-label={listing.title}
					>
						<div className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
							<ArrowUpRight className="h-5 w-5 text-finance-600" />
						</div>
					</Link>
				</Card>
			))}
		</div>
	);
}
