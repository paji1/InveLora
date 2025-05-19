"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/use-auth";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguageStore } from "@/lib/language-store";
import { useEffect, useState } from "react";

export function Header() {
	const pathname = usePathname();
	const { user, signOut } = useAuth();
	const { t, locale } = useLanguageStore();
	const [scrolled, setScrolled] = useState(false);

	// Handle scroll effect for header
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isRtl = locale === "ar";

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-200",
				scrolled
					? "bg-background/95 backdrop-blur-md shadow-sm"
					: "bg-background"
			)}
		>
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-6">
					<Link href="/" className="flex items-center">
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded-md bg-finance-600 flex items-center justify-center">
								<span className="font-bold text-white">IX</span>
							</div>
							<span className="font-display font-bold text-xl hidden sm:inline-block">
								InveLora
							</span>
						</div>
					</Link>

					<nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
						<Link
							href="/buy-business"
							className={cn(
								"px-3 py-2 rounded-md text-sm font-medium transition-colors",
								pathname === "/buy-business"
									? "bg-primary/10 text-primary"
									: "text-foreground/70 hover:text-foreground hover:bg-accent"
							)}
						>
							{t("Navigation.buyBusiness")}
						</Link>
						<Link
							href="/sell-business"
							className={cn(
								"px-3 py-2 rounded-md text-sm font-medium transition-colors",
								pathname === "/sell-business"
									? "bg-primary/10 text-primary"
									: "text-foreground/70 hover:text-foreground hover:bg-accent"
							)}
						>
							{t("Navigation.sellBusiness")}
						</Link>
						<Link
							href="/advisors"
							className={cn(
								"px-3 py-2 rounded-md text-sm font-medium transition-colors",
								pathname === "/advisors"
									? "bg-primary/10 text-primary"
									: "text-foreground/70 hover:text-foreground hover:bg-accent"
							)}
						>
							{t("Navigation.advisors")}
						</Link>
						<Link
							href="/resources"
							className={cn(
								"px-3 py-2 rounded-md text-sm font-medium transition-colors",
								pathname === "/resources"
									? "bg-primary/10 text-primary"
									: "text-foreground/70 hover:text-foreground hover:bg-accent"
							)}
						>
							{t("Navigation.resources")}
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-2">
					<ModeToggle />
					<LanguageSwitcher />

					{user ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full"
								>
									<User className="h-5 w-5" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align={isRtl ? "start" : "end"}
								className="w-56"
							>
								<DropdownMenuItem asChild>
									<Link href="/dashboard" className="w-full">
										{t("Navigation.dashboard")}
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/profile" className="w-full">
										{t("Navigation.profile")}
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										href="/my-listings"
										className="w-full"
									>
										{t("Navigation.myListings")}
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/messages" className="w-full">
										{t("Navigation.messages")}
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => signOut()}
									className="w-full"
								>
									{t("Navigation.signOut")}
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div className="hidden md:flex items-center gap-2">
							<Link href="/auth/signin">
								<Button variant="outline" size="sm">
									{t("Navigation.signIn")}
								</Button>
							</Link>
							<Link href="/auth/signup">
								<Button size="sm">
									{t("Navigation.signUp")}
								</Button>
							</Link>
						</div>
					)}

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">
									{t("Navigation.toggleMenu")}
								</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side={isRtl ? "left" : "right"}
							className="w-[300px]"
						>
							<div className="flex flex-col gap-6 py-6">
								<Link
									href="/"
									className="flex items-center gap-2"
								>
									<div className="h-8 w-8 rounded-md bg-finance-600 flex items-center justify-center">
										<span className="font-bold text-white">
											BX
										</span>
									</div>
									<span className="font-display font-bold text-xl">
										{t("Navigation.brand")}
									</span>
								</Link>

								<nav className="flex flex-col gap-2">
									<Link
										href="/buy-business"
										className={cn(
											"px-3 py-2 rounded-md text-base font-medium transition-colors",
											pathname === "/buy-business"
												? "bg-primary/10 text-primary"
												: "text-foreground/70 hover:text-foreground hover:bg-accent"
										)}
									>
										{t("Navigation.buyBusiness")}
									</Link>
									<Link
										href="/sell-business"
										className={cn(
											"px-3 py-2 rounded-md text-base font-medium transition-colors",
											pathname === "/sell-business"
												? "bg-primary/10 text-primary"
												: "text-foreground/70 hover:text-foreground hover:bg-accent"
										)}
									>
										{t("Navigation.sellBusiness")}
									</Link>
									<Link
										href="/advisors"
										className={cn(
											"px-3 py-2 rounded-md text-base font-medium transition-colors",
											pathname === "/advisors"
												? "bg-primary/10 text-primary"
												: "text-foreground/70 hover:text-foreground hover:bg-accent"
										)}
									>
										{t("Navigation.advisors")}
									</Link>
									<Link
										href="/resources"
										className={cn(
											"px-3 py-2 rounded-md text-base font-medium transition-colors",
											pathname === "/resources"
												? "bg-primary/10 text-primary"
												: "text-foreground/70 hover:text-foreground hover:bg-accent"
										)}
									>
										{t("Navigation.resources")}
									</Link>
								</nav>

								{!user && (
									<div className="flex flex-col gap-2 mt-4">
										<Link
											href="/auth/signin"
											className="w-full"
										>
											<Button
												variant="outline"
												className="w-full"
											>
												{t("Navigation.signIn")}
											</Button>
										</Link>
										<Link
											href="/auth/signup"
											className="w-full"
										>
											<Button className="w-full">
												{t("Navigation.signUp")}
											</Button>
										</Link>
									</div>
								)}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
