import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImageById } from '@/lib/placeholder-images';
import { events } from '@/lib/mock-data';
import { FadeIn } from '@/components/ui/fade-in';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';

export default function Home() {
  const heroImage = getImageById('hero-banner');
  const nextEvent = events[0];
  const nextEventImage = getImageById(nextEvent.imageId);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center text-center overflow-hidden pt-20">
        {heroImage && (
          <div className="absolute inset-0 z-0">
             <Image
               src={heroImage.imageUrl}
               alt={heroImage.description}
               fill
               className="object-cover opacity-[0.35] lg:opacity-50 scale-105 transform motion-safe:animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
               priority
               data-ai-hint={heroImage.imageHint}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent" />
          </div>
        )}
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col items-center">
          <FadeIn direction="down" duration={1.2}>
            <Badge variant="outline" className="mb-10 border-primary/50 text-white backdrop-blur-md px-6 py-2 text-sm uppercase tracking-widest font-semibold liquid-glass shadow-2xl">
              Més Que Un Club
            </Badge>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} duration={1.2}>
            <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-bold font-headline tracking-tighter leading-[1] text-shadow-lg pb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/70">Visca el Barça</span>
              <br className="hidden md:block" />
              <span className="text-gradient drop-shadow-sm"> Kolkata.</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4} duration={1.2}>
            <p className="mt-8 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-foreground/80 font-medium leading-relaxed drop-shadow-md">
              The heartbeat of FC Barcelona in the City of Joy. Join the most passionate, authentic, and vibrant penya in India.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.6} duration={1.2}>
            <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
              <MagneticHover strength={40}>
                <Button size="lg" asChild className="w-full sm:w-auto h-16 px-10 text-lg rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_40px_rgba(0,76,153,0.5)] transition-all hover:shadow-[0_0_60px_rgba(0,76,153,0.8)] border border-primary/50">
                  <Link href="/events">
                    Upcoming Matches <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </MagneticHover>
              <MagneticHover strength={20}>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-16 px-10 text-lg rounded-full liquid-glass border-white/20 hover:bg-white/15 transition-all font-medium text-foreground">
                  <Link href="/membership">
                    Become a Member <UserPlus className="ml-3 h-6 w-6 text-accent" />
                  </Link>
                </Button>
              </MagneticHover>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next Event Section */}
      <section id="next-event" className="py-24 lg:py-32 w-full max-w-7xl px-4 relative z-10 mt-12">
        <FadeIn direction="up" duration={1}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Next Matchday</h2>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium">Experience the tactical brilliance live with hundreds of culers. The atmosphere is unmatched.</p>
            </div>
            <MagneticHover strength={20}>
              <Button variant="ghost" asChild className="hidden md:flex text-primary hover:bg-primary/10 rounded-full group h-14 px-8 text-lg font-medium border border-transparent hover:border-primary/20 backdrop-blur-sm">
                 <Link href="/events">View all events <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" /></Link>
              </Button>
            </MagneticHover>
          </div>
        </FadeIn>

        <LiquidGlassCard tiltStrength={8} className="mx-auto border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] bg-background/30 max-w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[55%] relative min-h-[400px] lg:min-h-full overflow-hidden p-6 lg:p-8">
              {nextEventImage && (
                 <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                   <Image
                      src={nextEventImage.imageUrl}
                      alt={nextEvent.name}
                      fill
                      className="object-cover transform transition-transform duration-[10s] hover:scale-110 ease-out"
                      data-ai-hint={nextEventImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                 </div>
              )}
            </div>
            <div className="lg:w-[45%] flex flex-col p-10 lg:p-16 justify-center relative">
              <Badge variant="default" className="w-fit bg-accent/20 text-accent border border-accent/30 mb-8 text-sm px-5 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(165,0,68,0.3)]">Featured Fixture</Badge>
              <h3 className="font-headline text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-white leading-tight">{nextEvent.name}</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-5 text-muted-foreground text-xl">
                  <div className="p-3.5 rounded-full bg-white/5 border border-white/10 shrink-0 shadow-inner"><CalendarDays className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(0,76,153,0.8)]" /></div>
                  <span className="font-medium text-foreground/90 tracking-wide">{nextEvent.date} <span className="mx-3 opacity-30 text-2xl font-light">|</span> {nextEvent.time}</span>
                </div>
                 <div className="flex items-center gap-5 text-muted-foreground text-xl">
                  <div className="p-3.5 rounded-full bg-white/5 border border-white/10 shrink-0 shadow-inner"><MapPin className="h-6 w-6 text-accent drop-shadow-[0_0_8px_rgba(165,0,68,0.8)]" /></div>
                  <span className="font-medium text-foreground/90 tracking-wide">{nextEvent.venue}, {nextEvent.location}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-12 font-medium">{nextEvent.description}</p>
              
              <MagneticHover strength={30}>
                <Button size="lg" asChild className="w-full sm:w-auto h-16 rounded-full bg-white text-black hover:bg-gray-100 transition-colors font-bold text-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] border-none">
                  <Link href="/events">
                    Secure Your Spot
                  </Link>
                </Button>
              </MagneticHover>
            </div>
          </div>
        </LiquidGlassCard>
        
        <div className="flex justify-center mt-16 md:hidden">
          <MagneticHover strength={15}>
            <Button variant="outline" asChild className="rounded-full liquid-glass h-14 px-10 text-lg border-white/20">
               <Link href="/events">View all events <ArrowRight className="ml-3 h-5 w-5" /></Link>
            </Button>
          </MagneticHover>
        </div>
      </section>
    </div>
  );
}
