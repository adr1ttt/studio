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
      d="M50 0a50 50 0 00-50 50c0 22 14.3 41 34.3 47.4.3 1 .6 2 1 2.6h29.4c.4-.6.7-1.5 1-2.6A50 50 0 0050 0z"
      fill="#004c99"
    />
    <path
      d="M50 0a50 50 0 00-50 50c0 22 14.3 41 34.3 47.4.3 1 .6 2 1 2.6h-2c-1.3-1.3-2.3-3-3-4.5-18.3-6.6-30.3-24-30.3-45.5a45 45 0 1184 22.5V50a45 45 0 01-26.4 41.2c-1.2 1-2.7 1.8-4.3 1.8h-2.6a45 45 0 01-16.7-4V50a45 45 0 0122.5-39 45 45 0 00-34-6z"
      fill="#004184"
    />
    <path d="M0 50a50 50 0 0034.3 47.4.3 1 .6 2 1 2.6h29.4c.4-.6.7-1.5 1-2.6A50 50 0 00100 50H0z" fill="#a70042" />
    <path
      d="M100 50h-2c-1.3 1.3-2.3 3-3 4.5-18.3 6.6-30.3 24-30.3 45.5h7.7c0-23.2 13-43 31.3-50h-5.7zm-65.7 47.4c.3 1 .6 2 1 2.6h-2c-1.3-1.3-2.3-3-3-4.5C12 88.8 0 69.8 0 50h5.7c1.3-1.3 2.3-3 3-4.5 18.3-6.6 30.3-24 30.3-45.5H31.6c0 23.2-13 43-31.3 50h5.7C19.3 50 31.6 32 31.6 10h7.7C39.3 32 27 50 27 50h4.3c1.3-1.3 2.3-3 3-4.5 18.3-6.6 30.3-24 30.3-45.5h7.7c0 23.2-13 43-31.3 50h5.7c14.3 0 26.6-18 26.6-40h7.7c0 22-12.3 40-30.3 45.5 1 .3 1.6.8 2.2 1.3a45 45 0 0018-20.5 45 45 0 01-26.4 41.2c-1.2 1-2.7 1.8-4.3 1.8h-2.6a45 45 0 01-16.7-4z"
      fill="#7f0030"
    />
    <path
      d="M50 0a50 50 0 00-31.6 10H10a50 50 0 00-10 10v10a50 50 0 0010 10h8.4A50 50 0 0050 0zm0 0a50 50 0 0131.6 10h8.4a50 50 0 0110 10v10a50 50 0 01-10 10h-8.4A50 50 0 0150 0z"
      fill="#c20000"
    />
    <path d="M10 20h21.6v20H10a50 50 0 010-20zM31.6 20H10v20h21.6z" fill="#fff" />
    <path d="M15 20v20h11.6V20H15z" fill="#c20000" />
    <path d="M10 25h21.6v10H10V25z" fill="#c20000" />
    <path
      d="M58.4 20H90v20H58.4zM68.4 20H90v5H68.4zm0 10H90v5H68.4zM58.4 20h5v20h-5z"
      fill="#fde400"
    />
    <path d="M63.4 20h5v20h-5zm10 0h5v20h-5zm10 0h5v20h-5z" fill="#c20000" />
    <path d="M43.8 45.5h12.4v9H43.8z" fill="#fde400" />
    <text x="45" y="53.5" fontFamily="Arial" fontSize="7" fontWeight="bold" fill="#000">FCB</text>
    <path
      d="M50 67a7 7 0 110-14 7 7 0 010 14zm0-2a5 5 0 100-10 5 5 0 000 10z"
      fill="#fde400"
    />
    <path
      d="M50 65a3 3 0 110-6 3 3 0 010 6z"
      fill="#000"
      stroke="#fff"
      strokeWidth=".5"
    />
    <path
      d="M50 65a3 3 0 100-6 3 3 0 000 6z"
      fill="none"
      stroke="#000"
      strokeWidth=".5"
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
