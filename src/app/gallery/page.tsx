"use client";

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/mock-data';
import { getImageById } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'screenings', label: 'Screenings' },
  { key: 'tournaments', label: 'Tournaments' },
  { key: 'meetups', label: 'Meetups' },
  { key: 'charity', label: 'Charity' },
] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <FadeIn direction="down" duration={1}>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
            Community Gallery
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            Relive the moments that make us more than a fan club.
          </p>
        </FadeIn>
      </header>

      {/* Filter Tabs */}
      <FadeIn direction="up" delay={0.4}>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn(
                "px-6 py-3 rounded-full text-base font-medium tracking-wide transition-all border",
                filter === cat.key
                  ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(0,76,153,0.5)]"
                  : "liquid-glass border-white/10 text-foreground/70 hover:text-white hover:bg-white/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((item, index) => {
          const img = getImageById(item.imageId);
          if (!img) return null;
          
          // Vary heights for masonry effect
          const heights = ['h-72', 'h-96', 'h-80', 'h-64', 'h-88', 'h-72'];
          const height = heights[index % heights.length];

          return (
            <FadeIn key={item.id} delay={0.05 * index} direction="up" duration={0.6}>
              <LiquidGlassCard tiltStrength={6} className="bg-background/20 border-white/10 group cursor-pointer overflow-hidden break-inside-avoid">
                <div className={cn("relative overflow-hidden rounded-2xl", height)}>
                  <Image
                    src={img.imageUrl}
                    alt={item.caption}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-headline font-bold text-xl tracking-wide">{item.caption}</p>
                    <Badge variant="outline" className="mt-3 text-xs uppercase tracking-widest border-white/30 text-white/70">{item.category}</Badge>
                  </div>
                </div>
              </LiquidGlassCard>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
