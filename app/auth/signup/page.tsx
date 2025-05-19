"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/use-auth";

export default function SignUpPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [accountType, setAccountType] = useState("buyer");
	const [isLoading, setIsLoading] = useState(false);
	const { signUp } = useAuth();
	const { toast } = useToast();
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast({
				variant: "destructive",
				title: "Passwords do not match",
				description: "Please make sure your passwords match.",
			});
			return;
		}

		setIsLoading(true);

		try {
			await signUp(email, password, firstName, lastName, accountType);
			toast({
				title: "Account created successfully",
				description: "Welcome to invelora!",
			});
			router.push("/dashboard");
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Sign up failed",
				description:
					"There was an error creating your account. Please try again.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="container flex h-screen w-screen flex-col items-center justify-center">
			<Link
				href="/"
				className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center justify-center text-sm font-medium"
			>
				← Back to home
			</Link>
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
				<Card>
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl">
							Create an account
						</CardTitle>
						<CardDescription>
							Enter your information to create an account
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="grid grid-cols-2 gap-6">
							<Button variant="outline">
								<svg
									className="mr-2 h-4 w-4"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="github"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										fill="#4285F4"
									/>
									<path
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										fill="#34A853"
									/>
									<path
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										fill="#FBBC05"
									/>
									<path
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										fill="#EA4335"
									/>
									<path d="M1 1h22v22H1z" fill="none" />
								</svg>
								Google
							</Button>
							<Button variant="outline">
								<svg
									className="mr-2 h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
								</svg>
								Facebook
							</Button>
						</div>
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									Or continue with
								</span>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="grid gap-4">
								<div className="grid grid-cols-2 gap-4">
									<div className="grid gap-2">
										<Label htmlFor="first-name">
											First name
										</Label>
										<Input
											id="first-name"
											type="text"
											value={firstName}
											onChange={(e) =>
												setFirstName(e.target.value)
											}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="last-name">
											Last name
										</Label>
										<Input
											id="last-name"
											type="text"
											value={lastName}
											onChange={(e) =>
												setLastName(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="name@example.com"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="password">Password</Label>
									<Input
										id="password"
										type="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="confirm-password">
										Confirm Password
									</Label>
									<Input
										id="confirm-password"
										type="password"
										value={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label>I am interested in</Label>
									<RadioGroup
										defaultValue="buyer"
										value={accountType}
										onValueChange={setAccountType}
										className="flex"
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="buyer"
												id="buyer"
											/>
											<Label htmlFor="buyer">
												Buying a business
											</Label>
										</div>
										<div className="flex items-center space-x-2 ml-4">
											<RadioGroupItem
												value="seller"
												id="seller"
											/>
											<Label htmlFor="seller">
												Selling a business
											</Label>
										</div>
										<div className="flex items-center space-x-2 ml-4">
											<RadioGroupItem
												value="both"
												id="both"
											/>
											<Label htmlFor="both">Both</Label>
										</div>
									</RadioGroup>
								</div>
								<div className="text-xs text-muted-foreground">
									By clicking Sign Up, you agree to our{" "}
									<Link
										href="/terms"
										className="text-primary hover:underline"
									>
										Terms of Service
									</Link>{" "}
									and{" "}
									<Link
										href="/privacy"
										className="text-primary hover:underline"
									>
										Privacy Policy
									</Link>
									.
								</div>
								<Button
									type="submit"
									className="w-full"
									disabled={isLoading}
								>
									{isLoading
										? "Creating account..."
										: "Sign Up"}
								</Button>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col">
						<div className="text-sm text-muted-foreground text-center">
							Already have an account?{" "}
							<Link
								href="/auth/signin"
								className="text-primary hover:underline"
							>
								Sign in
							</Link>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
