import { upcomingFixtures, recentResults } from '@/lib/mock-data';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Trophy } from 'lucide-react';

export default function FixturesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-24">
        <FadeIn direction="down" duration={1}>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
            Fixtures & Results
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            Stay up to date with Barcelona&apos;s schedule and latest scorelines.
          </p>
        </FadeIn>
      </header>

      {/* Upcoming Fixtures */}
      <section className="mb-24">
        <FadeIn direction="left">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight mb-10 flex items-center gap-4">
            <CalendarDays className="h-8 w-8 text-primary" />
            Upcoming Fixtures
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {upcomingFixtures.map((fixture, index) => (
            <FadeIn key={fixture.id} delay={0.08 * index} direction="up" duration={0.6}>
              <LiquidGlassCard tiltStrength={3} className="bg-background/20 border-white/10 p-0">
                <div className="flex flex-col sm:flex-row items-center p-6 sm:p-8 gap-6">
                  {/* Competition Badge */}
                  <Badge
                    variant="outline"
                    className={`shrink-0 px-4 py-1.5 text-xs uppercase tracking-widest font-bold ${
                      fixture.competition.includes('UCL')
                        ? 'border-blue-400/40 text-blue-400 bg-blue-400/10'
                        : 'border-orange-400/40 text-orange-400 bg-orange-400/10'
                    }`}
                  >
                    {fixture.competition}
                  </Badge>

                  {/* Teams */}
                  <div className="flex-1 flex items-center justify-center gap-6 text-center">
                    <span className={`font-headline text-xl sm:text-2xl font-bold tracking-tight ${fixture.homeTeam === 'FC Barcelona' ? 'text-primary' : 'text-white'}`}>
                      {fixture.homeTeam}
                    </span>
                    <span className="text-foreground/30 text-3xl font-light font-headline">vs</span>
                    <span className={`font-headline text-xl sm:text-2xl font-bold tracking-tight ${fixture.awayTeam === 'FC Barcelona' ? 'text-primary' : 'text-white'}`}>
                      {fixture.awayTeam}
                    </span>
                  </div>

                  {/* Date & Venue */}
                  <div className="text-right shrink-0 text-sm space-y-1">
                    <p className="text-foreground/90 font-semibold tracking-wide">{fixture.date}</p>
                    <p className="text-foreground/50 font-medium">{fixture.time}</p>
                    <p className="text-foreground/40 text-xs flex items-center justify-end gap-1.5">
                      <MapPin className="h-3 w-3" />{fixture.venue}
                    </p>
                  </div>
                </div>
              </LiquidGlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Recent Results */}
      <section>
        <FadeIn direction="left">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight mb-10 flex items-center gap-4">
            <Trophy className="h-8 w-8 text-accent" />
            Recent Results
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {recentResults.map((result, index) => {
            const barcaHome = result.homeTeam === 'FC Barcelona';
            const barcaScore = barcaHome ? result.homeScore : result.awayScore;
            const opponentScore = barcaHome ? result.awayScore : result.homeScore;
            const isWin = barcaScore > opponentScore;
            const isDraw = barcaScore === opponentScore;

            return (
              <FadeIn key={result.id} delay={0.08 * index} direction="up" duration={0.6}>
                <LiquidGlassCard tiltStrength={3} className="bg-background/20 border-white/10 p-0">
                  <div className="flex flex-col sm:flex-row items-center p-6 sm:p-8 gap-6">
                    {/* Result Badge */}
                    <Badge
                      className={`shrink-0 px-4 py-1.5 text-xs uppercase tracking-widest font-bold border-none ${
                        isWin ? 'bg-green-500/20 text-green-400' : isDraw ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {isWin ? 'WIN' : isDraw ? 'DRAW' : 'LOSS'}
                    </Badge>

                    {/* Competition */}
                    <Badge
                      variant="outline"
                      className={`shrink-0 px-4 py-1.5 text-xs uppercase tracking-widest font-bold ${
                        result.competition.includes('UCL')
                          ? 'border-blue-400/40 text-blue-400 bg-blue-400/10'
                          : 'border-orange-400/40 text-orange-400 bg-orange-400/10'
                      }`}
                    >
                      {result.competition}
                    </Badge>

                    {/* Score */}
                    <div className="flex-1 flex items-center justify-center gap-5 text-center">
                      <span className={`font-headline text-xl sm:text-2xl font-bold tracking-tight ${result.homeTeam === 'FC Barcelona' ? 'text-primary' : 'text-white'}`}>
                        {result.homeTeam}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-headline text-4xl font-bold text-white">{result.homeScore}</span>
                        <span className="text-foreground/20 text-2xl">–</span>
                        <span className="font-headline text-4xl font-bold text-white">{result.awayScore}</span>
                      </div>
                      <span className={`font-headline text-xl sm:text-2xl font-bold tracking-tight ${result.awayTeam === 'FC Barcelona' ? 'text-primary' : 'text-white'}`}>
                        {result.awayTeam}
                      </span>
                    </div>

                    {/* Date */}
                    <p className="text-foreground/50 text-sm font-medium shrink-0">{result.date}</p>
                  </div>
                </LiquidGlassCard>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
