import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/lib/language-store";

const SearchBar = () => {
    const { t, locale } = useLanguageStore();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // Implement search functionality here
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="relative w-full max-w-2xl mt-6">
            <div className="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground left-3">
                <Search />
            </div>
            <Input
                placeholder={t("BuyBusiness.search.placeholder")}
                className={cn("h-12 pl-10 pr-20")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <Button
                className="absolute top-1/2 -translate-y-1/2 h-10 right-1"
                onClick={handleSearch}
            >
                {t("BuyBusiness.search.button")}
            </Button>
        </div>
    );
};

export default SearchBar;