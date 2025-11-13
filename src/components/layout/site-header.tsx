"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const SoccerBallIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 1 8.66 5H3.34A10 10 0 0 1 12 2Z" />
      <path d="m17.9 15.25-3.9-2.25-3.9 2.25 1.45 4.5h4.9l1.45-4.5z" />
      <path d="m6.1 15.25 3.9-2.25 3.9 2.25-1.45 4.5h-4.9L6.1 15.25z" />
      <path d="m12 7.5-3.9 2.25 1.45 4.5h4.9l1.45-4.5L12 7.5z" />
    </svg>
  );

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SoccerBallIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">Kolkata Blaugrana</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end">
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 ml-6">
             <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/membership">Join Now</Link>
             </Button>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                    <SoccerBallIcon className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Kolkata Blaugrana</span>
                  </Link>
                  <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === item.href
                              ? "text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
