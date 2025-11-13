import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '@/lib/types';
import { getImageById } from '@/lib/placeholder-images';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EventBookingForm } from './event-booking-form';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventImage = getImageById(event.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {eventImage && (
        <div className="relative h-56 w-full">
          <Image
            src={eventImage.imageUrl}
            alt={event.name}
            fill
            className="object-cover"
            data-ai-hint={eventImage.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{event.name}</CardTitle>
        <div className="text-sm text-muted-foreground pt-1 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{event.date} at {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.venue}, {event.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{event.description}</p>
      </CardContent>
      <CardFooter>
        <EventBookingForm event={event}>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Book / Register
            </Button>
        </EventBookingForm>
      </CardFooter>
    </Card>
  );
}
