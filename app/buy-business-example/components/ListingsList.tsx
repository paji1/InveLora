import { useLanguageStore } from "@/lib/language-store";
import { formatCurrency } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const ListingsList = ({ listings }) => {
    const { t } = useLanguageStore();

    return (
        <div className="space-y-4">
            {listings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden border-border/60 hover:shadow-card-hover transition-all">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 h-48 md:h-auto">
                            <img
                                src={listing.image || "/placeholder.svg?height=200&width=300"}
                                alt={t("BuyBusiness.listings.businessImageAlt")}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 p-4 md:p-6 flex flex-col">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{listing.title}</h3>
                                    <div className="flex items-center text-sm text-muted-foreground mt-1 flex-wrap gap-y-1">
                                        <div className="flex items-center">
                                            <span>{listing.industry}</span>
                                        </div>
                                        <span className="mx-2 text-muted-foreground/50">•</span>
                                        <div className="flex items-center">
                                            <span>{listing.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-lg font-bold text-finance-600 whitespace-nowrap">
                                    {formatCurrency(listing.price)}
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mt-3">{listing.description}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground font-medium">
                                        {t("BuyBusiness.listings.annualRevenue")}
                                    </span>
                                    <span className="font-semibold tabular-nums">
                                        {formatCurrency(listing.annualRevenue)}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground font-medium">
                                        {t("BuyBusiness.listings.annualProfit")}
                                    </span>
                                    <span className="font-semibold tabular-nums">
                                        {formatCurrency(listing.annualProfit)}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground font-medium">
                                        {t("BuyBusiness.listings.established")}
                                    </span>
                                    <span className="font-semibold">{listing.establishedYear}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground font-medium">
                                        {t("BuyBusiness.listings.employees")}
                                    </span>
                                    <span className="font-semibold">{listing.employees}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default ListingsList;