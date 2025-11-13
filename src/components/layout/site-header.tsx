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

const FcBarcelonaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      d="M0 20C0 8.954 8.954 0 20 0h60c11.046 0 20 8.954 20 20v80H0V20z"
      fill="#004c99"
    />
    <path
      d="M0 20C0 8.954 8.954 0 20 0h60c11.046 0 20 8.954 20 20v25H0V25z"
      fill="#a70042"
    />
    <path d="M42 45H0v-5h42z" fill="#fbb100" />
    <path d="M10 50h15v10H10zm20 0h15v10H30z" fill="#a70042" />
    <path d="M10 65h15v10H10zm20 0h15v10H30z" fill="#a70042" />
    <path d="M10 80h15v10H10zm20 0h15v10H30z" fill="#a70042" />
    <path d="M55 50h15v10H55zm20 0h15v10H75z" fill="#004c99" />
    <path d="M55 65h15v10H55zm20 0h15v10H75z" fill="#004c99" />
    <path d="M55 80h15v10H55zm20 0h15v10H75z" fill="#004c99" />
    <path
      d="M25 5L5 20h20zm20 0L25 20h20z"
      fill="#fff"
      stroke="#a70042"
      strokeWidth="2"
    />
    <path
      d="M75 5L55 20h20zm20 0L75 20h20z"
      fill="#a70042"
      stroke="#fff"
      strokeWidth="2"
    />
    <path d="M5 30l20-15v20zm20 0l20-15v20z" fill="#fff" stroke="#a70042" strokeWidth="2" />
    <path
      d="M55 30l20-15v20zm20 0l20-15v20z"
      fill="#a70042"
      stroke="#fff"
      strokeWidth="2"
    />
    <path d="M50 40 a12 12 0 0 1 0 20 a12 12 0 0 1 0-20" fill="#fbb100" />
    <path d="M50 42 a10 10 0 0 1 0 16 a10 10 0 0 1 0-16" fill="#000" />
    <path d="M50 50 a5 5 0 0 1 0-5 a5 5 0 0 0 0 5" fill="red" />
    <path
      d="M48 53h4v4h-4zm-5-3h4v4h-4zm10 0h4v4h-4zm-2.5-3h4v4h-4zm-5-3h4v4h-4z"
      fill="#fff"
    />
  </svg>
);


export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <FcBarcelonaLogo className="h-8 w-8" />
          <span className="font-bold font-headline sm:inline-block">FCB Kolkata</span>
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
                    <FcBarcelonaLogo className="h-8 w-8" />
                    <span className="font-bold font-headline">FCB Kolkata</span>
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
