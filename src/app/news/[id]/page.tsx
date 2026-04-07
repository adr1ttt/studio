import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

import { newsItems } from '@/lib/mock-data';
import { getImageById } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';

interface NewsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const item = newsItems.find((n) => n.id === params.id);
  if (!item) return { title: 'News Not Found' };
  
  return {
    title: `${item.headline} | FCB Kolkata`,
    description: item.content.slice(0, 160),
  };
}

export default function NewsArticlePage({ params }: NewsPageProps) {
  const item = newsItems.find((n) => n.id === params.id);
  
  if (!item) {
    notFound();
  }

  const articleImage = getImageById(item.imageId);

  return (
    <div className="flex-1 flex flex-col">
      {/* Article Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end justify-start overflow-hidden">
        {articleImage && (
          <Image 
            src={articleImage.imageUrl} 
            alt={item.headline} 
            fill 
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 pb-12 md:pb-24">
          <FadeIn direction="right" duration={0.8}>
            <Link 
              href="/" 
              className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group"
            >
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                {item.category}
              </span>
              <span className="flex items-center text-white/60 text-xs font-medium">
                <Calendar className="mr-2 h-3.5 w-3.5" />
                {item.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tighter text-white max-w-5xl leading-[0.9]">
              {item.headline}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 relative z-10 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <FadeIn direction="up">
                <LiquidGlassCard className="p-8 md:p-12 text-lg leading-relaxed text-foreground/80 space-y-6">
                  {item.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  
                  <div className="pt-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg">
                        {item.author[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold">{item.author}</p>
                        <p className="text-xs text-white/40 uppercase tracking-widest">Official Contributor</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Share</span>
                      <Button variant="outline" size="icon" className="rounded-full liquid-glass border-white/10 hover:bg-white/10">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </LiquidGlassCard>
              </FadeIn>
            </div>

            {/* Sidebar / More News */}
            <div className="lg:col-span-4 space-y-8">
              <FadeIn direction="left" delay={0.2}>
                <h3 className="text-2xl font-bold font-headline text-white mb-6">Related Stories</h3>
                <div className="space-y-4">
                  {newsItems.filter(n => n.id !== item.id).slice(0, 3).map((news) => (
                    <Link key={news.id} href={`/news/${news.id}`} className="block group">
                      <LiquidGlassCard className="p-4 transition-all group-hover:bg-white/5 border-white/5 group-hover:border-white/20">
                        <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">{news.category}</p>
                        <h4 className="text-white font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {news.headline}
                        </h4>
                      </LiquidGlassCard>
                    </Link>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
                <LiquidGlassCard className="bg-primary/10 border-primary/20 p-8 rounded-3xl text-center">
                  <Tag className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Join the Penya</h4>
                  <p className="text-sm text-foreground/60 mb-6">Get exclusive early access to news, tickets, and official merchandise.</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-bold shadow-lg shadow-primary/20">
                    Become a Member
                  </Button>
                </LiquidGlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
