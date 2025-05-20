import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguageStore } from "@/lib/language-store";
import { FeaturedListings } from "@/components/featured-listings";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ListingsTabs = () => {
    const { t } = useLanguageStore();

    return (
        <Tabs defaultValue="grid" className="w-full">
            <div className="w-full items-center inline-flex justify-between">
                <div className="w-fit">
                    <Select defaultValue="featured">
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder={t("BuyBusiness.sort.placeholder")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">{t("BuyBusiness.sort.featured")}</SelectItem>
                            <SelectItem value="newest">{t("BuyBusiness.sort.newest")}</SelectItem>
                            <SelectItem value="price-low">{t("BuyBusiness.sort.priceLow")}</SelectItem>
                            <SelectItem value="price-high">{t("BuyBusiness.sort.priceHigh")}</SelectItem>
                            <SelectItem value="revenue">{t("BuyBusiness.sort.revenue")}</SelectItem>
                            <SelectItem value="profit">{t("BuyBusiness.sort.profit")}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <TabsList className="grid grid-cols-2 w-fit">
                    <TabsTrigger value="grid" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid-2x2">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 12h18" />
                            <path d="M12 3v18" />
                        </svg>
                    </TabsTrigger>
                    <TabsTrigger value="list" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list">
                            <line x1="8" x2="21" y1="6" y2="6" />
                            <line x1="8" x2="21" y1="12" y2="12" />
                            <line x1="8" x2="21" y1="18" y2="18" />
                            <line x1="3" x2="3.01" y1="6" y2="6" />
                            <line x1="3" x2="3.01" y1="12" y2="12" />
                            <line x1="3" x2="3.01" y1="18" y2="18" />
                        </svg>
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="grid" className="mt-6">
                <FeaturedListings />
            </TabsContent>
            <TabsContent value="list" className="mt-6">
                {/* Implement ListingsList component here */}
            </TabsContent>
        </Tabs>
    );
};

export default ListingsTabs;