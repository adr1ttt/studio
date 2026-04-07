import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getImageById } from '@/lib/placeholder-images';
import { organizers } from '@/lib/mock-data';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';

export default function AboutPage() {
  const aboutImage = getImageById('about-us-group');

  return (
    <div className="container mx-auto max-w-6xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-24">
        <FadeIn direction="down" duration={1}>
           <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
             Our Story
           </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            From a small group of friends to a family of thousands, this is how Kolkata became part of the Blaugrana family.
          </p>
        </FadeIn>
      </header>

      {/* Timeline Section */}
      <section className="mb-32 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />
        
        <div className="space-y-24 relative">
          {[
            { year: "2012", title: "The First Gathering", desc: "A handful of friends meet at a small South Kolkata café to watch El Clásico. The idea for FCB Kolkata is born." },
            { year: "2015", title: "Community Surge", desc: "Our Facebook group hits 10,000 members. We host our first stadium-scale screening with over 500 fans." },
            { year: "2019", title: "Official Recognition", desc: "FC Barcelona officially recognises us as a Penya. We receive our official license and global support." },
            { year: "2022", title: "Charity & Impact", desc: "Launch of 'Culers for Change'. We raise our first ₹1L for local sports schools, bridging football and social good." },
            { year: "2026", title: "Digital Overhaul", desc: "Launch of the premium fan hub, connecting culers across the city with real-time news, shop, and community tools." }
          ].map((item, i) => (
            <div key={item.year} className="relative">
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,76,153,1)] z-10 hidden md:block" />
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2">
                  <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                    <LiquidGlassCard className={`p-8 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} border-white/5`}>
                      <span className="text-primary font-headline text-3xl font-bold mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                    </LiquidGlassCard>
                  </FadeIn>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-16">
          <FadeIn direction="down" duration={1}>
            <h2 className="text-4xl lg:text-5xl font-bold font-headline text-white tracking-tight">Meet the Team</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground/80 font-medium">
              The dedicated individuals who work tirelessly to bring our community together.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {organizers.map((organizer, index) => {
            const organizerImage = getImageById(organizer.imageId);
            return (
              <FadeIn key={organizer.id} delay={0.1 * index} direction="up" duration={0.8}>
                <LiquidGlassCard tiltStrength={8} className="text-center p-10 bg-background/20 border-white/10 hover:bg-background/40 transition-colors h-full flex flex-col items-center shadow-xl">
                    <Avatar className="h-32 w-32 mb-6 ring-4 ring-white/10 shadow-2xl">
                      {organizerImage && <AvatarImage src={organizerImage.imageUrl} alt={organizer.name} className="object-cover" data-ai-hint={organizerImage.imageHint} />}
                      <AvatarFallback className="text-3xl font-bold text-black bg-white/90">{organizer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-2xl font-bold text-white mb-3 tracking-wide">{organizer.name}</h3>
                    <p className="text-accent text-lg font-semibold tracking-wider uppercase drop-shadow-[0_0_8px_rgba(165,0,68,0.5)]">{organizer.role}</p>
                </LiquidGlassCard>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
