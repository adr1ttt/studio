"use client";

import { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { MembershipForm } from './components/membership-form';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const tiers = [
  {
    name: 'Student',
    price: '₹299',
    period: '/year',
    description: 'For students with a valid college ID.',
    features: [
      'Access to all public events',
      'Members-only WhatsApp group',
      'Matchday live screening entry',
      'Digital membership card',
    ],
    popular: false,
    accent: 'primary',
  },
  {
    name: 'General',
    price: '₹499',
    period: '/year',
    description: 'The standard membership for every Culer.',
    features: [
      'Everything in Student',
      'Priority event pre-bookings',
      'Merchandise discounts (10%)',
      'Voting rights in club decisions',
      'Fan of the Month eligibility',
    ],
    popular: true,
    accent: 'accent',
  },
  {
    name: 'Premium',
    price: '₹999',
    period: '/year',
    description: 'The ultimate commitment to the Blaugrana.',
    features: [
      'Everything in General',
      'Exclusive welcome kit & jersey patch',
      'VIP seating at screenings',
      'Merchandise discounts (25%)',
      'Priority access to away trips',
      'Annual members-only dinner invite',
    ],
    popular: false,
    accent: 'primary',
  },
];

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState(tiers[1]); // Default to General

  return (
    <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-24">
        <FadeIn direction="down" duration={1}>
           <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
             Choose Your Tier
           </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            Join the official FCB Kolkata family. Pick the plan that suits you best.
          </p>
        </FadeIn>
      </header>
      
      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-32 items-stretch">
        {tiers.map((tier, index) => {
          const isSelected = selectedTier.name === tier.name;
          return (
            <FadeIn key={tier.name} direction="up" delay={0.15 * index} className="h-full">
              <LiquidGlassCard
                tiltStrength={5}
                onClick={() => {
                  setSelectedTier(tier);
                }}
                className={cn(
                  "h-full flex flex-col p-10 lg:p-12 border-white/10 bg-background/20 relative cursor-pointer transition-all duration-500",
                  isSelected 
                    ? tier.popular ? "ring-4 ring-accent shadow-[0_0_60px_rgba(165,0,68,0.5)] bg-white/5" : "ring-4 ring-primary shadow-[0_0_60px_rgba(0,76,153,0.5)] bg-white/5"
                    : tier.popular ? "ring-2 ring-accent/30 shadow-[0_0_40px_rgba(165,0,68,0.2)]" : "hover:border-white/30"
                )}
              >
                {tier.popular && (
                  <Badge className={cn(
                    "absolute -top-3.5 left-1/2 -translate-x-1/2 text-white border-none px-6 h-9 text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(165,0,68,0.5)] flex items-center justify-center whitespace-nowrap z-20 transition-all duration-300",
                    isSelected ? "bg-accent scale-110" : "bg-accent/80"
                  )}>
                    <div className="flex items-center justify-center gap-2 -translate-y-[0.5px]">
                      <Star className="h-4 w-4" /> 
                      <span className="leading-none">Most Popular</span>
                    </div>
                  </Badge>
                )}
                
                <div className="mb-10">
                  <h3 className="font-headline text-3xl font-bold text-white tracking-tight mb-3">{tier.name}</h3>
                  <p className="text-foreground/60 font-medium text-lg">{tier.description}</p>
                </div>
                
                <div className="mb-10">
                  <span className="font-headline text-6xl font-bold text-white tracking-tighter">{tier.price}</span>
                  <span className="text-foreground/50 text-xl font-medium ml-2">{tier.period}</span>
                </div>
                
                <ul className="space-y-5 mb-12 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className={`h-6 w-6 shrink-0 mt-0.5 ${tier.popular ? 'text-accent drop-shadow-[0_0_8px_rgba(165,0,68,0.8)]' : 'text-primary drop-shadow-[0_0_8px_rgba(0,76,153,0.8)]'}`} />
                      <span className="text-foreground/80 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <MagneticHover strength={15}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTier(tier);
                      document.getElementById('membership-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    size="lg"
                    className={cn(
                      "w-full h-16 rounded-full font-bold text-xl border-none transition-all",
                      tier.popular
                        ? "bg-accent text-white hover:bg-accent/90 shadow-[0_0_30px_rgba(165,0,68,0.4)]"
                        : "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    )}
                  >
                    {isSelected ? "Selected" : "Get Started"}
                  </Button>
                </MagneticHover>
              </LiquidGlassCard>
            </FadeIn>
          );
        })}
      </div>

      {/* Registration Form */}
      <div id="membership-form" className="max-w-2xl mx-auto scroll-mt-32">
        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-white tracking-tight">Register Now</h2>
            <p className="text-foreground/80 mt-6 text-xl font-medium">Fill in your details to get started.</p>
          </div>
          <LiquidGlassCard tiltStrength={2} className="bg-background/30 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-3xl">
             <MembershipForm selectedTier={selectedTier} />
          </LiquidGlassCard>
        </FadeIn>
      </div>
    </div>
  );
}
