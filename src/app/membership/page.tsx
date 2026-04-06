import { CheckCircle } from 'lucide-react';
import { MembershipForm } from './components/membership-form';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';

const benefits = [
  "Exclusive access to event pre-bookings",
  "Discounts on merchandise and event tickets",
  "Entry to members-only WhatsApp group",
  "Chance to be featured as 'Fan of the Month'",
  "Priority seating at live screenings",
  "Voting rights in fan club decisions",
];

export default function MembershipPage() {
  return (
    <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-24">
        <FadeIn direction="down" duration={1}>
           <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
             Become a Premium Member
           </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            Join the official FCB Kolkata family and unlock exclusive perks.
          </p>
        </FadeIn>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="space-y-10 order-2 lg:order-1">
          <FadeIn direction="left" delay={0.3}>
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-white tracking-tight leading-tight">Membership Benefits</h2>
            <p className="text-foreground/80 mt-6 text-xl leading-relaxed">
                As an official premium member, you're not just a fan; you're part of the core. Enjoy these benefits for just ₹499/year.
            </p>
          </FadeIn>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} direction="up" delay={0.4 + (index * 0.1)}>
                <li className="flex items-center p-6 rounded-2xl liquid-glass bg-white/5 border-white/10 shadow-lg hover:-translate-y-1 transition-transform">
                  <CheckCircle className="h-8 w-8 text-accent mr-5 flex-shrink-0 drop-shadow-[0_0_8px_rgba(165,0,68,0.8)]" />
                  <span className="text-white font-medium text-lg lg:text-xl tracking-wide">{benefit}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

        <FadeIn direction="right" delay={0.5} className="h-full order-1 lg:order-2">
           <LiquidGlassCard tiltStrength={2} className="h-full bg-background/30 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-3xl">
               <MembershipForm />
           </LiquidGlassCard>
        </FadeIn>
      </div>
    </div>
  );
}
