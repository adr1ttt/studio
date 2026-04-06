"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MagneticHover } from "@/components/ui/magnetic-hover";
import { FadeIn } from "@/components/ui/fade-in";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/squad", label: "Squad" },
  { href: "/membership", label: "Membership" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/40 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-24 max-w-screen-2xl items-center">
        <FadeIn direction="down" duration={1}>
          <MagneticHover strength={15}>
            <Link href="/" className="mr-8 flex items-center space-x-3">
              <Image src="/logo.png" alt="FCB Kolkata" width={80} height={80} className="object-contain drop-shadow-2xl" priority />
              <div className="flex flex-col">
                <span className="font-bold font-headline text-xl leading-none tracking-tight hidden sm:block">FCB Kolkata</span>
                <span className="text-xs text-primary font-medium tracking-widest uppercase mt-1 hidden sm:block">Official Penya</span>
              </div>
            </Link>
          </MagneticHover>
        </FadeIn>
        
        <div className="flex flex-1 items-center justify-end">
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 text-sm md:flex">
            {navItems.map((item, i) => (
              <FadeIn key={item.href} delay={i * 0.1 + 0.2} direction="down">
                 <MagneticHover strength={30}>
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-all duration-300 font-medium tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                        pathname === item.href ? "text-primary after:w-full" : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                 </MagneticHover>
              </FadeIn>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 ml-10">
             <FadeIn delay={0.8} direction="left">
               <MagneticHover strength={40}>
                 <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,76,153,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,76,153,0.6)]">
                    <Link href="/membership">Join Now</Link>
                 </Button>
               </MagneticHover>
             </FadeIn>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background/80 backdrop-blur-3xl border-r-white/10">
                <div className="p-4 pt-10">
                  <Link href="/" className="flex items-center space-x-3 mb-12">
                     <Image src="/logo.png" alt="FCB Kolkata" width={64} height={64} className="object-contain" priority />
                    <span className="font-bold font-headline text-2xl tracking-tight">FCB Kolkata</span>
                  </Link>
                  <nav className="flex flex-col gap-8">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-2xl font-headline tracking-tight transition-all active:scale-95",
                            pathname === item.href
                              ? "text-primary translate-x-2"
                              : "text-muted-foreground hover:text-foreground"
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
