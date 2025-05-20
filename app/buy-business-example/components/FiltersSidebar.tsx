import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FiltersSidebarProps {
    priceRange: number[];
    setPriceRange: (range: number[]) => void;
    revenueRange: number[];
    setRevenueRange: (range: number[]) => void;
    activeFilters: string[];
    toggleFilter: (filter: string) => void;
    industries: { id: string; label: string }[];
	
	clearFilters: () => void;
    locations: { id: string; label: string }[];
}


export const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
    priceRange,
    setPriceRange,
    revenueRange,
    setRevenueRange,
    activeFilters,
    toggleFilter,
    industries,
    locations,
}) => {
    return (
        <div className="space-y-6">
            {/* Price Range */}
            <div className="space-y-2">
                <h3 className="font-medium">Price Range</h3>
                <div className="space-y-4">
                    <Slider
                        value={priceRange}
                        min={0}
                        max={5000000}
                        step={100000}
                        onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between text-sm">
                        <span>{formatCurrency(priceRange[0])}</span>
                        <span>{formatCurrency(priceRange[1])}</span>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Revenue Range */}
            <div className="space-y-2">
                <h3 className="font-medium">Annual Revenue</h3>
                <div className="space-y-4">
                    <Slider
                        value={revenueRange}
                        min={0}
                        max={10000000}
                        step={100000}
                        onValueChange={setRevenueRange}
                    />
                    <div className="flex items-center justify-between text-sm">
                        <span>{formatCurrency(revenueRange[0])}</span>
                        <span>{formatCurrency(revenueRange[1])}</span>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Industry */}
            <div className="space-y-3">
                <h3 className="font-medium">Industry</h3>
                <div className="space-y-2">
                    {industries.map((industry) => (
                        <div key={industry.id} className={cn("flex items-center space-x-2")}>
                            <Checkbox
                                id={`industry-${industry.id}`}
                                checked={activeFilters.includes(industry.id)}
                                onCheckedChange={() => toggleFilter(industry.id)}
                            />
                            <label htmlFor={`industry-${industry.id}`} className="text-sm leading-none">
                                {industry.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Location */}
            <div className="space-y-3">
                <h3 className="font-medium">Location</h3>
                <div className="space-y-2">
                    {locations.map((location) => (
                        <div key={location.id} className={cn("flex items-center space-x-2")}>
                            <Checkbox
                                id={`location-${location.id}`}
                                checked={activeFilters.includes(location.id)}
                                onCheckedChange={() => toggleFilter(location.id)}
                            />
                            <label htmlFor={`location-${location.id}`} className="text-sm leading-none">
                                {location.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Business Type */}
            <div className="space-y-3">
                <h3 className="font-medium">Business Type</h3>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="All Business Types" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Business Types</SelectItem>
                        <SelectItem value="sarl">SARL</SelectItem>
                        <SelectItem value="sa">SA</SelectItem>
                        <SelectItem value="snc">SNC</SelectItem>
                        <SelectItem value="scs">SCS</SelectItem>
                        <SelectItem value="franchise">Franchise</SelectItem>
                        <SelectItem value="sole">Sole Proprietorship</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Separator />

            {/* Years in Business */}
            <div className="space-y-3">
                <h3 className="font-medium">Years in Business</h3>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="0-2">0-2 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="6-10">6-10 Years</SelectItem>
                        <SelectItem value="11-20">11-20 Years</SelectItem>
                        <SelectItem value="21+">21+ Years</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(value);
};