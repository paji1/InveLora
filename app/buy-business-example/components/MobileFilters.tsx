import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguageStore } from "@/lib/language-store";
import { industries, locations } from "@/app/buy-businesss/data"; // Assuming you have a data file for industries and locations

// Utility function to format currency
function formatCurrency(value: number): string {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });
}

type MobileFiltersProps = {
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    revenueRange: [number, number];
    setRevenueRange: (range: [number, number]) => void;
    activeFilters: string[];
    toggleFilter: (id: string) => void;
    clearFilters: () => void;
};

const MobileFilters = ({
    priceRange,
    setPriceRange,
    revenueRange,
    setRevenueRange,
    activeFilters,
    toggleFilter,
    clearFilters,
}: MobileFiltersProps) => {
    const { t } = useLanguageStore();
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="md:hidden mb-4">
            <Button
                variant="outline"
                className="w-full flex items-center justify-between"
                onClick={() => setShowFilters(!showFilters)}
            >
                <span>{t("BuyBusiness.filters.title")}</span>
            </Button>

            {showFilters && (
                <Card className="mt-3">
                    <CardContent className="p-4 space-y-6">
                        {/* Price Range */}
                        <div className="space-y-2">
                            <h3 className="font-medium">{t("BuyBusiness.filters.priceRange")}</h3>
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

                        {/* Industry */}
                        <div className="space-y-3">
                            <h3 className="font-medium">{t("BuyBusiness.filters.industry")}</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {industries.map((industry) => (
                                    <div key={industry.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`mobile-industry-${industry.id}`}
                                            checked={activeFilters.includes(industry.id)}
                                            onCheckedChange={() => toggleFilter(industry.id)}
                                        />
                                        <label htmlFor={`mobile-industry-${industry.id}`} className="text-sm leading-none">
                                            {industry.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        {/* Location */}
                        <div className="space-y-3">
                            <h3 className="font-medium">{t("BuyBusiness.filters.location")}</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {locations.map((location) => (
                                    <div key={location.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`mobile-location-${location.id}`}
                                            checked={activeFilters.includes(location.id)}
                                            onCheckedChange={() => toggleFilter(location.id)}
                                        />
                                        <label htmlFor={`mobile-location-${location.id}`} className="text-sm leading-none">
                                            {location.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between pt-2">
                            <Button variant="outline" size="sm" onClick={() => setShowFilters(false)}>
                                {t("BuyBusiness.filters.close")}
                            </Button>
                            <Button size="sm" onClick={() => setShowFilters(false)}>
                                {t("BuyBusiness.filters.apply")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default MobileFilters;