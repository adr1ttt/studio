"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  Menu, 
  User, 
  LogOut, 
  ShoppingBag, 
  Trash2, 
  IdCard, 
  Settings, 
  LayoutDashboard 
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose, 
  SheetHeader, 
  SheetTitle 
} from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger, 
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { MagneticHover } from "@/components/ui/magnetic-hover";
import { FadeIn } from "@/components/ui/fade-in";
import { getSession, logout } from "@/lib/actions/auth";
import { useCart } from "@/components/cart-provider";
import { useToast } from "@/hooks/use-toast";
import { getImageById } from "@/lib/placeholder-images";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/squad", label: "Squad" },
  { href: "/merchandise", label: "Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/membership", label: "Membership" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    getSession().then(setIsAuth);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 bg-background/60 backdrop-blur-2xl">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <FadeIn direction="right" duration={0.8}>
          <MagneticHover strength={20}>
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image 
                  src="/logo.png" 
                  alt="FCB Kolkata Logo" 
                  fill 
                  className="object-contain drop-shadow-[0_0_15px_rgba(0,76,153,0.3)]" 
                  priority 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold font-headline text-lg md:text-2xl tracking-tighter leading-none">FCB Kolkata</span>
                <span className="text-[10px] md:text-xs text-primary font-bold tracking-widest uppercase mt-1">Official Penya</span>
              </div>
            </Link>
          </MagneticHover>
        </FadeIn>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item, i) => (
            <FadeIn key={item.href} delay={i * 0.1} direction="down">
              <MagneticHover strength={15}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm lg:text-base font-medium tracking-wide transition-all duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                    pathname === item.href ? "text-primary after:w-full" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </MagneticHover>
            </FadeIn>
          ))}
        </nav>

        {/* Global Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Cart Drawer */}
          <FadeIn delay={0.6} direction="left">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative rounded-full liquid-glass border-white/20 hover:bg-white/10 w-10 h-10 md:w-12 md:h-12 border transition-all">
                  <ShoppingBag className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-accent text-[8px] md:text-[10px] font-bold text-white shadow-[0_0_10px_rgba(165,0,68,0.8)] border border-white/20 animate-in zoom-in-50">
                      {items.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background/95 backdrop-blur-3xl border-l-white/10 sm:max-w-md w-full flex flex-col p-0">
                <SheetHeader className="p-6 border-b border-white/10 shrink-0 text-left">
                  <SheetTitle className="font-headline text-2xl font-bold tracking-tight text-white flex items-center gap-3">
                    <ShoppingBag className="h-6 w-6 text-accent" /> Your Cart
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-40">
                      <ShoppingBag className="h-16 w-16" />
                      <p className="text-lg font-medium">Your cart is currently empty.</p>
                    </div>
                  ) : (
                    items.map((item) => {
                      const img = getImageById(item.imagePlaceholder);
                      return (
                        <div key={item.cartItemId} className="flex gap-4 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/[0.08] transition-colors">
                          <div className="h-20 w-20 relative rounded-lg overflow-hidden shrink-0 bg-black/20">
                            {img && <Image src={img.imageUrl} alt={item.name} fill className="object-cover" />}
                          </div>
                          <div className="flex flex-col flex-1 justify-between">
                            <div>
                              <h4 className="text-white font-medium text-sm leading-tight line-clamp-2">{item.name}</h4>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">{item.category}</p>
                            </div>
                            <div className="flex justify-between items-end">
                              <span className="font-headline font-bold text-lg text-white">{item.price}</span>
                              <button 
                                onClick={() => removeFromCart(item.cartItemId)} 
                                className="p-1.5 text-white/30 hover:text-red-400 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                <div className="p-6 border-t border-white/10 shrink-0 bg-black/20">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-foreground/60 font-medium">Subtotal</span>
                    <span className="font-headline text-3xl font-bold text-white">₹{totalPrice}</span>
                  </div>
                  <MagneticHover strength={10}>
                    <Button
                      disabled={items.length === 0}
                      onClick={() => {
                        clearCart();
                        toast({
                          title: "Successful Order!",
                          description: "Your official merchandise will arrive soon.",
                        });
                      }}
                      className="w-full h-14 bg-accent hover:bg-accent/90 text-white rounded-xl shadow-[0_0_20px_rgba(165,0,68,0.3)] font-bold text-lg border-none transition-all active:scale-95"
                    >
                      Checkout Securely
                    </Button>
                  </MagneticHover>
                </div>
              </SheetContent>
            </Sheet>
          </FadeIn>

          {/* User Auth / Profile */}
          <FadeIn delay={0.7} direction="left">
            {isAuth ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full liquid-glass border-white/20 hover:bg-white/10 w-10 h-10 md:w-12 md:h-12 border transition-all">
                    <User className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/90 backdrop-blur-3xl border-white/10 w-60 mt-2 p-2">
                  <DropdownMenuItem asChild className="text-foreground/80 hover:text-white hover:bg-white/10 cursor-pointer font-medium p-3 rounded-lg transition-colors">
                    <Link href="/profile?tab=overview" className="flex items-center w-full">
                      <LayoutDashboard className="h-4 w-4 mr-3 text-white/50" /> Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-foreground/80 hover:text-white hover:bg-white/10 cursor-pointer font-medium p-3 rounded-lg transition-colors">
                    <Link href="/profile?tab=membership" className="flex items-center w-full">
                      <IdCard className="h-4 w-4 mr-3 text-white/50" /> Membership
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-foreground/80 hover:text-white hover:bg-white/10 cursor-pointer font-medium p-3 rounded-lg transition-colors">
                    <Link href="/profile?tab=orders" className="flex items-center w-full">
                      <ShoppingBag className="h-4 w-4 mr-3 text-white/50" /> Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-foreground/80 hover:text-white hover:bg-white/10 cursor-pointer font-medium p-3 rounded-lg transition-colors">
                    <Link href="/profile?tab=settings" className="flex items-center w-full">
                      <Settings className="h-4 w-4 mr-3 text-white/50" /> Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/5 my-2" />
                  <DropdownMenuItem 
                    className="text-red-400 focus:text-red-300 focus:bg-red-500/10 cursor-pointer font-medium p-3 rounded-lg transition-colors"
                    onClick={() => logout().then(() => setIsAuth(false))}
                  >
                    <LogOut className="h-4 w-4 mr-3" /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <MagneticHover strength={30}>
                <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(0,76,153,0.4)] transition-all px-4 md:px-8 h-10 md:h-12 font-bold text-sm md:text-base border border-primary/50">
                  <Link href="/login">Login</Link>
                </Button>
              </MagneticHover>
            )}
          </FadeIn>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 w-10 h-10">
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background/95 backdrop-blur-3xl border-r-white/10 p-0 overflow-hidden flex flex-col">
                <SheetHeader className="p-8 border-b border-white/5 shrink-0">
                  <SheetTitle className="text-left font-headline text-2xl font-bold flex items-center gap-3">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                    FCB Kolkata
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto px-4 py-8">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-3xl font-headline font-bold p-4 rounded-2xl transition-all active:scale-95",
                            pathname === item.href
                              ? "text-primary bg-primary/10 pl-8"
                              : "text-foreground/50 hover:text-white"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <div className="p-8 border-t border-white/5 mt-auto">
                   <p className="text-xs font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">Official Supporters Hub</p>
                   <p className="text-[10px] text-foreground/20 font-medium tracking-widest uppercase">Visca el Barça • Visca Catalunya</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
