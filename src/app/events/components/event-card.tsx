import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '@/lib/types';
import { getImageById } from '@/lib/placeholder-images';

import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EventBookingForm } from './event-booking-form';
import { MagneticHover } from '@/components/ui/magnetic-hover';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventImage = getImageById(event.imageId);

  return (
    <LiquidGlassCard tiltStrength={5} className="flex flex-col h-full bg-background/20 border-white/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all">
      {eventImage && (
        <div className="relative h-64 w-full overflow-hidden shrink-0 rounded-t-2xl">
          <Image
            src={eventImage.imageUrl}
            alt={event.name}
            fill
            className="object-cover transform transition-transform duration-700 hover:scale-[1.15]"
            data-ai-hint={eventImage.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      )}
      <CardHeader className="pt-8">
        <CardTitle className="font-headline text-3xl tracking-tight text-white">{event.name}</CardTitle>
        <div className="text-base text-muted-foreground pt-3 space-y-3 font-medium">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 shadow-inner"><Calendar className="h-5 w-5 text-primary" /></div>
            <span className="text-foreground/90 tracking-wide">{event.date} at {event.time}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 shadow-inner"><MapPin className="h-5 w-5 text-accent" /></div>
            <span className="text-foreground/90 tracking-wide">{event.venue}, <span className="opacity-70">{event.location}</span></span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <p className="text-foreground/70 text-lg leading-relaxed">{event.description}</p>
      </CardContent>
      <CardFooter className="pb-8 pt-6">
        <EventBookingForm event={event}>
            <MagneticHover strength={15} className="w-full">
              <Button className="w-full h-14 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-lg border-none hover:scale-[1.02]">
                  Secure Your Spot
              </Button>
            </MagneticHover>
        </EventBookingForm>
      </CardFooter>
    </LiquidGlassCard>
  );
}
