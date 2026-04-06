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

      <FadeIn direction="up" delay={0.4} className="mb-24">
        <LiquidGlassCard tiltStrength={3} className="overflow-hidden bg-background/20 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-3xl">
          <div className="lg:flex">
            <div className="lg:w-1/2 relative min-h-[400px]">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-background/30 backdrop-blur-md">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline text-white mb-6 tracking-tight">The Beginning</h2>
              <p className="text-foreground/80 mb-10 text-lg leading-relaxed font-medium">
                Our journey started in 2012 with a handful of passionate FC Barcelona supporters who gathered in a small café to watch El Clásico. The energy was electric, and we knew we had something special. We decided to create a community where fans from all over Kolkata could share their love for the club.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold font-headline text-white mb-6 tracking-tight">Growth and Community</h2>
              <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                Over the years, our fanpage has grown into one of the most active fan communities in India. We've organized countless screenings, tournaments, and charity events, bringing together thousands of Cules. Our goal is to create a home away from home for every Barça fan in Kolkata.
              </p>
            </div>
          </div>
        </LiquidGlassCard>
      </FadeIn>

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
