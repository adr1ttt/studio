"use client";

import { useEffect, useState } from "react";
import { Timer, Trophy } from "lucide-react";
import { FadeIn } from "./fade-in";
import { cn } from "@/lib/utils";

interface MatchCountdownProps {
  targetDate: string;
  homeTeam: string;
  awayTeam: string;
}

export function MatchCountdown({ targetDate, homeTeam, awayTeam }: MatchCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/50 font-semibold mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <FadeIn direction="up" delay={0.5}>
      <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-black/40 backdrop-blur-3xl border border-white/10 p-3 md:p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50 pointer-events-none" />
        
        <div className="flex items-center gap-3 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0">
          <div className="p-3 bg-primary/20 rounded-full text-primary shrink-0">
            <Timer className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] md:text-sm font-headline font-bold text-white tracking-tight uppercase">Kickoff in</p>
            <p className="text-[10px] text-foreground/50 font-medium whitespace-nowrap">vs {homeTeam === 'FC Barcelona' ? awayTeam : homeTeam}</p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8 px-2 md:px-0">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hrs" />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
    </FadeIn>
  );
}
