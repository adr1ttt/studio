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
        fill="#A70042"
        d="M0 50V20C0 8.954 8.954 0 20 0h60c11.046 0 20 8.954 20 20v30H0z"
      />
      <path
        fill="#004C99"
        d="M0 50h100v30c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V50z"
      />
      <path fill="#EDBB00" d="M44 50H10v35c0 2.761 2.239 5 5 5h29V50z" />
      <path fill="#EDBB00" d="M90 50H56v35c0 2.761-2.239 5-5 5h29c2.761 0 5-2.239 5-5V50z" />
      <path fill="#A70042" d="M10 50h34v12H10zM10 70h34v12H10z" />
      <path fill="#004C99" d="M56 50h34v12H56zM56 70h34v12H56z" />
      <path
        fill="#A70042"
        d="M10 10h12v12H10zM28 10h12v12H28zM10 28h12v12H10zM28 28h12v12H28z"
      />
      <path
        fill="#004C99"
        d="M58 10h12v12H58zM76 10h12v12H76zM58 28h12v12H58zM76 28h12v12H76z"
      />
      <path fill="#EDBB00" d="M44 44h12v12H44z" />
      <path
        d="M50 50c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z"
        fill="#EDBB00"
      />
      <path d="M50 53c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
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
