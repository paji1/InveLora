import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useLanguageStore } from "@/lib/language-store";

interface Listing {
  id: string;
  title: string;
  image: string;
  industry: string;
  location: string;
  annualRevenue: number;
  annualProfit: number;
  established: number;
  employees: number;
}

interface ListingsGridProps {
  listings: Listing[];
}

const ListingsGrid: React.FC<ListingsGridProps> = ({ listings }) => {
  const { t } = useLanguageStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map((listing) => (
        <Card key={listing.id} className="overflow-hidden border-border/60 hover:shadow-card-hover transition-all">
          <div className="flex flex-col">
            <div className="w-full h-48">
              <img
                src={listing.image}
                alt={t("BuyBusiness.listings.businessImageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col">
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
              <div className="grid grid-cols-2 gap-4 mt-4">
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
                  <span className="font-semibold">{listing.established}</span>
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

export default ListingsGrid;