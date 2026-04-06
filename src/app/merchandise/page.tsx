"use client";

import { useState } from 'react';
import Image from 'next/image';
import { merchandiseItems } from '@/lib/mock-data';
import { getImageById } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { Badge } from '@/components/ui/badge';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSession } from '@/lib/actions/auth';
import { useCart } from '@/components/cart-provider';
import { useToast } from '@/hooks/use-toast';

const categories = ['All', 'Apparel', 'Accessories', 'Memorabilia'] as const;

export default function MerchandisePage() {
  const [filter, setFilter] = useState<string>('All');
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async (item: typeof merchandiseItems[0]) => {
    const isAuth = await getSession();
    if (!isAuth) {
      router.push('/login?callbackUrl=/merchandise');
    } else {
      addToCart(item);
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
      });
    }
  };

  const filteredItems = filter === 'All'
    ? merchandiseItems
    : merchandiseItems.filter(item => item.category === filter);

  return (
    <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16 relative">
        {/* Subtle background glow for the header */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <FadeIn direction="down" duration={1} className="relative z-10">
          <Badge className="mb-6 bg-accent/20 text-accent border border-accent/30 text-sm px-5 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(165,0,68,0.3)]">
            Official Penya Store
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
            Merchandise
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            Wear the colors with pride. Explore our exclusive collection of club apparel and accessories.
          </p>
        </FadeIn>
      </header>

      {/* Category Filter */}
      <FadeIn direction="up" delay={0.4}>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-base font-medium tracking-wide transition-all border",
                filter === cat
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(0,76,153,0.5)]"
                  : "liquid-glass border-white/10 text-foreground/70 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Merch Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => {
          const img = getImageById(item.imagePlaceholder);
          
          return (
            <FadeIn key={item.id} delay={0.1 * index} direction="up" className="h-full">
              <LiquidGlassCard tiltStrength={4} className="bg-background/20 border-white/10 p-5 group flex flex-col h-full hover:bg-background/40 transition-colors">
                
                {/* Image Container */}
                <div className="relative h-72 rounded-xl overflow-hidden mb-6 bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  {/* Status Badge overlay */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge 
                      className={cn(
                        "px-3 py-1 font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-lg border-none",
                        item.status === 'In Stock' ? 'bg-green-500/80 text-white' : 
                        item.status === 'Pre-order' ? 'bg-accent/90 text-white' : 
                        'bg-white/20 text-white'
                      )}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit text-[10px] uppercase tracking-widest font-semibold border-white/20 text-white/50 mb-3">
                    {item.category}
                  </Badge>
                  
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight mb-2 leading-tight">
                    {item.name}
                  </h3>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="font-headline text-3xl font-bold text-white">{item.price}</span>
                    
                    <MagneticHover strength={15}>
                      <button className={cn(
                        "p-3 rounded-full flex items-center justify-center transition-all",
                        item.status === 'Coming Soon' 
                          ? "bg-white/10 text-white/30 cursor-not-allowed" 
                          : "bg-primary text-white hover:bg-primary/80 shadow-[0_0_15px_rgba(0,76,153,0.4)]"
                      )}
                      disabled={item.status === 'Coming Soon'}
                      onClick={() => handleAddToCart(item)}
                      title={item.status === 'Coming Soon' ? "Not available yet" : "Add to cart"}
                      >
                        <ShoppingBag className="h-5 w-5" />
                      </button>
                    </MagneticHover>
                  </div>
                </div>
              </LiquidGlassCard>
            </FadeIn>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="mt-32">
        <FadeIn direction="up">
           <LiquidGlassCard tiltStrength={2} className="bg-gradient-to-br from-primary/20 to-accent/20 border-white/20 p-12 text-center relative overflow-hidden">
             {/* Decorative background logo element */}
             <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
               <ShoppingBag className="w-96 h-96" />
             </div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight mb-4">Want exclusive member discounts?</h2>
               <p className="text-xl text-foreground/80 font-medium mb-8 max-w-2xl mx-auto">General and Premium members get up to 25% off all official merchandise.</p>
               <MagneticHover strength={20}>
                 <Button asChild size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg border-none shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                   <Link href="/membership">Upgrade Membership <ArrowRight className="ml-2 h-5 w-5" /></Link>
                 </Button>
               </MagneticHover>
             </div>
           </LiquidGlassCard>
        </FadeIn>
      </section>
    </div>
  );
}
