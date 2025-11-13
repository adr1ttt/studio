import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImageById } from '@/lib/placeholder-images';
import { events } from '@/lib/mock-data';

export default function Home() {
  const heroImage = getImageById('hero-banner');
  const nextEvent = events[0];
  const nextEventImage = getImageById(nextEvent.imageId);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-shadow-lg">
            Visca el Barça Kolkata!
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
            The heart of FC Barcelona in the City of Joy. Join the most passionate fan community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/events">
                View Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/membership">
                Join as Member <UserPlus className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Next Event Section */}
      <section id="next-event" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Next Up: Unmissable Action!</h2>
            <p className="mt-2 text-lg text-muted-foreground">Don't miss our next big gathering. Be there!</p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                {nextEventImage && (
                   <Image
                      src={nextEventImage.imageUrl}
                      alt={nextEvent.name}
                      width={600}
                      height={400}
                      className="object-cover h-64 w-full md:h-full"
                      data-ai-hint={nextEventImage.imageHint}
                    />
                )}
              </div>
              <div className="md:w-1/2 flex flex-col">
                <CardHeader>
                  <Badge variant="default" className="w-fit bg-primary/10 text-primary border-primary/20 mb-2">Upcoming</Badge>
                  <CardTitle className="font-headline text-2xl">{nextEvent.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{nextEvent.date} @ {nextEvent.time}</span>
                  </CardDescription>
                   <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{nextEvent.venue}, {nextEvent.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{nextEvent.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/events">
                      Register Now
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
