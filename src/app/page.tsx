import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, UserPlus, Users, Trophy, Calendar, Award, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getImageById } from '@/lib/placeholder-images';
import { events, galleryImages, newsItems, recentResults, upcomingFixtures, squadPlayers } from '@/lib/mock-data';
import { FadeIn } from '@/components/ui/fade-in';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { NewsTicker } from '@/components/ui/news-ticker';
import { MatchCountdown } from '@/components/ui/match-countdown';

export default function Home() {
  const heroImage = getImageById('hero-banner');
  const nextEvent = events[0];
  const nextEventImage = getImageById(nextEvent.imageId);
  const previewGallery = galleryImages.slice(0, 6);

  return (
    <div className="flex flex-col items-center">
      {/* News Ticker */}
      <NewsTicker items={newsItems.map(n => n.headline)} speed={40} />

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
              Kolkata&apos;s Official FC Barcelona Penya
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

          <div className="mt-12">
            <MatchCountdown 
              targetDate={upcomingFixtures[0].date} 
              homeTeam={upcomingFixtures[0].homeTeam} 
              awayTeam={upcomingFixtures[0].awayTeam} 
            />
          </div>
          
          <FadeIn direction="up" delay={0.6} duration={1.2}>
            <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
              <MagneticHover strength={40}>
                <Button size="lg" asChild className="w-full sm:w-auto h-16 px-10 text-lg rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_40px_rgba(0,76,153,0.5)] transition-all hover:shadow-[0_0_60px_rgba(0,76,153,0.8)] border border-primary/50">
                  <Link href="/events" className="flex items-center justify-center gap-3">
                    <span className="leading-none -translate-y-[1.5px]">Upcoming Matches</span> 
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
              </MagneticHover>
              <MagneticHover strength={20}>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-16 px-10 text-lg rounded-full liquid-glass border-white/20 hover:bg-white/15 transition-all font-medium text-foreground">
                  <Link href="/membership" className="flex items-center justify-center gap-3">
                    <span className="leading-none -translate-y-[1.5px]">Become a Member</span> 
                    <UserPlus className="h-6 w-6 text-accent" />
                  </Link>
                </Button>
              </MagneticHover>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <LiquidGlassCard tiltStrength={5} className="bg-background/20 border-white/10">
                <AnimatedCounter
                  target={500}
                  suffix="+"
                  label="Active Members"
                  icon={<Users className="h-7 w-7 text-primary drop-shadow-[0_0_8px_rgba(0,76,153,0.8)]" />}
                />
              </LiquidGlassCard>
              <LiquidGlassCard tiltStrength={5} className="bg-background/20 border-white/10">
                <AnimatedCounter
                  target={50}
                  suffix="+"
                  label="Events Hosted"
                  icon={<Calendar className="h-7 w-7 text-accent drop-shadow-[0_0_8px_rgba(165,0,68,0.8)]" />}
                />
              </LiquidGlassCard>
              <LiquidGlassCard tiltStrength={5} className="bg-background/20 border-white/10">
                <AnimatedCounter
                  target={10}
                  suffix="+"
                  label="Years Active"
                  icon={<Trophy className="h-7 w-7 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />}
                />
              </LiquidGlassCard>
              <LiquidGlassCard tiltStrength={5} className="bg-background/20 border-white/10">
                <AnimatedCounter
                  target={1}
                  label="Official Penya"
                  icon={<Award className="h-7 w-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
                />
              </LiquidGlassCard>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next Event Section */}
      <section id="next-event" className="py-24 lg:py-32 w-full max-w-7xl px-4 relative z-10">
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

      {/* Fixtures & Results Preview */}
      <section className="py-24 w-full max-w-7xl px-4 relative z-10 border-t border-white/5">
        <FadeIn direction="up" duration={1}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">On The Pitch</h2>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium">Tracking the Blaugrana across all competitions.</p>
            </div>
            <MagneticHover strength={20}>
              <Button variant="ghost" asChild className="hidden md:flex text-primary hover:bg-primary/10 rounded-full group h-14 px-8 text-lg font-medium border border-transparent hover:border-primary/20 backdrop-blur-sm">
                 <Link href="/fixtures">View full calendar <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" /></Link>
              </Button>
            </MagneticHover>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Result */}
          <FadeIn direction="right" className="h-full">
            <LiquidGlassCard tiltStrength={3} className="bg-background/20 border-white/10 p-8 h-full flex flex-col justify-center">
              <h3 className="font-headline text-2xl font-bold text-white/50 tracking-widest uppercase mb-8 flex items-center gap-3"><Trophy className="h-6 w-6 text-accent" /> Latest Result</h3>
              
              {recentResults.slice(0, 1).map((result) => {
                const barcaHome = result.homeTeam === 'FC Barcelona';
                const barcaScore = barcaHome ? result.homeScore : result.awayScore;
                const opponentScore = barcaHome ? result.awayScore : result.homeScore;
                const isWin = barcaScore > opponentScore;
                
                return (
                  <div key={result.id} className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <Badge className={`px-4 py-1.5 text-xs uppercase tracking-widest font-bold border-none ${isWin ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {isWin ? 'WIN' : 'LOSS'}
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-white/60 bg-white/5 px-4 py-1.5 text-xs tracking-widest font-bold uppercase">{result.competition}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-center gap-4">
                      <span className={`font-headline text-2xl md:text-3xl font-bold tracking-tight flex-1 ${result.homeTeam === 'FC Barcelona' ? 'text-primary' : 'text-white'}`}>{result.homeTeam}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-headline text-5xl md:text-6xl font-bold text-white">{result.homeScore}</span>
                        <span className="text-foreground/20 text-3xl">–</span>
                        <span className="font-headline text-5xl md:text-6xl font-bold text-white">{result.awayScore}</span>
                      </div>
                      <span className={`font-headline text-2xl md:text-3xl font-bold tracking-tight flex-1 ${result.awayTeam === 'FC Barcelona' ? 'text-primary' : 'text-white'}`}>{result.awayTeam}</span>
                    </div>
                  </div>
                )
              })}
            </LiquidGlassCard>
          </FadeIn>

           {/* Upcoming Fixtures */}
          <FadeIn direction="left" className="h-full">
            <div className="flex flex-col gap-6 h-full justify-between">
               {upcomingFixtures.slice(0, 2).map((fixture) => (
                 <LiquidGlassCard key={fixture.id} tiltStrength={2} className="bg-background/20 border-white/10 p-6 flex flex-col sm:flex-row items-center gap-6 group flex-1">
                   <div className="shrink-0 flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10">
                     <CalendarDays className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                   </div>
                   <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                     <div className="flex items-center gap-2 mb-2">
                       <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{fixture.competition}</span>
                       <span className="text-white/20">•</span>
                       <span className="text-white/50 text-xs font-medium">{fixture.date}</span>
                     </div>
                     <p className="font-headline text-xl font-bold text-white tracking-tight">
                       {fixture.homeTeam === 'FC Barcelona' ? fixture.awayTeam : fixture.homeTeam} 
                       <span className="text-white/40 text-lg font-medium ml-2">({fixture.homeTeam === 'FC Barcelona' ? 'H' : 'A'})</span>
                     </p>
                   </div>
                 </LiquidGlassCard>
               ))}
            </div>
          </FadeIn>
        </div>

        <div className="flex justify-center mt-12 md:hidden">
          <MagneticHover strength={15}>
            <Button variant="outline" asChild className="rounded-full liquid-glass h-14 px-10 text-lg border-white/20">
               <Link href="/fixtures">View all fixtures <ArrowRight className="ml-3 h-5 w-5" /></Link>
            </Button>
          </MagneticHover>
        </div>
      </section>

      {/* Squad Preview */}
      <section className="py-24 w-full max-w-7xl px-4 relative z-10 border-t border-white/5">
        <FadeIn direction="up" duration={1}>
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">First Team Squad</h2>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium">Meet the players leading the frontline.</p>
           </div>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {squadPlayers.filter(p => [1, 8, 9, 19].includes(p.number)).map((player, index) => (
             <FadeIn key={player.number} delay={0.1 * index} direction="up">
               <LiquidGlassCard tiltStrength={8} className="bg-background/20 border-white/10 group p-8 flex flex-col items-center text-center overflow-hidden relative transition-colors hover:bg-background/40">
                  <div className="absolute -top-10 -right-10 text-[120px] font-headline font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors">{player.number}</div>
                  <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-white/20 flex items-center justify-center shadow-lg relative z-10">
                    <span className="font-headline text-4xl font-bold text-white tracking-tighter">{player.number}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight mb-3 relative z-10">{player.name}</h3>
                  <Badge variant="outline" className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold border-white/20 text-white/60 bg-white/5 relative z-10">{player.position}</Badge>
               </LiquidGlassCard>
             </FadeIn>
           ))}
        </div>

        <div className="flex justify-center mt-16">
          <MagneticHover strength={15}>
            <Button asChild className="rounded-full bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-bold shadow-lg border-none hover:scale-105 transition-all">
               <Link href="/squad">View Full Squad</Link>
            </Button>
          </MagneticHover>
        </div>
      </section>

      {/* Social Buzz (Community Feed Marquee) */}
      <section className="w-full py-12 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <div className="flex flex-col items-center mb-8 px-4">
           <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.2em] px-4 py-1 flex items-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> Live Buzz
           </Badge>
           <h2 className="font-headline text-2xl font-bold text-white tracking-widest uppercase">The City of Joy is Blaugrana</h2>
        </div>
        
        <div className="flex overflow-hidden relative group">
          <div className="flex animate-marquee gap-8 py-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
              <div key={idx} className="inline-flex items-center gap-6 px-8 py-6 rounded-3xl liquid-glass border-white/10 shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-white/20 flex items-center justify-center shrink-0">
                  {i % 2 === 0 ? <Instagram className="w-6 h-6 text-white" /> : <Twitter className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="text-white font-bold text-lg tracking-tight mb-1">
                    {i === 1 && "@culer_kolkata: Matchday at the hub was incredible!"}
                    {i === 2 && "@fcb_joy: Best screening experience in the city. 🔵🔴"}
                    {i === 3 && "@barca_india: Full house for the El Clasico! #ViscaBarca"}
                    {i === 4 && "@joy_of_goals: New jersey arrived! The quality is top notch."}
                  </p>
                  <p className="text-foreground/40 text-xs font-semibold uppercase tracking-widest">
                    {i % 2 === 0 ? "via Instagram" : "via X / Twitter"} • 2h ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery Preview */}
      <section className="py-24 lg:py-32 w-full max-w-7xl px-4 relative z-10">
        <FadeIn direction="up" duration={1}>
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Our Community</h2>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium">Moments that define the Blaugrana spirit in the City of Joy.</p>
            </div>
            <MagneticHover strength={20}>
              <Button variant="ghost" asChild className="hidden md:flex text-primary hover:bg-primary/10 rounded-full group h-14 px-8 text-lg font-medium border border-transparent hover:border-primary/20 backdrop-blur-sm">
                 <Link href="/gallery">View full gallery <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" /></Link>
              </Button>
            </MagneticHover>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewGallery.map((item, index) => {
            const img = getImageById(item.imageId);
            if (!img) return null;
            return (
              <FadeIn key={item.id} delay={0.1 * index} direction="up">
                <LiquidGlassCard tiltStrength={6} className="bg-background/20 border-white/10 group cursor-pointer overflow-hidden">
                  <div className="relative h-72 overflow-hidden rounded-2xl">
                    <Image
                      src={img.imageUrl}
                      alt={item.caption}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-headline font-bold text-lg tracking-wide">{item.caption}</p>
                      <Badge variant="outline" className="mt-2 text-xs uppercase tracking-widest border-white/30 text-white/70">{item.category}</Badge>
                    </div>
                  </div>
                </LiquidGlassCard>
              </FadeIn>
            );
          })}
        </div>

        <div className="flex justify-center mt-16 md:hidden">
          <MagneticHover strength={15}>
            <Button variant="outline" asChild className="rounded-full liquid-glass h-14 px-10 text-lg border-white/20">
               <Link href="/gallery">View full gallery <ArrowRight className="ml-3 h-5 w-5" /></Link>
            </Button>
          </MagneticHover>
        </div>
      </section>
    </div>
  );
}
