"use client";

import { useState } from 'react';
import { squadPlayers } from '@/lib/mock-data';
import type { SquadPlayer } from '@/lib/types';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'] as const;

const positionColors: Record<string, string> = {
  Goalkeeper: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Defender: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  Midfielder: 'text-green-400 border-green-400/30 bg-green-400/10',
  Forward: 'text-red-400 border-red-400/30 bg-red-400/10',
};

export default function SquadPage() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All'
    ? squadPlayers
    : squadPlayers.filter(p => p.position === filter);

  // Group by position for display
  const grouped = filter === 'All'
    ? (['Goalkeeper', 'Defender', 'Midfielder', 'Forward'] as const).map(pos => ({
        position: pos,
        players: squadPlayers.filter(p => p.position === pos),
      }))
    : [{ position: filter, players: filtered }];

  return (
    <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <FadeIn direction="down" duration={1}>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
            First Team Squad
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            The men who wear the Blaugrana. Season 2024–25.
          </p>
        </FadeIn>
      </header>

      {/* Position Filter */}
      <FadeIn direction="up" delay={0.4}>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setFilter(pos)}
              className={cn(
                "px-6 py-3 rounded-full text-base font-medium tracking-wide transition-all border",
                filter === pos
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(0,76,153,0.5)]"
                  : "liquid-glass border-white/10 text-foreground/70 hover:text-white hover:bg-white/10"
              )}
            >
              {pos === 'All' ? 'All Positions' : `${pos}s`}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Squad Grid */}
      {grouped.map((group) => (
        <div key={group.position} className="mb-16">
          {filter === 'All' && (
            <FadeIn direction="left">
              <h2 className="text-3xl font-headline font-bold text-white/80 mb-8 tracking-tight uppercase">{group.position}s</h2>
            </FadeIn>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {group.players.map((player, index) => (
              <FadeIn key={player.number} delay={0.05 * index} direction="up" duration={0.6}>
                <LiquidGlassCard tiltStrength={8} className="bg-background/20 border-white/10 group p-8 flex flex-col items-center text-center hover:bg-background/40 transition-colors">
                  {/* Jersey Number */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,76,153,0.3)] group-hover:shadow-[0_0_40px_rgba(0,76,153,0.5)] transition-shadow">
                      <span className="font-headline text-4xl font-bold text-white tracking-tighter">{player.number}</span>
                    </div>
                  </div>

                  {/* Player Name */}
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight mb-3">{player.name}</h3>

                  {/* Position Badge */}
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs uppercase tracking-widest font-semibold mb-3",
                      positionColors[player.position]
                    )}
                  >
                    {player.position}
                  </Badge>

                  {/* Nationality */}
                  <p className="text-foreground/50 text-sm font-medium tracking-wide">{player.nationality}</p>
                </LiquidGlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
